import { useEffect } from 'react';

export function useScrollReveal(routeKey) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const root = document.documentElement;
    let observer;
    let frameId;

    const revealItems = () => {
      const items = Array.from(document.querySelectorAll('.reveal-on-scroll'));

      if (prefersReducedMotion || items.length === 0 || !('IntersectionObserver' in window)) {
        items.forEach((item) => item.classList.add('is-visible'));
        return;
      }

      root.classList.add('scroll-reveal-enabled');

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '0px 0px -8% 0px',
          threshold: 0.08,
        },
      );

      items.forEach((item) => {
        item.classList.remove('is-visible');

        const rect = item.getBoundingClientRect();
        const alreadyInView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;

        if (alreadyInView) {
          item.classList.add('is-visible');
          return;
        }

        observer.observe(item);
      });
    };

    frameId = window.requestAnimationFrame(revealItems);

    return () => {
      window.cancelAnimationFrame(frameId);
      observer?.disconnect();
      root.classList.remove('scroll-reveal-enabled');
    };
  }, [routeKey]);
}
