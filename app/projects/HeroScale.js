'use client';

import { useEffect } from 'react';

// Width the embedded site believes it is rendered at, so it lays out its
// desktop view. The iframe is then scaled down to fill the hero exactly, so
// its visible size always matches the container — no fixed resolution.
const DESKTOP_WIDTH = 1440;

export default function HeroScale() {
  useEffect(() => {
    const hero = document.querySelector('.cs-hero');
    const frame = hero ? hero.querySelector('iframe') : null;
    if (!hero || !frame) return;

    function fit() {
      const { width, height } = hero.getBoundingClientRect();
      if (!width || !height) return;
      const scale = width / DESKTOP_WIDTH;
      frame.style.width = `${DESKTOP_WIDTH}px`;
      frame.style.height = `${Math.round(height / scale)}px`;
      frame.style.transform = `scale(${scale})`;
    }

    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(hero);
    return () => ro.disconnect();
  }, []);

  return null;
}
