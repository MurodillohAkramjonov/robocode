import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Slim gradient bar at the very top of the viewport that tracks
 * the page scroll progress (0 → 1).
 */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 22,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60]
                 bg-gradient-to-r from-neon-blue via-cyan-400 to-neon-purple
                 shadow-[0_0_12px_rgba(0,212,255,0.6)]"
    />
  );
};

export default ScrollProgress;
