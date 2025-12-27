import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Logo from "@/components/Logo";
import NeuButton from "@/components/NeuButton";
import DepthContainer from "@/components/DepthContainer";
import MineralPlaceholder from "@/components/MineralPlaceholder";
import EntryPopup from "@/components/EntryPopup";
import { useNavigate } from "react-router-dom";

const minerals = [
  { type: "copper" as const, name: "Copper Cathode", tagline: "LME Grade A Certified" },
  { type: "coltan" as const, name: "Coltan", tagline: "Conflict-Free Tantalum Ore" },
  { type: "gold" as const, name: "Gold", tagline: "Refined Bullion" },
  { type: "tanzanite" as const, name: "Tanzanite", tagline: "GIA Certified Gemstones" },
];

const Index = () => {
  const navigate = useNavigate();
  const [currentMineral, setCurrentMineral] = useState(0);
  const [popupComplete, setPopupComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMineral((prev) => (prev + 1) % minerals.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const nextMineral = () => setCurrentMineral((prev) => (prev + 1) % minerals.length);
  const prevMineral = () => setCurrentMineral((prev) => (prev - 1 + minerals.length) % minerals.length);

  return (
    <div className="min-h-screen bg-canvas">
      <EntryPopup onComplete={() => setPopupComplete(true)} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 md:pt-24 pb-24 md:pb-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <div className="mb-6">
                <Logo size="xl" />
                <p className="mt-2 text-text-secondary font-body text-sm uppercase tracking-[0.3em]">
                  Trading Limited
                </p>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                East African Mineral Exports
              </h1>

              <p className="text-text-secondary font-body text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
                Strategic commodity sourcing and international trade facilitation. 
                Copper cathodes, coltan, gold, and tanzanite.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <NeuButton
                  variant="raised"
                  size="lg"
                  icon={<ArrowRight size={20} />}
                  iconPosition="right"
                  onClick={() => navigate("/minerals")}
                >
                  View Portfolio
                </NeuButton>
                <NeuButton
                  variant="engraved"
                  size="lg"
                  onClick={() => navigate("/contact")}
                >
                  Contact Trading Desk
                </NeuButton>
              </div>
            </motion.div>

            {/* Right Column - Mineral Switcher */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <DepthContainer depth="engraved" className="p-6 md:p-8">
                {/* Mineral Display */}
                <div className="relative">
                  <MineralPlaceholder
                    mineral={minerals[currentMineral].type}
                    className="h-64 md:h-80 mb-6"
                  />
                  
                  {/* Navigation Controls */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 flex justify-between pointer-events-none">
                    <motion.button
                      className="depth-raised w-10 h-10 rounded-[18px] flex items-center justify-center pointer-events-auto"
                      onClick={prevMineral}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ChevronLeft size={18} className="text-text-muted" />
                    </motion.button>
                    <motion.button
                      className="depth-raised w-10 h-10 rounded-[18px] flex items-center justify-center pointer-events-auto"
                      onClick={nextMineral}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ChevronRight size={18} className="text-text-muted" />
                    </motion.button>
                  </div>
                </div>

                {/* Mineral Info */}
                <motion.div
                  key={currentMineral}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-heading text-2xl mb-1">
                    {minerals[currentMineral].name}
                  </h3>
                  <p className="text-text-secondary font-body text-sm uppercase tracking-wider">
                    {minerals[currentMineral].tagline}
                  </p>
                </motion.div>

                {/* Mineral Selector */}
                <div className="flex gap-3 mt-6">
                  {minerals.map((mineral, index) => (
                    <motion.button
                      key={mineral.type}
                      className={`flex-1 py-3 rounded-[18px] text-xs font-body uppercase tracking-wider transition-all ${
                        index === currentMineral
                          ? "depth-pressed text-text-highlight"
                          : "depth-raised text-text-muted"
                      }`}
                      onClick={() => setCurrentMineral(index)}
                      whileTap={{ scale: 0.98 }}
                    >
                      {mineral.type}
                    </motion.button>
                  ))}
                </div>
              </DepthContainer>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <DepthContainer depth="engraved" className="p-8 md:p-12 text-center">
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              Begin Trading
            </h2>
            <p className="text-text-secondary font-body text-lg mb-8 max-w-xl mx-auto">
              Contact our Nairobi desk for pricing and availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeuButton
                variant="raised"
                size="lg"
                onClick={() => window.location.href = "tel:+254707513272"}
              >
                +254 707 513 272
              </NeuButton>
              <NeuButton
                variant="engraved"
                size="lg"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
                onClick={() => navigate("/contact")}
              >
                Send Inquiry
              </NeuButton>
            </div>
          </DepthContainer>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <Logo size="sm" />
          <p className="mt-4 text-text-muted font-body text-sm">
            © {new Date().getFullYear()} Adonnow Trading Limited
          </p>
          <p className="mt-2 text-text-muted font-body text-xs">
            Nairobi, Kenya
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
