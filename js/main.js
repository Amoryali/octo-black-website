/* ==========================================================================
   OCTO BLACK - MAIN WEBSITE SCRIPTS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Drawer Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileToggle.classList.toggle('active');
      const expanded = navMenu.classList.contains('active');
      mobileToggle.setAttribute('aria-expanded', expanded);
    });

    // Close menu when clicking links on mobile
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Systems Filter Chips (Systems Page)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const systemCards = document.querySelectorAll('.system-card');

  if (filterBtns.length > 0 && systemCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        systemCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 3. Accordion Toggle (FAQ Page)
  const accordionItems = document.querySelectorAll('.accordion-item');
  if (accordionItems.length > 0) {
    accordionItems.forEach(item => {
      const header = item.querySelector('.accordion-header');
      if (header) {
        header.addEventListener('click', () => {
          const isActive = item.classList.contains('active');
          // Close all items
          accordionItems.forEach(i => i.classList.remove('active'));
          // Toggle clicked item
          if (!isActive) {
            item.classList.add('active');
          }
        });
      }
    });
  }

  // 4. Update Copyright Year dynamically
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 5. Scroll reveal — the .reveal class is applied by this script only, so
  //    the page stays fully visible if JavaScript is unavailable.
  const revealTargets = document.querySelectorAll(
    '.section-header, .card, .system-card, .gallery-item, .timeline-item, ' +
    '.download-card, .accordion-item, .store-badges'
  );
  if (revealTargets.length > 0) {
    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

      revealTargets.forEach(target => {
        target.classList.add('reveal');
        revealObserver.observe(target);
      });
    } else {
      revealTargets.forEach(target => target.classList.add('is-visible'));
    }
  }

  // 6. Sticky header state + scroll progress bar + back-to-top button.
  //    The two UI elements are injected so every page gets them without
  //    duplicating markup.
  const navbar = document.querySelector('.navbar-header');

  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  progressBar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(progressBar);

  const backToTop = document.createElement('button');
  backToTop.type = 'button';
  backToTop.className = 'back-to-top';
  backToTop.innerHTML =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<polyline points="18 15 12 9 6 15"></polyline></svg>';
  document.body.appendChild(backToTop);

  function applyBackToTopLabel() {
    const lang = window.OctoI18n ? window.OctoI18n.getCurrentLang() : 'en';
    const dictionary = (window.translations && window.translations[lang]) || {};
    const label = dictionary.ui_back_to_top || 'Back to top';
    backToTop.setAttribute('aria-label', label);
    backToTop.title = label;
  }
  applyBackToTopLabel();
  window.addEventListener('languageChanged', applyBackToTopLabel);

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  function handleScroll() {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop || 0;
    const scrollable =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const progress = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;
    progressBar.style.width = progress + '%';

    backToTop.classList.toggle('is-visible', scrollTop > 400);

    if (navbar) {
      navbar.classList.toggle('is-scrolled', scrollTop > 8);
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
});
