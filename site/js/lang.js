// Language toggle for EN/ES bilingual site
// Persists choice in localStorage when available

function toggleLang() {
  var html = document.documentElement;
  var current = html.getAttribute('lang') || 'en';
  var next = current === 'en' ? 'es' : 'en';
  html.setAttribute('lang', next);
  try { localStorage.setItem('lang', next); } catch (e) {}
  updateLangButton();
}

function updateLangButton() {
  var btn = document.querySelector('.lang-toggle');
  if (!btn) return;
  var current = document.documentElement.getAttribute('lang') || 'en';
  btn.textContent = current === 'en' ? 'ES' : 'EN';
  btn.setAttribute('aria-label',
    current === 'en' ? 'Cambiar a español' : 'Switch to English'
  );
}

// Apply stored preference on load
(function () {
  try {
    var stored = localStorage.getItem('lang');
    if (stored === 'es') {
      document.documentElement.setAttribute('lang', 'es');
    }
  } catch (e) {}
  updateLangButton();
})();
