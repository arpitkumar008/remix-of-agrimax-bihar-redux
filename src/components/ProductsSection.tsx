import { motion } from 'framer-motion';
import { ArrowRight, Eye, Star } from 'lucide-react';
import { useState } from 'react';

const products = [
  {
    name: 'Dry Land Weeder',
    image: 'https://www.agrimaxbihar.com/content/assets/agrimax-img/product-2.png',
    category: 'Weeding Tools',
    rating: 4.8,
    featured: true,
  },
  {
    name: 'Seed Treatment Drum',
    image: 'https://www.agrimaxbihar.com/content/assets/agrimax-img/product-3.png',
    category: 'Seed Processing',
    rating: 4.9,
    featured: false,
  },
  {
    name: 'Drum Seeder',
    image: 'https://www.agrimaxbihar.com/content/assets/agrimax-img/product-4.png',
    category: 'Seeding',
    rating: 4.7,
    featured: true,
  },
  {
    name: 'Multicrop Thresher',
    image: 'https://www.agrimaxbihar.com/content/assets/agrimax-img/prod.png',
    category: 'Threshing',
    rating: 4.9,
    featured: true,
  },
  {
    name: 'Cono Weeder',
    image: 'https://www.agrimaxbihar.com/content/assets/agrimax-img/product-2.png',
    category: 'Weeding Tools',
    rating: 4.6,
    featured: false,
  },
  {
    name: 'Paddy Drum Seeder',
    image: 'https://www.agrimaxbihar.com/content/assets/agrimax-img/product-4.png',
    category: 'Seeding',
    rating: 4.8,
    featured: false,
  },
];

const categories = ['All', 'Weeding Tools', 'Seeding', 'Seed Processing', 'Threshing'];

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted via-background to-muted" />
      
      {/* Decorative */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block text-secondary font-semibold uppercase tracking-wider text-sm mb-3">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Premium Agricultural <span className="text-primary">Machinery</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Specializing in farming tools that have gained attention across multiple states.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-card text-foreground hover:bg-muted border border-border'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.name + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              layout
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/20 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Featured badge */}
              {product.featured && (
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>
              )}

              {/* Image */}
              <div className="relative h-56 bg-gradient-to-br from-muted to-background overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-6"
                  animate={{ 
                    scale: hoveredProduct === index ? 1.08 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProduct === index ? 1 : 0 }}
                  className="absolute inset-0 bg-primary/70 flex items-center justify-center"
                >
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: hoveredProduct === index ? 1 : 0 }}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Eye className="w-5 h-5 text-primary" />
                  </motion.button>
                </motion.div>

                {/* Category tag */}
                <div className="absolute bottom-3 right-3">
                  <span className="bg-white/90 backdrop-blur-sm text-foreground text-xs font-medium px-2.5 py-1 rounded-md">
                    {product.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'text-secondary fill-secondary' : 'text-muted'}`}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">({product.rating})</span>
                </div>
                
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">Agrimax Bihar</span>
                  <button className="text-primary font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a
            href="https://www.agrimaxbihar.com/pages/ourCatalog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all group"
          >
            Download Full Catalog
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;