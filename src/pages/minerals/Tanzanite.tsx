import { motion } from "framer-motion";
import DepthContainer from "@/components/DepthContainer";
import { useNavigate } from "react-router-dom";

const tanzaniteImages = [
  "/mineral-images/tanzanite1.png",
  "/mineral-images/tanzanite2.png",
  "/mineral-images/tanzanite3.png",
  "/mineral-images/tanzanite4.png",
  "/mineral-images/tanzanite5.png"
];

const Tanzanite = () => {
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
            Tanzanite Gemstones
          </h1>
          <p className="text-text-secondary font-body text-base md:text-lg leading-relaxed">
            Exclusive access to Mererani-mined Tanzanite, the world's rarest blue-violet gemstone found only in Tanzania's Mererani Hills near Mount Kilimanjaro. Our portfolio includes GIA-certified investment-grade specimens with complete provenance documentation, ensuring ethical extraction and fair trade compliance. Each stone undergoes rigorous quality assessment for color saturation, clarity, cut precision, and carat weight meeting international gemological standards.
          </p>
        </motion.div>

        <DepthContainer depth="engraved" className="p-6 mb-8">
          <h2 className="font-heading text-xl md:text-2xl mb-6 text-text-highlight">
            Gemological Specifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-heading text-lg mb-4">Quality Parameters</h3>
              <ul className="space-y-2">
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Color: Exceptional Blue to Violet-Blue
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Clarity: VVS to Eye-Clean
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Cut: Excellent to Ideal Proportions
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Carat Range: 0.5ct - 100+ct
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-lg mb-4">Certifications</h3>
              <ul className="space-y-2">
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  GIA (Gemological Institute of America)
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  AGL (American Gemological Laboratories)
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Kimberley Process Certified
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  OECD Due Diligence Compliant
                </li>
              </ul>
            </div>
          </div>
        </DepthContainer>

        <DepthContainer depth="raised" className="p-6 mb-8">
          <h2 className="font-heading text-xl md:text-2xl mb-6 text-text-highlight">
            Tanzanite Collection Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tanzaniteImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl">
                <img 
                  src={image} 
                  alt={`Tanzanite specimen ${index + 1}`}
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
            Tanzanite Investment Inquiry
          </h3>
          <p className="text-text-secondary font-body text-base mb-6 max-w-xl mx-auto">
            Request our exclusive Tanzanite portfolio with certified investment-grade specimens and provenance documentation.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="rounded-[18px] px-6 py-3 bg-canvas-dark text-text-primary border border-border shadow-permanent-button font-body font-medium hover:brightness-102 transition-all duration-200"
          >
            View Tanzanite Portfolio →
          </button>
        </DepthContainer>
      </div>
    </div>
  );
};

export default Tanzanite;