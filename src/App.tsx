import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ShoppingBag, Menu, X, Phone, ArrowRight, Star, ShieldCheck, Clock } from 'lucide-react';
import { COLLECTIONS, PRODUCTS, Product } from './types';

// --- Components ---

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 border border-temple-gold rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center mix-blend-difference"
      animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
      transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
    >
      <div className="w-1 h-1 bg-temple-gold rounded-full" />
    </motion.div>
  );
};

const GoldRateBar = () => {
  const [rate, setRate] = useState(7245.50);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRate(prev => prev + (Math.random() - 0.5) * 2);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-midnight-teal text-temple-gold py-2 px-4 text-[10px] uppercase tracking-[0.2em] flex justify-center items-center gap-6 overflow-hidden whitespace-nowrap relative z-50">
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
    <header className={`fixed top-8 left-0 w-full z-40 transition-all duration-500 ${isScrolled ? 'glass-morphism py-4 -translate-y-8' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <button className={`transition-colors ${isScrolled ? 'text-midnight-teal' : 'text-silk-white'} hover:text-temple-gold`}>
            <Menu size={24} />
          </button>
          <nav className={`hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-medium ${isScrolled ? 'text-midnight-teal' : 'text-silk-white'}`}>
            <a href="#collections" className="hover:text-temple-gold transition-colors">Heritage</a>
            <a href="#story" className="hover:text-temple-gold transition-colors">The Legend</a>
            <a href="#" onClick={onBespokeClick} className="hover:text-temple-gold transition-colors">Bespoke</a>
          </nav>
        </div>

        {/* Show smaller logo only when scrolled */}
        <div className={`absolute left-1/2 -translate-x-1/2 text-xl md:text-2xl font-display tracking-[0.2em] transition-all duration-500 ${isScrolled ? 'opacity-100 text-midnight-teal' : 'opacity-0 text-silk-white'}`}>
          INDRAYANI
        </div>

        <div className="flex items-center gap-6">
          <a href="https://wa.me/919999999999" target="_blank" className={`hidden md:flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold transition-colors ${isScrolled ? 'text-midnight-teal' : 'text-silk-white'} hover:text-temple-gold`}>
            <Phone size={14} />
            Stylist on Call
          </a>
          <button onClick={onCartClick} className={`relative transition-colors ${isScrolled ? 'text-midnight-teal' : 'text-silk-white'} hover:text-temple-gold`}>
            <ShoppingBag size={24} />
            <span className="absolute -top-1 -right-1 bg-temple-gold text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
          </button>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.1]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-midnight-teal flex items-center justify-center">
      <motion.div style={{ y: y1, opacity, scale }} className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=2070" 
          className="w-full h-full object-cover opacity-50"
          alt="Luxury Jewelry Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-teal/40 via-transparent to-midnight-teal" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center text-center w-full px-4 mt-16">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-temple-gold text-[10px] md:text-[12px] uppercase tracking-[0.5em] mb-6 md:mb-8 font-bold"
        >
          Maison de Joaillerie
        </motion.span>
        
        {/* MASSIVE CENTERED NAME */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="text-[14vw] md:text-[11vw] font-display text-silk-white tracking-[0.15em] leading-none mb-6 drop-shadow-2xl"
          style={{ textShadow: '0 20px 40px rgba(0,0,0,0.8)' }}
        >
          INDRAYANI
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-silk-white/90 text-xl md:text-3xl max-w-2xl font-light tracking-widest italic font-display"
        >
          Adorn the Legacy of Queens
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16"
        >
          <a href="#vault" className="inline-block bg-transparent border border-temple-gold text-temple-gold px-12 py-4 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-temple-gold hover:text-midnight-teal transition-all duration-500">
            Enter The Vault
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-temple-gold to-transparent animate-pulse" />
        <span className="text-[9px] uppercase tracking-[0.4em] text-temple-gold">Scroll</span>
      </motion.div>
    </section>
  );
};

const StoryChapter = ({ number, title, text, image, align }: { number: string, title: string, text: string, image: string, align: 'left' | 'right' }) => {
  const isLeft = align === 'left';
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center relative z-10`}
    >
      <div className="flex-1 w-full">
        <div className="relative aspect-[4/5] overflow-hidden group">
          <img src={image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={title} />
          <div className="absolute inset-0 bg-midnight-teal/10 group-hover:bg-transparent transition-colors duration-500" />
        </div>
      </div>
      <div className={`flex-1 flex flex-col justify-center ${isLeft ? 'md:pl-16' : 'md:pr-16'} bg-silk-white p-8 md:p-0`}>
        <span className="text-temple-gold text-[10px] uppercase tracking-[0.4em] mb-4 block font-bold">Chapter {number}</span>
        <h3 className="text-4xl md:text-6xl font-display text-midnight-teal mb-8 leading-tight">{title}</h3>
        <p className="text-midnight-teal/70 text-lg leading-relaxed font-light">{text}</p>
      </div>
    </motion.div>
  );
};

