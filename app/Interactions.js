'use client';

import { useEffect } from 'react';
import { liquidGlass } from '@benai/liquid-glass/vanilla';

/**
 * Ports the original vanilla js/script.js interactions into a client effect.
 * All listeners are registered with an AbortController signal so React's
 * effect cleanup (and Strict Mode double-invoke in dev) tears them down cleanly.
 */
export default function Interactions({ markup }) {
  useEffect(() => {
    const ac = new AbortController();
    const { signal } = ac;
    const observers = [];
    let manualTimer;
    let glassInstance;

    // ---------- Hero background video ----------
    const heroVideo = document.getElementById('heroVideo');
    if (heroVideo) heroVideo.playbackRate = 1;

    // ---------- Nav: hamburger toggle ----------
    const navPill = document.getElementById('navPill');
    const navBurger = document.getElementById('navBurger');

    // ---------- Nav: liquid-glass refraction (Chromium) / frosted fallback ----------
    // Optics match the "Join Aurora" liquid-glass card reference exactly.
    if (navPill) {
      try {
        glassInstance = liquidGlass(navPill, {
          scale: -112,
          chroma: 6,
          blur: 3,
          saturate: 1.5,
        });
      } catch (e) {
        /* non-fatal: CSS frosted fallback remains */
      }
    }

    // ---------- Nav: pointer-tracking glare (ported from the card's glareRef) ----------
    const navGlare = document.getElementById('navGlare');
    if (navPill && navGlare) {
      navPill.addEventListener(
        'pointermove',
        (e) => {
          const rect = navPill.getBoundingClientRect();
          const gx = ((e.clientX - rect.left) / rect.width) * 100;
          const gy = ((e.clientY - rect.top) / rect.height) * 100;
          navGlare.style.background = `radial-gradient(160px circle at ${gx.toFixed(1)}% ${gy.toFixed(1)}%, rgba(255,255,255,0.22), rgba(255,255,255,0.04) 45%, transparent 70%)`;
        },
        { signal }
      );
    }

    if (navPill && navBurger) {
      navBurger.addEventListener(
        'click',
        () => {
          const open = navPill.classList.toggle('nav-open');
          navBurger.setAttribute('aria-expanded', String(open));
        },
        { signal }
      );
      document.querySelectorAll('.nav-menu a').forEach((a) =>
        a.addEventListener(
          'click',
          () => {
            navPill.classList.remove('nav-open');
            navBurger.setAttribute('aria-expanded', 'false');
          },
          { signal }
        )
      );
      document.addEventListener(
        'click',
        (e) => {
          if (!navPill.contains(e.target)) {
            navPill.classList.remove('nav-open');
            navBurger.setAttribute('aria-expanded', 'false');
          }
        },
        { signal }
      );
      document.addEventListener(
        'keydown',
        (e) => {
          if (e.key === 'Escape') {
            navPill.classList.remove('nav-open');
            navBurger.setAttribute('aria-expanded', 'false');
          }
        },
        { signal }
      );
    }

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
    observers.push(revealObserver);

    // ---------- Count-up counters ----------
    function animateCount(el) {
      // Epoch guard: a currency switch can re-trigger a count that is still
      // running. Stale frames bail so two rAF loops never write the same node.
      const run = (el._countRun = (el._countRun || 0) + 1);
      const to = parseFloat(el.dataset.to || '0');
      const decimals = parseInt(el.dataset.decimals || '0', 10);
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      const dur = parseInt(el.dataset.dur || '1600', 10);
      const start = performance.now();
      const ease = (t) => 1 - Math.pow(1 - t, 4);

      function frame(now) {
        if (el._countRun !== run) return;
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
    observers.push(countObserver);

    // ---------- Pricing: currency switcher ----------
    // Prices carry every currency as a data attribute (data-aed/-usd/-eur/-inr).
    // Switching rewrites data-to + data-prefix and re-runs the same count-up, so a
    // price still waiting on countObserver picks up the new currency on its own.
    const PRICE_PREFIX = { aed: 'AED ', usd: '$', eur: '€', inr: '₹' };
    const currencyPills = [...document.querySelectorAll('#currencySwitch .pill-opt')];
    const moneyEls = [...document.querySelectorAll('[data-money]')];

    currencyPills.forEach((pill) => {
      pill.addEventListener(
        'click',
        () => {
          const cur = pill.dataset.cur;
          if (!PRICE_PREFIX[cur]) return;
          currencyPills.forEach((p) => p.classList.toggle('selected', p === pill));
          moneyEls.forEach((el) => {
            el.dataset.to = el.dataset[cur];
            el.dataset.prefix = PRICE_PREFIX[cur];
            el.dataset.dur = '700';
            animateCount(el);
          });
        },
        { signal }
      );
    });

    // ---------- Services: scroll-pinned accordion + image crossfade ----------
    const servicesSection = document.querySelector('.services');
    const serviceItems = [...document.querySelectorAll('.service-item')];
    const visualSlides = [...document.querySelectorAll('.service-visual .visual-slide')];
    let manualService = false;

    function setActiveService(i) {
      serviceItems.forEach((item, idx) => {
        const on = idx === i;
        item.classList.toggle('active', on);
        item.querySelector('.service-head').setAttribute('aria-expanded', String(on));
      });
      visualSlides.forEach((s, idx) => s.classList.toggle('active', idx === i));
    }

    if (servicesSection && serviceItems.length) {
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
        { passive: true, signal }
      );

      serviceItems.forEach((item, i) => {
        item.querySelector('.service-head').addEventListener(
          'click',
          () => {
            manualService = true;
            setActiveService(i);
            clearTimeout(manualTimer);
            manualTimer = setTimeout(() => (manualService = false), 1500);
          },
          { signal }
        );
      });
    }

    // ---------- FAQ accordion ----------
    document.querySelectorAll('.faq-item').forEach((item) => {
      item.querySelector('.faq-q').addEventListener(
        'click',
        () => {
          const isOpen = item.classList.contains('open');
          document.querySelectorAll('.faq-item.open').forEach((o) => {
            o.classList.remove('open');
            o.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
          });
          if (!isOpen) {
            item.classList.add('open');
            item.querySelector('.faq-q').setAttribute('aria-expanded', 'true');
          }
        },
        { signal }
      );
    });

    // ---------- Contact form: service card single-select ----------
    const svcCards = [...document.querySelectorAll('#servicePicker .svc-card')];
    svcCards.forEach((card) => {
      card.addEventListener(
        'click',
        () => svcCards.forEach((c) => c.classList.toggle('selected', c === card)),
        { signal }
      );
    });

    // ---------- Contact form: multi-stage step toggle + progress stepper ----------
    // Stepper has one extra leading node ("You found us") that is always complete,
    // so panel index p maps to the active stepper node p + 1.
    const formStepEls = [...document.querySelectorAll('.contact-form .form-step')];
    const stepperNodes = [...document.querySelectorAll('.form-stepper .fs-step')];
    if (formStepEls.length) {
      const paintStepper = (p) => {
        const activeNode = p + 1;
        stepperNodes.forEach((node, n) => {
          node.classList.toggle('fs-done', n < activeNode);
          node.classList.toggle('fs-active', n === activeNode);
        });
      };
      let stepIdx = Math.max(0, formStepEls.findIndex((s) => s.classList.contains('active')));
      const showStep = (i) => {
        stepIdx = Math.min(Math.max(i, 0), formStepEls.length - 1);
        formStepEls.forEach((s, idx) => s.classList.toggle('active', idx === stepIdx));
        paintStepper(stepIdx);
      };
      formStepEls.forEach((step) => {
        step.querySelectorAll('[data-step-next]').forEach((b) =>
          b.addEventListener('click', () => showStep(stepIdx + 1), { signal })
        );
        step.querySelectorAll('[data-step-back]').forEach((b) =>
          b.addEventListener('click', () => showStep(stepIdx - 1), { signal })
        );
      });
      paintStepper(stepIdx); // sync stepper with the initial panel
    }

    return () => {
      ac.abort();
      observers.forEach((o) => o.disconnect());
      clearTimeout(manualTimer);
      if (glassInstance) glassInstance.destroy();
    };
    // `markup` is a re-run trigger, not read inside the effect: when Fast Refresh
    // (dev) swaps the dangerouslySetInnerHTML DOM, the MARKUP string identity
    // changes, so the effect tears down and re-wires against the fresh nodes —
    // otherwise the new .reveal elements are never observed and stay at opacity:0.
    // In production MARKUP is constant, so this runs exactly once as before.
  }, [markup]);

  return null;
}
