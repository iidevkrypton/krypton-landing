/* KrypTon — capa Firebase del CRM interno (fichas de clientes).
 *
 * Se carga como <script type="module"> SOLO en las páginas internas del CRM
 * (ficha-cliente.html y clientes.html). Usa el MISMO proyecto Firebase que la
 * landing (krypton-ebbc3) — la colección "fichasClientes" guarda los leads.
 *
 * Expone window.KtCRM (y window.KtCRMReady, una promesa que resuelve cuando
 * Firebase está listo) para que el código React (Babel) lo consuma sin usar
 * imports de módulo dentro de los scripts babel.
 *
 * Seguridad: el acceso exige sesión (email/contraseña). Las reglas de Firestore
 * restringen la colección al uid del dueño (ver firestore.rules.krypton + README-DEPLOY.md).
 */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDm7Nm5rYNtAqryi8EwVWV4pxd72VeHN50",
  authDomain: "krypton-ebbc3.firebaseapp.com",
  projectId: "krypton-ebbc3",
  storageBucket: "krypton-ebbc3.firebasestorage.app",
  messagingSenderId: "762807015953",
  appId: "1:762807015953:web:79c41836bb30dee9b6efb0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const COLECCION = "fichasClientes";

/** Traduce los códigos de error de Firebase Auth a mensajes en español. */
function mensajeAuth(code) {
  switch (code) {
    case "auth/invalid-email":
      return "El correo no es válido.";
    case "auth/user-disabled":
      return "Esta cuenta está deshabilitada.";
    case "auth/user-not-found":
    case "auth/wrong-password":
    case "auth/invalid-credential":
      return "Correo o contraseña incorrectos.";
    case "auth/too-many-requests":
      return "Demasiados intentos. Espera un momento e inténtalo de nuevo.";
    case "auth/network-request-failed":
      return "Sin conexión. Revisa tu red e inténtalo de nuevo.";
    default:
      return "No se pudo iniciar sesión. Inténtalo de nuevo.";
  }
}

const KtCRM = {
  /** Suscribe a cambios de sesión. cb(user|null). Devuelve función para desuscribir. */
  onAuth(cb) {
    return onAuthStateChanged(auth, cb);
  },

  /** Usuario actual (o null). */
  user() {
    return auth.currentUser;
  },

  /** Inicia sesión con email/contraseña. Rechaza con { code, message } en español. */
  async login(email, password) {
    try {
      const cred = await signInWithEmailAndPassword(auth, email.trim(), password);
      return cred.user;
    } catch (e) {
      throw { code: e.code, message: mensajeAuth(e.code) };
    }
  },

  /** Cierra la sesión. */
  logout() {
    return signOut(auth);
  },

  /**
   * Guarda una ficha nueva en Firestore. `data` son los campos del formulario
   * (dueno, local, telefono, ...). Devuelve el id del documento creado.
   * Requiere sesión iniciada (si no, las reglas rechazan la escritura).
   */
  async guardarFicha(data) {
    const { id, fecha, creadaEn, ...campos } = data; // descartamos ids/fechas locales
    const ref = await addDoc(collection(db, COLECCION), {
      ...campos,
      creadaEn: serverTimestamp(),
      autorUid: auth.currentUser ? auth.currentUser.uid : null,
    });
    return ref.id;
  },

  /**
   * Escucha en tiempo real todas las fichas (ordenadas de más nueva a más
   * antigua). cb(fichas[]) con cada snapshot; onError(err) si falla (p.ej.
   * permisos). Devuelve función para desuscribir.
   */
  escucharFichas(cb, onError) {
    const q = query(collection(db, COLECCION), orderBy("creadaEn", "desc"));
    return onSnapshot(
      q,
      (snap) => {
        const fichas = snap.docs.map((d) => {
          const raw = d.data();
          return {
            id: d.id,
            ...raw,
            // Normalizamos la marca de tiempo a ISO para la UI.
            fecha: raw.creadaEn && raw.creadaEn.toDate
              ? raw.creadaEn.toDate().toISOString()
              : raw.fecha || null,
          };
        });
        cb(fichas);
      },
      (err) => {
        console.error("Error escuchando fichas:", err);
        if (onError) onError(err);
      }
    );
  },

  /** Borra una ficha por id. Requiere sesión. */
  borrarFicha(id) {
    return deleteDoc(doc(db, COLECCION, id));
  },
};

window.KtCRM = KtCRM;
if (window.__ktCRMResolve) window.__ktCRMResolve(KtCRM);
