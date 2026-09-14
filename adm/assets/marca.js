/* Copistería — ficha de la tienda: nombre, dirección, teléfono, horario y logo.
   Vive en Firestore, en el documento ajustes/copisteria. La edita el trabajador
   desde el panel y la lee todo el mundo, porque sale en la cabecera de la
   página pública. La imagen del logo va a Storage, bajo marca/.

   Antes esto estaba escrito a mano en el HTML de las dos páginas, así que
   cambiar el nombre de la copistería obligaba a tocar código en dos sitios. */
(function () {
  const COL = 'ajustes';
  const DOC = 'copisteria';
  const CARPETA = 'marca';

  /* Con qué se pinta la cabecera mientras Firestore no ha contestado, o si la
     ficha no existe todavía. Sin esto la página parpadea vacía al cargar. */
  const POR_DEFECTO = {
    nombre: 'Copistería Ebro',
    direccion: 'C/ Delicias 12 · Zaragoza',
    telefono: '',
    horario: '',
    /* Identificación del titular. La piden el aviso legal (LSSI) y la política
       de privacidad (RGPD); sin ellos esos documentos no valen de nada. */
    razonSocial: '',
    nif: '',
    emailLegal: '',
    conservacionDias: 30,
    abierto: true,
    // Se rellena con lo de fábrica de tarifa.js si la tienda no ha puesto lo suyo.
    tarifas: null,
    paleta: 'crema',
    estilo: 'moderno',
    logoUrl: '',
    logoRuta: '',
  };

  let cache = Object.assign({}, POR_DEFECTO);
  const listeners = new Set();
  let corte = null;

  function doc() {
    if (!window.firebase || !firebase.apps || !firebase.apps.length) {
      throw new Error('Firebase no está inicializado; revisa firebase.js y el orden de los <script>');
    }
    return firebase.firestore().collection(COL).doc(DOC);
  }

  /* Las iniciales del recuadro se deducen del nombre: una cosa menos que
     rellenar a mano, y nunca se quedan desincronizadas. */
  function iniciales(nombre) {
    const partes = String(nombre || '').trim().split(/\s+/).filter(Boolean);
    if (!partes.length) return '··';
    return (partes[0][0] + (partes[1] ? partes[1][0] : '')).toUpperCase();
  }

  function ruta(nombre) {
    const limpio = String(nombre || 'logo').replace(/[#?\[\]*\x00-\x1f]/g, '_').slice(0, 80);
    return CARPETA + '/' + Date.now() + '_' + Math.random().toString(36).slice(2, 7) + '_' + limpio;
  }

  window.CopiMarca = {
    POR_DEFECTO,
    actual: () => cache,
    iniciales,

    /* fn recibe la ficha completa (con los valores por defecto rellenados).
       Un fallo de lectura no rompe la página: se sigue con los por defecto. */
    subscribe(fn) {
      listeners.add(fn);
      if (!corte) {
        try {
          corte = doc().onSnapshot(
            (d) => {
              cache = Object.assign({}, POR_DEFECTO, d.data() || {});
              listeners.forEach((f) => f(cache));
            },
            () => {}
          );
        } catch (e) {}
      }
      fn(cache);
      return () => {
        listeners.delete(fn);
        if (!listeners.size && corte) { corte(); corte = null; }
      };
    },

    /* merge: guardar solo el teléfono no debe borrar la dirección. */
    guardar(patch) { return doc().set(patch, { merge: true }); },

    /* Sube la imagen y devuelve { ruta, url }. No toca la ficha: quien llama
       decide si el logo nuevo se queda, y así una subida a medias no deja la
       cabecera apuntando a algo que aún no está entero. */
    subirLogo(file, onProgreso) {
      const destino = ruta(file.name);
      const tarea = firebase.storage().ref(destino).put(file, {
        contentType: file.type || 'image/png',
      });
      return new Promise((resolve, reject) => {
        tarea.on('state_changed',
          (s) => { if (onProgreso && s.totalBytes) onProgreso(Math.round((s.bytesTransferred / s.totalBytes) * 100)); },
          reject,
          () => tarea.snapshot.ref.getDownloadURL()
            .then((url) => resolve({ ruta: destino, url }))
            .catch(reject)
        );
      });
    },

    borrarLogo(rutaLogo) {
      if (!rutaLogo) return Promise.resolve();
      return firebase.storage().ref(rutaLogo).delete().catch((e) => {
        if (e && e.code === 'storage/object-not-found') return;
        throw e;
      });
    },
  };
})();