const Storyline = () => {
  return (
    <section id="story" className="bg-silk-white py-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-32">
          <span className="text-temple-gold text-[12px] uppercase tracking-[0.4em] mb-6 block">The Legend</span>
          <h2 className="text-5xl md:text-7xl text-midnight-teal font-display">A Lineage of Light</h2>
        </div>
        
        <div className="space-y-32 relative">
          {/* Vertical Line connecting chapters */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-temple-gold/30 -translate-x-1/2 hidden md:block" />
          
          <StoryChapter 
            number="I"
            title="The Royal Forges"
            text="Born in the fires of ancient capitals, our ancestors crafted adornments for emperors. The secret techniques of Kundan and Polki were guarded like state secrets, passed down only through bloodlines."
            image="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800"
            align="left"
          />
          <StoryChapter 
            number="II"
            title="The Master's Touch"
            text="Every gemstone is hand-selected, every setting meticulously carved. We do not manufacture; we breathe life into gold, ensuring each piece carries the soul of its maker and the weight of history."
            image="https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&q=80&w=800"
            align="right"
          />
          <StoryChapter 
            number="III"
            title="Modern Sovereignty"
            text="Today, Indrayani bridges the chasm between antiquity and tomorrow. We design for the contemporary queen—unapologetic, powerful, and deeply rooted in her heritage."
            image="https://images.unsplash.com/photo-1611085583191-a3b13b94b421?auto=format&fit=crop&q=80&w=800"
            align="left"
          />
        </div>
      </div>
    </section>
  );
};

const CollectionSection = () => {
  return (
    <section id="collections" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-2xl">
          <span className="text-temple-gold text-[11px] uppercase tracking-[0.3em] mb-6 block font-bold">Curated Masterpieces</span>
          <h2 className="text-5xl md:text-7xl text-midnight-teal leading-tight font-display">The Heritage <br />Collections</h2>
        </div>
        <p className="text-midnight-teal/60 max-w-md text-xl font-light leading-relaxed">
          Each piece is a chapter of history, meticulously hand-forged by master artisans whose lineage spans centuries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {COLLECTIONS.map((collection, idx) => (
          <motion.div 
            key={collection.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[3/4] overflow-hidden mb-8">
              <img 
                src={collection.image} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                alt={collection.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-teal/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-temple-gold text-[10px] uppercase tracking-[0.3em] mb-3 block opacity-0 group-hover:opacity-100 transition-opacity delay-100 font-bold">{collection.subtitle}</span>
                <h3 className="text-silk-white text-3xl font-display">{collection.title}</h3>
              </div>
            </div>
            <p className="text-midnight-teal/70 text-base leading-relaxed mb-6 font-light">{collection.description}</p>
            <button className="text-[11px] uppercase tracking-widest font-bold flex items-center gap-3 text-midnight-teal group-hover:text-temple-gold transition-colors">
              Explore Collection <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const LookbookGallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1630019058353-5ff3fec7bc92?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1603561591411-071c4f713932?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <section className="py-32 bg-midnight-teal px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-temple-gold text-[11px] uppercase tracking-[0.4em] mb-4 block font-bold">The Archives</span>
            <h2 className="text-5xl md:text-7xl text-silk-white font-display">Visual Poetry</h2>
          </div>
          <button className="text-silk-white text-[11px] uppercase tracking-widest font-bold flex items-center gap-3 hover:text-temple-gold transition-colors group">
            View Full Lookbook <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 3) * 0.2 }}
              className="break-inside-avoid overflow-hidden group relative cursor-pointer"
            >
              <img src={src} className="w-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={`Gallery ${idx}`} />
              <div className="absolute inset-0 bg-midnight-teal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-temple-gold text-[10px] uppercase tracking-[0.3em] font-bold border border-temple-gold px-8 py-4 hover:bg-temple-gold hover:text-midnight-teal transition-colors">
                  View Details
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductGrid = ({ onProductClick }: { onProductClick: (p: Product) => void }) => {
  return (
    <section id="vault" className="bg-silk-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-temple-gold text-[11px] uppercase tracking-[0.4em] mb-4 block font-bold">The Vault</span>
          <h2 className="text-5xl md:text-7xl text-midnight-teal font-display">Featured Creations</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {PRODUCTS.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              onClick={() => onProductClick(product)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden mb-8 bg-midnight-teal/5">
                <img 
                  src={product.images[0]} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  alt={product.name}
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 shimmer-effect" />
                {product.stockStatus === 'Limited Edition' && (
                  <div className="absolute top-6 left-6 bg-temple-gold text-midnight-teal text-[9px] uppercase tracking-widest font-bold px-4 py-2">
                    Limited Edition
                  </div>
                )}
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-temple-gold text-[10px] uppercase tracking-[0.3em] mb-2 block font-bold">{product.category}</span>
                  <h3 className="text-midnight-teal text-2xl font-display group-hover:text-temple-gold transition-colors">{product.name}</h3>
                </div>
                <div className="text-midnight-teal font-light tracking-wider text-xl">
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
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative bg-silk-white w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl"
          >
            <div className="relative hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1611085583191-a3b13b94b421?auto=format&fit=crop&q=80&w=1974" 
                className="w-full h-full object-cover"
                alt="Bespoke Process"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-teal/80 to-transparent" />
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <h3 className="text-silk-white text-5xl mb-6 font-display">Your Vision, <br />Our Craft.</h3>
                <p className="text-silk-white/80 text-base leading-relaxed font-light">
                  Collaborate with our master designers to create a piece that is uniquely yours. A legacy born from your story, forged in our fires.
                </p>
              </div>
            </div>
            <div className="p-8 md:p-16 flex flex-col justify-center">
              <button onClick={onClose} className="absolute top-8 right-8 text-midnight-teal hover:text-temple-gold transition-colors">
                <X size={28} />
              </button>
              <span className="text-temple-gold text-[11px] uppercase tracking-[0.4em] mb-4 block font-bold">The Bespoke Concierge</span>
              <h2 className="text-4xl text-midnight-teal mb-10 font-display">Request a Private Consultation</h2>
              
              <form className="space-y-8">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-midnight-teal/60 mb-2 block font-bold">Full Name</label>
                  <input type="text" className="w-full border-b border-midnight-teal/20 py-3 text-lg focus:border-temple-gold outline-none transition-colors bg-transparent" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-midnight-teal/60 mb-2 block font-bold">Email Address</label>
                  <input type="email" className="w-full border-b border-midnight-teal/20 py-3 text-lg focus:border-temple-gold outline-none transition-colors bg-transparent" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-midnight-teal/60 mb-2 block font-bold">Occasion / Vision</label>
                  <textarea className="w-full border-b border-midnight-teal/20 py-3 text-lg focus:border-temple-gold outline-none transition-colors bg-transparent resize-none h-24" />
                </div>
                <button className="w-full bg-midnight-teal text-silk-white py-5 text-[12px] uppercase tracking-[0.3em] font-bold hover:bg-temple-gold hover:text-midnight-teal transition-all duration-500 mt-4">
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
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-[60] bg-silk-white overflow-y-auto"
    >
      <header className="sticky top-0 z-10 glass-morphism py-6 px-6 flex justify-between items-center">
        <button onClick={onClose} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-bold text-midnight-teal hover:text-temple-gold transition-colors">
          <X size={20} /> Close Vault
        </button>
        <div className="text-2xl font-display tracking-[0.2em] text-midnight-teal">INDRAYANI</div>
        <button className="text-midnight-teal hover:text-temple-gold transition-colors">
          <ShoppingBag size={24} />
        </button>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Gallery */}
        <div className="space-y-6">
          <motion.div 
            key={activeImg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="aspect-[4/5] bg-midnight-teal/5 overflow-hidden"
          >
            <img src={product.images[activeImg]} className="w-full h-full object-cover" alt={product.name} />
          </motion.div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveImg(idx)}
                className={`aspect-square border-2 transition-all duration-300 ${activeImg === idx ? 'border-temple-gold' : 'border-transparent opacity-50 hover:opacity-100'}`}
              >
                <img src={img} className="w-full h-full object-cover" alt={`${product.name} ${idx}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center py-10">
          <span className="text-temple-gold text-[12px] uppercase tracking-[0.4em] mb-6 block font-bold">{product.category}</span>
          <h1 className="text-5xl md:text-7xl font-display text-midnight-teal mb-8 leading-tight">{product.name}</h1>
          <div className="text-4xl font-light text-midnight-teal/80 mb-10 tracking-wider">₹{product.price.toLocaleString()}</div>
          
          <div className="space-y-10 mb-16">
            <p className="text-xl text-midnight-teal/70 leading-relaxed font-light">
              {product.description}
            </p>
            
            <div className="grid grid-cols-2 gap-8 py-10 border-y border-midnight-teal/10">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-midnight-teal/50 mb-4 block font-bold">Materials</span>
                <div className="flex flex-wrap gap-3">
                  {product.materials.map(m => (
                    <span key={m} className="text-xs font-medium px-4 py-2 bg-midnight-teal/5 rounded-full">{m}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-midnight-teal/50 mb-4 block font-bold">Availability</span>
                <span className="text-sm font-bold text-temple-gold uppercase tracking-widest">{product.stockStatus}</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <button className="w-full bg-midnight-teal text-silk-white py-6 text-[12px] uppercase tracking-[0.3em] font-bold hover:bg-temple-gold hover:text-midnight-teal transition-all duration-500 flex justify-center items-center gap-4">
              Add to Vault <ShoppingBag size={20} />
            </button>
            <button className="w-full border border-midnight-teal/20 text-midnight-teal py-6 text-[12px] uppercase tracking-[0.3em] font-bold hover:bg-midnight-teal hover:text-silk-white transition-all duration-500">
              Request Customization
            </button>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-10 opacity-60">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest font-bold">
              <ShieldCheck size={20} /> Authenticity Guaranteed
            </div>
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest font-bold">
              <Star size={20} /> Lifetime Warranty
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-midnight-teal text-silk-white pt-32 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="col-span-1 md:col-span-2">
          <div className="text-4xl font-display tracking-[0.2em] text-temple-gold mb-8">INDRAYANI</div>
          <p className="text-silk-white/60 max-w-md text-lg font-light leading-relaxed mb-10">
            Indrayani is more than jewelry; it is a testament to the enduring power of heritage. We craft for the modern sovereign who leads with grace and commands with wisdom.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-silk-white hover:text-temple-gold transition-colors uppercase text-[10px] tracking-widest font-bold">Instagram</a>
            <a href="#" className="text-silk-white hover:text-temple-gold transition-colors uppercase text-[10px] tracking-widest font-bold">Pinterest</a>
            <a href="#" className="text-silk-white hover:text-temple-gold transition-colors uppercase text-[10px] tracking-widest font-bold">Journal</a>
          </div>
        </div>
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold mb-10 text-temple-gold">Collections</h4>
          <ul className="space-y-5 text-[13px] text-silk-white/70 font-light tracking-wide">
            <li><a href="#" className="hover:text-temple-gold transition-colors">The Heritage Vault</a></li>
            <li><a href="#" className="hover:text-temple-gold transition-colors">Modern Power</a></li>
            <li><a href="#" className="hover:text-temple-gold transition-colors">Indrayani Bridal</a></li>
            <li><a href="#" className="hover:text-temple-gold transition-colors">Bespoke Concierge</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.4em] font-bold mb-10 text-temple-gold">Client Care</h4>
          <ul className="space-y-5 text-[13px] text-silk-white/70 font-light tracking-wide">
            <li><a href="#" className="hover:text-temple-gold transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-temple-gold transition-colors">Size Guide</a></li>
            <li><a href="#" className="hover:text-temple-gold transition-colors">Care Instructions</a></li>
            <li><a href="#" className="hover:text-temple-gold transition-colors">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-12 border-t border-silk-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.3em] text-silk-white/40 font-bold">
        <div>© 2026 Indrayani Jewellery. All Rights Reserved.</div>
        <div className="flex gap-10">
          <a href="#" className="hover:text-temple-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-temple-gold transition-colors">Terms of Service</a>
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
    <div className="min-h-screen cursor-default">
      <CustomCursor />
      <GoldRateBar />
      <Header 
        onCartClick={() => {}} 
        onBespokeClick={() => setIsBespokeOpen(true)} 
      />
      
      <main>
        <Hero />
        <Storyline />
        <CollectionSection />
        <LookbookGallery />
        <ProductGrid onProductClick={setSelectedProduct} />
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
