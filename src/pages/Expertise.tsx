import { motion } from "framer-motion";
import DepthContainer from "@/components/DepthContainer";
import NeuButton from "@/components/NeuButton";
import { ArrowRight, Shield, Microscope, BarChart3, Truck, FileCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const expertiseAreas = [
  {
    icon: Microscope,
    title: "Mineral Authentication",
    description: "State-of-the-art laboratory testing and certification for all traded minerals",
    features: ["Spectroscopy analysis", "Purity testing", "Origin verification"],
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    description: "Real-time market data and predictive analytics for informed trading decisions",
    features: ["LME price tracking", "Demand forecasting", "Risk assessment"],
  },
  {
    icon: Truck,
    title: "Logistics Mastery",
    description: "End-to-end supply chain management from mine to global destination",
    features: ["Route optimization", "Secure transport", "Customs clearance"],
  },
  {
    icon: FileCheck,
    title: "Compliance Expertise",
    description: "Navigate complex international regulations with confidence",
    features: ["Export licensing", "OECD due diligence", "ESG reporting"],
  },
];

const Expertise = () => {
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
            Our Expertise
          </h1>
          <p className="text-text-secondary font-body text-lg max-w-2xl mx-auto haptic-text-1">
            Decades of accumulated knowledge and cutting-edge technology 
            powering your mineral trading success.
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <DepthContainer tier={2} className="p-6 md:p-8 h-full">
                    <div className="neu-raised w-14 h-14 rounded-[18px] flex items-center justify-center mb-6">
                      <Icon className="text-gold-light" size={28} />
                    </div>
                    <h3 className="font-heading text-xl text-text-highlight mb-3 haptic-text-2">
                      {area.title}
                    </h3>
                    <p className="text-text-secondary font-body mb-4 haptic-text-1">
                      {area.description}
                    </p>
                    <ul className="space-y-2">
                      {area.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-text-muted font-body text-sm haptic-text-1"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-depth-5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </DepthContainer>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Trust Banner */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <DepthContainer tier={4} className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="neu-raised w-14 h-14 rounded-[18px] flex items-center justify-center">
                <Shield className="text-gold-light" size={28} />
              </div>
              <div>
                <h3 className="font-heading text-lg text-text-highlight haptic-text-2">
                  Certified Excellence
                </h3>
                <p className="text-text-secondary font-body text-sm haptic-text-1">
                  LME & COMEX compliant trading operations
                </p>
              </div>
            </div>
            <NeuButton
              variant="raised"
              size="md"
              icon={<ArrowRight size={18} />}
              iconPosition="right"
              onClick={() => navigate("/minerals")}
            >
              View Mineral Portfolio
            </NeuButton>
          </DepthContainer>
        </motion.section>
      </div>
    </div>
  );
};

export default Expertise;
