import { useMemo } from 'react';
import { motion } from 'framer-motion';

/**
 * Decorative floating dots for hero / CTA sections.
 * Pure CSS+Framer — no canvas dependency.
 */
const Particles = ({ count = 24, className = '' }) => {
  const dots = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: 6 + Math.random() * 8,
        delay: Math.random() * 4,
        color: i % 3 === 0 ? 'bg-neon-purple/60' : 'bg-neon-blue/70',
      })),
    [count],
  );

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {dots.map((d) => (
        <motion.span
          key={d.id}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [-20, 20, -20], opacity: [0, 1, 0] }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            top: `${d.y}%`,
            left: `${d.x}%`,
            width: d.size,
            height: d.size,
          }}
          className={`absolute rounded-full ${d.color} shadow-[0_0_8px_currentColor]`}
        />
      ))}
    </div>
  );
};

export default Particles;
