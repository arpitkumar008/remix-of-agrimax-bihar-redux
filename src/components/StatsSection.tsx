import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Package, MapPin, Users, Smile, TrendingUp } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  delay: number;
}

const StatItem = ({ icon, value, suffix = '', label, delay }: StatItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="text-center"
    >
      <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-xl mb-4 text-secondary">
        {icon}
      </div>
      <div className="flex items-end justify-center gap-1 mb-2">
        <span className="text-4xl sm:text-5xl font-bold text-white">
          {count.toLocaleString()}
        </span>
        <span className="text-2xl font-bold text-secondary mb-1">{suffix}</span>
      </div>
      <p className="text-white/70 font-medium">{label}</p>
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    { icon: <Package className="w-6 h-6" />, value: 50, suffix: '+', label: 'Products' },
    { icon: <MapPin className="w-6 h-6" />, value: 100, suffix: '+', label: 'Cities' },
    { icon: <Users className="w-6 h-6" />, value: 500, suffix: '+', label: 'Distributors' },
    { icon: <Smile className="w-6 h-6" />, value: 10000, suffix: '+', label: 'Happy Farmers' },
  ];

  return (
    <section id="stats" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&q=80" 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2f23]/95 via-[#1a2f23]/90 to-[#2a3a2e]/95" />
      </div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '32px 32px'
      }} />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            Our Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Growing Together with Farmers
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;