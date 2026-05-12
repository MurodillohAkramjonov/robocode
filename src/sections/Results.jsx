import { motion } from 'framer-motion';
import {
  CircuitBoard, Radio, Bot, Brain, Sparkles, Users, Presentation, Award,
} from 'lucide-react';
import { results } from '../data/results';
import SectionTitle from '../components/SectionTitle';
import { fadeUp, scaleIn, staggerFast, viewportOnce } from '../animations/variants';

const ICONS = { CircuitBoard, Radio, Bot, Brain, Sparkles, Users, Presentation, Award };

const Results = () => {
  return (
    <section id="results" className="relative section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Natijalar"
          title={
            <>
              3 oydan keyin{' '}
              <span className="text-gradient-blue">bolangiz</span> nimalarni biladi?
            </>
          }
          subtitle="Aniq, o‘lchanadigan ko‘nikmalar — qog‘ozda emas, amalda."
        />

        <motion.ul
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {results.map((r) => {
            const Icon = ICONS[r.icon];
            return (
              <motion.li
                key={r.id}
                variants={scaleIn}
                whileHover={{ y: -4 }}
                className="group relative p-5 rounded-2xl bg-white/[0.04] backdrop-blur-xl
                           border border-white/[0.08] hover:border-emerald-400/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  {/* glowing check */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 rounded-full bg-emerald-400/30 blur-md
                                    group-hover:blur-lg group-hover:bg-emerald-400/50 transition-all" />
                    <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400
                                    flex items-center justify-center shadow-[0_0_18px_rgba(52,211,153,0.5)]">
                      <Icon className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-widest text-white/40">
                      0{r.id}
                    </div>
                    <div className="mt-0.5 font-semibold text-white leading-tight">
                      {r.title}
                    </div>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* summary callout */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 relative overflow-hidden rounded-3xl p-8 md:p-10
                     bg-gradient-to-br from-emerald-400/10 via-neon-blue/10 to-neon-purple/10
                     border border-white/10"
        >
          <div className="grid md:grid-cols-3 gap-6 items-center text-center md:text-left">
            <div>
              <div className="font-display text-4xl font-bold text-gradient-blue">100%</div>
              <div className="mt-1 text-sm text-white/60">Amaliyotga asoslangan</div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-gradient-blue">8+</div>
              <div className="mt-1 text-sm text-white/60">O‘zlashtiriladigan ko‘nikma</div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-gradient-blue">1</div>
              <div className="mt-1 text-sm text-white/60">Tugallangan shaxsiy robot</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
