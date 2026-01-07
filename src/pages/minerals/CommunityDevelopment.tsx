import { motion } from "framer-motion";
import DepthContainer from "@/components/DepthContainer";
import { useNavigate } from "react-router-dom";

const communityImages = [
  "/mineral-images/communitydev1.png",
  "/mineral-images/communitydev2.png",
  "/mineral-images/communitydev3.png"
];

const CommunityDevelopment = () => {
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
            Community Development
          </h1>
          <p className="text-text-secondary font-body text-base md:text-lg leading-relaxed">
            Sustainable mineral extraction with lasting positive impact through community investment, infrastructure development, and capacity building programs. We implement fair trade principles, local employment initiatives, educational scholarships, and healthcare support in mining regions across Tanzania, DRC, and Rwanda. Our community development framework ensures ethical resource extraction that supports local economies while maintaining international ESG standards and sustainability reporting.
          </p>
        </motion.div>

        <DepthContainer depth="engraved" className="p-6 mb-8">
          <h2 className="font-heading text-xl md:text-2xl mb-6 text-text-highlight">
            Sustainable Development Initiatives
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-heading text-lg mb-4">Community Programs</h3>
              <ul className="space-y-2">
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Local Employment & Training
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Educational Scholarships
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Healthcare Infrastructure
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Clean Water Access Projects
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-lg mb-4">Environmental Stewardship</h3>
              <ul className="space-y-2">
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Land Rehabilitation Programs
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Biodiversity Protection
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Carbon-Neutral Logistics
                </li>
                <li className="text-text-secondary flex items-start">
                  <span className="text-text-highlight mr-2">•</span>
                  Water Conservation Systems
                </li>
              </ul>
            </div>
          </div>
        </DepthContainer>

        <DepthContainer depth="raised" className="p-6 mb-8">
          <h2 className="font-heading text-xl md:text-2xl mb-6 text-text-highlight">
            Community Development Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {communityImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl">
                <img 
                  src={image} 
                  alt={`Community development ${index + 1}`}
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
            Sustainable Partnership Inquiry
          </h3>
          <p className="text-text-secondary font-body text-base mb-6 max-w-xl mx-auto">
            Learn about our community development initiatives and sustainable mineral extraction practices.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="rounded-[18px] px-6 py-3 bg-canvas-dark text-text-primary border border-border shadow-permanent-button font-body font-medium hover:brightness-102 transition-all duration-200"
          >
            Request Sustainability Report →
          </button>
        </DepthContainer>
      </div>
    </div>
  );
};

export default CommunityDevelopment;