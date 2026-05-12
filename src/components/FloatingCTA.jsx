import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { contact } from '../data/contact';

/**
 * Persistent Telegram/contact CTA pinned to the bottom-right corner.
 * Subtle pulse ring keeps it noticeable without being noisy.
 */
const FloatingCTA = () => {
  return (
    <motion.a
      href={contact.telegram}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Telegramda yozish"
      initial={{ scale: 0, rotate: -45 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 240, damping: 18, delay: 1.4 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-neon-blue/40 animate-ping" />
      <span
        className="relative flex items-center justify-center w-14 h-14 rounded-full
                   bg-gradient-to-br from-neon-blue to-neon-purple
                   shadow-[0_8px_30px_rgba(0,132,255,0.5)] text-white"
      >
        <Send className="w-6 h-6" strokeWidth={2.4} />
      </span>
      <span
        className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2
                   px-3 py-1.5 rounded-full glass text-sm whitespace-nowrap
                   opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0
                   transition-all duration-300"
      >
        Telegramda yozish
      </span>
    </motion.a>
  );
};

export default FloatingCTA;
