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

// ✅ Use actual images from public/images
const heroImages = [
  { src: "/images/tanzanite1.png", alt: "Adonnow Trading — Tanzanite" },
  { src: "/images/gold1.png", alt: "Adonnow Trading — Gold Bullion" },
  { src: "/images/copper3.png", alt: "Adonnow Trading — Copper Cathodes" },
  { src: "/images/coltan2.png", alt: "Adonnow Trading — Coltan Ore" },
];

const Index = () => {
  const navigate = useNavigate();

  const [currentMineral, setCurrentMineral] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [popupComplete, setPopupComplete] = useState(false);

  useEffect(() => {
    const mineralInterval = setInterval(() => {
      setCurrentMineral((prev) => (prev + 1) % minerals.length);
    }, 8000);
    return () => clearInterval(mineralInterval);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, []);

  const nextMineral = () =>
    setCurrentMineral((prev) => (prev + 1) % minerals.length);
  const prevMineral = () =>
    setCurrentMineral((prev) => (prev - 1 + minerals.length) % minerals.length);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  return (
    <div className="min-h-screen bg-canvas">
      <EntryPopup onComplete={() => setPopupComplete(true)} />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-24">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center lg:text-left"
            >
              <p className="mt-2 text-text-secondary text-sm uppercase tracking-[0.3em]">
                Adonnow Trading Limited
              </p>

              <h1
  className="font-heading text-5xl lg:text-6xl leading-tight mt-6 mb-6"
  style={{ color: "#dfd4a2" }}
>
  East African Mineral Exports
</h1>


              <p className="text-text-secondary text-lg max-w-xl mx-auto lg:mx-0 mb-8">
                Strategic sourcing and international trade of copper cathodes,
                coltan, refined gold, and certified tanzanite.
              </p>

              <div className="flex gap-4 justify-center lg:justify-start">
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

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <DepthContainer depth="engraved" className="p-8">

                {/* HERO SLIDER */}
                <div className="relative mb-6">
                  <motion.img
                    key={currentSlide}
                    src={heroImages[currentSlide].src}
                    alt={heroImages[currentSlide].alt}
                    className="w-full h-80 object-cover rounded-[18px] neu-raised"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />

                  <div className="absolute inset-y-0 left-2 right-2 flex justify-between items-center pointer-events-none">
                    <button
                      className="depth-raised w-10 h-10 rounded-[18px] pointer-events-auto"
                      onClick={prevSlide}
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      className="depth-raised w-10 h-10 rounded-[18px] pointer-events-auto"
                      onClick={nextSlide}
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>

                {/* MINERAL INFO */}
                <h3 className="font-heading text-2xl mb-1">
                  {minerals[currentMineral].name}
                </h3>
                <p className="text-text-secondary text-sm uppercase tracking-wider">
                  {minerals[currentMineral].tagline}
                </p>

                <div className="flex gap-3 mt-6">
                  {minerals.map((m, i) => (
                    <button
                      key={m.type}
                      className={`flex-1 py-3 rounded-[18px] text-xs uppercase tracking-wider ${
                        i === currentMineral
                          ? "depth-pressed text-text-highlight"
                          : "depth-raised text-text-muted"
                      }`}
                      onClick={() => setCurrentMineral(i)}
                    >
                      {m.type}
                    </button>
                  ))}
                </div>
              </DepthContainer>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <DepthContainer depth="engraved" className="p-12 text-center">
            <h2 className="font-heading text-4xl mb-4">
              Begin Trading
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Contact our Nairobi trading desk for pricing and availability.
            </p>
            <div className="flex gap-4 justify-center">
              <NeuButton
  variant="raised"
  size="lg"
  onClick={() => navigate("/minerals")}
>
  View Available Minerals
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

      {/* FOOTER */}
      <footer className="py-8 text-center">
        <Logo size="sm" />
        <p className="mt-4 text-text-muted text-sm">
          © {new Date().getFullYear()} Adonnow Trading Limited — All rights reserve.
        </p>
      </footer>
    </div>
  );
};

export default Index;
