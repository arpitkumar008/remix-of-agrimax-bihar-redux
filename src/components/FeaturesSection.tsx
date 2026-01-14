import { motion } from 'framer-motion';
import { Cog, Shield, Truck, HeadphonesIcon, Award, Leaf } from 'lucide-react';

const features = [
  {
    icon: <Cog className="w-6 h-6" />,
    title: 'Advanced Technology',
    description: 'State-of-the-art agricultural machinery with latest innovations.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Quality Assurance',
    description: 'Every product undergoes rigorous testing for durability.',
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: 'Pan-India Delivery',
    description: 'Wide distribution network across Gujarat, Haryana, Karnataka.',
  },
  {
    icon: <HeadphonesIcon className="w-6 h-6" />,
    title: '24/7 Support',
    description: 'Round-the-clock helpline for all your queries.',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'R&D Excellence',
    description: 'Collaborations with reputed institutions for innovation.',
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: 'Eco-Friendly',
    description: 'Sustainable solutions that are environment-friendly.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-muted">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-secondary font-semibold uppercase tracking-wider text-sm mb-3">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Built for <span className="text-primary">Indian Farmers</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We understand the unique challenges of Indian agriculture. Our machinery is designed specifically for local farming conditions.
            </p>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://cdn.dotplus.in/Cloud/NauticsIndia/NauticsIndia/Imageeab6a18295e4410e87c1dac1cccb9668NauticsIndia.jpg"
                alt="Agrimax machinery"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-medium">
                  "Serving farmers across 7+ states with dedication"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Features grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group p-5 rounded-xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-md transition-all duration-300"
              >
                <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mb-3">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;