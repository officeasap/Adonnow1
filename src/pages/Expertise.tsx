import { motion } from "framer-motion";
import DepthContainer from "@/components/DepthContainer";
import NeuButton from "@/components/NeuButton";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const expertiseAreas = [
  {
    title: "Mineral Authentication",
    description: "Laboratory verification, purity analysis, and origin certification for all traded commodities.",
  },
  {
    title: "Market Intelligence",
    description: "Real-time pricing data, demand forecasting, and strategic market positioning.",
  },
  {
    title: "Logistics Coordination",
    description: "End-to-end supply chain management from extraction sites to international delivery.",
  },
  {
    title: "Regulatory Compliance",
    description: "Export licensing, OECD due diligence, and documentation for cross-border trade.",
  },
];

const Expertise = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-canvas pt-20 md:pt-28 pb-24 md:pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="font-heading text-4xl md:text-5xl mb-4">
            Expertise
          </h1>
        </motion.div>

        {/* Expertise Grid */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <div className="space-y-4">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <DepthContainer depth="engraved" className="p-6">
                  <h3 className="font-heading text-lg mb-2">
                    {area.title}
                  </h3>
                  <p className="text-text-secondary font-body text-sm">
                    {area.description}
                  </p>
                </DepthContainer>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Capability Statement */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <DepthContainer depth="engraved" className="p-8 md:p-12">
            <h2 className="font-heading text-2xl md:text-3xl mb-6">
              Operational Capability
            </h2>
            
            <div className="space-y-4 text-text-primary font-body">
              <p>
                Adonnow Trading Limited maintains direct operational relationships with mining 
                operations across Tanzania, the Democratic Republic of Congo, and Rwanda. Our 
                verification protocols ensure commodity authenticity and compliance with 
                international sourcing standards.
              </p>
              
              <p className="text-text-secondary">
                The company's expertise spans the complete trade cycle—from initial sourcing 
                through laboratory verification, export documentation, and final delivery to 
                international buyers.
              </p>
            </div>
          </DepthContainer>
        </motion.section>

        {/* CTA */}
        <div className="text-center">
          <NeuButton
            variant="raised"
            size="lg"
            icon={<ArrowRight size={18} />}
            iconPosition="right"
            onClick={() => navigate("/minerals")}
          >
            View Minerals
          </NeuButton>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
