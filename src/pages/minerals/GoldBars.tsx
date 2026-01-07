import { motion } from "framer-motion";
import DepthContainer from "@/components/DepthContainer";
import ImageMaximizer from "@/components/ImageMaximizer"; // NEW IMPORT
import { useNavigate } from "react-router-dom";

const goldBarsImages = [
  "/mineral-images/goldbars1.png",
  "/mineral-images/goldbars2.png",
  "/mineral-images/goldbars3.png",
  "/mineral-images/goldbars4.png",
  "/mineral-images/goldbars5.png"
];

const GoldBars = () => {
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
            Gold Bars
          </h1>
          <p className="text-text-secondary font-body text-base md:text-lg leading-relaxed">
            Adonnow Trading Limited supplies London Bullion Market Association (LBMA) Good Delivery gold bars for central banks, sovereign wealth funds, and institutional investors. Our bars meet exacting specifications including minimum 99.5% purity, precise weight tolerances (±0.025%), and authenticated serial numbering with complete assay certification. We source from LBMA-accredited refineries ensuring international acceptance and liquidity across global markets.
          </p>
        </motion.div>

        <DepthContainer depth="engraved" className="p-6 mb-8">
          <h2 className="font-heading text-xl md:text-2xl mb-6 text-text-highlight">
            LBMA Good Delivery Specifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-heading text-lg mb-4">Physical Specifications</h3>
              <ul className="space-y-2">
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Weight: 400oz (12.5kg) ±0.025%
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Purity: Minimum 99.5% (995 fineness)
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Dimensions: 225mm × 82mm × 37mm
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Serial Numbering: Unique authenticated
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-lg mb-4">Certifications</h3>
              <ul className="space-y-2">
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  LBMA Good Delivery Listed
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Refinery Assay Certification
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Chain of Custody Documentation
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  OECD Due Diligence Compliance
                </li>
              </ul>
            </div>
          </div>
        </DepthContainer>

        <DepthContainer depth="raised" className="p-6 mb-8">
          <h2 className="font-heading text-xl md:text-2xl mb-6 text-text-highlight">
            Gold Bar Inventory Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {goldBarsImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl">
                <img 
                  src={image} 
                  alt={`Gold bar ${index + 1}`}
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
            Gold Bar Acquisition
          </h3>
          <p className="text-text-secondary font-body text-base mb-6 max-w-xl mx-auto">
            Inquire about LBMA Good Delivery gold bars for institutional investment and reserve asset allocation.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="rounded-[18px] px-6 py-3 bg-canvas-dark text-text-primary border border-border shadow-permanent-button font-body font-medium hover:brightness-102 transition-all duration-200"
          >
            Request Gold Bar Quotation →
          </button>
        </DepthContainer>
      </div>
    </div>
  );
};

export default GoldBars;