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

  // 2. Monitor Frame Screen Slider
  const slider = document.getElementById('screenSlider');
  const dots = document.querySelectorAll('.slider-dot');
  const slides = document.querySelectorAll('.screen-slide');
  if (slider && dots.length > 0) {
    let currentSlide = 0;
    const totalSlides = dots.length;

    function goToSlide(index) {
      currentSlide = index;
      const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
      const offset = isRtl ? index * 100 : -index * 100;
      slider.style.transform = `translateX(${offset}%)`;

      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
      });

      slides.forEach((slide, i) => {
        slide.classList.toggle('active-slide', i === currentSlide);
      });
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => goToSlide(i));
    });

    // Initialize first slide active state
    goToSlide(0);

    // Auto rotate every 4 seconds
    setInterval(() => {
      goToSlide((currentSlide + 1) % totalSlides);
    }, 4000);

    // Re-align slide if language direction changes
    window.addEventListener('languageChanged', () => {
      goToSlide(currentSlide);
    });
  }

  // 3. Systems Filter Chips (Systems Page)
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

  // 4. Accordion Toggle (FAQ Page)
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

  // 5. Update Copyright Year dynamically
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
