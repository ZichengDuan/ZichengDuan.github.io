// Apply the saved/system theme before the page paints. Storage may be unavailable.
(() => {
  let preference = null;
  try { preference = localStorage.getItem('theme'); } catch (_) { /* Use system theme. */ }
  const dark = preference === 'dark' || (preference !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
})();
