import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, MapPin, Users, Sparkles } from 'lucide-react';
import { heroContent } from '../data/hero';
import { fadeUp, staggerContainer } from '../animations/variants';
import GradientButton from '../components/GradientButton';
import RobotIllustration from '../components/RobotIllustration';
import Particles from '../components/Particles';

const ICONS = { CalendarDays, MapPin, Users };

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 md:pt-28 pb-16 overflow-hidden"
    >
      <Particles count={28} />

      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-12
                      grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* LEFT — text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-strong">
            <Sparkles className="w-3.5 h-3.5 text-neon-blue" />
            <span className="text-[11px] md:text-xs font-medium tracking-wider uppercase text-white/80">
              {heroContent.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.04] tracking-tight text-balance"
          >
            <span className="text-white">Farzandingiz </span>
            <span className="text-gradient-blue">yozda </span>
            <span className="text-white">bekorchilik </span>
            <span className="block">qilmasin</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base md:text-lg lg:text-xl text-white/65 leading-relaxed max-w-xl text-balance"
          >
            {heroContent.subtitle}
          </motion.p>

          {/* meta chips */}
          <motion.ul variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            {heroContent.meta.map((m) => {
              const Icon = ICONS[m.icon];
              return (
                <li
                  key={m.id}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass border-white/[0.08]"
                >
                  {Icon && <Icon className="w-4 h-4 text-neon-blue" strokeWidth={2.4} />}
                  <span className="text-sm font-medium text-white/85">{m.label}</span>
                </li>
              );
            })}
          </motion.ul>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-3.5">
            <GradientButton href="#pricing" size="lg" icon={ArrowRight}>
              {heroContent.primaryCta}
            </GradientButton>
            <GradientButton href="#about" variant="secondary" size="lg">
              {heroContent.secondaryCta}
            </GradientButton>
          </motion.div>

          {/* trust mini-row */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex items-center gap-4 text-sm text-white/50"
          >
            <div className="flex -space-x-2">
              {['from-neon-blue to-cyan-400', 'from-cyan-400 to-neon-purple', 'from-neon-purple to-pink-500'].map(
                (g, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${g} border-2 border-dark-200`}
                  />
                ),
              )}
            </div>
            <span>
              <span className="text-white font-semibold">60 ta joy</span> · joylar tugashidan oldin band qiling
            </span>
          </motion.div>
        </motion.div>

        {/* RIGHT — visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative"
        >
          <RobotIllustration />
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Pastga</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-neon-blue to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
