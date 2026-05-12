import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, HelpCircle } from 'lucide-react';
import { faqs } from '../data/faq';
import SectionTitle from '../components/SectionTitle';
import { fadeUp, staggerFast, viewportOnce } from '../animations/variants';

const FAQItem = ({ item, open, onToggle }) => {
  return (
    <motion.li variants={fadeUp}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full text-left rounded-2xl bg-white/[0.04] backdrop-blur-xl
                   border border-white/[0.08] hover:border-neon-blue/30
                   transition-colors duration-300 overflow-hidden"
      >
        <div className="flex items-center justify-between gap-4 p-5 md:p-6">
          <div className="flex items-center gap-4">
            <span className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0
                             bg-gradient-to-br from-neon-blue/20 to-neon-purple/20
                             border border-neon-blue/30">
              <HelpCircle className="w-4 h-4 text-neon-blue" strokeWidth={2.4} />
            </span>
            <span className="font-display font-semibold text-base md:text-lg text-white">
              {item.question}
            </span>
          </div>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0
                       bg-white/[0.06] border border-white/10"
          >
            <Plus className="w-4 h-4 text-white" strokeWidth={2.5} />
          </motion.span>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="px-5 md:px-6 pb-6 pl-[4.25rem] text-sm md:text-base text-white/65 leading-relaxed">
                {item.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.li>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null);

  return (
    <section id="faq" className="relative section-padding">
      <div className="max-w-3xl mx-auto">
        <SectionTitle
          eyebrow="Tez-tez beriladigan savollar"
          title={
            <>
              Sizda <span className="text-gradient-blue">savol</span> bormi?
            </>
          }
          subtitle="Eng ko‘p so‘raladigan savollarga aniq javoblar."
        />

        <motion.ul
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-3"
        >
          {faqs.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              open={openId === item.id}
              onToggle={() => setOpenId((cur) => (cur === item.id ? null : item.id))}
            />
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default FAQ;
