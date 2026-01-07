import { motion } from "framer-motion";
import DepthContainer from "@/components/DepthContainer";
import { useNavigate } from "react-router-dom";

const vaultImages = [
  "/mineral-images/vault1.png",
  "/mineral-images/vault2.png"
];

const Vault = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-canvas pt-16 md:pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4 text-text-primary">
            Vault Services
          </h1>
          <p className="text-text-secondary font-body text-base md:text-lg leading-relaxed">
            Sovereign-grade secure storage and custody solutions for precious metals, gemstones, and strategic minerals. Our vault facilities feature Class III security ratings, biometric access controls, 24/7 monitoring, and allocated storage with real-time audit trails. We provide insurance-backed protection, inventory management, and institutional reporting for central banks, sovereign wealth funds, and high-net-worth clients requiring maximum asset security.
          </p>
        </motion.div>

        <DepthContainer depth="engraved" className="p-6 mb-8">
          <h2 className="font-heading text-xl md:text-2xl mb-6 text-text-highlight">
            Security & Custody Specifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-heading text-lg mb-4">Security Features</h3>
              <ul className="space-y-2">
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Class III Vault Rating
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Biometric Access Control
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  24/7 Armed Security Monitoring
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Seismic & Fire Protection Systems
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-lg mb-4">Service Features</h3>
              <ul className="space-y-2">
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Allocated Storage (No Commingling)
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Full Insurance Coverage (Lloyd's of London)
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Real-Time Inventory Auditing
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Institutional Reporting & Compliance
                </li>
              </ul>
            </div>
          </div>
        </DepthContainer>

        <DepthContainer depth="raised" className="p-6 mb-8">
          <h2 className="font-heading text-xl md:text-2xl mb-6 text-text-highlight">
            Vault Facilities Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {vaultImages.map((image, index) => (
              <div key={index} className="aspect-[16/9] overflow-hidden rounded-xl">
                <img 
                  src={image} 
                  alt={`Vault facility ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </DepthContainer>

        <DepthContainer depth="engraved" className="p-6 md:p-8 text-center">
          <h3 className="font-heading text-xl md:text-2xl mb-4 text-text-primary">
            Secure Storage Inquiry
          </h3>
          <p className="text-text-secondary font-body text-base mb-6 max-w-xl mx-auto">
            Inquire about sovereign-grade vault services for precious metals and strategic mineral storage.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="rounded-[18px] px-6 py-3 bg-canvas-dark text-text-primary border border-border shadow-permanent-button font-body font-medium hover:brightness-102 transition-all duration-200"
          >
            Request Vault Services →
          </button>
        </DepthContainer>
      </div>
    </div>
  );
};

export default Vault;