/* Copistería — almacén de pedidos en Cloud Firestore.
   El archivo en sí vive en Firebase Storage (ver firebase.js / CopiApi); aquí
   va el registro: cliente, opciones de impresión, estado y el enlace al
   archivo. Antes esto era localStorage, así que un pedido subido desde el móvil
   del cliente no llegaba nunca al panel de la copistería.

   La interfaz es la de siempre —list / subscribe / add / update / remove— para
   que index.html y panel.html no se enteren del cambio. Lo que sí cambia:
   add / update / remove ahora devuelven promesas, porque hay red por medio. */
(function () {
  const COL = 'pedidos';
  const VISTO = 'copi-estrenado';   // pista de interfaz, no datos: ver usado()

  let cache = [];                   // último snapshot conocido
  let info = { estado: 'inicial', error: '' };
  const listeners = new Set();
  let db = null;
  let corte = null;                 // función para cancelar el onSnapshot

  /* Firestore se pide tarde, no al cargar el script: store.js puede evaluarse
     antes de que firebase.js haya llamado a initializeApp(). */
  function base() {
    if (db) return db;
    if (!window.firebase || !firebase.apps || !firebase.apps.length) {
      throw new Error('Firebase no está inicializado; revisa firebase.js y el orden de los <script>');
    }
    db = firebase.firestore();
    return db;
  }

  function avisar() { listeners.forEach((fn) => fn(cache, info)); }

  /* Marca que este navegador ya ha visto pedidos de verdad. El panel lo usa
     para no volver a los datos de ejemplo cuando la lista se queda vacía. */
  function marcarVisto() { try { localStorage.setItem(VISTO, '1'); } catch {} }

  /* Un único onSnapshot alimenta a todos los suscriptores: abrir uno por
     componente multiplicaría las lecturas facturables sin ganar nada. */
  function escuchar() {
    if (corte) return;
    info = { estado: 'cargando', error: '' };
    try {
      corte = base().collection(COL).orderBy('fecha', 'desc').onSnapshot(
        (snap) => {
          cache = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
          if (cache.length) marcarVisto();
          info = { estado: 'listo', error: '' };
          avisar();
        },
        (err) => {
          // Lo más habitual aquí son las reglas de seguridad, no la red.
          info = { estado: 'error', error: err.message || String(err) };
          avisar();
        }
      );
    } catch (err) {
      info = { estado: 'error', error: err.message || String(err) };
      avisar();
    }
  }

  window.CopiStore = {
    /* Lectura sincrónica del último snapshot; vacío hasta que llegue el primero. */
    list: () => cache,
    info: () => info,
    usado() { try { return localStorage.getItem(VISTO) === '1'; } catch { return false; } },

    /* fn recibe (lista, info). Devuelve la función para darse de baja. */
    subscribe(fn) {
      listeners.add(fn);
      escuchar();
      fn(cache, info);              // estado actual, sin esperar al primer snapshot
      return () => {
        listeners.delete(fn);
        if (!listeners.size && corte) { corte(); corte = null; }
      };
    },

    /* Devuelve el id del pedido creado. `fecha` va en ISO: ordena igual que el
       tiempo real y se lee sin conversiones, aquí y en el panel. */
    add(job) {
      const doc = { fecha: new Date().toISOString(), estado: 'Pendiente', ...job };
      return base().collection(COL).add(doc).then((ref) => { marcarVisto(); return ref.id; });
    },
    update(id, patch) { return base().collection(COL).doc(id).update(patch); },
    remove(id) { return base().collection(COL).doc(id).delete(); },
    clear() { return Promise.all(cache.map((j) => base().collection(COL).doc(j.id).delete())); },
  };
})();
