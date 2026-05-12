import { useState, useEffect } from 'react';

/**
 * Tracks vertical scroll position and exposes a scrolled flag once
 * the user has scrolled past a given threshold. Used for navbar
 * background blur / back-to-top button visibility.
 */
export const useScrollPosition = (threshold = 40) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          setScrollY(y);
          setScrolled(y > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return { scrollY, scrolled };
};
