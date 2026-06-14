// ============================================================
// END OF THE WORLD TRAVEL — Main JavaScript
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Progress Bar ---
  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';
  document.body.prepend(progressBar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + '%';
  }, { passive: true });

  // --- Sticky Nav ---
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // --- Active Nav Link ---
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // --- Mobile Menu ---
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileNav = document.querySelector('.nav__mobile');
  const closeBtn = document.querySelector('.nav__close');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.style.display = 'flex';
      requestAnimationFrame(() => mobileNav.classList.add('open'));
      document.body.style.overflow = 'hidden';

      // Hamburger animation
      const spans = hamburger.querySelectorAll('span');
      spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
    });

    const closeMobile = () => {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
      setTimeout(() => { mobileNav.style.display = 'none'; }, 400);

      const spans = hamburger.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeMobile);

    mobileNav.querySelectorAll('.nav__mobile-link').forEach(link => {
      link.addEventListener('click', closeMobile);
    });
  }

  // --- Hero image load animation ---
  const heroImg = document.querySelector('.hero__img');
  if (heroImg) {
    if (heroImg.complete) {
      heroImg.classList.add('loaded');
    } else {
      heroImg.addEventListener('load', () => heroImg.classList.add('loaded'));
    }
  }

  // --- Intersection Observer — Fade In Animations ---
  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach((el, i) => {
    // Stagger delay for grouped elements
    if (el.closest('.grid-2, .grid-3, .grid-4, .season-grid, .wildlife-grid, .about-values')) {
      const siblings = Array.from(el.parentElement.children);
      const index = siblings.indexOf(el);
      el.style.transitionDelay = (index * 0.1) + 's';
    }
    observer.observe(el);
  });

  // --- Parallax on hero ---
  const heroBg = document.querySelector('.hero__img');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      heroBg.style.transform = `scale(1.05) translateY(${scrollY * 0.15}px)`;
    }, { passive: true });
  }

  // --- Newsletter form ---
  const newsletterForms = document.querySelectorAll('.newsletter__form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('.newsletter__input');
      const btn = form.querySelector('.newsletter__btn');
      if (input && input.value) {
        btn.textContent = 'Subscribed ✓';
        btn.style.background = '#4caf82';
        input.value = '';
        setTimeout(() => {
          btn.textContent = 'Subscribe';
          btn.style.background = '';
        }, 3000);
      }
    });
  });

  // --- Smooth reveal for stat numbers (count up) ---
  const statNumbers = document.querySelectorAll('.hero__stat-number, .stats-bar__number');
  statNumbers.forEach(el => {
    const finalText = el.textContent.trim();
    const match = finalText.match(/^([\d,\.]+)(.*)$/);
    if (!match) return;

    const rawNum = parseFloat(match[1].replace(/,/g, ''));
    const suffix = match[2];
    const prefix = '';

    el.textContent = '0' + suffix;

    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        countObserver.unobserve(el);

        const duration = 2000;
        const start = performance.now();
        const step = (now) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(eased * rawNum);
          el.textContent = current.toLocaleString() + suffix;
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = finalText;
        };
        requestAnimationFrame(step);
      });
    }, { threshold: 0.5 });

    countObserver.observe(el);
  });

  // --- Horizontal scroll hint for destination strip ---
  const strips = document.querySelectorAll('.dest-strip');
  strips.forEach(strip => {
    let isDown = false;
    let startX, scrollLeft;

    strip.addEventListener('mousedown', (e) => {
      isDown = true;
      strip.style.cursor = 'grabbing';
      startX = e.pageX - strip.offsetLeft;
      scrollLeft = strip.scrollLeft;
    });
    strip.addEventListener('mouseleave', () => { isDown = false; strip.style.cursor = ''; });
    strip.addEventListener('mouseup', () => { isDown = false; strip.style.cursor = ''; });
    strip.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - strip.offsetLeft;
      const walk = (x - startX) * 1.5;
      strip.scrollLeft = scrollLeft - walk;
    });
  });

  // --- Image lazy loading ---
  const lazyImages = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });

  lazyImages.forEach(img => imageObserver.observe(img));

});
