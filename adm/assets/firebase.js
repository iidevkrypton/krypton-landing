/* Copistería — subida de archivos a Firebase Storage.
   Aquí solo viaja el archivo; el registro del pedido va a Firestore (store.js).
   Expone window.CopiApi con subir() / blob() / borrar(). */
(function () {

  /* ─── Pega aquí la config de tu proyecto ───────────────────────────────
     Consola de Firebase › Configuración del proyecto › Tus apps › Config. */
  const CONFIG = {
    apiKey: 'AIzaSyDm7Nm5rYNtAqryi8EwVWV4pxd72VeHN50',
    authDomain: 'krypton-ebbc3.firebaseapp.com',
    projectId: 'krypton-ebbc3',
    storageBucket: 'krypton-ebbc3.firebasestorage.app',
    messagingSenderId: '762807015953',
    appId: '1:762807015953:web:79c41836bb30dee9b6efb0',
  };
  const CARPETA = 'pedidos';   // carpeta dentro del bucket
  /* ──────────────────────────────────────────────────────────────────────── */

  const configurado = !String(CONFIG.storageBucket).startsWith('TU_');
  if (configurado) firebase.initializeApp(CONFIG);

  /* Nombre único: dos clientes pueden mandar «TFG.pdf» el mismo día. */
  function ruta(nombre) {
    const limpio = String(nombre || 'archivo').replace(/[#?\[\]*\x00-\x1f]/g, '_').slice(0, 120);
    return CARPETA + '/' + Date.now() + '_' + Math.random().toString(36).slice(2, 7) + '_' + limpio;
  }

  window.CopiApi = {
    configurado,

    /* Sube el archivo y devuelve { ruta, url, bytes }.
       onProgreso recibe el porcentaje (0-100) mientras sube. */
    subir(file, onProgreso) {
      if (!configurado) return Promise.reject(new Error('Falta la configuración de Firebase en firebase.js'));
      const destino = ruta(file.name);
      /* Sin `attachment`: si el panel no puede traerse el Blob, el enlace de
         respaldo abre el archivo en el visor del navegador, desde donde se
         puede imprimir Y guardar. Forzar la descarga solo permitiría guardar. */
      const tarea = firebase.storage().ref(destino).put(file, {
        contentType: file.type || 'application/octet-stream',
      });
      return new Promise((resolve, reject) => {
        tarea.on('state_changed',
          (s) => { if (onProgreso && s.totalBytes) onProgreso(Math.round((s.bytesTransferred / s.totalBytes) * 100)); },
          reject,
          () => tarea.snapshot.ref.getDownloadURL().then((url) => resolve({ ruta: destino, url, bytes: file.size })).catch(reject)
        );
      });
    },

    /* Descarga el contenido para poder imprimirlo desde el propio panel.
       Hace falta el Blob: no se puede llamar a print() sobre un iframe de otro
       origen, y `download` se ignora en enlaces externos. */
    async blob(url) {
      /* Desde file:// el origen es opaco y el navegador corta la peticion antes
         de salir: hay que servir la pagina por http://. */
      if (location.protocol === 'file:') {
        throw new Error('la pagina esta abierta como file://; sirvela por http:// (servidor local)');
      }
      let r;
      try {
        r = await fetch(url, { mode: 'cors', credentials: 'omit', cache: 'no-store' });
      } catch (e) {
        throw new Error('el bucket no responde (sin red, o CORS sin aplicar en el bucket). Detalle: ' + (e.message || e));
      }
      if (!r.ok) {
        throw new Error(
          r.status === 403 ? 'permiso denegado (403): revisa las reglas de Storage o el enlace ha caducado'
          : r.status === 404 ? 'el archivo ya no existe en el bucket (404)'
          : 'el bucket ha respondido ' + r.status
        );
      }
      return r.blob();
    },

    /* Borra el archivo del bucket. El fallo se propaga a propósito: si se
       traga, unas reglas que denieguen el borrado dejan archivos huérfanos
       ocupando espacio para siempre y nadie se entera. */
    borrar(ruta) {
      if (!ruta || !configurado) return Promise.resolve();
      return firebase.storage().ref(ruta).delete().catch((e) => {
        // Que ya no esté es el resultado que buscábamos, no un error.
        if (e && e.code === 'storage/object-not-found') return;
        throw e;
      });
    },
  };
  /* Acceso del trabajador. A propósito no hay alta de cuentas: las crea el
     dueño desde la consola de Firebase, así nadie se registra solo y se cuela
     en la lista de pedidos. */
  window.CopiAuth = {
    onUsuario(fn) { return firebase.auth().onAuthStateChanged(fn); },
    entrar(email, clave) { return firebase.auth().signInWithEmailAndPassword(email, clave); },
    salir() { return firebase.auth().signOut(); },

    /* Los códigos de Firebase no se le enseñan a nadie tal cual. */
    motivo(err) {
      const c = (err && err.code) || '';
      if (c === 'auth/invalid-email') return 'Ese correo no tiene forma de correo.';
      if (c === 'auth/user-disabled') return 'Esa cuenta está desactivada.';
      if (c === 'auth/invalid-credential' || c === 'auth/wrong-password' || c === 'auth/user-not-found') {
        return 'Correo o contraseña incorrectos.';
      }
      if (c === 'auth/too-many-requests') return 'Demasiados intentos. Espera un momento.';
      if (c === 'auth/network-request-failed') return 'Sin conexión con Firebase.';
      if (c === 'auth/operation-not-allowed') return 'El acceso por correo no está activado en este proyecto de Firebase.';
      return (err && err.message) || 'No se pudo entrar.';
    },
  };
})();
