import { motion } from 'framer-motion';
import { cx } from '../utils/helpers';

/**
 * Glassmorphism card with optional hover glow + animated border.
 * Used across stats, activities, results, pricing and FAQ.
 */
const GlassCard = ({
  children,
  className = '',
  hover = true,
  glow = true,
  as: Tag = 'div',
  ...rest
}) => {
  const Comp = motion(Tag);
  return (
    <Comp
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className={cx(
        'relative rounded-2xl bg-white/[0.04] backdrop-blur-xl',
        'border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.3)]',
        'transition-colors duration-500',
        hover && 'hover:bg-white/[0.06] hover:border-neon-blue/30',
        glow && 'hover:shadow-[0_12px_40px_rgba(0,212,255,0.18)]',
        className,
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
};

export default GlassCard;
