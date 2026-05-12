import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';

/**
 * Floating "scroll to top" button. Appears after scrolling 600px.
 */
const BackToTop = () => {
  const { scrollY } = useScrollPosition();
  const visible = scrollY > 600;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          aria-label="Yuqoriga qaytish"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full
                     bg-gradient-to-br from-neon-blue to-neon-purple
                     shadow-[0_8px_30px_rgba(0,132,255,0.4)]
                     flex items-center justify-center text-white"
        >
          <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
