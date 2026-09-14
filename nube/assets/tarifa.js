/* Copistería — cálculo del precio del pedido.
   Precios de calle en España, IVA incluido, formato A4. Están aquí arriba a
   propósito: cambiar una tarifa no debería obligar a tocar la página. */
(function () {

  /* Valores de fábrica. Son los que se usan mientras la copistería no haya
     puesto los suyos desde el panel (Datos de la tienda › Precios).
     €/cara impresa, IVA incluido, A4. */
  const POR_DEFECTO = {
    tramos: [24, 99, 499],              // límites de cada tramo; el último es «o más»
    bn:    [0.10, 0.07, 0.05, 0.04],
    color: [0.45, 0.35, 0.28, 0.22],
    descuentoDoble: 0.08,               // a doble cara entra la mitad de papel
    minimo: 0.30,                       // por debajo no sale a cuenta ni encender la máquina
  };

  const euros = (n) => n.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });

  /* Lo que llega de Firestore lo ha escrito una persona en un formulario: puede
     faltar, venir en texto o en negativo. Se rellena con los valores de fábrica
     antes de calcular nada, para no sacar NaN en un precio. */
  function normaliza(t) {
    const num = (v, d) => { const x = Number(v); return isFinite(x) && x >= 0 ? x : d; };
    const base = t || {};
    const lista = (arr, def) => def.map((d, i) => num(arr && arr[i], d));
    return {
      tramos: lista(base.tramos, POR_DEFECTO.tramos),
      bn: lista(base.bn, POR_DEFECTO.bn),
      color: lista(base.color, POR_DEFECTO.color),
      descuentoDoble: Math.min(0.9, num(base.descuentoDoble, POR_DEFECTO.descuentoDoble)),
      minimo: num(base.minimo, POR_DEFECTO.minimo),
    };
  }

  /* El tramo lo marca el total de caras del pedido (páginas × copias), no las
     copias sueltas: 300 copias no cuestan trescientas veces una. */
  function precioCara(t, color, caras) {
    const fila = color === 'Color' ? t.color : t.bn;
    for (let i = 0; i < t.tramos.length; i++) if (caras <= t.tramos[i]) return fila[i];
    return fila[fila.length - 1];
  }

  /* Devuelve el desglose entero, no solo el total: el cliente tiene que poder
     ver de dónde sale el número, y el trabajador comprobarlo. */
  function calcular({ paginas, copias, color, caras, tarifas }) {
    const t = normaliza(tarifas);
    const p = Math.max(1, parseInt(paginas, 10) || 1);
    const c = Math.max(1, parseInt(copias, 10) || 1);
    const totalCaras = p * c;
    const doble = caras === 'Doble cara';

    const base = precioCara(t, color, totalCaras);
    const porCara = base * (doble ? 1 - t.descuentoDoble : 1);
    const bruto = porCara * totalCaras;
    const total = Math.max(t.minimo, Math.round(bruto * 100) / 100);

    return {
      paginas: p,
      copias: c,
      totalCaras,
      hojas: doble ? Math.ceil(p / 2) * c : totalCaras,   // papel que se gasta
      porCara: Math.round(porCara * 1000) / 1000,
      doble,
      minimoAplicado: bruto < t.minimo,
      total,
      euros: euros(total),
    };
  }

  /* ── Cuántas páginas tiene el archivo ──────────────────────────────────
     Se intenta averiguar para no cobrar una página cuando hay treinta. Si no
     se puede, se devuelve null y la página pide el número: más vale
     preguntarlo que inventárselo. */

  function aTexto(bytes) {
    // latin1: un byte, un carácter. Así los índices del regex siguen valiendo.
    let s = '';
    const trozo = 0x8000;
    for (let i = 0; i < bytes.length; i += trozo) {
      s += String.fromCharCode.apply(null, bytes.subarray(i, i + trozo));
    }
    return s;
  }

  function cuentaEn(texto) {
    // El nodo raíz del árbol de páginas lleva /Count con el total.
    let mejor = 0;
    const conCount = /\/Type\s*\/Pages\b[\s\S]{0,400}?\/Count\s+(\d+)|\/Count\s+(\d+)[\s\S]{0,400}?\/Type\s*\/Pages\b/g;
    let m;
    while ((m = conCount.exec(texto))) {
      const n = parseInt(m[1] || m[2], 10);
      if (n > mejor) mejor = n;
    }
    if (mejor) return mejor;

    // Si no, se cuentan los objetos de página. El (?!s) evita contar /Pages.
    const sueltas = texto.match(/\/Type\s*\/Page(?![sA-Za-z])/g);
    return sueltas ? sueltas.length : 0;
  }

  /* Los PDF modernos guardan el árbol de páginas dentro de flujos comprimidos,
     así que en los bytes crudos no aparece nada. Se descomprimen y se vuelve a
     mirar. Sin pako no se puede, y entonces se devuelve null sin más. */
  function cuentaEnFlujos(bytes, texto) {
    if (typeof window.pako === 'undefined') return 0;
    let mejor = 0;
    const re = /stream\r?\n?/g;
    let m;
    while ((m = re.exec(texto))) {
      const cabecera = texto.slice(Math.max(0, m.index - 300), m.index);
      if (!/\/FlateDecode/.test(cabecera)) continue;
      const ini = m.index + m[0].length;
      const fin = texto.indexOf('endstream', ini);
      if (fin < 0) continue;
      try {
        const crudo = window.pako.inflate(bytes.subarray(ini, fin));
        const n = cuentaEn(aTexto(crudo));
        if (n > mejor) mejor = n;
      } catch (e) { /* no todos los flujos son del árbol de páginas */ }
    }
    return mejor;
  }

  async function paginasDe(file) {
    const nombre = (file && file.name) || '';
    const tipo = (file && file.type) || '';

    if (/^image\//i.test(tipo) && !/\.tiff?$/i.test(nombre)) return 1;

    if (/^application\/pdf$/i.test(tipo) || /\.pdf$/i.test(nombre)) {
      try {
        const bytes = new Uint8Array(await file.arrayBuffer());
        const texto = aTexto(bytes);
        const directo = cuentaEn(texto);
        if (directo) return directo;
        const comprimido = cuentaEnFlujos(bytes, texto);
        return comprimido || null;
      } catch (e) {
        return null;
      }
    }

    return null;   // Word, TIFF y compañía: que lo diga el cliente.
  }

  window.CopiTarifa = { POR_DEFECTO, normaliza, calcular, paginasDe, euros };
})();
