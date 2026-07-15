/* KrypTon website — shared sections + icons.
   Loaded after the DS bundle; composes DS components and exposes sections on window. */
(function () {
const { Button, Badge, Card, Field, AppCard, NavBar, Footer, Logo } = window.KrypTonDesignSystem_6d2e6d;

/* ---- Thin line icons (brand style: 1.5 stroke, never filled) ---- */
const Ic = {
  calendar: (p) => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="4.5" width="18" height="16" rx="3"/><path d="M3 9h18M8 2.5v4M16 2.5v4"/></svg>,
  dice: (p) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z"/><path d="M12 11l8-4.5M12 11v9M12 11L4 6.5"/></svg>,
  user: (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>,
  pin: (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>,
  wallet: (p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="6" width="18" height="13" rx="3"/><path d="M3 10h18M16 14h2"/></svg>,
  users: (p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c0-3.3 3-5 6.5-5s6.5 1.7 6.5 5"/><path d="M17 5.5a3.2 3.2 0 0 1 0 6M18 15c2.5.4 3.8 2 3.8 5"/></svg>,
  headset: (p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M4 13v-1a8 8 0 0 1 16 0v1"/><rect x="2.5" y="13" width="4" height="6" rx="1.5"/><rect x="17.5" y="13" width="4" height="6" rx="1.5"/><path d="M20 19a4 4 0 0 1-4 3h-2"/></svg>,
  mail: (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M4 7l8 6 8-6"/></svg>,
  phone: (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4 5.2 2 2 0 0 1 6 3z"/></svg>,
  arrow: (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12h14M13 6l6 6-6 6"/></svg>,
  check: (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20 6L9 17l-5-5"/></svg>,
};
window.KtIcons = Ic;

/* ---- Layout helpers ---- */
function Container({ narrow, style, children }) {
  return <div style={{ width: '100%', maxWidth: narrow ? 'var(--kt-container-narrow)' : 'var(--kt-container)', margin: '0 auto', padding: '0 24px', ...style }}>{children}</div>;
}
function Section({ children, style, ...rest }) {
  return <section style={{ paddingBlock: 'var(--kt-section-y)', ...style }} {...rest}>{children}</section>;
}
function Eyebrow({ children }) {
  return <span className="kt-eyebrow kt-reveal" style={{ whiteSpace: 'nowrap' }}>{children}</span>;
}
window.KtLayout = { Container, Section, Eyebrow };

/* ---- Shared CTA on Contacto ---- */
function ClosingCta({ heading, body }) {
  return (
    <Section style={{ paddingTop: 0 }}>
      <Container>
        <div className="kt-concentric" style={{ borderRadius: 'var(--kt-radius-xl)', border: '1px solid var(--kt-line)', background: 'var(--kt-bg-raise)', padding: 'clamp(36px,6vw,72px)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
          <h2 style={{ fontSize: 'var(--kt-fs-h1)', maxWidth: '18ch' }}>{heading}</h2>
          <p style={{ color: 'var(--kt-text-muted)', fontSize: 'var(--kt-fs-lead)', maxWidth: '46ch' }}>{body}</p>
          <Button as="a" href="contacto.html" variant="primary" size="lg">Hablar con Kevin {Ic.arrow()}</Button>
        </div>
      </Container>
    </Section>
  );
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
      el.style.opacity = ''; el.style.transform = '';
    }));
  });
};
})();