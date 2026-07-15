/* @ds-bundle: {"format":4,"namespace":"KrypTonDesignSystem_6d2e6d","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"AppCard","sourcePath":"components/product/AppCard.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"dd0ca821fce3","components/core/Badge.jsx":"11081867ec7b","components/core/Button.jsx":"8ead2422c3f2","components/core/Card.jsx":"0b817cccb617","components/forms/Field.jsx":"dea0d2dbbb4a","components/navigation/Footer.jsx":"51749dea12bd","components/navigation/NavBar.jsx":"ac28fd86d494","components/product/AppCard.jsx":"f602d09c0ac4","ui_kits/website/sections.jsx":"3de7102940a7"},"inlinedExternals":[],"unexposedExports":[]} */

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
    href: "mailto:administracion@devkrypton.com"
  }, "administracion@devkrypton.com"), /*#__PURE__*/React.createElement("a", {
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
