import { motion } from 'framer-motion';
import { Phone, Globe, MapPin } from 'lucide-react';
import { ctaActions, contact } from '../data/contact';
import GradientButton from '../components/GradientButton';
import Particles from '../components/Particles';
import { fadeUp, staggerFast, viewportOnce } from '../animations/variants';

const ICONS = { Phone, Globe, MapPin };

const ACTIONS = {
  phone: contact.phoneRaw,
  site: '#pricing',
  visit: 'https://maps.google.com',
};

const FinalCTA = () => {
  return (
    <section id="cta" className="relative section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem]
                     bg-gradient-to-br from-neon-blue/25 via-primary-700/30 to-neon-purple/25
                     border border-white/15"
        >
          {/* layered backdrops */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,212,255,0.35),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.35),transparent_60%)]" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <Particles count={32} />

          {/* animated rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute -right-32 -top-32 w-[420px] h-[420px] rounded-full
                       border border-white/10 border-dashed"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            className="absolute -left-40 -bottom-40 w-[520px] h-[520px] rounded-full
                       border border-white/10"
          />

          <div className="relative px-6 md:px-12 lg:px-20 py-16 md:py-24 text-center">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                         glass-strong text-xs font-medium tracking-wider uppercase text-white/85"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
              Joylar tugamoqda
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-6 font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance max-w-3xl mx-auto"
            >
              <span className="text-white">Farzandingiz yozini </span>
              <span className="text-gradient-blue">bekorchilik</span>
              <span className="text-white"> bilan o‘tkazmang</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-base md:text-lg text-white/70 max-w-xl mx-auto"
            >
              Hozir murojaat qiling — joyni band qiling, biz siz bilan bog‘lanamiz.
            </motion.p>

            <motion.div
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5"
            >
              {ctaActions.map((action) => {
                const Icon = ICONS[action.icon];
                return (
                  <motion.div key={action.id} variants={fadeUp}>
                    <GradientButton
                      href={ACTIONS[action.id]}
                      variant={action.variant}
                      size="lg"
                      icon={Icon}
                    >
                      {action.label}
                    </GradientButton>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 text-sm text-white/55"
            >
              Yoki to‘g‘ridan-to‘g‘ri qo‘ng‘iroq qiling:{' '}
              <a href={contact.phoneRaw} className="text-white font-semibold underline-offset-4 hover:underline">
                {contact.phone}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
