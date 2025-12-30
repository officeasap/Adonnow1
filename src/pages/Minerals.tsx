import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import DepthContainer from "@/components/DepthContainer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const mineralData = [
  {
    type: "copper" as const,
    name: "Copper Cathode",
    specs: [
      { label: "Purity", value: "99.99% Cu" },
      { label: "Standard", value: "LME Grade A" },
      { label: "Form", value: "Cathode Sheets" },
    ],
    description:
      "Premium copper cathodes meeting London Metal Exchange Grade A specifications. Suitable for electrical manufacturing, construction, and industrial applications.",
    images: [
      "/images/copper1.png",
      "/images/copper2.png",
      "/images/copper3.png",
      "/images/copper4.png",
    ],
  },
  {
    type: "coltan" as const,
    name: "Coltan",
    specs: [
      { label: "Content", value: "Ta₂O₅ 30%+" },
      { label: "Origin", value: "DRC, Rwanda" },
      { label: "Status", value: "ITSCI Tagged" },
    ],
    description:
      "Conflict-free tantalum ore sourced from certified operations. Essential for capacitors in electronics, aerospace systems, and medical devices.",
    images: [
      "/images/coltan1.png",
      "/images/coltan2.png",
      "/images/coltan3.png",
      "/images/coltan4.png",
    ],
  },
  {
    type: "gold" as const,
    name: "Gold",
    specs: [
      { label: "Purity", value: "999.9 Fine" },
      { label: "Form", value: "Refined Bullion" },
      { label: "Assay", value: "LBMA Standard" },
    ],
    description:
      "Refined gold bullion from East African sources. Fully documented chain of custody and assay certification.",
    images: [
      "/images/gold1.png",
      "/images/gold2.png",
      "/images/gold3.png",
      "/images/gold4.png",
    ],
  },
  {
    type: "tanzanite" as const,
    name: "Tanzanite",
    specs: [
      { label: "Origin", value: "Mererani, TZ" },
      { label: "Grading", value: "GIA Certified" },
      { label: "Character", value: "Trichroic" },
    ],
    description:
      "Rare blue-violet gemstones exclusive to Tanzania. Each stone certified with documented provenance.",
    images: [
      "/images/tanzanite1.png",
      "/images/tanzanite2.png",
      "/images/tanzanite3.png",
      "/images/tanzanite4.png",
    ],
  },
];

// Define MineralCard outside so it can use useNavigate
const MineralCard = ({
  mineral,
  index,
  onRequestQuote,
}: {
  mineral: typeof mineralData[0];
  index: number;
  onRequestQuote: () => void;
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  // ✅ Auto-play logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % mineral.images.length);
    }, 5000); // switch every 5 seconds
    return () => clearInterval(interval);
  }, [mineral.images.length]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.4 }}
      whileHover={{ y: -2 }}
    >
      <DepthContainer depth="engraved" className="overflow-hidden shadow-permanent">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Side with Switcher */}
          <div className="relative">
            <motion.img
              key={currentImage}
              src={mineral.images[currentImage]}
              alt={`${mineral.name} image ${currentImage + 1}`}
              className="h-64 md:h-full min-h-[280px] w-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* Image Navigation */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {mineral.images.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentImage
                      ? "bg-text-highlight shadow-permanent"
                      : "bg-text-muted/50"
                  }`}
                  onClick={() => setCurrentImage(idx)}
                />
              ))}
            </div>

            {/* Arrow Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 flex justify-between">
              <button
                onClick={() =>
                  setCurrentImage(
                    (prev) =>
                      (prev - 1 + mineral.images.length) % mineral.images.length
                  )
                }
                className="shadow-permanent-button w-10 h-10 rounded-[18px] flex items-center justify-center"
              >
                <ChevronLeft size={18} className="text-text-muted" />
              </button>
              <button
                onClick={() =>
                  setCurrentImage((prev) => (prev + 1) % mineral.images.length)
                }
                className="shadow-permanent-button w-10 h-10 rounded-[18px] flex items-center justify-center"
              >
                <ChevronRight size={18} className="text-text-muted" />
              </button>
            </div>
          </div>

          {/* Content Side */}
          <div className="p-5 md:p-8 flex flex-col justify-between">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl mb-3 md:mb-4 text-text-highlight">
                {mineral.name}
              </h2>
              <p className="text-text-secondary font-body text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                {mineral.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-3 gap-3 mb-4 md:mb-6">
                {mineral.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="shadow-permanent p-3 rounded-[18px] text-center"
                  >
                    <span className="block text-text-muted font-body text-xs uppercase tracking-wider mb-1">
                      {spec.label}
                    </span>
                    <span className="block text-text-highlight font-body text-sm md:text-base">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onRequestQuote}
              className="shadow-permanent-button w-full py-3 md:py-4 rounded-[18px] text-text-primary font-body text-sm md:text-base transition-all duration-200"
            >
              Request Quote
            </button>
          </div>
        </div>
      </DepthContainer>
    </motion.section>
  );
};

const Minerals = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-canvas pt-20 md:pt-28 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4">
            Mineral Portfolio
          </h1>
          <p className="text-text-secondary font-body text-sm md:text-base max-w-xl mx-auto">
            Strategic commodities sourced from verified East African operations.
          </p>
        </motion.div>

        {/* Mineral Cards */}
        <div className="space-y-6 md:space-y-8">
          {mineralData.map((mineral, index) => (
            <MineralCard 
              key={mineral.type} 
              mineral={mineral} 
              index={index}
              onRequestQuote={() => navigate("/contact")}
            />
          ))}
        </div>

        {/* Additional Information */}
        <motion.section
          className="mt-8 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <DepthContainer depth="engraved" className="p-5 md:p-8 shadow-permanent">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h3 className="font-heading text-lg md:text-xl mb-3 text-text-highlight">
                  Quality Assurance
                </h3>
                <p className="text-text-secondary font-body text-sm md:text-base leading-relaxed">
                  All minerals undergo rigorous quality verification, including laboratory analysis, 
                  purity testing, and certification by international standards bodies. Each shipment 
                  includes full documentation and traceability.
                </p>
              </div>
              
              <div>
                <h3 className="font-heading text-lg md:text-xl mb-3 text-text-highlight">
                  Sourcing Standards
                </h3>
                <p className="text-text-secondary font-body text-sm md:text-base leading-relaxed">
                  We maintain strict ethical sourcing protocols, ensuring conflict-free supply chains 
                  and adherence to environmental regulations. Our operations support sustainable 
                  mining practices across East Africa.
                </p>
              </div>
            </div>
          </DepthContainer>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          className="mt-8 md:mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <DepthContainer depth="engraved" className="p-5 md:p-8 shadow-permanent">
            <h2 className="font-heading text-xl md:text-2xl mb-3 md:mb-4">
              Ready to Trade?
            </h2>
            <p className="text-text-secondary font-body text-sm md:text-base mb-4 md:mb-6 max-w-xl mx-auto">
              Contact our trading desk for current pricing, availability, and shipment schedules.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="shadow-permanent-button px-6 py-3 md:py-4 rounded-[18px] text-text-primary font-body text-sm md:text-base transition-all duration-200"
              >
                Get Pricing Information
              </button>
            </div>
          </DepthContainer>
        </motion.div>

        {/* Mobile Optimization Note */}
        <div className="mt-8 text-center lg:hidden">
          <p className="text-text-secondary font-body text-xs">
            Swipe images or tap arrows to navigate. All elements feature permanent raised effect.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Minerals;