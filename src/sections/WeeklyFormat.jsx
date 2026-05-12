import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Coffee, Wrench, PartyPopper } from 'lucide-react';
import { weeklyFormat } from '../data/weekly';
import SectionTitle from '../components/SectionTitle';

const ICONS = { BookOpen, Coffee, Wrench, PartyPopper };

const dotVariant = {
  hidden: { scale: 0, y: -28, opacity: 0 },
  visible: {
    scale: 1, y: 0, opacity: 1,
    transition: { type: 'spring', stiffness: 520, damping: 16, delay: 0 },
  },
};

const cardLeft = {
  hidden: { x: -90, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 260, damping: 28, delay: 0.2 } },
};

const cardRight = {
  hidden: { x: 90, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 260, damping: 28, delay: 0.2 } },
};

const WeeklyFormat = () => {
  const [hoveredId, setHoveredId] = useState(null);

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

        <div className="relative">
          <span className="absolute left-6 md:left-1/2 top-2 bottom-2 w-px md:-translate-x-px
                           bg-gradient-to-b from-transparent via-neon-blue/40 to-transparent" />

          <ul className="flex flex-col gap-6 md:gap-10">
            {weeklyFormat.map((item, i) => {
              const Icon = ICONS[item.icon];
              const isLeft = i % 2 === 0;
              const isHovered = hoveredId === item.id;
              const isDimmed = hoveredId !== null && !isHovered;

              return (
                <motion.li
                  key={item.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.12 }}
                  animate={{ opacity: isDimmed ? 0.35 : 1 }}
                  transition={{ duration: 0.25 }}
                  className="relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-12 md:items-center"
                >
                  {/* dot */}
                  <motion.span
                    variants={dotVariant}
                    className="absolute left-6 md:left-1/2 top-6 w-4 h-4 rounded-full
                               md:-translate-x-1/2 bg-dark-200 border-2 border-neon-blue
                               shadow-[0_0_18px_rgba(0,212,255,0.6)] z-10"
                  >
                    <span className="absolute inset-0.5 rounded-full bg-neon-blue animate-pulse" />
                  </motion.span>

                  {/* card */}
                  <motion.div
                    variants={isLeft ? cardLeft : cardRight}
                    className={isLeft ? 'md:col-start-1 md:row-start-1' : 'md:col-start-2 md:row-start-1'}
                  >
                    <motion.div
                      onMouseEnter={() => setHoveredId(item.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      animate={isHovered
                        ? { scale: 1.03, boxShadow: '0 16px 48px rgba(0,212,255,0.18)' }
                        : { scale: 1,    boxShadow: '0 0px 0px rgba(0,0,0,0)' }
                      }
                      transition={{ duration: 0.25 }}
                      className="relative p-6 rounded-2xl bg-white/[0.04] backdrop-blur-xl
                                 border border-white/[0.08] hover:border-neon-blue/40
                                 transition-colors cursor-default"
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
                  </motion.div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WeeklyFormat;
