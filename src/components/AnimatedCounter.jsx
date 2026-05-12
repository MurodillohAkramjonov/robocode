import { useCountUp } from '../hooks/useCountUp';

/**
 * Counts up from 0 to `end` when scrolled into view, then renders
 * `prefix + value + suffix`. Used by the Stats section.
 */
const AnimatedCounter = ({ end, suffix = '', prefix = '', className = '' }) => {
  const [value, ref] = useCountUp(end);
  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
