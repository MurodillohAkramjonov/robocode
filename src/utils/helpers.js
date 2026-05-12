/**
 * Joins class names, skipping falsy values.
 * Tiny inline alternative to `classnames` / `clsx`.
 */
export const cx = (...classes) => classes.filter(Boolean).join(' ');

/**
 * Smoothly scrolls to an element by anchor href (e.g. "#about").
 * Used by the navbar links and CTAs.
 */
export const smoothScrollTo = (href) => {
  if (!href || !href.startsWith('#')) return;
  const el = document.querySelector(href);
  if (!el) return;
  const offset = 80; // sticky navbar height
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
};

/**
 * Formats a number with thousands separators using non-breaking spaces.
 * "4330000" → "4 330 000"
 */
export const formatNumber = (n) =>
  String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
