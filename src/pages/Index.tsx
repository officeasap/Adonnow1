import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DepthContainer from "@/components/DepthContainer";
import { useNavigate } from "react-router-dom";

const minerals = [
  { 
    type: "copper", 
    name: "Copper Cathode", 
    tagline: "LME Grade A Certified", 
    image: "/mineral-images/copper1.png",
    heroImage: "/mineral-images/copper1.png"
  },
  { 
    type: "coltan", 
    name: "Coltan", 
    tagline: "Conflict-Free Tantalum Ore", 
    image: "/mineral-images/coltan1.png",
    heroImage: "/mineral-images/coltan1.png"
  },
  { 
    type: "gold", 
    name: "Gold", 
    tagline: "Refined Bullion", 
    image: "/mineral-images/goldbars1.png",
    heroImage: "/mineral-images/goldbars1.png"
  },
  { 
    type: "tanzanite", 
    name: "Tanzanite", 
    tagline: "GIA Certified Gemstones", 
    image: "/mineral-images/tanzanite1.png",
    heroImage: "/mineral-images/tanzanite1.png"
  },
];

const heroImages = [
  { src: "/mineral-images/tanzanite1.png", alt: "Adonnow Trading — Tanzanite", type: "tanzanite" },
  { src: "/mineral-images/goldbars1.png", alt: "Adonnow Trading — Gold Bullion", type: "gold" },
  { src: "/mineral-images/copper1.png", alt: "Adonnow Trading — Copper Cathodes", type: "copper" },
  { src: "/mineral-images/coltan1.png", alt: "Adonnow Trading — Coltan Ore", type: "coltan" },
];

