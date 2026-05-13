import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Smartphone, Globe, X } from 'lucide-react';
import { contact } from '../data/contact';

const username = contact.telegram.replace('https://t.me/', '');

const options = [
  {
    id: 'app',
    icon: Smartphone,
    label: 'Telegram ilova',
    sub: 'Telefonda ochish',
    href: `tg://resolve?domain=${username}`,
  },
  {
    id: 'web',
    icon: Globe,
    label: 'Telegram Web',
    sub: 'Brauzerda ochish',
    href: contact.telegram,
  },
];

const FloatingCTA = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">

      {/* Picker */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 12 }}
            transition={{ type: 'spring', stiffness: 340, damping: 26 }}
            className="relative w-56 rounded-2xl overflow-hidden
                       bg-dark-100 border border-white/10
                       shadow-[0_16px_48px_rgba(0,0,0,0.5)]"
          >
            <div className="px-4 pt-3 pb-2 flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-widest text-white/40">
                Qayerda ochish?
              </span>
              <button
                onClick={() => setOpen(false)}
                className="w-6 h-6 rounded-lg flex items-center justify-center
                           text-white/40 hover:text-white transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <ul className="px-2 pb-2 flex flex-col gap-1">
              {options.map((opt) => (
                <li key={opt.id}>
                  <a
                    href={opt.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl
                               hover:bg-white/[0.07] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-purple/20
                                    border border-neon-blue/20 flex items-center justify-center flex-shrink-0">
                      <opt.icon className="w-4 h-4 text-neon-blue" strokeWidth={2.2} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white leading-none">{opt.label}</p>
                      <p className="text-[11px] text-white/40 mt-0.5">{opt.sub}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB button */}
      <motion.button
        type="button"
        aria-label="Telegramda yozish"
        onClick={() => setOpen((v) => !v)}
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 240, damping: 18, delay: 1.4 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.94 }}
        className="relative group"
      >
        <span className="absolute inset-0 rounded-full bg-neon-blue/40 animate-ping" />
        <span className="relative flex items-center justify-center w-14 h-14 rounded-full
                         bg-gradient-to-br from-neon-blue to-neon-purple
                         shadow-[0_8px_30px_rgba(0,132,255,0.5)] text-white">
          <Send className="w-6 h-6" strokeWidth={2.4} />
        </span>
        <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2
                         px-3 py-1.5 rounded-full glass text-sm whitespace-nowrap
                         opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0
                         transition-all duration-300">
          Telegramda yozish
        </span>
      </motion.button>
    </div>
  );
};

export default FloatingCTA;
