import { motion } from "framer-motion";
import DepthContainer from "@/components/DepthContainer";
import NeuButton from "@/components/NeuButton";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Mineral Sourcing",
    description: "Direct procurement from verified mining operations across East Africa.",
  },
  {
    title: "Quality Verification",
    description: "Laboratory analysis, purity testing, and certification services.",
  },
  {
    title: "Export Documentation",
    description: "Complete licensing, customs clearance, and regulatory compliance.",
  },
  {
    title: "Logistics Coordination",
    description: "Secure transport and delivery to international destinations.",
  },
  {
    title: "Trade Financing",
    description: "Letters of credit, payment terms, and transaction facilitation.",
  },
  {
    title: "Market Advisory",
    description: "Pricing intelligence, demand analysis, and strategic guidance.",
  },
];

const Services = () => {
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
            Adonnow Services
          </h1>
        </motion.div>

        {/* Services Grid */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <DepthContainer depth="engraved" className="p-6 h-full">
                  <h3 className="font-heading text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary font-body text-sm">
                    {service.description}
                  </p>
                </DepthContainer>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Expansion Note */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <DepthContainer depth="engraved" className="p-8 text-center">
            <h2 className="font-heading text-2xl mb-4">
              Service Expansion
            </h2>
            <p className="text-text-secondary font-body max-w-xl mx-auto mb-6">
              Adonnow Trading Limited continues to develop additional service capabilities 
              in response to client requirements and market conditions.
            </p>
            <NeuButton
              variant="raised"
              size="lg"
              icon={<ArrowRight size={18} />}
              iconPosition="right"
              onClick={() => navigate("/contact")}
            >
              Contact Trading Desk
            </NeuButton>
          </DepthContainer>
        </motion.section>
      </div>
    </div>
  );
};

export default Services;
