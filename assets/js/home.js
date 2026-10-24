(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.home-theme-toggle');
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = null;
  try { preference = localStorage.getItem('theme'); } catch (_) { /* Storage is optional. */ }

  function applyTheme(dark) {
    root.dataset.theme = dark ? 'dark' : 'light';
    toggle.setAttribute('aria-pressed', String(dark));
    toggle.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
  }

  if (toggle) {
    toggle.hidden = false;
    applyTheme(root.dataset.theme === 'dark');
    toggle.addEventListener('click', () => {
      const dark = root.dataset.theme !== 'dark';
      preference = dark ? 'dark' : 'light';
      try { localStorage.setItem('theme', preference); } catch (_) { /* Keep this session's choice. */ }
      applyTheme(dark);
    });
    system.addEventListener('change', event => {
      if (preference !== 'dark' && preference !== 'light') applyTheme(event.matches);
    });
  }

  // An anchor to the bibliography opens it, including on a direct hash URL.
  const bibliography = document.getElementById('all-publications');
  function revealBibliography() {
    if (bibliography && window.location.hash === '#all-publications') bibliography.open = true;
  }
  document.querySelectorAll('a[href="#all-publications"]').forEach(link => {
    link.addEventListener('click', () => { if (bibliography) bibliography.open = true; });
  });
  window.addEventListener('hashchange', revealBibliography);
  revealBibliography();
})();
