/* @ds-bundle: {"format":4,"namespace":"KrypTonDesignSystem_6d2e6d","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"AppCard","sourcePath":"components/product/AppCard.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"dd0ca821fce3","components/core/Badge.jsx":"11081867ec7b","components/core/Button.jsx":"8ead2422c3f2","components/core/Card.jsx":"0b817cccb617","components/forms/Field.jsx":"dea0d2dbbb4a","components/navigation/Footer.jsx":"51749dea12bd","components/navigation/NavBar.jsx":"ac28fd86d494","components/product/AppCard.jsx":"f602d09c0ac4","ui_kits/copisteria/store.js":"5630d56afd89","ui_kits/flyer/doc-page.js":"f52ae9c02fca","ui_kits/website/sections.jsx":"3de7102940a7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KrypTonDesignSystem_6d2e6d = window.KrypTonDesignSystem_6d2e6d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KrypTon logo — set in the brand face (Varelmo). The "K" is treated as the
 * mark (violet accent); "rypTon" is the wordmark. Together they read "KrypTon".
 * `size` sets the cap height in px.
 */
function Logo({
  size = 24,
  showWordmark = true,
  accent = 'var(--kt-violet)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": "KrypTon",
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      fontFamily: 'var(--kt-font-brand)',
      fontSize: size,
      lineHeight: 1,
      letterSpacing: '-0.01em',
      color: 'var(--kt-text)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: accent
    }
  }, "K"), showWordmark && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "rypTon"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge (v2): monospace, uppercase, hairline-outlined pill label. `tone` sets a
 * subtle accent. Reads like a developer-first tag.
 */
function Badge({
  tone = 'neutral',
  children,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      color: 'var(--kt-text-muted)',
      borderColor: 'var(--kt-line)'
    },
    violet: {
      color: '#B7A3FF',
      borderColor: 'rgba(108,77,255,0.4)'
    },
    turquoise: {
      color: '#5FE3D2',
      borderColor: 'rgba(0,194,168,0.4)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 10px',
      fontFamily: 'var(--kt-mono)',
      fontSize: '0.6875rem',
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      lineHeight: 1,
      background: 'transparent',
      borderRadius: 'var(--kt-radius-sm)',
      border: '1px solid',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KrypTon button (v2). Primary = solid violet accent (the brand's one colour
 * moment); secondary = hairline outline; ghost = quiet text. Rounded rects,
 * not pills.
 */
function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '7px 13px',
      fontSize: 'var(--kt-fs-small)'
    },
    md: {
      padding: '10px 18px',
      fontSize: '0.9375rem'
    },
    lg: {
      padding: '13px 24px',
      fontSize: '1.0625rem'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--kt-font)',
    fontWeight: 500,
    lineHeight: 1,
    letterSpacing: '-0.01em',
    borderRadius: 'var(--kt-radius-md)',
    border: '1px solid transparent',
    cursor: 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'background var(--kt-dur) var(--kt-ease), border-color var(--kt-dur) var(--kt-ease), color var(--kt-dur) var(--kt-ease), transform var(--kt-dur-fast) var(--kt-ease)',
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'var(--kt-violet)',
      color: '#fff'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--kt-text)',
      borderColor: 'var(--kt-line)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--kt-text-muted)'
    }
  };
  const El = as;
  return /*#__PURE__*/React.createElement(El, _extends({
    className: `kt-btn kt-btn--${variant}`,
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Flat surface container (v2). Hairline border, no glow. `tone` subtly tints
 * the border for product accents; `interactive` brightens the border + lifts
 * slightly on hover.
 */
function Card({
  tone = 'default',
  interactive = false,
  children,
  style,
  ...rest
}) {
  const tones = {
    default: {
      borderColor: 'var(--kt-line)'
    },
    violet: {
      borderColor: 'rgba(108,77,255,0.35)'
    },
    turquoise: {
      borderColor: 'rgba(0,194,168,0.35)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `kt-card${interactive ? ' kt-card--interactive' : ''}`,
    style: {
      background: 'var(--kt-surface)',
      border: '1px solid',
      borderRadius: 'var(--kt-radius-lg)',
      padding: 'var(--kt-space-6)',
      transition: 'border-color var(--kt-dur) var(--kt-ease), transform var(--kt-dur) var(--kt-ease), background var(--kt-dur) var(--kt-ease)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Labelled text field. Wraps a label + input with brand focus styling.
 * Pass `multiline` to render a textarea instead.
 */
function Field({
  label,
  id,
  multiline = false,
  rows = 4,
  style,
  ...rest
}) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  const shared = {
    width: '100%',
    background: 'var(--kt-bg-raise)',
    color: 'var(--kt-text)',
    border: '1px solid var(--kt-line)',
    borderRadius: 'var(--kt-radius-md)',
    padding: '13px 16px',
    fontFamily: 'var(--kt-font)',
    fontSize: '1rem',
    lineHeight: 1.5,
    transition: 'border-color var(--kt-dur) var(--kt-ease), box-shadow var(--kt-dur) var(--kt-ease)',
    resize: multiline ? 'vertical' : undefined
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: 'var(--kt-fs-small)',
      fontWeight: 500,
      color: 'var(--kt-text-muted)'
    }
  }, label), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: rows,
    className: "kt-field",
    style: shared
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: "kt-field",
    style: shared
  }, rest)));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
/** Site footer: logo, contact details, and the "KrypTon — Zaragoza" credit. */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--kt-line-soft)',
      background: 'var(--kt-bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--kt-container)',
      margin: '0 auto',
      padding: '48px 24px 36px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 32,
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    size: 30
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--kt-text-muted)',
      fontSize: 'var(--kt-fs-small)'
    }
  }, "Construimos, publicamos y mantenemos producto propio. Desde Zaragoza.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontSize: 'var(--kt-fs-small)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--kt-text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      fontSize: '0.75rem',
      marginBottom: 4
    }
  }, "Contacto"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:idevkrypton@gmail.com"
  }, "idevkrypton@gmail.com"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+34605551487"
  }, "605 55 14 87"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--kt-text-muted)'
    }
  }, "Zaragoza, Espa\xF1a"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--kt-line-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--kt-container)',
      margin: '0 auto',
      padding: '18px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 8,
      fontSize: 'var(--kt-fs-small)',
      color: 'var(--kt-text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--kt-font-brand)',
      fontWeight: 700
    }
  }, "KrypTon"), " \u2014 Zaragoza"), /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " Kevin Rodr\xEDguez"))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
