import { motion } from 'framer-motion';
import { Cpu, CircuitBoard, Sparkles, Wrench, GraduationCap, Bot } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import GlassCard from '../components/GlassCard';
import { fadeUp, slideInLeft, slideInRight, staggerFast, viewportOnce } from '../animations/variants';

const pillars = [
  {
    id: 1, icon: Cpu, title: 'Arduino asosida',
    desc: 'Bolalar haqiqiy sanoat platasi bilan ishlaydi — o‘yinchoq emas.',
  },
  {
    id: 2, icon: CircuitBoard, title: 'Real elektronika',
    desc: 'Sxemalar, sensorlar, motorlar — to‘liq muhandislik tajribasi.',
  },
  {
    id: 3, icon: Sparkles, title: 'AI asoslari',
    desc: 'Sun’iy intellekt nima va qanday ishlaydi — sodda tilda.',
  },
  {
    id: 4, icon: Wrench, title: 'Amaliy ta’lim',
    desc: 'Har bir tushuncha amaliyot bilan mustahkamlanadi.',
  },
];

const About = () => {
  return (
    <section id="about" className="relative section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Lager haqida"
          title={
            <>
              Bolalar haqiqiy{' '}
              <span className="text-gradient-blue">robotlarni</span> yasaydi
            </>
          }
          subtitle="Robocode IT Academy yozgi lageri — bu nazariya bilan cheklanmaydigan, real loyihalarga asoslangan dastur. Bolalar dasturlash, muhandislik va AI dunyosini birgalikda kashf qiladi."
        />

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* LEFT — visual composition */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-[440px] rounded-3xl overflow-hidden glass-strong">
              {/* gradient layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-transparent to-neon-purple/20" />
              <div className="absolute inset-0 grid-bg opacity-50" />

              {/* central robot icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, 4, -4, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-32 h-32 rounded-3xl bg-gradient-to-br from-neon-blue to-neon-purple
                             flex items-center justify-center shadow-[0_0_60px_rgba(0,132,255,0.5)]"
                >
                  <Bot className="w-16 h-16 text-white" strokeWidth={1.6} />
                </motion.div>
              </div>

              {/* floating mini cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-6 left-6 flex items-center gap-2 px-3 py-2 rounded-xl glass-strong"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_currentColor]" />
                <span className="text-xs font-medium">Sensorlar onlayn</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-6 right-6 px-4 py-3 rounded-xl glass-strong"
              >
                <div className="text-[10px] tracking-wider text-white/50 uppercase">Status</div>
                <div className="flex items-center gap-2 mt-1">
                  <GraduationCap className="w-4 h-4 text-neon-blue" />
                  <span className="text-sm font-semibold">Ta’lim faol</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="absolute top-1/2 -translate-y-1/2 right-4 px-3 py-2 rounded-xl glass-strong text-xs"
              >
                <div className="text-white/50">Loyiha</div>
                <div className="font-semibold text-neon-blue">Robot-01</div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT — pillars */}
          <motion.div
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-4"
          >
            {pillars.map((p) => (
              <motion.div key={p.id} variants={fadeUp}>
                <GlassCard className="p-6 h-full group">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-neon-blue/15 to-neon-purple/15
                                  border border-white/10 flex items-center justify-center mb-4
                                  group-hover:border-neon-blue/40 transition-colors">
                    <p.icon className="w-5 h-5 text-neon-blue" strokeWidth={2.2} />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white mb-1.5">
                    {p.title}
                  </h3>
                  <p className="text-sm text-white/55 leading-relaxed">{p.desc}</p>
                </GlassCard>
              </motion.div>
            ))}

            {/* highlight banner */}
            <motion.div variants={fadeUp} className="sm:col-span-2">
              <div className="relative overflow-hidden rounded-2xl p-6
                              bg-gradient-to-r from-neon-blue/15 via-primary-500/10 to-neon-purple/15
                              border border-neon-blue/25">
                <div className="flex items-center gap-4">
                  <Sparkles className="w-7 h-7 text-neon-blue flex-shrink-0" />
                  <p className="text-sm md:text-base text-white/90 font-medium">
                    Har bir bola lager so‘nggida o‘zining yig‘gan va dasturlagan{' '}
                    <span className="text-gradient-blue font-bold">shaxsiy robotini</span> uyga olib ketadi.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
