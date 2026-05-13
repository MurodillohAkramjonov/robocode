import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, User, Phone, CheckCircle, ArrowRight, Bot } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const BookingModal = () => {
  const { isOpen, closeModal } = useBooking();
  const [form, setForm] = useState({ name: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 3)
      e.name = "Ism va familyani to'liq kiriting";
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 9)
      e.phone = "To'g'ri telefon raqam kiriting";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }
    setSubmitted(true);
  };

  const handleClose = () => {
    closeModal();
    setTimeout(() => { setSubmitted(false); setForm({ name: '', phone: '' }); setErrors({}); }, 400);
  };

  const handlePhone = (val) => {
    const digits = val.replace(/\D/g, '').slice(0, 9);
    let formatted = digits;
    if (digits.length > 2) formatted = digits.slice(0,2) + ' ' + digits.slice(2);
    if (digits.length > 5) formatted = digits.slice(0,2) + ' ' + digits.slice(2,5) + '-' + digits.slice(5);
    if (digits.length > 7) formatted = digits.slice(0,2) + ' ' + digits.slice(2,5) + '-' + digits.slice(5,7) + '-' + digits.slice(7);
    setForm(f => ({ ...f, phone: formatted }));
    if (errors.phone) setErrors(e => ({ ...e, phone: '' }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.88, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 32 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none"
          >
            <div className="relative w-full max-w-md pointer-events-auto">
              {/* glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-neon-blue/30 to-neon-purple/30 blur-xl opacity-70" />

              <div className="relative rounded-3xl overflow-hidden
                              bg-dark-100 border border-white/10
                              shadow-[0_32px_80px_rgba(0,0,0,0.5)]">

                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-xl glass
                             flex items-center justify-center text-white/60
                             hover:text-white hover:border-white/20 transition-all"
                >
                  <X className="w-4 h-4" strokeWidth={2.5} />
                </button>

                <AnimatePresence mode="wait">
                  {!submitted ? (
                    /* ── FORM ── */
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-8"
                    >
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple
                                        flex items-center justify-center shadow-[0_0_22px_rgba(0,212,255,0.45)]">
                          <Bot className="w-5 h-5 text-white" strokeWidth={2.4} />
                        </div>
                        <div>
                          <h2 className="font-display font-bold text-white text-xl leading-tight">
                            Joy band qilish
                          </h2>
                          <p className="text-xs text-white/50 mt-0.5">
                            Ma'lumotlarni qoldiring — biz bog'lanamiz
                          </p>
                        </div>
                      </div>

                      <form onSubmit={handleSubmit} noValidate className="space-y-4">
                        {/* Name */}
                        <div>
                          <label className="block text-xs font-medium text-white/60 mb-1.5 uppercase tracking-wider">
                            Ism va familya
                          </label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                            <input
                              type="text"
                              placeholder="Masalan: Aziz Karimov"
                              value={form.name}
                              onChange={e => {
                                setForm(f => ({ ...f, name: e.target.value }));
                                if (errors.name) setErrors(er => ({ ...er, name: '' }));
                              }}
                              className="w-full pl-11 pr-4 py-3.5 rounded-xl
                                         bg-white/[0.06] border text-white placeholder-white/25
                                         text-sm outline-none transition-all duration-200
                                         focus:bg-white/[0.09] focus:border-neon-blue/60
                                         focus:shadow-[0_0_0_3px_rgba(0,212,255,0.15)]"
                              style={{ borderColor: errors.name ? 'rgba(251,113,133,0.6)' : 'rgba(255,255,255,0.10)' }}
                            />
                          </div>
                          {errors.name && (
                            <p className="mt-1.5 text-xs text-rose-400">{errors.name}</p>
                          )}
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-xs font-medium text-white/60 mb-1.5 uppercase tracking-wider">
                            Telefon raqami
                          </label>
                          <div className="relative flex items-center">
                            <span className="absolute left-4 text-sm font-semibold text-neon-blue select-none">
                              +998
                            </span>
                            <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                            <input
                              type="tel"
                              placeholder="90 123-45-67"
                              value={form.phone}
                              onChange={e => handlePhone(e.target.value)}
                              className="w-full pl-16 pr-11 py-3.5 rounded-xl
                                         bg-white/[0.06] border text-white placeholder-white/25
                                         text-sm outline-none transition-all duration-200
                                         focus:bg-white/[0.09] focus:border-neon-blue/60
                                         focus:shadow-[0_0_0_3px_rgba(0,212,255,0.15)]"
                              style={{ borderColor: errors.phone ? 'rgba(251,113,133,0.6)' : 'rgba(255,255,255,0.10)' }}
                            />
                          </div>
                          {errors.phone && (
                            <p className="mt-1.5 text-xs text-rose-400">{errors.phone}</p>
                          )}
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          className="w-full mt-2 py-4 rounded-xl font-semibold text-white text-sm
                                     bg-gradient-to-r from-neon-blue via-primary-500 to-neon-purple
                                     bg-[length:200%_auto] hover:bg-right
                                     shadow-[0_8px_30px_rgba(0,132,255,0.35)]
                                     hover:shadow-[0_12px_40px_rgba(0,132,255,0.55)]
                                     flex items-center justify-center gap-2
                                     transition-all duration-500"
                        >
                          Jo'natish
                          <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                        </button>
                      </form>

                      <p className="mt-4 text-center text-[11px] text-white/30">
                        Ma'lumotlaringiz faqat bog'lanish uchun ishlatiladi
                      </p>
                    </motion.div>
                  ) : (
                    /* ── SUCCESS ── */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                      className="p-8 flex flex-col items-center text-center py-14"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.1 }}
                        className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400
                                   flex items-center justify-center mb-6
                                   shadow-[0_0_40px_rgba(52,211,153,0.4)]"
                      >
                        <CheckCircle className="w-10 h-10 text-white" strokeWidth={2} />
                      </motion.div>
                      <h3 className="font-display font-bold text-white text-2xl mb-2">
                        Ariza qabul qilindi!
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                        <span className="text-white font-medium">{form.name}</span>, tez orada
                        <span className="text-neon-blue"> +998 {form.phone}</span> raqamingizga
                        murojaat qilamiz.
                      </p>
                      <button
                        onClick={handleClose}
                        className="mt-8 px-8 py-3 rounded-full glass border-neon-blue/30
                                   text-sm font-medium text-white/80 hover:text-white
                                   hover:border-neon-blue/60 transition-all duration-300"
                      >
                        Yopish
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
