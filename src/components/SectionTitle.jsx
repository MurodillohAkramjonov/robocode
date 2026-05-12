import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../animations/variants';

/**
 * Reusable section heading block: eyebrow + title + optional subtitle.
 * Centralizes the typographic rhythm across every section.
 */
const SectionTitle = ({ eyebrow, title, subtitle, align = 'center' }) => {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`max-w-3xl ${alignment} mb-12 md:mb-16`}
    >
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-5`}>
          <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
          <span className="text-xs md:text-sm font-medium tracking-wider uppercase text-neon-blue">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base md:text-lg text-white/60 leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
