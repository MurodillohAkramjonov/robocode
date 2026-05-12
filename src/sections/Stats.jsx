import { motion } from 'framer-motion';
import {
  CalendarDays, Users, UserPlus, GraduationCap, Clock,
} from 'lucide-react';
import { stats } from '../data/stats';
import { staggerFast, fadeUp, viewportOnce } from '../animations/variants';
import AnimatedCounter from '../components/AnimatedCounter';
import GlassCard from '../components/GlassCard';

const ICONS = { CalendarDays, Users, UserPlus, GraduationCap, Clock };

const Stats = () => {
  return (
    <section id="stats" className="relative section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5"
        >
          {stats.map((stat) => {
            const Icon = ICONS[stat.icon];
            return (
              <motion.div key={stat.id} variants={fadeUp}>
                <GlassCard className="p-6 md:p-7 h-full group">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20
                                    border border-neon-blue/30 flex items-center justify-center
                                    group-hover:from-neon-blue/30 group-hover:to-neon-purple/30 transition-all">
                      {Icon && <Icon className="w-5 h-5 text-neon-blue" strokeWidth={2.2} />}
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-blue/60 group-hover:bg-neon-blue
                                     transition-colors shadow-[0_0_8px_currentColor]" />
                  </div>
                  <div className="font-display text-3xl md:text-4xl font-bold text-gradient-blue leading-none">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-3 text-sm font-semibold text-white">{stat.label}</div>
                  <div className="mt-1 text-xs text-white/50 leading-relaxed">
                    {stat.description}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
