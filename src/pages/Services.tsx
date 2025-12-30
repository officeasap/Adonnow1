import { motion } from "framer-motion";
import DepthContainer from "@/components/DepthContainer";
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
            Adonnow Services
          </h1>
          <p className="text-text-secondary font-body text-sm md:text-base max-w-2xl mx-auto">
            Comprehensive mineral trading solutions from sourcing to delivery
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.section
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                whileHover={{ y: -2 }}
              >
                <DepthContainer depth="engraved" className="p-5 md:p-6 h-full shadow-permanent">
                  <h3 className="font-heading text-lg md:text-xl mb-3 text-text-highlight">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary font-body text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                </DepthContainer>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Expansion Note */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <DepthContainer depth="engraved" className="p-5 md:p-8 text-center shadow-permanent">
            <h2 className="font-heading text-xl md:text-2xl lg:text-3xl mb-3 md:mb-4">
              Service Expansion
            </h2>
            <p className="text-text-secondary font-body text-sm md:text-base max-w-xl mx-auto mb-4 md:mb-6">
              Adonnow Trading Limited continues to develop additional service capabilities 
              in response to client requirements and market conditions.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="shadow-permanent-button px-6 py-3 md:py-4 rounded-[18px] text-text-primary font-body text-sm md:text-base transition-all duration-200"
              >
                Contact Trading Desk
              </button>
            </div>
          </DepthContainer>
        </motion.section>

        {/* Service Details Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <DepthContainer depth="engraved" className="p-5 md:p-8 shadow-permanent">
            <h2 className="font-heading text-xl md:text-2xl mb-4 md:mb-6 text-center">
              Our Service Philosophy
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h3 className="font-heading text-lg md:text-xl mb-3 text-text-highlight">
                  Integrated Solutions
                </h3>
                <p className="text-text-secondary font-body text-sm md:text-base leading-relaxed">
                  We provide end-to-end mineral trading services, ensuring seamless coordination 
                  from mine site to final destination. Our integrated approach reduces complexity 
                  and enhances transaction security.
                </p>
              </div>
              
              <div>
                <h3 className="font-heading text-lg md:text-xl mb-3 text-text-highlight">
                  Compliance & Verification
                </h3>
                <p className="text-text-secondary font-body text-sm md:text-base leading-relaxed">
                  Every transaction undergoes rigorous due diligence. We maintain full compliance 
                  with international trade regulations and provide transparent documentation 
                  throughout the supply chain.
                </p>
              </div>
            </div>
          </DepthContainer>
        </motion.section>

        {/* Mobile Optimization Note */}
        <div className="mt-8 text-center lg:hidden">
          <p className="text-text-secondary font-body text-xs">
            Tap service cards for more information. All frames feature permanent raised effect.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;