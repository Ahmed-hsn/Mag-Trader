'use client';

import { useEffect } from 'react';

/**
 * Adds `is-visible` to every `.reveal` element when it enters the viewport.
 * Respects prefers-reduced-motion (CSS handles the no-op).
 */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!els.length) return;

    // If IntersectionObserver is not available, show all immediately
    if (typeof IntersectionObserver === 'undefined') {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      // threshold: 0.05 = only 5% visible needed (works on mobile with tall elements)
      // rootMargin: no negative bottom margin so elements near viewport edge still trigger
      { threshold: 0.05, rootMargin: '0px 0px 0px 0px' }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

