import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Bot } from 'lucide-react';
import { navLinks, brand } from '../data/navigation';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { cx, smoothScrollTo } from '../utils/helpers';
import GradientButton from '../components/GradientButton';

const Navbar = () => {
  const { scrolled } = useScrollPosition(40);
  const [open, setOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNav = (href) => {
    setOpen(false);
    setTimeout(() => smoothScrollTo(href), 80);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cx(
          'fixed top-0 inset-x-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-dark-200/70 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)]'
            : 'bg-transparent',
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple
                          flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.45)]">
              <Bot className="w-5 h-5 text-white" strokeWidth={2.4} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-base md:text-lg font-bold text-white">
                {brand.name}
              </span>
              <span className="text-[10px] md:text-xs text-white/50 tracking-wider">
                {brand.suffix}
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo(link.href);
                  }}
                  className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white
                           transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-6
                                   h-[2px] bg-gradient-to-r from-neon-blue to-neon-purple transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <GradientButton href="#pricing" size="sm">
              Joy band qilish
            </GradientButton>
          </div>

          {/* Mobile burger */}
          <button
            type="button"
            aria-label={open ? 'Yopish' : 'Menyu'}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden relative w-11 h-11 rounded-xl glass flex items-center justify-center"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                >
                  <X className="w-5 h-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-dark-300/80 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
              className="absolute top-0 right-0 h-full w-[85%] max-w-sm
                         bg-dark-200/95 backdrop-blur-2xl border-l border-white/10
                         flex flex-col pt-24 px-6"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06 }}
                  >
                    <button
                      onClick={() => handleNav(link.href)}
                      className="w-full text-left px-4 py-4 rounded-xl text-base font-medium
                                 text-white/80 hover:text-white hover:bg-white/[0.06]
                                 transition-colors duration-200 flex items-center justify-between"
                    >
                      <span>{link.label}</span>
                      <span className="text-white/30 text-sm">0{i + 1}</span>
                    </button>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-auto mb-10"
              >
                <GradientButton
                  href="#pricing"
                  onClick={() => setOpen(false)}
                  className="w-full"
                >
                  Joy band qilish
                </GradientButton>
              </motion.div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
