import { motion } from "framer-motion";
import DepthContainer from "@/components/DepthContainer";
import MineralPlaceholder from "@/components/MineralPlaceholder";
import NeuButton from "@/components/NeuButton";
import { ArrowRight, Sparkles, Factory, Gem } from "lucide-react";
import { useNavigate } from "react-router-dom";

const mineralCategories = [
  {
    type: "coltan" as const,
    name: "Coltan",
    tagline: "Conflict-Free Tantalum Ore",
    icon: Sparkles,
    specs: [
      { label: "Purity", value: "Ta₂O₅ 30%+" },
      { label: "Origin", value: "DRC, Rwanda" },
      { label: "Certification", value: "ITSCI Tagged" },
    ],
    description: "Essential for capacitors in electronics, aerospace, and medical devices. Fully traceable, ethically sourced from certified conflict-free mines.",
  },
  {
    type: "copper" as const,
    name: "Copper Cathode",
    tagline: "LME Grade A Certified",
    icon: Factory,
    specs: [
      { label: "Purity", value: "99.99% Cu" },
      { label: "Standard", value: "LME Grade A" },
      { label: "Form", value: "Cathode Sheets" },
    ],
    description: "Premium copper cathodes meeting London Metal Exchange Grade A specifications. Perfect for electrical, construction, and manufacturing applications.",
  },
  {
    type: "tanzanite" as const,
    name: "Tanzanite",
    tagline: "GIA Certified Gemstones",
    icon: Gem,
    specs: [
      { label: "Origin", value: "Mererani, Tanzania" },
      { label: "Grading", value: "GIA Certified" },
      { label: "Colors", value: "Trichroic" },
    ],
    description: "Rare blue-violet gemstones found exclusively in Tanzania. Each stone comes with GIA certification and documented provenance.",
  },
];

const Minerals = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-depth-void to-depth-1 pt-20 md:pt-28 pb-24 md:pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-heading text-4xl md:text-5xl text-text-highlight mb-4">
            Mineral Portfolio
          </h1>
          <p className="text-text-secondary font-body text-lg max-w-2xl mx-auto haptic-text-1">
            Premium minerals sourced from verified origins, 
            certified for quality and ethical provenance.
          </p>
        </motion.div>

        {/* Mineral Cards */}
        <div className="space-y-8">
          {mineralCategories.map((mineral, index) => {
            const Icon = mineral.icon;
            return (
              <motion.section
                key={mineral.type}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <DepthContainer tier={4} className="overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image Side */}
                    <div className="relative">
                      <MineralPlaceholder
                        mineral={mineral.type}
                        className="h-64 md:h-full min-h-[280px] rounded-none"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="neu-raised px-3 py-1.5 rounded-lg">
                          <Icon size={18} className="text-text-highlight inline mr-2" />
                          <span className="text-text-secondary font-body text-xs uppercase tracking-wider haptic-text-1">
                            {mineral.tagline}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <h2 className="font-heading text-3xl text-text-highlight mb-4 haptic-text-2">
                          {mineral.name}
                        </h2>
                        <p className="text-text-secondary font-body mb-6 haptic-text-1">
                          {mineral.description}
                        </p>

                        {/* Specs Grid */}
                        <div className="grid grid-cols-3 gap-3 mb-6">
                          {mineral.specs.map((spec) => (
                            <DepthContainer
                              key={spec.label}
                              tier={3}
                              animate={false}
                              className="p-3 text-center"
                            >
                              <span className="block text-text-muted font-body text-xs uppercase tracking-wider mb-1 haptic-text-1">
                                {spec.label}
                              </span>
                              <span className="block text-text-highlight font-body text-sm haptic-text-1">
                                {spec.value}
                              </span>
                            </DepthContainer>
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
          })}
        </div>

        {/* Coming Soon */}
        <motion.section
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <DepthContainer tier={2} className="p-6 text-center">
            <h3 className="font-heading text-xl text-text-highlight mb-2 haptic-text-2">
              More Minerals Coming Soon
            </h3>
            <p className="text-text-muted font-body text-sm haptic-text-1">
              Gold, Cobalt, and Rare Earth Elements
            </p>
          </DepthContainer>
        </motion.section>
      </div>
    </div>
  );
};

export default Minerals;
