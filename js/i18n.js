/* ==========================================================================
   OCTO BLACK - I18N LANGUAGE MANAGER
   Vanilla JS locale state switcher & dynamic RTL/LTR direction controller
   ========================================================================== */

(function () {
  const STORAGE_KEY = 'octo_lang';
  const DEFAULT_LANG = 'en';

  function getCurrentLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && (saved === 'ar' || saved === 'en')) {
      return saved;
    }
    // Check browser default language
    const navLang = navigator.language || navigator.userLanguage;
    if (navLang && navLang.startsWith('ar')) {
      return 'ar';
    }
    return DEFAULT_LANG;
  }

  function setLanguage(lang) {
    if (lang !== 'ar' && lang !== 'en') return;

    localStorage.setItem(STORAGE_KEY, lang);
    const htmlEl = document.documentElement;

    htmlEl.setAttribute('lang', lang);
    htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Translate all elements with data-i18n key
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    // Update language switch buttons
    const langSwitchBtns = document.querySelectorAll('.lang-btn-text');
    langSwitchBtns.forEach(btn => {
      btn.textContent = translations[lang]['lang_switch_label'];
    });

    // Dispatch custom event if other scripts need to re-render
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  function toggleLanguage() {
    const current = getCurrentLang();
    const next = current === 'ar' ? 'en' : 'ar';
    setLanguage(next);
  }

  // Initialize on DOM load
  document.addEventListener('DOMContentLoaded', () => {
    const currentLang = getCurrentLang();
    setLanguage(currentLang);

    // Bind event handlers to language switcher buttons
    const switchers = document.querySelectorAll('.lang-btn');
    switchers.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleLanguage();
      });
    });
  });

  // Expose global methods if needed
  window.OctoI18n = {
    getCurrentLang,
    setLanguage,
    toggleLanguage
  };
})();
