import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu, X, Phone, ArrowRight, Star, ShieldCheck, Clock } from 'lucide-react';
import { COLLECTIONS, PRODUCTS, Product } from './types';

// --- Components ---

const GoldRateBar = () => {
  const [rate, setRate] = useState(7245.50);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRate(prev => prev + (Math.random() - 0.5) * 2);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-midnight-teal text-temple-gold py-2 px-4 text-[10px] uppercase tracking-[0.2em] flex justify-center items-center gap-6 overflow-hidden whitespace-nowrap">
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-temple-gold animate-pulse" />
        Live Gold Rate (24K): ₹{rate.toFixed(2)}/gm
      </div>
      <div className="hidden md:block opacity-50">|</div>
      <div className="hidden md:flex items-center gap-2">
        <ShieldCheck size={12} />
        BIS Hallmarked & Insured Shipping
      </div>
      <div className="hidden md:block opacity-50">|</div>
      <div className="hidden md:flex items-center gap-2">
        <Clock size={12} />
        Next Vault Drop: 14:22:05
      </div>
    </div>
  );
};

const Header = ({ onCartClick, onBespokeClick }: { onCartClick: () => void, onBespokeClick: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-morphism py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <button className="text-midnight-teal hover:text-temple-gold transition-colors">
            <Menu size={24} />
          </button>
          <nav className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-medium">
            <a href="#" className="hover:text-temple-gold transition-colors">Heritage</a>
            <a href="#" className="hover:text-temple-gold transition-colors">Contemporary</a>
            <a href="#" onClick={onBespokeClick} className="hover:text-temple-gold transition-colors">Bespoke</a>
          </nav>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 text-2xl md:text-3xl font-display tracking-[0.15em] text-midnight-teal">
          INDRAYANI
        </div>

        <div className="flex items-center gap-6">
          <a href="https://wa.me/919999999999" target="_blank" className="hidden md:flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-midnight-teal hover:text-temple-gold transition-colors">
            <Phone size={14} />
            Stylist on Call
          </a>
          <button onClick={onCartClick} className="relative text-midnight-teal hover:text-temple-gold transition-colors">
            <ShoppingBag size={24} />
            <span className="absolute -top-1 -right-1 bg-temple-gold text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
          </button>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-midnight-teal">
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-full overflow-hidden">
          <motion.img 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=2070" 
            className="absolute inset-0 w-full h-full object-cover"
            alt="Luxury Jewelry"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight-teal/80 to-transparent" />
        </div>
        <div className="hidden lg:block relative h-full overflow-hidden">
          <motion.img 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1974" 
            className="absolute inset-0 w-full h-full object-cover"
            alt="Bridal Collection"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-midnight-teal/80 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <motion.span 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-temple-gold text-[12px] uppercase tracking-[0.4em] mb-6"
        >
          Modern Heritage • Timeless Power
        </motion.span>
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-5xl md:text-8xl text-silk-white mb-8 max-w-4xl leading-[1.1]"
        >
          Adorn the <span className="italic text-temple-gold">Legacy</span> of Queens
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 0.8 }}
          transition={{ delay: 1.4 }}
          className="text-silk-white/80 text-lg md:text-xl max-w-2xl mb-12 font-light tracking-wide"
        >
          Artisanal masterpieces crafted for the contemporary sovereign. Where ancient craftsmanship meets the vanguard of design.
        </motion.p>
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="flex flex-col md:flex-row gap-6"
        >
          <button className="bg-temple-gold text-midnight-teal px-10 py-4 text-[12px] uppercase tracking-[0.2em] font-bold hover:bg-silk-white transition-all duration-300 flex items-center gap-3 group">
            Enter The Vault
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border border-silk-white/30 text-silk-white px-10 py-4 text-[12px] uppercase tracking-[0.2em] font-bold hover:bg-silk-white/10 transition-all duration-300">
            The Brand Legend
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-[1px] h-16 bg-gradient-to-b from-temple-gold to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-silk-white/40">Scroll to Explore</span>
      </div>
    </section>
  );
};

