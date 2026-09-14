/* Copistería — apariencia: paleta de color y estilo de formas.
   Son dos ejes independientes que se combinan: la paleta pone los colores, el
   estilo pone redondeos, grosores, sombras y aire. Seis paletas por cinco
   estilos dan treinta combinaciones sobre la misma base.

   Los elige el trabajador desde el panel y viajan en la ficha de la tienda
   (marca.js), así que el cliente los ve sin recargar.

   Cada paleta redefine los tokens del sistema (--kt-*) más un puñado propios
   (--copi-*) para lo que el kit pinta por su cuenta: la cabecera translúcida,
   las píldoras de estado y los avisos de error. Sin esos últimos, una paleta
   clara dejaba la cabecera negra flotando sobre papel. */
(function () {
  const GUARDADA = 'copi-paleta';
  const GUARDADO_ESTILO = 'copi-estilo';

  /* Salvo Noche, todas son claras y con un matiz de fondo distinto: si todas
     arrancasen del mismo blanco, cambiar de paleta apenas se notaría. */
  const PALETAS = [
    {
      id: 'crema',
      nombre: 'Crema',
      pista: 'Papel cálido y caramelo. Tranquila, de librería.',
      muestras: ['#F7F3EC', '#8A5330', '#4A6C5F'],
      vars: {
        '--kt-bg': '#F7F3EC', '--kt-bg-raise': '#FFFDF8', '--kt-surface': '#FFFFFF',
        '--kt-surface-2': '#F1EAE0', '--kt-line': '#DFD4C4', '--kt-line-soft': '#EBE2D5',
        '--kt-violet': '#8A5330', '--kt-violet-strong': '#6F4126',
        '--kt-turquoise': '#4A6C5F', '--kt-turquoise-strong': '#3A564C',
        '--kt-text': '#2B2620', '--kt-text-muted': '#6B6153', '--kt-text-lavender': '#8A8072',
        '--kt-text-on-accent': '#FFFFFF', '--kt-text-on-violet': '#FFFFFF', '--kt-focus': '#C08A5A',
        '--kt-gradient': 'linear-gradient(120deg, #A2653C 0%, #5C8374 100%)',
        '--copi-cabecera': 'rgba(247,243,236,0.82)', '--copi-sombra': 'rgba(90,72,54,0.18)',
        '--copi-fila-alt': 'rgba(43,38,32,0.025)', '--copi-fila-hover': 'rgba(138,83,48,0.08)',
        '--copi-danger': '#A63D2F', '--copi-danger-bg': 'rgba(166,61,47,0.08)', '--copi-danger-line': 'rgba(166,61,47,0.40)',
        '--copi-pend': '#8A5330', '--copi-pend-line': 'rgba(138,83,48,0.40)',
        '--copi-print': '#A63D2F', '--copi-print-line': 'rgba(166,61,47,0.40)',
        '--copi-listo': '#3F6B58', '--copi-listo-line': 'rgba(63,107,88,0.45)',
      },
    },
    {
      id: 'cyber',
      nombre: 'Cyber',
      pista: 'Blanco lila con magenta y cian eléctricos. La más llamativa.',
      muestras: ['#F3F1FB', '#C4177C', '#0A7C8F'],
      vars: {
        '--kt-bg': '#F3F1FB', '--kt-bg-raise': '#FAF9FF', '--kt-surface': '#FFFFFF',
        '--kt-surface-2': '#ECE8F9', '--kt-line': '#D6CEEE', '--kt-line-soft': '#E5DFF5',
        '--kt-violet': '#C4177C', '--kt-violet-strong': '#A20F65',
        '--kt-turquoise': '#0A7C8F', '--kt-turquoise-strong': '#086475',
        '--kt-text': '#1B1430', '--kt-text-muted': '#5E5482', '--kt-text-lavender': '#7C72A0',
        '--kt-text-on-accent': '#FFFFFF', '--kt-text-on-violet': '#FFFFFF', '--kt-focus': '#E24DA4',
        '--kt-gradient': 'linear-gradient(120deg, #C4177C 0%, #0A7C8F 100%)',
        '--copi-cabecera': 'rgba(243,241,251,0.82)', '--copi-sombra': 'rgba(60,40,100,0.18)',
        '--copi-fila-alt': 'rgba(27,20,48,0.022)', '--copi-fila-hover': 'rgba(196,23,124,0.08)',
        '--copi-danger': '#C01743', '--copi-danger-bg': 'rgba(192,23,67,0.08)', '--copi-danger-line': 'rgba(192,23,67,0.40)',
        '--copi-pend': '#C4177C', '--copi-pend-line': 'rgba(196,23,124,0.40)',
        '--copi-print': '#A85A00', '--copi-print-line': 'rgba(168,90,0,0.40)',
        '--copi-listo': '#0A7C8F', '--copi-listo-line': 'rgba(10,124,143,0.45)',
      },
    },
    {
      id: 'frio',
      nombre: 'Frío',
      pista: 'Azul hielo y pizarra. La más neutra de las claras.',
      muestras: ['#EDF3FA', '#1D4ED8', '#0E7490'],
      vars: {
        '--kt-bg': '#EDF3FA', '--kt-bg-raise': '#F8FBFE', '--kt-surface': '#FFFFFF',
        '--kt-surface-2': '#E3EDF7', '--kt-line': '#CBDBEB', '--kt-line-soft': '#DCE7F3',
        '--kt-violet': '#1D4ED8', '--kt-violet-strong': '#1740B0',
        '--kt-turquoise': '#0E7490', '--kt-turquoise-strong': '#0B5D74',
        '--kt-text': '#14212F', '--kt-text-muted': '#4E637A', '--kt-text-lavender': '#6D8299',
        '--kt-text-on-accent': '#FFFFFF', '--kt-text-on-violet': '#FFFFFF', '--kt-focus': '#5B8DEF',
        '--kt-gradient': 'linear-gradient(120deg, #1D4ED8 0%, #0E7490 100%)',
        '--copi-cabecera': 'rgba(237,243,250,0.82)', '--copi-sombra': 'rgba(30,55,90,0.16)',
        '--copi-fila-alt': 'rgba(20,33,47,0.022)', '--copi-fila-hover': 'rgba(29,78,216,0.07)',
        '--copi-danger': '#B4213C', '--copi-danger-bg': 'rgba(180,33,60,0.08)', '--copi-danger-line': 'rgba(180,33,60,0.40)',
        '--copi-pend': '#1D4ED8', '--copi-pend-line': 'rgba(29,78,216,0.40)',
        '--copi-print': '#9A5B12', '--copi-print-line': 'rgba(154,91,18,0.40)',
        '--copi-listo': '#0E7490', '--copi-listo-line': 'rgba(14,116,144,0.45)',
      },
    },
    {
      id: 'vivo',
      nombre: 'Vivo',
      pista: 'Blanco melocotón con naranja y ámbar. Cálida y con empuje.',
      muestras: ['#FFF5EE', '#C2410C', '#B45309'],
      vars: {
        '--kt-bg': '#FFF5EE', '--kt-bg-raise': '#FFFAF6', '--kt-surface': '#FFFFFF',
        '--kt-surface-2': '#FCEADF', '--kt-line': '#F0D5C2', '--kt-line-soft': '#F7E4D8',
        '--kt-violet': '#C2410C', '--kt-violet-strong': '#9A3309',
        '--kt-turquoise': '#B45309', '--kt-turquoise-strong': '#8F4107',
        '--kt-text': '#301B10', '--kt-text-muted': '#78563F', '--kt-text-lavender': '#96775F',
        '--kt-text-on-accent': '#FFFFFF', '--kt-text-on-violet': '#FFFFFF', '--kt-focus': '#F97316',
        '--kt-gradient': 'linear-gradient(120deg, #C2410C 0%, #F59E0B 100%)',
        '--copi-cabecera': 'rgba(255,245,238,0.84)', '--copi-sombra': 'rgba(120,70,40,0.16)',
        '--copi-fila-alt': 'rgba(48,27,16,0.022)', '--copi-fila-hover': 'rgba(194,65,12,0.07)',
        '--copi-danger': '#B91C1C', '--copi-danger-bg': 'rgba(185,28,28,0.08)', '--copi-danger-line': 'rgba(185,28,28,0.40)',
        '--copi-pend': '#C2410C', '--copi-pend-line': 'rgba(194,65,12,0.40)',
        '--copi-print': '#B45309', '--copi-print-line': 'rgba(180,83,9,0.40)',
        '--copi-listo': '#3F7A3F', '--copi-listo-line': 'rgba(63,122,63,0.45)',
      },
    },
    {
      id: 'bosque',
      nombre: 'Bosque',
      pista: 'Verde menta y bosque. Descansada para turnos largos.',
      muestras: ['#EEF5EF', '#26734A', '#4D7C0F'],
      vars: {
        '--kt-bg': '#EEF5EF', '--kt-bg-raise': '#F8FCF9', '--kt-surface': '#FFFFFF',
        '--kt-surface-2': '#E3EEE6', '--kt-line': '#C9DCCF', '--kt-line-soft': '#DBE9DF',
        '--kt-violet': '#26734A', '--kt-violet-strong': '#1D5B3A',
        '--kt-turquoise': '#4D7C0F', '--kt-turquoise-strong': '#3D630C',
        '--kt-text': '#15241B', '--kt-text-muted': '#4C6455', '--kt-text-lavender': '#6B8375',
        '--kt-text-on-accent': '#FFFFFF', '--kt-text-on-violet': '#FFFFFF', '--kt-focus': '#4FA372',
        '--kt-gradient': 'linear-gradient(120deg, #26734A 0%, #4D7C0F 100%)',
        '--copi-cabecera': 'rgba(238,245,239,0.84)', '--copi-sombra': 'rgba(30,70,45,0.16)',
        '--copi-fila-alt': 'rgba(21,36,27,0.022)', '--copi-fila-hover': 'rgba(38,115,74,0.07)',
        '--copi-danger': '#A82F2F', '--copi-danger-bg': 'rgba(168,47,47,0.08)', '--copi-danger-line': 'rgba(168,47,47,0.40)',
        '--copi-pend': '#26734A', '--copi-pend-line': 'rgba(38,115,74,0.40)',
        '--copi-print': '#96620E', '--copi-print-line': 'rgba(150,98,14,0.40)',
        '--copi-listo': '#4D7C0F', '--copi-listo-line': 'rgba(77,124,15,0.45)',
      },
    },
    {
      id: 'noche',
      nombre: 'Noche',
      pista: 'La única oscura: negro editorial y violeta contenido.',
      muestras: ['#09090B', '#6C4DFF', '#00C2A8'],
      vars: {
        '--kt-bg': '#09090B', '--kt-bg-raise': '#0E0E11', '--kt-surface': '#131316',
        '--kt-surface-2': '#1A1A1F', '--kt-line': '#26262C', '--kt-line-soft': '#1B1B20',
        '--kt-violet': '#6C4DFF', '--kt-violet-strong': '#5A3BEC',
        '--kt-turquoise': '#00C2A8', '--kt-turquoise-strong': '#00A891',
        '--kt-text': '#F4F4F5', '--kt-text-muted': '#A1A1AA', '--kt-text-lavender': '#8A8A94',
        '--kt-text-on-accent': '#FFFFFF', '--kt-text-on-violet': '#FFFFFF', '--kt-focus': '#A78BFF',
        '--kt-gradient': 'linear-gradient(120deg, #6C4DFF 0%, #00C2A8 100%)',
        '--copi-cabecera': 'rgba(9,9,11,0.72)', '--copi-sombra': 'rgba(0,0,0,0.45)',
        '--copi-fila-alt': 'rgba(255,255,255,0.014)', '--copi-fila-hover': 'rgba(108,77,255,0.07)',
        '--copi-danger': '#FF8A8A', '--copi-danger-bg': 'rgba(255,138,138,0.10)', '--copi-danger-line': 'rgba(255,138,138,0.45)',
        '--copi-pend': '#B7A3FF', '--copi-pend-line': 'rgba(108,77,255,0.45)',
        '--copi-print': '#F0BABE', '--copi-print-line': '#F0BABE',
        '--copi-listo': '#5FE3D2', '--copi-listo-line': 'rgba(0,194,168,0.45)',
      },
    },
  ];

  /* Eje de formas. No toca ni un color: solo redondeos, grosores, sombras y
     aire, para que cualquier estilo case con cualquier paleta. Lo que no cabe
     en una variable —quitar los marcos de la tabla, poner versalitas— lo hace
     copisteria.css leyendo data-copi-estilo en el <html>. */
  const ESTILOS = [
    {
      id: 'moderno',
      nombre: 'Moderno',
      pista: 'Esquinas suaves y relieve leve. El de casa.',
      vars: {
        '--kt-radius-sm': '6px', '--kt-radius-md': '9px', '--kt-radius-lg': '12px', '--kt-radius-xl': '16px',
        '--copi-borde': '1px', '--copi-elevacion': '0 1px 2px var(--copi-sombra)',
        '--copi-boton-radio': 'var(--kt-radius-md)', '--copi-aire': '18px',
      },
    },
    {
      id: 'minimalista',
      nombre: 'Minimalista',
      pista: 'Sin marcos ni relieve: filetes finos y mucho aire.',
      vars: {
        '--kt-radius-sm': '3px', '--kt-radius-md': '4px', '--kt-radius-lg': '5px', '--kt-radius-xl': '6px',
        '--copi-borde': '1px', '--copi-elevacion': 'none',
        '--copi-boton-radio': '4px', '--copi-aire': '26px',
      },
    },
    {
      id: 'suave',
      nombre: 'Suave',
      pista: 'Muy redondeado, botones de pastilla y sombras mullidas.',
      vars: {
        '--kt-radius-sm': '10px', '--kt-radius-md': '16px', '--kt-radius-lg': '22px', '--kt-radius-xl': '28px',
        '--copi-borde': '1px', '--copi-elevacion': '0 10px 24px -14px var(--copi-sombra)',
        '--copi-boton-radio': '999px', '--copi-aire': '20px',
      },
    },
    {
      id: 'cyber',
      nombre: 'Cyber',
      pista: 'Esquinas rectas, bordes gruesos y etiquetas en versalita.',
      vars: {
        '--kt-radius-sm': '0px', '--kt-radius-md': '0px', '--kt-radius-lg': '0px', '--kt-radius-xl': '0px',
        '--copi-borde': '2px', '--copi-elevacion': '4px 4px 0 var(--copi-pend-line)',
        '--copi-boton-radio': '0px', '--copi-aire': '16px',
      },
    },
    {
      id: 'simple',
      nombre: 'Simple',
      pista: 'Plano y compacto, sin sombras. Cabe más en pantalla.',
      vars: {
        '--kt-radius-sm': '4px', '--kt-radius-md': '6px', '--kt-radius-lg': '8px', '--kt-radius-xl': '10px',
        '--copi-borde': '1px', '--copi-elevacion': 'none',
        '--copi-boton-radio': '6px', '--copi-aire': '14px',
      },
    },
  ];

  const POR_DEFECTO = 'crema';
  const ESTILO_POR_DEFECTO = 'moderno';

  /* Todas las variables que alguna opción toca. Se limpian antes de aplicar la
     siguiente: si no, una opción que no defina cierto token se quedaría con el
     valor de la anterior y saldrían mezclas raras. */
  const junta = (lista) => Array.from(new Set(lista.reduce((a, p) => a.concat(Object.keys(p.vars)), [])));
  const VARS_PALETA = junta(PALETAS);
  const VARS_ESTILO = junta(ESTILOS);

  function busca(lista, id) {
    for (let i = 0; i < lista.length; i++) if (lista[i].id === id) return lista[i];
    return null;
  }

  function pinta(elegido, todas) {
    const raiz = document.documentElement;
    todas.forEach((v) => raiz.style.removeProperty(v));
    Object.keys(elegido.vars).forEach((v) => raiz.style.setProperty(v, elegido.vars[v]));
  }

  function aplicar(id) {
    const p = busca(PALETAS, id) || busca(PALETAS, POR_DEFECTO);
    pinta(p, VARS_PALETA);
    document.documentElement.setAttribute('data-copi-paleta', p.id);
    try { localStorage.setItem(GUARDADA, p.id); } catch (e) {}
    return p.id;
  }

  function aplicarEstilo(id) {
    const e = busca(ESTILOS, id) || busca(ESTILOS, ESTILO_POR_DEFECTO);
    pinta(e, VARS_ESTILO);
    document.documentElement.setAttribute('data-copi-estilo', e.id);
    try { localStorage.setItem(GUARDADO_ESTILO, e.id); } catch (err) {}
    return e.id;
  }

  window.CopiPaletas = {
    lista: PALETAS,
    estilos: ESTILOS,
    POR_DEFECTO,
    ESTILO_POR_DEFECTO,
    buscar: (id) => busca(PALETAS, id) || busca(PALETAS, POR_DEFECTO),
    aplicar,
    aplicarEstilo,

    /* Se llama nada más cargar, antes de que Firestore conteste: sin esto la
       página nace con la apariencia de fábrica y salta a la elegida medio
       segundo después, con un parpadeo feo. */
    aplicarGuardada() {
      let p = POR_DEFECTO, e = ESTILO_POR_DEFECTO;
      try {
        p = localStorage.getItem(GUARDADA) || p;
        e = localStorage.getItem(GUARDADO_ESTILO) || e;
      } catch (err) {}
      return { paleta: aplicar(p), estilo: aplicarEstilo(e) };
    },
  };

  window.CopiPaletas.aplicarGuardada();
})();
