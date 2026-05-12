import { motion } from 'framer-motion';
import { Check, X, Crown, Cpu, Calendar, Bot, Brain, PartyPopper, Award } from 'lucide-react';
import { comparisonRows } from '../data/comparison';
import SectionTitle from '../components/SectionTitle';

const FEATURE_ICONS = {
  platform:    Cpu,
  duration:    Calendar,
  robot:       Bot,
  ai:          Brain,
  events:      PartyPopper,
  certificate: Award,
};

const rowVariant = {
  hidden:  { opacity: 0, y: 18 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, type: 'spring', stiffness: 260, damping: 28 },
  }),
};

const cardVariant = (fromLeft) => ({
  hidden:  { opacity: 0, x: fromLeft ? -60 : 60 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 200, damping: 30 } },
});

const Comparison = () => (
  <section id="comparison" className="relative section-padding">
    <div className="max-w-5xl mx-auto">
      <SectionTitle
        eyebrow="Taqqoslash"
        title={
          <>
            Nima uchun aynan{' '}
            <span className="text-gradient-blue">Robocode?</span>
          </>
        }
        subtitle="Boshqa yozgi lagerlar bilan solishtirilganda Robocode bolaga real natija beradi."
      />

      <div className="grid md:grid-cols-2 gap-5 mt-4">

        {/* ── ROBOCODE CARD ────────────────────────────────── */}
        <motion.div
          variants={cardVariant(true)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-br
                          from-neon-blue/50 via-primary-500/30 to-neon-purple/50
                          blur-lg opacity-60 pointer-events-none" />

          <div className="relative h-full rounded-3xl p-7 md:p-8
                          bg-gradient-to-br from-dark-100 to-dark-200
                          border border-neon-blue/35 overflow-hidden">
            {/* subtle grid */}
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

            {/* header */}
            <div className="relative flex items-center gap-3.5 mb-7">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple
                              flex items-center justify-center
                              shadow-[0_0_22px_rgba(0,212,255,0.5)]">
                <Crown className="w-5 h-5 text-white" strokeWidth={2.3} />
              </div>
              <div>
                <p className="font-display font-bold text-white text-lg leading-none">Robocode</p>
                <p className="text-xs text-neon-blue mt-0.5 tracking-wider">IT ACADEMY</p>
              </div>
              <span className="ml-auto px-3 py-1 rounded-full text-[10px] font-semibold
                               uppercase tracking-wider text-white
                               bg-gradient-to-r from-neon-blue/25 to-neon-purple/25
                               border border-neon-blue/40">
                Premium
              </span>
            </div>

            {/* rows */}
            <ul className="relative space-y-3">
              {comparisonRows.map((row, i) => {
                const Icon = FEATURE_ICONS[row.id] ?? Cpu;
                return (
                  <motion.li
                    key={row.id}
                    custom={i}
                    variants={rowVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="flex items-center gap-3.5 p-3.5 rounded-2xl
                               bg-white/[0.05] border border-white/[0.07]
                               hover:bg-white/[0.08] hover:border-neon-blue/30
                               transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/20
                                    border border-emerald-400/30
                                    flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-emerald-400" strokeWidth={3} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-widest text-white/40 mb-0.5 flex items-center gap-1.5">
                        <Icon className="w-3 h-3" /> {row.feature}
                      </p>
                      <p className="text-sm font-semibold text-white truncate">{row.robocode}</p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </motion.div>

        {/* ── OTHERS CARD ──────────────────────────────────── */}
        <motion.div
          variants={cardVariant(false)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          <div className="relative h-full rounded-3xl p-7 md:p-8
                          bg-white/[0.03] border border-white/[0.08]">

            {/* header */}
            <div className="flex items-center gap-3.5 mb-7">
              <div className="w-11 h-11 rounded-2xl bg-white/[0.06] border border-white/10
                              flex items-center justify-center">
                <X className="w-5 h-5 text-white/30" strokeWidth={2.5} />
              </div>
              <div>
                <p className="font-display font-bold text-white/45 text-lg leading-none">
                  Boshqa Lagerlar
                </p>
                <p className="text-xs text-white/25 mt-0.5 tracking-wider">O'RTACHA DARAJA</p>
              </div>
            </div>

            {/* rows */}
            <ul className="space-y-3">
              {comparisonRows.map((row, i) => {
                const Icon = FEATURE_ICONS[row.id] ?? Cpu;
                return (
                  <motion.li
                    key={row.id}
                    custom={i}
                    variants={rowVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="flex items-center gap-3.5 p-3.5 rounded-2xl
                               bg-white/[0.02] border border-white/[0.04]"
                  >
                    <div className="w-8 h-8 rounded-xl bg-rose-500/10 border border-rose-500/20
                                    flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-rose-400/60" strokeWidth={2.5} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-widest text-white/25 mb-0.5 flex items-center gap-1.5">
                        <Icon className="w-3 h-3" /> {row.feature}
                      </p>
                      <p className="text-sm text-white/35 line-through decoration-white/20 truncate">
                        {row.others}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default Comparison;
