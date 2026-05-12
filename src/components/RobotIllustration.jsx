import { motion } from 'framer-motion';
import { Bot, Cpu, Wifi, Zap, CircuitBoard, Sparkles } from 'lucide-react';

/**
 * Composed SVG-free robot scene for the hero.
 * Uses Tailwind + Framer Motion for a futuristic floating composition.
 * Self-contained — no external image assets required.
 */
const RobotIllustration = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[560px] lg:h-[620px] flex items-center justify-center">
      {/* halo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[80%] h-[80%] rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.25),transparent_60%)] blur-2xl" />
      </div>

      {/* orbiting ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[420px] h-[420px] md:w-[480px] md:h-[480px] rounded-full
                   border border-neon-blue/20"
      >
        <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-neon-blue shadow-[0_0_18px_#00d4ff]" />
        <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-neon-purple shadow-[0_0_14px_#a855f7]" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[340px] h-[340px] md:w-[380px] md:h-[380px] rounded-full
                   border border-dashed border-neon-purple/20"
      >
        <span className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_14px_#22d3ee]" />
      </motion.div>

      {/* central robot card */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10"
      >
        <div className="relative w-[220px] h-[260px] md:w-[260px] md:h-[300px] rounded-[2.2rem]
                        bg-gradient-to-br from-white/10 via-white/5 to-transparent
                        backdrop-blur-xl border border-white/15
                        shadow-[0_30px_80px_rgba(0,132,255,0.35)] overflow-hidden">
          {/* head highlight */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-neon-blue/30 to-transparent" />

          {/* eyes */}
          <div className="absolute top-14 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <motion.span
              animate={{ scaleY: [1, 0.15, 1] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
              className="block w-6 h-6 md:w-7 md:h-7 rounded-full bg-neon-blue shadow-[0_0_22px_#00d4ff]"
            />
            <motion.span
              animate={{ scaleY: [1, 0.15, 1] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 2, delay: 0.1 }}
              className="block w-6 h-6 md:w-7 md:h-7 rounded-full bg-neon-blue shadow-[0_0_22px_#00d4ff]"
            />
          </div>

          {/* mouth / screen */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-32 md:w-40 h-14 rounded-2xl
                          bg-dark-300/80 border border-neon-blue/30 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-around px-3">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.span
                  key={i}
                  animate={{ height: ['20%', '90%', '40%', '70%', '20%'] }}
                  transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.12, ease: 'easeInOut' }}
                  className="block w-1 rounded-full bg-gradient-to-t from-neon-blue to-neon-purple"
                />
              ))}
            </div>
          </div>

          {/* base badge */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5
                          px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[10px] tracking-widest text-white/70">
            <Bot className="w-3 h-3 text-neon-blue" />
            ROBOCODE — R1
          </div>
        </div>
      </motion.div>

      {/* floating mini cards */}
      <FloatingChip
        icon={Cpu}
        label="Arduino"
        className="top-8 left-2 md:left-4"
        delay={0}
      />
      <FloatingChip
        icon={Sparkles}
        label="AI asoslari"
        className="top-20 right-0 md:right-4"
        delay={0.4}
      />
      <FloatingChip
        icon={CircuitBoard}
        label="Sensorlar"
        className="bottom-24 left-0 md:left-2"
        delay={0.8}
      />
      <FloatingChip
        icon={Zap}
        label="Elektronika"
        className="bottom-10 right-2 md:right-6"
        delay={1.2}
      />
      <FloatingChip
        icon={Wifi}
        label="IoT"
        className="top-1/2 -left-2 md:left-0"
        delay={1.6}
      />
    </div>
  );
};

const FloatingChip = ({ icon: Icon, label, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: [0, -10, 0] }}
    transition={{
      opacity: { duration: 0.6, delay },
      y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay },
    }}
    className={`absolute ${className} z-20`}
  >
    <div className="flex items-center gap-2 px-3 py-2 rounded-full glass-strong shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
      <Icon className="w-4 h-4 text-neon-blue" strokeWidth={2.4} />
      <span className="text-xs md:text-sm font-medium text-white/90 whitespace-nowrap">
        {label}
      </span>
    </div>
  </motion.div>
);

export default RobotIllustration;
