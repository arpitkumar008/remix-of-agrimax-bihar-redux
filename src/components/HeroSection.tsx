import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, ChevronDown, Shield, Award, Star, Users } from 'lucide-react';
import { useRef } from 'react';

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80"
          alt="Golden wheat field at sunset"
          className="w-full h-[120%] object-cover"
        />
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2f23]/95 via-[#1a2f23]/80 to-[#2a3f30]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
      </motion.div>

      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
      }} />

      {/* Content */}
      <motion.div style={{ opacity }} className="section-container relative z-10 pt-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="font-medium text-sm">Trusted by 10,000+ Farmers</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold text-white leading-[1.1] mb-6"
            >
              Empowering{' '}
              <span className="relative inline-block">
                <span className="text-secondary">Indian Farmers</span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute -bottom-1 left-0 w-full h-1 bg-secondary/60 rounded-full origin-left"
                />
              </span>
              <br />
              <span className="text-white/90">with Quality Machinery</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/75 leading-relaxed mb-8 max-w-xl"
            >
              Maa Shyama Agro Industries delivers premium agricultural machinery designed for Indian farming conditions. With ₹20 Crore turnover and presence in 7+ states.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#products"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 bg-secondary text-secondary-foreground px-7 py-3.5 rounded-xl font-semibold shadow-copper hover:shadow-lg transition-all duration-300 group"
              >
                View Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 group"
              >
                <Play className="w-5 h-5" />
                Contact Us
              </motion.a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/10"
            >
              {[
                { icon: Shield, text: "ISO Certified" },
                { icon: Award, text: "15+ Years" },
                { icon: Users, text: "7+ States" },
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-white/70">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <badge.icon className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-secondary/20 rounded-3xl blur-3xl" />
              
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <Star className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="text-white font-bold text-xl">Our Achievements</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "₹20Cr", label: "Annual Turnover" },
                    { value: "15+", label: "Years Experience" },
                    { value: "7+", label: "States Covered" },
                    { value: "10K+", label: "Happy Farmers" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default"
                    >
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-white/60 text-xs mt-1 font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a 
          href="#stats"
          className="flex flex-col items-center gap-2 text-white/50 cursor-pointer hover:text-white/80 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.a>
      </motion.div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80V40C480 70 960 10 1440 40V80H0Z" fill="hsl(40, 20%, 98%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;