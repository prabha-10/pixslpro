/* ============================================================
   Lamossa clone — interactions
   ============================================================ */

// ---------- Hero background video ----------
// The clip is pre-rendered as smooth motion-interpolated slow motion
// (assets/hero-smooth.mp4, 60fps), so it plays at normal 1x speed.
const heroVideo = document.getElementById('heroVideo');
if (heroVideo) {
  heroVideo.playbackRate = 1;
}

// ---------- Nav: hamburger toggle ----------
const navPill = document.getElementById('navPill');
const navBurger = document.getElementById('navBurger');

navBurger.addEventListener('click', () => {
  const open = navPill.classList.toggle('nav-open');
  navBurger.setAttribute('aria-expanded', open);
});

// close menu when a link inside is clicked
document.querySelectorAll('.nav-menu a').forEach((a) =>
  a.addEventListener('click', () => {
    navPill.classList.remove('nav-open');
    navBurger.setAttribute('aria-expanded', 'false');
  })
);

// close on outside click / Escape
document.addEventListener('click', (e) => {
  if (!navPill.contains(e.target)) {
    navPill.classList.remove('nav-open');
    navBurger.setAttribute('aria-expanded', 'false');
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    navPill.classList.remove('nav-open');
    navBurger.setAttribute('aria-expanded', 'false');
  }
});

// ---------- Scroll reveal ----------
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// ---------- Count-up counters ----------
// <span class="count" data-to="500" data-prefix="" data-suffix="+" data-decimals="0">
function animateCount(el) {
  const to = parseFloat(el.dataset.to || '0');
  const decimals = parseInt(el.dataset.decimals || '0', 10);
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const dur = parseInt(el.dataset.dur || '1600', 10);
  const start = performance.now();
  const ease = (t) => 1 - Math.pow(1 - t, 4);

  function frame(now) {
    const p = Math.min((now - start) / dur, 1);
    const val = to * ease(p);
    el.textContent =
      prefix +
      val.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }) +
      suffix;
    if (p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);
document.querySelectorAll('.count').forEach((el) => countObserver.observe(el));

// ---------- Services: scroll-pinned accordion + image crossfade ----------
const servicesSection = document.querySelector('.services');
const serviceItems = [...document.querySelectorAll('.service-item')];
const visualSlides = [...document.querySelectorAll('.service-visual .visual-slide')];
let manualService = false;

function setActiveService(i) {
  serviceItems.forEach((item, idx) => {
    const on = idx === i;
    item.classList.toggle('active', on);
    item.querySelector('.service-head').setAttribute('aria-expanded', on);
  });
  visualSlides.forEach((s, idx) => s.classList.toggle('active', idx === i));
}

if (servicesSection && serviceItems.length) {
  // scroll progress through the tall section drives the active item
  window.addEventListener(
    'scroll',
    () => {
      if (manualService) return;
      const rect = servicesSection.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return;
      const progress = Math.min(Math.max(-rect.top / total, 0), 0.999);
      const idx = Math.floor(progress * serviceItems.length);
      if (!serviceItems[idx].classList.contains('active')) setActiveService(idx);
    },
    { passive: true }
  );

  // clicking a row also works (and temporarily overrides scroll control)
  serviceItems.forEach((item, i) => {
    item.querySelector('.service-head').addEventListener('click', () => {
      manualService = true;
      setActiveService(i);
      clearTimeout(setActiveService._t);
      setActiveService._t = setTimeout(() => (manualService = false), 1500);
    });
  });
}

// ---------- FAQ accordion ----------
document.querySelectorAll('.faq-item').forEach((item) => {
  item.querySelector('.faq-q').addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach((o) => {
      o.classList.remove('open');
      o.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      item.querySelector('.faq-q').setAttribute('aria-expanded', 'true');
    }
  });
});

// ---------- Contact form: service pill multi-select ----------
document.querySelectorAll('.service-pills .pill-opt').forEach((pill) => {
  pill.addEventListener('click', () => pill.classList.toggle('selected'));
});
