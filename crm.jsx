/* KrypTon — puerta de acceso (login) del CRM interno.
   Se carga como <script type="text/babel"> DESPUÉS de sections.jsx, SOLO en las
   páginas internas (ficha-cliente.html, clientes.html).

   Expone:
     window.KtAuthGate({ children })  — envuelve el contenido de la página:
        · mientras carga Firebase / comprueba sesión → pantalla de carga
        · sin sesión → pantalla de login (marca KrypTon, tema oscuro)
        · con sesión → renderiza children (function(user) | ReactNode)
     window.KtUseCRM()  — hook: devuelve la instancia window.KtCRM cuando está lista (o null).
     window.KtLogoutButton()  — botón "Salir" reutilizable para las cabeceras. */
(function () {
const { Button, Field, Card, Badge, Logo } = window.KrypTonDesignSystem_6d2e6d;

/** Hook: resuelve window.KtCRM (via la promesa KtCRMReady). */
function useCRM() {
  const [crm, setCrm] = React.useState(window.KtCRM || null);
  React.useEffect(() => {
    if (crm) return;
    let vivo = true;
    (window.KtCRMReady || Promise.resolve(window.KtCRM)).then((c) => {
      if (vivo) setCrm(c || window.KtCRM || null);
    });
    return () => { vivo = false; };
  }, [crm]);
  return crm;
}
window.KtUseCRM = useCRM;

function LoginScreen({ crm }) {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [error, setError] = React.useState("");
  const [cargando, setCargando] = React.useState(false);

  const entrar = async (e) => {
    e.preventDefault();
    setError("");
    setCargando(true);
    try {
      await crm.login(email, pass);
      // onAuthStateChanged actualizará el gate automáticamente.
    } catch (err) {
      setError((err && err.message) || "No se pudo iniciar sesión.");
      setCargando(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }} className="kt-concentric">
      <div style={{ width: "100%", maxWidth: 420, display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 4 }}>
          <Logo size={26} />
        </div>
        <Card style={{ borderRadius: "var(--kt-radius-xl)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 22 }}>
            <span className="kt-eyebrow">Interno · CRM</span>
            <h1 style={{ fontSize: "var(--kt-fs-h3)", letterSpacing: "-0.02em" }}>Acceso privado</h1>
            <p style={{ color: "var(--kt-text-muted)", fontSize: "var(--kt-fs-small)" }}>
              Área reservada para gestionar las fichas de clientes. Inicia sesión con tu cuenta.
            </p>
          </div>
          <form onSubmit={entrar} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Field label="Correo" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tucorreo@devkrypton.com" />
            <Field label="Contraseña" type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="••••••••" />
            {error && (
              <div style={{ color: "#FF8A8A", fontSize: "var(--kt-fs-small)", background: "rgba(255,138,138,0.08)", border: "1px solid rgba(255,138,138,0.3)", borderRadius: "var(--kt-radius-md)", padding: "10px 12px" }}>
                {error}
              </div>
            )}
            <Button type="submit" variant="primary" size="lg" disabled={cargando || !email || !pass} style={{ marginTop: 4 }}>
              {cargando ? "Entrando…" : "Entrar"}
            </Button>
          </form>
        </Card>
        <p style={{ textAlign: "center", color: "var(--kt-text-lavender)", fontSize: "0.75rem" }}>
          KrypTon — Zaragoza
        </p>
      </div>
    </div>
  );
}

/** Botón "Salir" para las cabeceras. */
function LogoutButton({ style }) {
  const crm = useCRM();
  return (
    <button
      onClick={() => crm && crm.logout()}
      style={{
        background: "transparent",
        border: "1px solid var(--kt-line)",
        color: "var(--kt-text-muted)",
        borderRadius: "var(--kt-radius-md)",
        padding: "7px 14px",
        fontFamily: "var(--kt-mono, monospace)",
        fontSize: "0.75rem",
        letterSpacing: "0.04em",
        cursor: "pointer",
        ...style,
      }}
      title="Cerrar sesión"
    >
      Salir
    </button>
  );
}
window.KtLogoutButton = LogoutButton;

/** Puerta de acceso: gestiona carga / login / contenido. */
function AuthGate({ children }) {
  const crm = useCRM();
  const [user, setUser] = React.useState(undefined); // undefined = aún sin comprobar

  React.useEffect(() => {
    if (!crm) return;
    const unsub = crm.onAuth((u) => setUser(u || null));
    return () => unsub && unsub();
  }, [crm]);

  // Cargando Firebase o comprobando sesión.
  if (!crm || user === undefined) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ color: "var(--kt-text-muted)", fontFamily: "var(--kt-mono, monospace)", fontSize: "0.8125rem", letterSpacing: "0.1em" }}>
          Cargando…
        </span>
      </div>
    );
  }

  if (!user) return <LoginScreen crm={crm} />;

  return typeof children === "function" ? children(user) : children;
}
window.KtAuthGate = AuthGate;
})();
