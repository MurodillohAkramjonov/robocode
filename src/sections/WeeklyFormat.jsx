import { motion } from 'framer-motion';
import { BookOpen, Coffee, Wrench, PartyPopper } from 'lucide-react';
import { weeklyFormat } from '../data/weekly';
import SectionTitle from '../components/SectionTitle';
import { fadeUp, staggerContainer, viewportOnce } from '../animations/variants';

const ICONS = { BookOpen, Coffee, Wrench, PartyPopper };

const WeeklyFormat = () => {
  return (
    <section id="weekly" className="relative section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Haftalik format"
          title={
            <>
              Har bir kun{' '}
              <span className="text-gradient-blue">aniq tizim</span> bilan
            </>
          }
          subtitle="Dars, tanaffus, amaliyot va tadbirlar bolalarning energiya hamda diqqatini muvozanatda saqlaydi."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative"
        >
          {/* vertical line */}
          <span className="absolute left-6 md:left-1/2 top-2 bottom-2 w-px md:-translate-x-px
                           bg-gradient-to-b from-transparent via-neon-blue/40 to-transparent" />

          <ul className="flex flex-col gap-6 md:gap-10">
            {weeklyFormat.map((item, i) => {
              const Icon = ICONS[item.icon];
              const isLeft = i % 2 === 0;
              return (
                <motion.li
                  key={item.id}
                  variants={fadeUp}
                  className={`relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-12 md:items-center`}
                >
                  {/* dot */}
                  <span className="absolute left-6 md:left-1/2 top-6 w-4 h-4 rounded-full
                                   md:-translate-x-1/2 bg-dark-200 border-2 border-neon-blue
                                   shadow-[0_0_18px_rgba(0,212,255,0.6)] z-10">
                    <span className="absolute inset-0.5 rounded-full bg-neon-blue animate-pulse" />
                  </span>

                  {/* card */}
                  <div className={isLeft ? 'md:col-start-1 md:row-start-1' : 'md:col-start-2 md:row-start-1'}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative p-6 rounded-2xl bg-white/[0.04] backdrop-blur-xl
                                 border border-white/[0.08] hover:border-neon-blue/30 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color}
                                        flex items-center justify-center flex-shrink-0
                                        shadow-[0_8px_22px_rgba(0,0,0,0.4)]`}>
                          <Icon className="w-6 h-6 text-white" strokeWidth={2.2} />
                        </div>
                        <div>
                          <div className="text-[10px] font-mono tracking-widest text-neon-blue uppercase">
                            {item.time}
                          </div>
                          <h3 className="mt-1 font-display font-semibold text-lg md:text-xl text-white">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm text-white/60 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default WeeklyFormat;
