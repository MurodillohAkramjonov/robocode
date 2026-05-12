import { AnimatePresence, motion } from 'framer-motion';
import { Bot } from 'lucide-react';

/**
 * Full-screen loading veil shown for ~1.4s on initial mount.
 * Animated robot + brand mark + shimmer underline.
 */
const LoadingScreen = ({ visible }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-200"
        >
          {/* radial backdrop */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.18),transparent_60%)]" />
          {/* grid */}
          <div className="absolute inset-0 grid-bg opacity-40" />

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col items-center gap-6"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-6 rounded-full border-2 border-dashed border-neon-blue/30"
              />
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple
                           flex items-center justify-center shadow-[0_0_40px_rgba(0,212,255,0.55)]"
              >
                <Bot className="w-10 h-10 text-white" strokeWidth={2} />
              </motion.div>
            </div>

            <div className="text-center">
              <div className="font-display text-2xl font-bold text-gradient-blue">
                Robocode IT Academy
              </div>
              <div className="mt-1 text-sm text-white/50">Yuklanmoqda...</div>
            </div>

            <div className="relative w-44 h-1 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-neon-blue to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
