import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Globe, MapPin, X } from 'lucide-react';
import { ctaActions, contact } from '../data/contact';
import GradientButton from '../components/GradientButton';
import Particles from '../components/Particles';
import { fadeUp, staggerFast, viewportOnce } from '../animations/variants';
import { useBooking } from '../context/BookingContext';

const ICONS = { Phone, Globe, MapPin };

const FinalCTA = () => {
  const { openModal } = useBooking();
  const [mapOpen, setMapOpen] = useState(false);

  const handleAction = (id) => {
    if (id === 'visit') { setMapOpen(true); return; }
    if (id === 'site')  { openModal(); return; }
  };

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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,212,255,0.35),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.35),transparent_60%)]" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <Particles count={32} />

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
              <span className="text-white"> bilan o'tkazmang</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-base md:text-lg text-white/70 max-w-xl mx-auto"
            >
              Hozir murojaat qiling — joyni band qiling, biz siz bilan bog'lanamiz.
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
                const isLink = action.id === 'phone';
                return (
                  <motion.div key={action.id} variants={fadeUp}>
                    <GradientButton
                      href={isLink ? contact.phoneRaw : undefined}
                      onClick={!isLink ? () => handleAction(action.id) : undefined}
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
              Yoki to'g'ridan-to'g'ri qo'ng'iroq qiling:{' '}
              <a href={contact.phoneRaw} className="text-white font-semibold underline-offset-4 hover:underline">
                {contact.phone}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Map Modal */}
      <AnimatePresence>
        {mapOpen && (
          <>
            <motion.div
              key="map-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMapOpen(false)}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            />
            <motion.div
              key="map-modal"
              initial={{ opacity: 0, scale: 0.9, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 24 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none"
            >
              <div className="relative w-full max-w-2xl pointer-events-auto">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-neon-blue/30 to-neon-purple/30 blur-xl opacity-60" />
                <div className="relative rounded-3xl overflow-hidden
                                bg-dark-100 border border-white/10
                                shadow-[0_32px_80px_rgba(0,0,0,0.6)]">

                  {/* Header */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple
                                      flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-white" strokeWidth={2.4} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">Akademiya manzili</p>
                        <p className="text-[11px] text-white/50">{contact.address}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setMapOpen(false)}
                      className="w-8 h-8 rounded-xl glass flex items-center justify-center
                                 text-white/50 hover:text-white transition-colors"
                    >
                      <X className="w-4 h-4" strokeWidth={2.5} />
                    </button>
                  </div>

                  {/* Map */}
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6045.4653266949945!2d72.34350871625519!3d40.745907676353305!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDQ0JzQ4LjgiTiA3MsKwMjAnNDMuNiJF!5e0!3m2!1sen!2s!4v1778650617227!5m2!1sen!2s"
                      className="absolute inset-0 w-full h-full"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Akademiya manzili"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FinalCTA;
