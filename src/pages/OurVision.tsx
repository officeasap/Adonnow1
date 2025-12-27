import { motion } from "framer-motion";
import DepthContainer from "@/components/DepthContainer";
import NeuButton from "@/components/NeuButton";
import { ArrowRight, Target, TrendingUp, Leaf, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const visionPillars = [
  {
    icon: Target,
    title: "Market Leadership",
    description: "Become the premier mineral trading partner for East African exports by 2030",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "Pioneer blockchain-based traceability in the mineral supply chain",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Achieve carbon neutrality across all trading operations",
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Positively impact 100,000 lives in mining communities",
  },
];

const OurVision = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-depth-void to-depth-1 pt-20 md:pt-28 pb-24 md:pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero - H1 gets gold */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-heading text-4xl md:text-5xl mb-4">
            Our Vision
          </h1>
          <p className="text-text-secondary font-body text-lg max-w-2xl mx-auto">
            Shaping the future of ethical mineral trading through innovation, 
            sustainability, and unwavering commitment to excellence.
          </p>
        </motion.div>

        {/* 2030 Vision Statement */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <DepthContainer tier={4} className="p-8 md:p-12 text-center">
            <span className="text-text-muted font-body text-sm uppercase tracking-widest">
              Vision 2030
            </span>
            {/* H2 gets gold */}
            <h2 className="font-heading text-3xl md:text-4xl mt-4 mb-6">
              "To be the world's most trusted bridge between 
              African mineral wealth and global markets"
            </h2>
            <p className="text-text-secondary font-body max-w-2xl mx-auto">
              Every mineral we trade represents our commitment to transforming 
              the industry through transparency, technology, and trust.
            </p>
          </DepthContainer>
        </motion.section>

        {/* Vision Pillars */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {/* H2 gets gold */}
          <h2 className="font-heading text-2xl mb-8 text-center">
            Strategic Pillars
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {visionPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <DepthContainer tier={2} className="p-6 h-full">
                    <div className="flex gap-4">
                      <div className="neu-raised w-12 h-12 rounded-[18px] flex items-center justify-center flex-shrink-0">
                        <Icon className="text-text-highlight" size={24} />
                      </div>
                      <div>
                        {/* H3 - white, not gold */}
                        <h3 className="font-heading text-lg mb-2">
                          {pillar.title}
                        </h3>
                        <p className="text-text-secondary font-body text-sm">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </DepthContainer>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* CTA */}
        <div className="text-center">
          <NeuButton
            variant="hero"
            size="lg"
            icon={<ArrowRight size={18} />}
            iconPosition="right"
            onClick={() => navigate("/expertise")}
          >
            Explore Our Expertise
          </NeuButton>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
