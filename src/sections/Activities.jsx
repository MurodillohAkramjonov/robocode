import { motion } from 'framer-motion';
import {
  Radar, Bot, Code2, Gamepad2, MapPin, Cpu, Leaf, Sigma, Brain, Sparkles,
} from 'lucide-react';
import { activities } from '../data/activities';
import SectionTitle from '../components/SectionTitle';
import { fadeUp, staggerFast, viewportOnce } from '../animations/variants';

const ICONS = { Radar, Bot, Code2, Gamepad2, MapPin, Cpu, Leaf, Sigma, Brain, Sparkles };

const Activities = () => {
  return (
    <section id="activities" className="relative section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Faoliyatlar"
          title={
            <>
              Bolalar nimalar bilan{' '}
              <span className="text-gradient-blue">shug‘ullanadi?</span>
            </>
          }
          subtitle="10 ta yo‘nalish — har biri bolaning fikrlash, muhandislik va ijodiy ko‘nikmalarini rivojlantiradi."
        />

        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5"
        >
          {activities.map((act) => {
            const Icon = ICONS[act.icon];
            return (
              <motion.article
                key={act.id}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                className="group relative rounded-2xl overflow-hidden"
              >
                {/* animated gradient border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${act.gradient}
                                opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10`} />

                <div className="relative h-full p-5 md:p-6 rounded-2xl bg-white/[0.04] backdrop-blur-xl
                                border border-white/[0.08] group-hover:border-white/[0.16]
                                transition-colors duration-500">
                  {/* corner sparkle */}
                  <span className="absolute top-3 right-3 w-1 h-1 rounded-full bg-white/40
                                   group-hover:bg-neon-blue group-hover:shadow-[0_0_8px_currentColor]
                                   transition-all" />

                  <div className={`relative w-12 h-12 rounded-xl mb-4
                                  bg-gradient-to-br ${act.gradient}
                                  flex items-center justify-center
                                  shadow-[0_8px_24px_rgba(0,0,0,0.4)]
                                  group-hover:scale-110 transition-transform duration-500`}>
                    {Icon && <Icon className="w-6 h-6 text-white" strokeWidth={2.2} />}
                  </div>

                  <div className="text-[10px] tracking-widest text-white/40 mb-1">
                    {String(act.id).padStart(2, '0')}
                  </div>
                  <h3 className="font-display font-semibold text-base md:text-lg text-white leading-tight">
                    {act.title}
                  </h3>
                  <p className="mt-2 text-xs md:text-sm text-white/55 leading-relaxed">
                    {act.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Activities;