/**
 * Fixed top navigation. Pass the current page key to highlight the active link.
 * Collapses to a hamburger on narrow viewports.
 */
function NavBar({
  active = 'inicio',
  links,
  cta
}) {
  const [open, setOpen] = React.useState(false);
  const items = links || [{
    key: 'inicio',
    label: 'Inicio',
    href: 'index.html'
  }, {
    key: 'aplicaciones',
    label: 'Aplicaciones',
    href: 'aplicaciones.html'
  }, {
    key: 'contacto',
    label: 'Contacto',
    href: 'contacto.html'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      height: 'var(--kt-header-h)',
      display: 'flex',
      alignItems: 'center',
      background: 'rgba(9,9,11,0.72)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      borderBottom: '1px solid var(--kt-line-soft)'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      width: '100%',
      maxWidth: 'var(--kt-container)',
      margin: '0 auto',
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    "aria-label": "KrypTon \u2014 inicio",
    style: {
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    size: 30
  })), /*#__PURE__*/React.createElement("div", {
    className: "kt-nav-links",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, items.map(it => {
    const on = it.key === active;
    return /*#__PURE__*/React.createElement("a", {
      key: it.key,
      href: it.href,
      "aria-current": on ? 'page' : undefined,
      style: {
        position: 'relative',
        padding: '8px 12px',
        fontSize: 'var(--kt-fs-small)',
        fontWeight: 500,
        color: on ? 'var(--kt-text)' : 'var(--kt-text-muted)',
        background: 'transparent',
        transition: 'color var(--kt-dur) var(--kt-ease)'
      }
    }, it.label, on && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        left: 12,
        right: 12,
        bottom: 2,
        height: 1.5,
        background: 'var(--kt-violet)'
      }
    }));
  }), cta), /*#__PURE__*/React.createElement("button", {
    className: "kt-nav-burger",
    "aria-label": "Abrir men\xFA",
    "aria-expanded": open,
    onClick: () => setOpen(v => !v),
    style: {
      display: 'none',
      background: 'transparent',
      border: '1px solid var(--kt-line)',
      borderRadius: 'var(--kt-radius-sm)',
      width: 42,
      height: 38,
      cursor: 'pointer',
      color: 'var(--kt-text)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    style: {
      display: 'block',
      margin: '0 auto'
    }
  }, open ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 6L6 18"
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 7h16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 12h16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 17h16"
  }))))), open && /*#__PURE__*/React.createElement("div", {
    className: "kt-nav-drawer",
    style: {
      position: 'absolute',
      top: 'var(--kt-header-h)',
      left: 0,
      right: 0,
      background: 'var(--kt-bg-raise)',
      borderBottom: '1px solid var(--kt-line)',
      padding: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.key,
    href: it.href,
    "aria-current": it.key === active ? 'page' : undefined,
    style: {
      padding: '12px 14px',
      borderRadius: 'var(--kt-radius-md)',
      fontWeight: 500,
      color: it.key === active ? 'var(--kt-text)' : 'var(--kt-text-muted)',
      background: it.key === active ? 'var(--kt-surface-2)' : 'transparent'
    }
  }, it.label))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/product/AppCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Product card (v2, editorial). `featured` renders the large dominant KBook
 * treatment; the default is the smaller secondary KImpostor treatment. Flat
 * surface, hairline border, a thin top accent rule in the tone colour, and an
 * optional monospace `index` label (e.g. "01").
 */
