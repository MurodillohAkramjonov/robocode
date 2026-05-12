import { motion } from 'framer-motion';

/**
 * Page-level background effects layer:
 *  - subtle dotted grid
 *  - large drifting gradient orbs
 *  - faint scanlines
 * Rendered once at the root, fixed positioning, pointer-events: none.
 */
const BackgroundFX = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* gradient orbs */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full
                   bg-neon-blue/20 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full
                   bg-neon-purple/20 blur-[140px]"
      />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-1/4 w-[460px] h-[460px] rounded-full
                   bg-cyan-500/10 blur-[120px]"
      />
    </div>
  );
};

export default BackgroundFX;
