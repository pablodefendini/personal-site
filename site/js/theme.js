// Dark / Light mode toggle
// Persists choice in localStorage; respects OS preference on first visit

function toggleMode() {
  var html = document.documentElement;
  var current = html.getAttribute('data-mode') || 'light';
  var next = current === 'light' ? 'dark' : 'light';
  html.setAttribute('data-mode', next);
  try { localStorage.setItem('mode', next); } catch (e) {}
  updateModeButton(next);
}

function updateModeButton(mode) {
  var btn = document.querySelector('.mode-toggle');
  if (!btn) return;
  btn.textContent = mode === 'dark' ? '\u2600' : '\u263E';
  btn.setAttribute('aria-label',
    mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
  );
}

// --- Init on load ---

(function () {
  // Restore mode (default: light, or respect OS preference)
  try {
    var storedMode = localStorage.getItem('mode');
    if (storedMode) {
      document.documentElement.setAttribute('data-mode', storedMode);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-mode', 'dark');
    }
  } catch (e) {}

  var mode = document.documentElement.getAttribute('data-mode') || 'light';
  updateModeButton(mode);
})();