function AppCard({
  name,
  tagline,
  description,
  tone = 'violet',
  featured = false,
  glyph,
  badge,
  index,
  cta,
  meta,
  style,
  ...rest
}) {
  const accent = tone === 'turquoise' ? 'var(--kt-turquoise)' : 'var(--kt-violet)';
  const border = tone === 'turquoise' ? 'rgba(0,194,168,0.35)' : 'rgba(108,77,255,0.35)';
  return /*#__PURE__*/React.createElement("article", _extends({
    className: "kt-card kt-card--interactive",
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: featured ? 22 : 14,
      background: 'var(--kt-surface)',
      border: '1px solid var(--kt-line)',
      borderTop: `2px solid ${accent}`,
      borderRadius: 'var(--kt-radius-lg)',
      padding: featured ? 'clamp(28px, 4vw, 44px)' : '26px',
      transition: 'border-color var(--kt-dur) var(--kt-ease), transform var(--kt-dur) var(--kt-ease)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: featured ? 52 : 44,
      height: featured ? 52 : 44,
      borderRadius: 'var(--kt-radius-md)',
      background: 'transparent',
      color: accent,
      overflow: 'hidden',
      flex: 'none'
    }
  }, glyph), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, index && /*#__PURE__*/React.createElement("span", {
    className: "kt-index",
    style: {
      color: accent
    }
  }, index), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: featured ? 'var(--kt-fs-h2)' : 'var(--kt-fs-h3)',
      letterSpacing: '-0.025em'
    }
  }, name), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, badge)), tagline && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--kt-text-muted)',
      fontSize: featured ? 'var(--kt-fs-body)' : 'var(--kt-fs-small)'
    }
  }, tagline))), description && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--kt-text-muted)',
      fontSize: featured ? 'var(--kt-fs-lead)' : 'var(--kt-fs-body)',
      maxWidth: featured ? '54ch' : undefined
    }
  }, description), meta, cta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 6,
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, cta));
}
Object.assign(__ds_scope, { AppCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/AppCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/copisteria/store.js
try { (() => {
/* Copistería — almacén compartido de archivos (demo, sin backend).
   Guarda en localStorage y avisa a otras pestañas con el evento `storage`,
   así el panel del trabajador se actualiza en tiempo real. */
(function () {
  const KEY = 'copi-files';
  const listeners = new Set();
  function read() {
    try {
      return JSON.parse(localStorage.getItem(KEY) || '[]');
    } catch {
      return [];
    }
  }
  function write(list) {
    try {
      localStorage.setItem(KEY, JSON.stringify(list));
    } catch {}
    listeners.forEach(fn => fn(list));
  }
  window.CopiStore = {
    list: read,
    subscribe(fn) {
      listeners.add(fn);
      const onStorage = e => {
        if (e.key === KEY) fn(read());
      };
      window.addEventListener('storage', onStorage);
      const poll = setInterval(() => fn(read()), 1500);
      return () => {
        listeners.delete(fn);
        window.removeEventListener('storage', onStorage);
        clearInterval(poll);
      };
    },
    add(job) {
      const list = read();
      list.unshift({
        id: 'f' + Date.now() + Math.random().toString(36).slice(2, 6),
        fecha: new Date().toISOString(),
        estado: 'Pendiente',
        ...job
      });
      write(list);
    },
    update(id, patch) {
      write(read().map(f => f.id === id ? {
        ...f,
        ...patch
      } : f));
    },
    remove(id) {
      write(read().filter(f => f.id !== id));
    },
    clear() {
      write([]);
    }
  };
  window.CopiUtil = {
    size(bytes) {
      if (bytes == null) return '';
      if (bytes < 1024) return bytes + ' B';
      if (bytes < 1048576) return (bytes / 1024).toFixed(0) + ' KB';
      return (bytes / 1048576).toFixed(1) + ' MB';
    },
    hora(iso) {
      try {
        return new Date(iso).toLocaleTimeString('es-ES', {
          hour: '2-digit',
          minute: '2-digit'
        });
      } catch {
        return '';
      }
    },
    ext(name) {
      return (name || '').split('.').pop().toUpperCase().slice(0, 4);
    }
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/copisteria/store.js", error: String((e && e.message) || e) }); }

// ui_kits/flyer/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    /* Monolithic at print: Blink slices a transform-scaled child at
     * fragmentainer boundaries mapped in UNSCALED layout coordinates
     * (transforms are paint-time), so the .fit box (authored size, e.g.
     * 1400x990) gets cut at the page's free block space and spills onto
     * a second sheet even though its SCALED footprint fits the page by
     * construction. overflow:hidden makes .fit-box a scroll container —
     * monolithic under fragmentation (css-break-3) — so the scaled
     * content prints atomically on one sheet. No clipping for content
     * within the authored box: .fit-box is calc-sized to exactly the
     * scaled footprint. (Content that bleeds past content-width/height
     * is clipped at the footprint — fit mode's contract; it previously
     * painted beyond it at print.) Print-only, so the screen rendering
     * keeps visible overflow for editor affordances.
     * The export path injects the same rule into frozen copies
     * (print-eval.ts om-print-fit-contain). The .fit-mode scope is
     * load-bearing: .fit-box wraps slotted content in EVERY mode, and an
     * unscoped overflow:hidden would make whole flowing documents
     * monolithic (one truncated sheet). overflow:hidden, never clip —
     * clip is not a scroll container, so not monolithic. */
    @media print {
      .fit-mode .fit-box { overflow: hidden; }
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/flyer/doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/website/sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* KrypTon website — shared sections + icons.
   Loaded after the DS bundle; composes DS components and exposes sections on window. */
(function () {
  const {
    Button,
    Badge,
    Card,
    Field,
    AppCard,
    NavBar,
    Footer,
    Logo
  } = window.KrypTonDesignSystem_6d2e6d;

  /* ---- Thin line icons (brand style: 1.5 stroke, never filled) ---- */
  const Ic = {
    calendar: p => /*#__PURE__*/React.createElement("svg", _extends({
      width: "28",
      height: "28",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, p), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "4.5",
      width: "18",
      height: "16",
      rx: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 9h18M8 2.5v4M16 2.5v4"
    })),
    dice: p => /*#__PURE__*/React.createElement("svg", _extends({
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, p), /*#__PURE__*/React.createElement("path", {
      d: "M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 11l8-4.5M12 11v9M12 11L4 6.5"
    })),
    user: p => /*#__PURE__*/React.createElement("svg", _extends({
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, p), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "8",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 21c0-4 4-6 8-6s8 2 8 6"
    })),
    pin: p => /*#__PURE__*/React.createElement("svg", _extends({
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, p), /*#__PURE__*/React.createElement("path", {
      d: "M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "10",
      r: "2.5"
    })),
    wallet: p => /*#__PURE__*/React.createElement("svg", _extends({
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, p), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "6",
      width: "18",
      height: "13",
      rx: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 10h18M16 14h2"
    })),
    users: p => /*#__PURE__*/React.createElement("svg", _extends({
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, p), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "8",
      r: "3.2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2.5 20c0-3.3 3-5 6.5-5s6.5 1.7 6.5 5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M17 5.5a3.2 3.2 0 0 1 0 6M18 15c2.5.4 3.8 2 3.8 5"
    })),
    headset: p => /*#__PURE__*/React.createElement("svg", _extends({
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, p), /*#__PURE__*/React.createElement("path", {
      d: "M4 13v-1a8 8 0 0 1 16 0v1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "2.5",
      y: "13",
      width: "4",
      height: "6",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "17.5",
      y: "13",
      width: "4",
      height: "6",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20 19a4 4 0 0 1-4 3h-2"
    })),
    mail: p => /*#__PURE__*/React.createElement("svg", _extends({
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, p), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "5",
      width: "18",
      height: "14",
      rx: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 7l8 6 8-6"
    })),
    phone: p => /*#__PURE__*/React.createElement("svg", _extends({
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, p), /*#__PURE__*/React.createElement("path", {
      d: "M6 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4 5.2 2 2 0 0 1 6 3z"
    })),
    arrow: p => /*#__PURE__*/React.createElement("svg", _extends({
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, p), /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14M13 6l6 6-6 6"
    })),
    check: p => /*#__PURE__*/React.createElement("svg", _extends({
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, p), /*#__PURE__*/React.createElement("path", {
      d: "M20 6L9 17l-5-5"
    }))
  };
  window.KtIcons = Ic;

  /* ---- Layout helpers ---- */
  function Container({
    narrow,
    style,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: narrow ? 'var(--kt-container-narrow)' : 'var(--kt-container)',
        margin: '0 auto',
        padding: '0 24px',
        ...style
      }
    }, children);
  }
  function Section({
    children,
    style,
    ...rest
  }) {
    return /*#__PURE__*/React.createElement("section", _extends({
      style: {
        paddingBlock: 'var(--kt-section-y)',
        ...style
      }
    }, rest), children);
  }
  function Eyebrow({
    children
  }) {
    return /*#__PURE__*/React.createElement("span", {
      className: "kt-eyebrow kt-reveal",
      style: {
        whiteSpace: 'nowrap'
      }
    }, children);
  }
  window.KtLayout = {
    Container,
    Section,
    Eyebrow
  };

  /* ---- Shared CTA on Contacto ---- */
  function ClosingCta({
    heading,
    body
  }) {
    return /*#__PURE__*/React.createElement(Section, {
      style: {
        paddingTop: 0
      }
    }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
      className: "kt-concentric",
      style: {
        borderRadius: 'var(--kt-radius-xl)',
        border: '1px solid var(--kt-line)',
        background: 'var(--kt-bg-raise)',
        padding: 'clamp(36px,6vw,72px)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 22
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'var(--kt-fs-h1)',
        maxWidth: '18ch'
      }
    }, heading), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--kt-text-muted)',
        fontSize: 'var(--kt-fs-lead)',
        maxWidth: '46ch'
      }
    }, body), /*#__PURE__*/React.createElement(Button, {
      as: "a",
      href: "contacto.html",
      variant: "primary",
      size: "lg"
    }, "Hablar con Kevin ", Ic.arrow()))));
  }
  window.KtClosingCta = ClosingCta;

  /* ---- Reveal-on-load (discreet, respects reduced-motion) ---- */
  window.KtReveal = function () {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const els = document.querySelectorAll('.kt-reveal');
    els.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(14px)';
      el.style.transition = 'opacity 600ms var(--kt-ease), transform 600ms var(--kt-ease)';
      el.style.transitionDelay = Math.min(i * 70, 420) + 'ms';
      requestAnimationFrame(() => requestAnimationFrame(() => {
        el.style.opacity = '';
        el.style.transform = '';
      }));
    });
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.AppCard = __ds_scope.AppCard;

})();
