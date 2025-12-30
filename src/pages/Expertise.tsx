import { motion } from "framer-motion";
import DepthContainer from "@/components/DepthContainer";
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
            Expertise
          </h1>
          <p className="text-text-secondary font-body text-sm md:text-base max-w-2xl mx-auto">
            Specialized capabilities that define our approach to mineral trading
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <motion.section
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <div className="space-y-4 md:space-y-6">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                whileHover={{ y: -2 }}
              >
                <DepthContainer depth="engraved" className="p-5 md:p-6 shadow-permanent">
                  <h3 className="font-heading text-lg md:text-xl mb-2 md:mb-3 text-text-highlight">
                    {area.title}
                  </h3>
                  <p className="text-text-secondary font-body text-sm md:text-base leading-relaxed">
                    {area.description}
                  </p>
                </DepthContainer>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Capability Statement */}
        <motion.section
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <DepthContainer depth="engraved" className="p-5 md:p-8 shadow-permanent">
            <h2 className="font-heading text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 text-text-highlight">
              Operational Capability
            </h2>
            
            <div className="space-y-4 md:space-y-6">
              <p className="text-text-primary font-body text-sm md:text-base leading-relaxed">
                Adonnow Trading Limited maintains direct operational relationships with mining 
                operations across Tanzania, the Democratic Republic of Congo, and Rwanda. Our 
                verification protocols ensure commodity authenticity and compliance with 
                international sourcing standards.
              </p>
              
              <p className="text-text-secondary font-body text-sm md:text-base leading-relaxed">
                The company's expertise spans the complete trade cycle—from initial sourcing 
                through laboratory verification, export documentation, and final delivery to 
                international buyers.
              </p>
            </div>
          </DepthContainer>
        </motion.section>

        {/* Additional Expertise Section */}
        <motion.section
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <DepthContainer depth="engraved" className="p-5 md:p-8 shadow-permanent">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h3 className="font-heading text-lg md:text-xl mb-3 text-text-highlight">
                  Technical Proficiency
                </h3>
                <ul className="space-y-2">
                  <li className="text-text-secondary font-body text-sm md:text-base flex items-start">
                    <span className="text-text-highlight mr-2">•</span>
                    Advanced spectroscopic mineral analysis
                  </li>
                  <li className="text-text-secondary font-body text-sm md:text-base flex items-start">
                    <span className="text-text-highlight mr-2">•</span>
                    Supply chain optimization algorithms
                  </li>
                  <li className="text-text-secondary font-body text-sm md:text-base flex items-start">
                    <span className="text-text-highlight mr-2">•</span>
                    Custom trade documentation systems
                  </li>
                  <li className="text-text-secondary font-body text-sm md:text-base flex items-start">
                    <span className="text-text-highlight mr-2">•</span>
                    Real-time logistics tracking
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-heading text-lg md:text-xl mb-3 text-text-highlight">
                  Regional Knowledge
                </h3>
                <ul className="space-y-2">
                  <li className="text-text-secondary font-body text-sm md:text-base flex items-start">
                    <span className="text-text-highlight mr-2">•</span>
                    Tanzania mining regulations expertise
                  </li>
                  <li className="text-text-secondary font-body text-sm md:text-base flex items-start">
                    <span className="text-text-highlight mr-2">•</span>
                    DRC conflict mineral compliance
                  </li>
                  <li className="text-text-secondary font-body text-sm md:text-base flex items-start">
                    <span className="text-text-highlight mr-2">•</span>
                    East African export procedures
                  </li>
                  <li className="text-text-secondary font-body text-sm md:text-base flex items-start">
                    <span className="text-text-highlight mr-2">•</span>
                    International shipping protocols
                  </li>
                </ul>
              </div>
            </div>
          </DepthContainer>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <DepthContainer depth="engraved" className="p-5 md:p-8 shadow-permanent">
            <h2 className="font-heading text-xl md:text-2xl mb-3 md:mb-4">
              Leverage Our Expertise
            </h2>
            <p className="text-text-secondary font-body text-sm md:text-base mb-4 md:mb-6 max-w-xl mx-auto">
              Connect with our specialists to navigate the complexities of mineral trading with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/minerals")}
                className="shadow-permanent-button px-6 py-3 md:py-4 rounded-[18px] text-text-primary font-body text-sm md:text-base"
              >
                View Minerals Portfolio
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="shadow-permanent-button px-6 py-3 md:py-4 rounded-[18px] text-text-primary font-body text-sm md:text-base"
              >
                Consult Our Experts
              </button>
            </div>
          </DepthContainer>
        </motion.div>

        {/* Mobile Optimization Note */}
        <div className="mt-8 text-center lg:hidden">
          <p className="text-text-secondary font-body text-xs">
            All expertise cards feature permanent raised effect and detailed hover information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expertise;