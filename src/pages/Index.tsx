import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, Diamond, Zap, Shield } from "lucide-react";
import Logo from "@/components/Logo";
import NeuButton from "@/components/NeuButton";
import DepthContainer from "@/components/DepthContainer";
import MineralPlaceholder from "@/components/MineralPlaceholder";
import EntryPopup from "@/components/EntryPopup";
import { useNavigate } from "react-router-dom";

const minerals = [
  { 
    type: "coltan" as const, 
    name: "Coltan",
    tagline: "Conflict-Free Tantalum",
    description: "Ethically sourced from verified mines"
  },
  { 
    type: "copper" as const, 
    name: "Copper Cathode",
    tagline: "LME Grade A",
    description: "99.99% pure, certified quality"
  },
  { 
    type: "tanzanite" as const, 
    name: "Tanzanite",
    tagline: "GIA Certified",
    description: "Rare gemstones from Tanzania"
  },
];

const features = [
  {
    icon: Diamond,
    title: "Premium Minerals",
    description: "Direct access to Earth's most valuable resources"
  },
  {
    icon: Shield,
    title: "Verified Sources",
    description: "Complete traceability and ethical sourcing"
  },
  {
    icon: Zap,
    title: "Swift Trading",
    description: "Real-time markets, instant execution"
  },
];

const Index = () => {
  const navigate = useNavigate();
  const [currentMineral, setCurrentMineral] = useState(0);
  const [popupComplete, setPopupComplete] = useState(false);

  // Rotate featured mineral every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMineral((prev) => (prev + 1) % minerals.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-depth-void to-depth-1">
      {/* Entry Popup Ritual */}
      <EntryPopup onComplete={() => setPopupComplete(true)} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 md:pt-24 pb-24 md:pb-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {/* Logo */}
              <div className="mb-6">
                <Logo size="xl" />
                <p className="mt-2 text-text-secondary font-body text-sm uppercase tracking-[0.3em]">
                  Trading Limited
                </p>
              </div>

              {/* Headline - H1 gets gold styling */}
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                Where Earth's Treasures
                <br />
                Meet Global Markets
              </h1>

              {/* Subheadline - Light gray, no gold */}
              <p className="text-text-secondary font-body text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
                Your trusted gateway to ethically sourced minerals. 
                From Tanzanian depths to international markets.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <NeuButton
                  variant="hero"
                  size="lg"
                  icon={<ArrowRight size={20} />}
                  iconPosition="right"
                  onClick={() => navigate("/minerals")}
                >
                  Explore Portfolio
                </NeuButton>
                <NeuButton
                  variant="raised"
                  size="lg"
                  onClick={() => navigate("/contact")}
                >
                  Contact Trading Desk
                </NeuButton>
              </div>
            </motion.div>

            {/* Right Column - Mineral Showcase */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <DepthContainer tier={4} className="p-6 md:p-8 animate-mineral-glow">
                {/* Featured Mineral */}
                <MineralPlaceholder
                  mineral={minerals[currentMineral].type}
                  className="h-64 md:h-80 mb-6"
                />

                {/* Mineral Info - H3 gets white styling, not gold */}
                <motion.div
                  key={currentMineral}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="font-heading text-2xl mb-1">
                    {minerals[currentMineral].name}
                  </h3>
                  <p className="text-text-primary font-body text-sm uppercase tracking-wider mb-2">
                    {minerals[currentMineral].tagline}
                  </p>
                  <p className="text-text-muted font-body text-sm">
                    {minerals[currentMineral].description}
                  </p>
                </motion.div>

                {/* Mineral Selector - No gold */}
                <div className="flex gap-3 mt-6">
                  {minerals.map((mineral, index) => (
                    <motion.button
                      key={mineral.type}
                      className={`flex-1 py-3 rounded-[18px] text-xs font-body uppercase tracking-wider transition-all ${
                        index === currentMineral
                          ? "neu-sunken text-text-highlight"
                          : "neu-raised text-text-secondary hover:text-text-primary"
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

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* H2 gets gold styling */}
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              The Adonnow Advantage
            </h2>
            <p className="text-text-secondary font-body max-w-2xl mx-auto">
              Decades of expertise bridging African mineral wealth with global demand
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <DepthContainer tier={2} className="p-6 md:p-8 h-full">
                    <div className="neu-raised w-14 h-14 rounded-[18px] flex items-center justify-center mb-6">
                      <Icon className="text-text-highlight" size={28} />
                    </div>
                    {/* H3 - white, not gold */}
                    <h3 className="font-heading text-xl mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-text-secondary font-body">
                      {feature.description}
                    </p>
                  </DepthContainer>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <DepthContainer tier={4} className="p-8 md:p-12 text-center">
            {/* H2 gets gold styling */}
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              Ready to Trade?
            </h2>
            <p className="text-text-secondary font-body text-lg mb-8 max-w-xl mx-auto">
              Connect with our Nairobi trading desk for premium mineral sourcing 
              and competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeuButton
                variant="hero"
                size="lg"
                onClick={() => window.location.href = "tel:+254707513272"}
              >
                Call +254 707 513 272
              </NeuButton>
              <NeuButton
                variant="raised"
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
      <footer className="py-8 px-4 border-t border-depth-2">
        <div className="max-w-6xl mx-auto text-center">
          <Logo size="sm" />
          <p className="mt-4 text-text-muted font-body text-sm">
            © {new Date().getFullYear()} Adonnow Trading Limited. All rights reserved.
          </p>
          <p className="mt-2 text-text-muted font-body text-xs">
            Nairobi, Kenya | Global Mineral Trading
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
