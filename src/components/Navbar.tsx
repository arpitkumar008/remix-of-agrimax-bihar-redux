import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin, Mail, Percent } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'products', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Products', href: '#products', id: 'products' },
    { name: 'Features', href: '#features', id: 'features' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground">
        <div className="section-container py-2.5">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="font-medium">Sundarpar Beera, Darbhanga, Bihar</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary" />
                <span className="font-medium">info@agrimaxbihar.com</span>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-secondary/20 px-4 py-1.5 rounded-full">
              <Percent className="w-4 h-4 text-secondary" />
              <span className="font-bold text-secondary">EXTRA 10% SUBSIDY FOR BIHAR FARMERS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-card/98 backdrop-blur-md shadow-md py-2' 
            : 'bg-card py-3'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <a href="#home" className="flex items-center gap-3 group">
              <img
                src="https://www.agrimaxbihar.com/Content/assets/agrimax-img/Agrimax-logo.jpg"
                alt="Agrimax Bihar Logo"
                className="h-12 w-auto rounded-lg shadow-sm group-hover:shadow-md transition-shadow"
              />
              <div className="hidden sm:block">
                <p className="text-xs text-secondary font-semibold uppercase tracking-wider">Maa Shyama</p>
                <p className="text-xs text-muted-foreground font-medium">Agro Industries</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 font-medium text-sm transition-all duration-300 rounded-lg ${
                    activeLink === link.id 
                      ? 'text-primary bg-primary/5' 
                      : 'text-foreground hover:text-primary hover:bg-muted'
                  }`}
                >
                  {link.name}
                  {activeLink === link.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-secondary rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.a
                href="tel:+919204655800"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm shadow-copper hover:shadow-lg transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>+91-9204655800</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 overflow-hidden"
              >
                <div className="bg-primary rounded-xl p-5 shadow-lg">
                  <div className="flex flex-col gap-1">
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`text-primary-foreground font-medium py-2.5 px-4 rounded-lg transition-all ${
                          activeLink === link.id 
                            ? 'bg-white/15' 
                            : 'hover:bg-white/10'
                        }`}
                      >
                        {link.name}
                      </motion.a>
                    ))}
                  </div>
                  
                  {/* Mobile info */}
                  <div className="mt-4 pt-4 border-t border-white/20 space-y-2">
                    <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                      <MapPin className="w-4 h-4 text-secondary" />
                      <span>Sundarpar Beera, Darbhanga</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                      <Mail className="w-4 h-4 text-secondary" />
                      <span>info@agrimaxbihar.com</span>
                    </div>
                  </div>
                  
                  <motion.a
                    href="tel:+919204655800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-5 py-3 rounded-lg font-semibold mt-4"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+91-9204655800</span>
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;