const CollectionSection = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-xl">
          <span className="text-temple-gold text-[11px] uppercase tracking-[0.3em] mb-4 block">Curated Masterpieces</span>
          <h2 className="text-4xl md:text-6xl text-midnight-teal leading-tight">The Heritage <br />Collections</h2>
        </div>
        <p className="text-midnight-teal/60 max-w-md text-lg font-light">
          Each piece is a chapter of history, meticulously hand-forged by master artisans whose lineage spans centuries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {COLLECTIONS.map((collection, idx) => (
          <motion.div 
            key={collection.id}
            whileHover={{ y: -10 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[3/4] overflow-hidden mb-6">
              <img 
                src={collection.image} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt={collection.title}
              />
              <div className="absolute inset-0 bg-midnight-teal/20 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-silk-white text-[10px] uppercase tracking-[0.3em] mb-2 block opacity-0 group-hover:opacity-100 transition-opacity delay-100">{collection.subtitle}</span>
                <h3 className="text-silk-white text-2xl font-display">{collection.title}</h3>
              </div>
            </div>
            <p className="text-midnight-teal/70 text-sm leading-relaxed mb-4">{collection.description}</p>
            <button className="text-[11px] uppercase tracking-widest font-bold flex items-center gap-2 group-hover:text-temple-gold transition-colors">
              Explore Collection <ArrowRight size={14} />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ProductGrid = ({ onProductClick }: { onProductClick: (p: Product) => void }) => {
  return (
    <section className="bg-midnight-teal py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-temple-gold text-[11px] uppercase tracking-[0.4em] mb-4 block">The Vault</span>
          <h2 className="text-4xl md:text-6xl text-silk-white">Featured Creations</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {PRODUCTS.map((product) => (
            <motion.div 
              key={product.id}
              onClick={() => onProductClick(product)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden mb-6 bg-silk-white/5">
                <img 
                  src={product.images[0]} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={product.name}
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity shimmer-effect" />
                {product.stockStatus === 'Limited Edition' && (
                  <div className="absolute top-4 left-4 bg-temple-gold text-midnight-teal text-[9px] uppercase tracking-widest font-bold px-3 py-1">
                    Limited Edition
                  </div>
                )}
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-temple-gold text-[10px] uppercase tracking-[0.2em] mb-1 block">{product.category}</span>
                  <h3 className="text-silk-white text-xl font-display group-hover:text-temple-gold transition-colors">{product.name}</h3>
                </div>
                <div className="text-silk-white font-light tracking-wider">
                  ₹{product.price.toLocaleString()}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BespokeModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-midnight-teal/90 backdrop-blur-md"
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-silk-white w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl"
          >
            <div className="relative hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1611085583191-a3b13b94b421?auto=format&fit=crop&q=80&w=1974" 
                className="w-full h-full object-cover"
                alt="Bespoke Process"
              />
              <div className="absolute inset-0 bg-midnight-teal/40" />
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <h3 className="text-silk-white text-4xl mb-4">Your Vision, <br />Our Craft.</h3>
                <p className="text-silk-white/80 text-sm leading-relaxed">
                  Collaborate with our master designers to create a piece that is uniquely yours. A legacy born from your story.
                </p>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <button onClick={onClose} className="absolute top-6 right-6 text-midnight-teal hover:text-temple-gold transition-colors">
                <X size={24} />
              </button>
              <span className="text-temple-gold text-[11px] uppercase tracking-[0.3em] mb-4 block">The Bespoke Concierge</span>
              <h2 className="text-3xl text-midnight-teal mb-8">Request a Private Consultation</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-midnight-teal/50 mb-2 block">Full Name</label>
                  <input type="text" className="w-full border-b border-midnight-teal/20 py-2 focus:border-temple-gold outline-none transition-colors bg-transparent" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-midnight-teal/50 mb-2 block">Email Address</label>
                  <input type="email" className="w-full border-b border-midnight-teal/20 py-2 focus:border-temple-gold outline-none transition-colors bg-transparent" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-midnight-teal/50 mb-2 block">Occasion / Vision</label>
                  <textarea className="w-full border-b border-midnight-teal/20 py-2 focus:border-temple-gold outline-none transition-colors bg-transparent resize-none h-24" />
                </div>
                <button className="w-full bg-midnight-teal text-silk-white py-4 text-[12px] uppercase tracking-[0.2em] font-bold hover:bg-temple-gold hover:text-midnight-teal transition-all duration-300">
                  Submit Request
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const PDP = ({ product, onClose }: { product: Product, onClose: () => void }) => {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className="fixed inset-0 z-[60] bg-silk-white overflow-y-auto"
    >
      <header className="sticky top-0 z-10 glass-morphism py-6 px-6 flex justify-between items-center">
        <button onClick={onClose} className="flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold text-midnight-teal hover:text-temple-gold transition-colors">
          <X size={20} /> Close Vault
        </button>
        <div className="text-xl font-display tracking-[0.15em] text-midnight-teal">INDRAYANI</div>
        <button className="text-midnight-teal hover:text-temple-gold transition-colors">
          <ShoppingBag size={24} />
        </button>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Gallery */}
        <div className="space-y-6">
          <div className="aspect-square bg-midnight-teal/5 overflow-hidden">
            <img src={product.images[activeImg]} className="w-full h-full object-cover" alt={product.name} />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveImg(idx)}
                className={`aspect-square border-2 transition-all ${activeImg === idx ? 'border-temple-gold' : 'border-transparent opacity-50 hover:opacity-100'}`}
              >
                <img src={img} className="w-full h-full object-cover" alt={`${product.name} ${idx}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">
          <span className="text-temple-gold text-[12px] uppercase tracking-[0.4em] mb-4 block">{product.category}</span>
          <h1 className="text-5xl md:text-7xl text-midnight-teal mb-6 leading-tight">{product.name}</h1>
          <div className="text-3xl font-light text-midnight-teal/80 mb-8 tracking-wider">₹{product.price.toLocaleString()}</div>
          
          <div className="space-y-8 mb-12">
            <p className="text-lg text-midnight-teal/70 leading-relaxed font-light">
              {product.description}
            </p>
            
            <div className="grid grid-cols-2 gap-8 py-8 border-y border-midnight-teal/10">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-midnight-teal/50 mb-2 block">Materials</span>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map(m => (
                    <span key={m} className="text-xs font-medium px-3 py-1 bg-midnight-teal/5 rounded-full">{m}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-midnight-teal/50 mb-2 block">Availability</span>
                <span className="text-xs font-bold text-temple-gold">{product.stockStatus}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button className="w-full bg-midnight-teal text-silk-white py-5 text-[12px] uppercase tracking-[0.2em] font-bold hover:bg-temple-gold hover:text-midnight-teal transition-all duration-300 flex justify-center items-center gap-3">
              Add to Vault <ShoppingBag size={18} />
            </button>
            <button className="w-full border border-midnight-teal/20 text-midnight-teal py-5 text-[12px] uppercase tracking-[0.2em] font-bold hover:bg-midnight-teal hover:text-silk-white transition-all duration-300">
              Request Customization
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8 opacity-60">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest">
              <ShieldCheck size={16} /> Authenticity Guaranteed
            </div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest">
              <Star size={16} /> Lifetime Warranty
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-silk-white pt-24 pb-12 px-6 border-t border-midnight-teal/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="col-span-1 md:col-span-2">
          <div className="text-3xl font-display tracking-[0.15em] text-midnight-teal mb-8">INDRAYANI</div>
          <p className="text-midnight-teal/60 max-w-md text-lg font-light leading-relaxed mb-8">
            Indrayani is more than jewelry; it is a testament to the enduring power of heritage. We craft for the modern sovereign who leads with grace and commands with wisdom.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-midnight-teal hover:text-temple-gold transition-colors uppercase text-[10px] tracking-widest font-bold">Instagram</a>
            <a href="#" className="text-midnight-teal hover:text-temple-gold transition-colors uppercase text-[10px] tracking-widest font-bold">Pinterest</a>
            <a href="#" className="text-midnight-teal hover:text-temple-gold transition-colors uppercase text-[10px] tracking-widest font-bold">Journal</a>
          </div>
        </div>
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold mb-8 text-midnight-teal">Collections</h4>
          <ul className="space-y-4 text-[13px] text-midnight-teal/60 font-medium">
            <li><a href="#" className="hover:text-temple-gold transition-colors">The Heritage Vault</a></li>
            <li><a href="#" className="hover:text-temple-gold transition-colors">Modern Power</a></li>
            <li><a href="#" className="hover:text-temple-gold transition-colors">Indrayani Bridal</a></li>
            <li><a href="#" className="hover:text-temple-gold transition-colors">Bespoke Concierge</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold mb-8 text-midnight-teal">Client Care</h4>
          <ul className="space-y-4 text-[13px] text-midnight-teal/60 font-medium">
            <li><a href="#" className="hover:text-temple-gold transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-temple-gold transition-colors">Size Guide</a></li>
            <li><a href="#" className="hover:text-temple-gold transition-colors">Care Instructions</a></li>
            <li><a href="#" className="hover:text-temple-gold transition-colors">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-12 border-t border-midnight-teal/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-midnight-teal/40">
        <div>© 2026 Indrayani Jewellery. All Rights Reserved.</div>
        <div className="flex gap-8">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isBespokeOpen, setIsBespokeOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <GoldRateBar />
      <Header 
        onCartClick={() => {}} 
        onBespokeClick={() => setIsBespokeOpen(true)} 
      />
      
      <main>
        <Hero />
        <CollectionSection />
        <ProductGrid onProductClick={setSelectedProduct} />
        
        {/* Brand Legend Section */}
        <section className="py-32 px-6 bg-silk-white text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-temple-gold text-[11px] uppercase tracking-[0.4em] mb-6 block">The Brand Legend</span>
            <h2 className="text-4xl md:text-7xl text-midnight-teal mb-12 leading-tight">Crafting the <br />Future of Heritage</h2>
            <p className="text-xl text-midnight-teal/70 font-light leading-relaxed mb-12">
              "Problem: In a world of mass-produced luxury, the soul of craftsmanship is often lost. 
              Agitation: Your jewelry should be as unique as your legacy, not a copy of a copy. 
              Solution: Indrayani returns to the source—hand-forging each piece with the same intensity and devotion as the master jewelers of the royal courts."
            </p>
            <div className="w-24 h-[1px] bg-temple-gold mx-auto" />
          </div>
        </section>
      </main>

      <Footer />

      <BespokeModal 
        isOpen={isBespokeOpen} 
        onClose={() => setIsBespokeOpen(false)} 
      />

      <AnimatePresence>
        {selectedProduct && (
          <PDP 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
