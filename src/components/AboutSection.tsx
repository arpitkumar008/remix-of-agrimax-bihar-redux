import { motion } from 'framer-motion';
import { Wrench, Users, HeartHandshake, Headphones, CheckCircle, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: <Wrench className="w-7 h-7" />,
    title: 'Top-Quality Tools',
    description: 'Advanced and durable agricultural tools for efficient farming.',
    image: 'https://www.agrimaxbihar.com/Content/assets/agrimax-img/top-tools-size.png',
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: 'AgriTech Experts',
    description: 'Dedicated professionals delivering quality solutions.',
    image: 'https://www.agrimaxbihar.com/Content/assets/agrimax-img/expert-size.png',
  },
  {
    icon: <HeartHandshake className="w-7 h-7" />,
    title: 'Brand Loyalty',
    description: 'Excellent support, reliable service, and quality products.',
    image: 'https://www.agrimaxbihar.com/Content/assets/agrimax-img/deal-agrimax.png',
  },
  {
    icon: <Headphones className="w-7 h-7" />,
    title: '24 Hours Helpline',
    description: 'Friendly customer service staff for all your questions.',
    image: null,
  },
];

const checkItems = [
  'Wide distribution network',
  'R&D collaborations',
  'Quality assurance standards',
  'Strong farmer rapport',
  'Subsidy support for Bihar',
  'After-sales service'
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-wheat-cream to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-secondary font-semibold uppercase tracking-wider text-sm mb-3">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            A Legacy of <span className="text-primary">Agricultural Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Maa Shyama Agro Industries offers superior agricultural machines across domestic markets, specializing in small farming implements.
          </p>
        </motion.div>

        {/* About content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://www.agrimaxbihar.com/Content/assets/agrimax-img/aboutus.jpg"
                alt="About Agrimax Bihar"
                className="w-full h-80 lg:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground rounded-2xl p-5 shadow-copper"
            >
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm font-medium opacity-90">Years of Excellence</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Trusted by Farmers Across India
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The firm provides quality agricultural machines specializing in Cono-weeder, Dry Land Weeder, and Paddy Drum Seeder. Our products have gained attention in Gujarat, Haryana, Jharkhand, Karnataka, Madhya Pradesh, and North-East States.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {checkItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#products"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all group"
            >
              Explore Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-6 text-center border border-border/50 hover:border-primary/20 hover:shadow-md transition-all duration-300"
            >
              {feature.image ? (
                <div className="w-20 h-20 mx-auto mb-4 rounded-xl overflow-hidden bg-muted flex items-center justify-center">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              ) : (
                <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {feature.icon}
                </div>
              )}
              <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{feature.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;