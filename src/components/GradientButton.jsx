import { motion } from 'framer-motion';
import { cx, smoothScrollTo } from '../utils/helpers';

/**
 * Primary call-to-action button.
 * variant="primary" → gradient + glow
 * variant="secondary" → glass outline
 */
const GradientButton = ({
  children,
  variant = 'primary',
  href,
  onClick,
  icon: Icon,
  className = '',
  size = 'md',
  ...rest
}) => {
  const Tag = href ? motion.a : motion.button;

  const handleClick = (e) => {
    if (href?.startsWith('#')) {
      e.preventDefault();
      smoothScrollTo(href);
    }
    onClick?.(e);
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4 text-base md:text-lg',
  };

  const base =
    'relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight overflow-hidden whitespace-nowrap transition-all duration-500';

  const variants = {
    primary:
      'text-white bg-gradient-to-r from-neon-blue via-primary-500 to-neon-purple bg-[length:200%_auto] hover:bg-right shadow-[0_8px_30px_rgba(0,132,255,0.35)] hover:shadow-[0_14px_45px_rgba(0,132,255,0.55)]',
    secondary:
      'text-white bg-white/[0.04] backdrop-blur-xl border border-white/[0.12] hover:bg-white/[0.10] hover:border-neon-blue/40',
    ghost: 'text-white/80 hover:text-white',
  };

  return (
    <Tag
      href={href}
      onClick={handleClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cx(base, sizes[size], variants[variant], className)}
      {...rest}
    >
      {/* Shimmer overlay (primary only) */}
      {variant === 'primary' && (
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
      )}
      {Icon && <Icon className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2.5} />}
      <span className="relative">{children}</span>
    </Tag>
  );
};

export default GradientButton;