const Index = () => {
  const navigate = useNavigate();
  const [currentMineralIndex, setCurrentMineralIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  // Get current mineral based on index
  const currentMineral = minerals[currentMineralIndex];
  
  // Find the slide index that matches the current mineral type
  const getSlideIndexForMineral = (mineralType: string) => {
    return heroImages.findIndex(img => img.type === mineralType);
  };

  // Handle mineral button click
  const handleMineralClick = (index: number) => {
    const mineralType = minerals[index].type;
    const slideIndex = getSlideIndexForMineral(mineralType);
    
    if (slideIndex !== -1) {
      setCurrentMineralIndex(index);
      setCurrentSlide(slideIndex);
      setIsAutoSliding(false); // Pause auto-slide when user manually selects
      
      // Resume auto-slide after 8 seconds
      setTimeout(() => {
        setIsAutoSliding(true);
      }, 8000);
    }
  };

  // Handle slide navigation
  const handleSlideChange = (direction: 'next' | 'prev') => {
    setIsAutoSliding(false);
    
    if (direction === 'next') {
      const newSlide = (currentSlide + 1) % heroImages.length;
      setCurrentSlide(newSlide);
      
      // Find the mineral that matches this slide
      const currentSlideType = heroImages[newSlide].type;
      const mineralIndex = minerals.findIndex(m => m.type === currentSlideType);
      if (mineralIndex !== -1) {
        setCurrentMineralIndex(mineralIndex);
      }
    } else {
      const newSlide = (currentSlide - 1 + heroImages.length) % heroImages.length;
      setCurrentSlide(newSlide);
      
      // Find the mineral that matches this slide
      const currentSlideType = heroImages[newSlide].type;
      const mineralIndex = minerals.findIndex(m => m.type === currentSlideType);
      if (mineralIndex !== -1) {
        setCurrentMineralIndex(mineralIndex);
      }
    }
    
    // Resume auto-slide after 8 seconds
    setTimeout(() => {
      setIsAutoSliding(true);
    }, 8000);
  };

  // Handle direct slide indicator click
  const handleSlideIndicatorClick = (index: number) => {
    setIsAutoSliding(false);
    setCurrentSlide(index);
    
    // Find the mineral that matches this slide
    const currentSlideType = heroImages[index].type;
    const mineralIndex = minerals.findIndex(m => m.type === currentSlideType);
    if (mineralIndex !== -1) {
      setCurrentMineralIndex(mineralIndex);
    }
    
    // Resume auto-slide after 8 seconds
    setTimeout(() => {
      setIsAutoSliding(true);
    }, 8000);
  };

  // Auto-slide effect
  useEffect(() => {
    if (!isAutoSliding) return;
    
    const slideInterval = setInterval(() => {
      const newSlide = (currentSlide + 1) % heroImages.length;
      setCurrentSlide(newSlide);
      
      // Update mineral to match the slide
      const currentSlideType = heroImages[newSlide].type;
      const mineralIndex = minerals.findIndex(m => m.type === currentSlideType);
      if (mineralIndex !== -1) {
        setCurrentMineralIndex(mineralIndex);
      }
    }, 5000);
    
    return () => clearInterval(slideInterval);
  }, [currentSlide, isAutoSliding]);

  return (
    <div className="min-h-screen bg-canvas">
      {/* HERO SECTION */}
      <section className="min-h-[90vh] flex items-center justify-center px-4 pt-16 md:pt-24 pb-12">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center lg:text-left"
            >
              <p className="text-text-secondary text-sm uppercase tracking-[0.3em] mb-4 font-body">
                Adonnow Trading Limited
              </p>

              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
                <span className="block text-text-highlight">East African</span>
                <span className="block text-text-primary">Mineral Exports</span>
              </h1>

              <p className="text-text-secondary font-body text-base md:text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Strategic sourcing and international trade of premium minerals, connecting African resources with global industrial demand.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => navigate("/minerals")}
                  className="mobile-menu-btn active"
                >
                  <span className="text-text-highlight drop-shadow-[0_0_6px_rgba(223,212,162,0.4)]">
                    View Portfolio
                  </span>
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="mobile-menu-btn"
                >
                  <span className="text-text-primary drop-shadow-[0_0_4px_rgba(249,249,245,0.3)]">
                    Contact Trading Desk
                  </span>
                </button>
              </div>
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <DepthContainer depth="engraved" className="p-5 md:p-8">
                {/* IMAGE SLIDER */}
                <div className="relative mb-6">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="aspect-[16/10] overflow-hidden rounded-xl"
                  >
                    <img
                      src={heroImages[currentSlide].src}
                      alt={heroImages[currentSlide].alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover premium-image"
                    />
                  </motion.div>

                  <div className="absolute inset-y-0 left-2 right-2 flex justify-between items-center">
                    <button
                      onClick={() => handleSlideChange('prev')}
                      className="bg-canvas-dark/90 backdrop-blur-sm w-10 h-10 rounded-[18px] flex items-center justify-center shadow-permanent hover:brightness-102 transition-all"
                    >
                      <ChevronLeft size={18} className="text-text-highlight drop-shadow-[0_0_6px_rgba(223,212,162,0.3)]" />
                    </button>
                    <button
                      onClick={() => handleSlideChange('next')}
                      className="bg-canvas-dark/90 backdrop-blur-sm w-10 h-10 rounded-[18px] flex items-center justify-center shadow-permanent hover:brightness-102 transition-all"
                    >
                      <ChevronRight size={18} className="text-text-highlight drop-shadow-[0_0_6px_rgba(223,212,162,0.3)]" />
                    </button>
                  </div>

                  {/* SLIDE INDICATORS */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {heroImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSlideIndicatorClick(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          idx === currentSlide
                            ? "bg-text-highlight w-4 drop-shadow-[0_0_6px_rgba(223,212,162,0.4)]"
                            : "bg-text-muted/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* MINERAL INFO */}
                <div className="mb-6">
                  <h3 className="font-heading text-xl md:text-2xl mb-2 text-text-highlight drop-shadow-[0_0_6px_rgba(223,212,162,0.2)]">
                    {currentMineral.name}
                  </h3>
                  <p className="text-text-secondary font-body text-sm md:text-base">
                    {currentMineral.tagline}
                  </p>
                </div>

                {/* MINERAL SELECTOR */}
                <div className="grid grid-cols-4 gap-3">
                  {minerals.map((m, i) => (
                    <button
                      key={m.type}
                      onClick={() => handleMineralClick(i)}
                      className={`
                        p-3 md:p-4 rounded-[18px] text-center transition-all duration-200 mobile-menu-btn
                        ${i === currentMineralIndex
                          ? 'active shadow-[0_0_15px_rgba(223,212,162,0.2)]'
                          : ''
                        }
                      `}
                    >
                      <span className={`
                        text-xs md:text-sm uppercase tracking-wider font-medium
                        ${i === currentMineralIndex 
                          ? 'text-text-highlight drop-shadow-[0_0_8px_rgba(223,212,162,0.5)]' 
                          : 'text-text-secondary'
                        }
                      `}>
                        {m.type}
                      </span>
                    </button>
                  ))}
                </div>
              </DepthContainer>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUE PROPS SECTION */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl mb-4 text-text-primary">
              Why Choose Adonnow
            </h2>
            <p className="text-text-secondary font-body text-base md:text-lg max-w-2xl mx-auto">
              Institutional-grade mineral trading with uncompromising standards
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Verified Sourcing", desc: "Conflict-free minerals with full traceability" },
              { title: "Premium Quality", desc: "International certification standards" },
              { title: "Global Logistics", desc: "Seamless international delivery" },
              { title: "Market Intelligence", desc: "Strategic trading insights" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <DepthContainer depth="raised" className="p-5 md:p-6 h-full">
                  <h3 className="font-heading text-lg md:text-xl mb-3 text-text-highlight drop-shadow-[0_0_4px_rgba(223,212,162,0.2)]">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary font-body text-sm md:text-base">
                    {item.desc}
                  </p>
                </DepthContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <DepthContainer depth="engraved" className="p-5 md:p-8 text-center">
            <h2 className="font-heading text-2xl md:text-3xl mb-4 text-text-primary">
              Begin Trading Today
            </h2>
            <p className="text-text-secondary font-body text-base md:text-lg mb-6 max-w-xl mx-auto">
              Contact our Nairobi trading desk for institutional pricing, availability, and strategic sourcing insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/minerals")}
                className="mobile-menu-btn active min-w-[200px] shadow-[0_0_20px_rgba(223,212,162,0.3)]"
              >
                <span className="text-text-highlight drop-shadow-[0_0_8px_rgba(223,212,162,0.5)]">
                  View Available Minerals
                </span>
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="mobile-menu-btn min-w-[200px]"
              >
                <span className="text-text-primary drop-shadow-[0_0_4px_rgba(249,249,245,0.3)]">
                  Send Inquiry
                </span>
              </button>
            </div>
          </DepthContainer>
        </div>
      </section>
    </div>
  );
};

export default Index;