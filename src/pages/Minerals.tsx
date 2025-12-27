import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import DepthContainer from "@/components/DepthContainer";
import NeuButton from "@/components/NeuButton";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
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

const MineralCard = ({
  mineral,
  index,
}: {
  mineral: typeof mineralData[0];
  index: number;
}) => {
  const navigate = useNavigate();
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
    >
      <DepthContainer depth="engraved" className="overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Side with Switcher */}
          <div className="relative">
            <motion.img
              key={currentImage}
              src={mineral.images[currentImage]}
              alt={`${mineral.name} image ${currentImage + 1}`}
              className="h-64 md:h-full min-h-[280px] w-full object-cover rounded-none"
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
                      ? "bg-text-highlight"
                      : "bg-text-muted"
                  }`}
                  onClick={() => setCurrentImage(idx)}
                />
              ))}
            </div>

            {/* Arrow Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 flex justify-between">
              <motion.button
                className="depth-raised w-8 h-8 rounded-[18px] flex items-center justify-center"
                onClick={() =>
                  setCurrentImage(
                    (prev) =>
                      (prev - 1 + mineral.images.length) % mineral.images.length
                  )
                }
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft size={14} className="text-text-muted" />
              </motion.button>
              <motion.button
                className="depth-raised w-8 h-8 rounded-[18px] flex items-center justify-center"
                onClick={() =>
                  setCurrentImage((prev) => (prev + 1) % mineral.images.length)
                }
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight size={14} className="text-text-muted" />
              </motion.button>
            </div>
          </div>

          {/* Content Side */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h2 className="font-heading text-3xl mb-4">{mineral.name}</h2>
              <p className="text-text-secondary font-body mb-6">
                {mineral.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {mineral.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="depth-pressed p-3 rounded-[18px] text-center"
                  >
                    <span className="block text-text-muted font-body text-xs uppercase tracking-wider mb-1">
                      {spec.label}
                    </span>
                    <span className="block text-text-highlight font-body text-sm">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <NeuButton
              variant="raised"
              size="md"
              icon={<ArrowRight size={18} />}
              iconPosition="right"
              onClick={() => navigate("/contact")}
              className="w-full md:w-auto justify-center"
            >
              Request Quote
            </NeuButton>
          </div>
        </div>
      </DepthContainer>
    </motion.section>
  );
};

const Minerals = () => {
  return (
    <div className="min-h-screen bg-canvas pt-20 md:pt-28 pb-24 md:pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="font-heading text-4xl md:text-5xl mb-4">
            Mineral Portfolio
          </h1>
          <p className="text-text-secondary font-body max-w-xl mx-auto">
            Strategic commodities sourced from verified East African operations.
          </p>
        </motion.div>

        {/* Mineral Cards */}
        <div className="space-y-8">
          {mineralData.map((mineral, index) => (
            <MineralCard key={mineral.type} mineral={mineral} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Minerals;
