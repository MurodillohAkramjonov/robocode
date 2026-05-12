import { motion } from 'framer-motion';
import { Check, X, Crown } from 'lucide-react';
import { comparisonRows } from '../data/comparison';
import SectionTitle from '../components/SectionTitle';
import { fadeUp, viewportOnce } from '../animations/variants';

const Comparison = () => {
  return (
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

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative"
        >
          {/* header row */}
          <div className="hidden md:grid grid-cols-12 gap-4 mb-3 px-6">
            <div className="col-span-4 text-xs uppercase tracking-widest text-white/40">
              Xususiyat
            </div>
            <div className="col-span-4 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                              bg-gradient-to-r from-neon-blue/20 to-neon-purple/20
                              border border-neon-blue/40">
                <Crown className="w-3.5 h-3.5 text-neon-blue" />
                <span className="text-xs font-semibold text-white">Robocode</span>
              </div>
            </div>
            <div className="col-span-4 text-center text-xs uppercase tracking-widest text-white/40">
              Boshqa lagerlar
            </div>
          </div>

          {/* table */}
          <div className="relative rounded-3xl overflow-hidden glass-strong">
            {/* highlight column glow */}
            <div className="hidden md:block absolute inset-y-2 left-1/3 right-1/3 rounded-2xl
                            bg-gradient-to-b from-neon-blue/10 to-neon-purple/10
                            border border-neon-blue/30 pointer-events-none" />

            <ul className="relative divide-y divide-white/5">
              {comparisonRows.map((row, i) => (
                <motion.li
                  key={row.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-6 py-5
                             hover:bg-white/[0.02] transition-colors"
                >
                  <div className="md:col-span-4">
                    <div className="text-[10px] uppercase tracking-widest text-white/40 md:hidden">
                      Xususiyat
                    </div>
                    <div className="font-semibold text-white">{row.feature}</div>
                  </div>
                  <div className="md:col-span-4 md:text-center">
                    <div className="text-[10px] uppercase tracking-widest text-neon-blue md:hidden">
                      Robocode
                    </div>
                    <div className="flex items-center md:justify-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" strokeWidth={3} />
                      <span className="text-sm text-white font-medium">{row.robocode}</span>
                    </div>
                  </div>
                  <div className="md:col-span-4 md:text-center">
                    <div className="text-[10px] uppercase tracking-widest text-white/40 md:hidden">
                      Boshqalar
                    </div>
                    <div className="flex items-center md:justify-center gap-2">
                      <X className="w-4 h-4 text-white/30 flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-sm text-white/50">{row.others}</span>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
