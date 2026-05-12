import { motion } from 'framer-motion';
import { Check, Sparkles, HeartHandshake, Users, ArrowRight } from 'lucide-react';
import { pricingPlan } from '../data/pricing';
import SectionTitle from '../components/SectionTitle';
import GradientButton from '../components/GradientButton';
import { fadeUp, slideInLeft, slideInRight, staggerFast, viewportOnce } from '../animations/variants';

const ICONS = { Users, HeartHandshake };

const Pricing = () => {
  return (
    <section id="pricing" className="relative section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Narxlar"
          title={
            <>
              Bir marta to‘lov,{' '}
              <span className="text-gradient-blue">umrlik bilim</span>
            </>
          }
          subtitle="Premium dastur — qulay bo‘lib to‘lash imkoniyati va oilalar uchun chegirmalar bilan."
        />

        <div className="grid lg:grid-cols-12 gap-6">
          {/* MAIN PRICING CARD */}
          <motion.article
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-7 relative"
          >
            {/* glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-neon-blue/30 via-primary-500/20 to-neon-purple/30 blur-xl opacity-60" />

            <div className="relative h-full p-8 md:p-10 rounded-3xl
                            bg-gradient-to-br from-dark-100 to-dark-200
                            border border-neon-blue/30 overflow-hidden">
              {/* grid bg */}
              <div className="absolute inset-0 grid-bg opacity-30" />

              <div className="relative">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
                                  bg-gradient-to-r from-neon-blue/20 to-neon-purple/20
                                  border border-neon-blue/40">
                    <Sparkles className="w-3.5 h-3.5 text-neon-blue" />
                    <span className="text-xs font-semibold tracking-wider uppercase text-white">
                      {pricingPlan.badge}
                    </span>
                  </div>
                  <span className="text-xs text-white/50">{pricingPlan.name}</span>
                </div>

                <div className="mt-7">
                  <div className="font-display font-bold tracking-tight leading-none flex items-end gap-3">
                    <span className="text-5xl md:text-7xl text-gradient-blue">
                      {pricingPlan.price}
                    </span>
                    <span className="text-xl md:text-2xl text-white/70 mb-1.5">
                      {pricingPlan.currency}
                    </span>
                  </div>
                  <div className="mt-3 text-sm text-white/55">{pricingPlan.period}</div>
                </div>

                {/* payment plan */}
                <div className="mt-8">
                  <div className="text-[11px] uppercase tracking-widest text-white/40 mb-3">
                    Bo‘lib to‘lash rejasi
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {pricingPlan.paymentPlan.map((p) => (
                      <div
                        key={p.id}
                        className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-center"
                      >
                        <div className="font-display font-bold text-2xl text-gradient-blue">
                          {p.percent}
                        </div>
                        <div className="mt-1 text-[11px] text-white/55 leading-tight">
                          {p.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* features */}
                <motion.ul
                  variants={staggerFast}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className="mt-8 grid sm:grid-cols-2 gap-2.5"
                >
                  {pricingPlan.features.map((f) => (
                    <motion.li
                      key={f}
                      variants={fadeUp}
                      className="flex items-start gap-2.5 text-sm text-white/80"
                    >
                      <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full
                                       bg-gradient-to-br from-emerald-400 to-cyan-400
                                       flex items-center justify-center
                                       shadow-[0_0_12px_rgba(52,211,153,0.35)]">
                        <Check className="w-3 h-3 text-white" strokeWidth={3.5} />
                      </span>
                      {f}
                    </motion.li>
                  ))}
                </motion.ul>

                <div className="mt-9">
                  <GradientButton href="#cta" size="lg" icon={ArrowRight} className="w-full sm:w-auto">
                    Joy band qilish
                  </GradientButton>
                </div>
              </div>
            </div>
          </motion.article>

          {/* DISCOUNTS + INFO */}
          <motion.aside
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            {pricingPlan.discounts.map((d) => {
              const Icon = ICONS[d.icon];
              return (
                <div
                  key={d.id}
                  className="relative p-6 rounded-2xl glass-strong overflow-hidden group
                             hover:border-neon-blue/40 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-neon-purple to-pink-500
                                    flex items-center justify-center flex-shrink-0">
                      {Icon && <Icon className="w-5 h-5 text-white" strokeWidth={2.2} />}
                    </div>
                    <div>
                      <div className="inline-flex items-center px-2.5 py-0.5 rounded-full
                                      bg-neon-purple/20 border border-neon-purple/40 text-[10px]
                                      uppercase tracking-widest text-neon-purple mb-2">
                        Chegirma
                      </div>
                      <h3 className="font-display font-semibold text-white text-lg">
                        {d.title}
                      </h3>
                      <p className="mt-1 text-sm text-white/60 leading-relaxed">
                        {d.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* guarantee */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02]
                            border border-white/10">
              <div className="text-[11px] uppercase tracking-widest text-neon-blue mb-2">
                Bizning va’damiz
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                Bolangiz lager natijasidan{' '}
                <span className="text-white font-semibold">qoniqmasa</span> —
                ilk haftadan keyin to‘lovning bir qismi qaytariladi.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
