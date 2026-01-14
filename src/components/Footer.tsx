import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowUp, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-soil-brown text-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1.5 bg-gradient-to-r from-primary via-secondary to-primary" />

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://www.agrimaxbihar.com/Content/assets/agrimax-img/Agrimax-logo.jpg"
                alt="Agrimax Bihar Logo"
                className="h-16 w-auto rounded-xl shadow-lg"
              />
              <div>
                <h3 className="font-display text-2xl font-bold">Agrimax Bihar</h3>
                <p className="text-white/60 text-sm">Maa Shyama Agro Industries</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed mb-6 max-w-md">
              Maa Shyama Agro Industries, situated in the heart of Mithila, is one of the potential agricultural machine manufacturers of Bihar with a present turnover of Rs. 20.00 Crores.
            </p>
            
            {/* Subsidy badge */}
            <motion.div 
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-5 py-2.5 mb-6"
            >
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2.5 h-2.5 bg-secondary rounded-full" 
              />
              <span className="text-secondary text-sm font-semibold">EXTRA 10% SUBSIDY FOR FARMERS IN BIHAR</span>
            </motion.div>

            {/* Social links */}
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display text-lg font-bold mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Products', href: '#products' },
                { name: 'Contact Us', href: '#contact' },
                { name: 'Download Catalog', href: 'https://www.agrimaxbihar.com/pages/ourCatalog' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-secondary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-secondary/50 rounded-full group-hover:bg-secondary transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display text-lg font-bold mb-6 text-secondary">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  Sundarpar Beera, Darbhanga Zero Mile Stone, NH-57, Darbhanga
                </span>
              </li>
              <li>
                <a href="tel:+919204655800" className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors">
                  <Phone className="w-5 h-5 text-secondary" />
                  <span className="text-sm">+91-9204655800</span>
                </a>
              </li>
              <li>
                <a href="tel:+919431870000" className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors">
                  <Phone className="w-5 h-5 text-secondary" />
                  <span className="text-sm">+91-9431870000</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@agrimaxbihar.com" className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors">
                  <Mail className="w-5 h-5 text-secondary" />
                  <span className="text-sm">info@agrimaxbihar.com</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm text-center sm:text-left">
            © {currentYear} Maa Shyama Agro Industries. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-secondary/20 hover:bg-secondary rounded-full flex items-center justify-center transition-all group"
          >
            <ArrowUp className="w-5 h-5 text-secondary group-hover:text-secondary-foreground" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;