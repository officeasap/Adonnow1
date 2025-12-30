import { motion } from "framer-motion";
import DepthContainer from "@/components/DepthContainer";
import { useNavigate } from "react-router-dom";

const OurVision = () => {
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
            Our Vision
          </h1>
          <p className="text-text-secondary font-body text-sm md:text-base max-w-2xl mx-auto">
            Shaping the future of mineral trading through strategic excellence and operational integrity
          </p>
        </motion.div>

        {/* Vision Statement */}
        <motion.section
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <DepthContainer depth="engraved" className="p-5 md:p-8 shadow-permanent">
            <h2 className="font-heading text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 text-text-highlight">
              Market Position
            </h2>
            
            <div className="space-y-4 md:space-y-6">
              <p className="text-text-primary font-body text-sm md:text-base leading-relaxed">
                Adonnow Trading Limited operates at the intersection of African mineral wealth and 
                global commodity demand. Our objective is to establish a reliable conduit for strategic 
                resources that power industrial economies worldwide.
              </p>
              
              <p className="text-text-primary font-body text-sm md:text-base leading-relaxed">
                We pursue market leadership through institutional credibility, operational transparency, 
                and sustained commitment to regulatory compliance. The company's trajectory is calibrated 
                for long-term positioning within the global minerals trade.
              </p>
            </div>
          </DepthContainer>
        </motion.section>

        {/* Strategic Priorities */}
        <motion.section
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <DepthContainer depth="engraved" className="p-5 md:p-8 shadow-permanent">
            <h2 className="font-heading text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 text-text-highlight">
              Strategic Priorities
            </h2>
            
            <div className="space-y-4 md:space-y-6">
              <div className="shadow-permanent p-4 md:p-5 rounded-[18px]">
                <h3 className="font-heading text-lg md:text-xl mb-2 text-text-highlight">Supply Chain Intelligence</h3>
                <p className="text-text-secondary font-body text-sm md:text-base leading-relaxed">
                  Development of proprietary sourcing networks across verified mining operations.
                </p>
              </div>
              
              <div className="shadow-permanent p-4 md:p-5 rounded-[18px]">
                <h3 className="font-heading text-lg md:text-xl mb-2 text-text-highlight">Compliance Infrastructure</h3>
                <p className="text-text-secondary font-body text-sm md:text-base leading-relaxed">
                  Adherence to international trade regulations and export certification requirements.
                </p>
              </div>
              
              <div className="shadow-permanent p-4 md:p-5 rounded-[18px]">
                <h3 className="font-heading text-lg md:text-xl mb-2 text-text-highlight">Market Access</h3>
                <p className="text-text-secondary font-body text-sm md:text-base leading-relaxed">
                  Expansion of buyer relationships across industrial and institutional segments.
                </p>
              </div>
            </div>
          </DepthContainer>
        </motion.section>

        {/* Vision Pillars */}
        <motion.section
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <DepthContainer depth="engraved" className="p-5 md:p-8 shadow-permanent">
            <h2 className="font-heading text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 text-text-highlight">
              Vision Pillars
            </h2>
            
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              <div className="shadow-permanent p-4 md:p-5 rounded-[18px] text-center">
                <div className="w-8 h-8 rounded-full bg-text-highlight/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-text-highlight text-sm font-bold">01</span>
                </div>
                <h3 className="font-heading text-lg mb-2">Sustainability</h3>
                <p className="text-text-secondary font-body text-sm">
                  Ethical sourcing and environmental stewardship
                </p>
              </div>
              
              <div className="shadow-permanent p-4 md:p-5 rounded-[18px] text-center">
                <div className="w-8 h-8 rounded-full bg-text-highlight/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-text-highlight text-sm font-bold">02</span>
                </div>
                <h3 className="font-heading text-lg mb-2">Innovation</h3>
                <p className="text-text-secondary font-body text-sm">
                  Advanced verification and logistics solutions
                </p>
              </div>
              
              <div className="shadow-permanent p-4 md:p-5 rounded-[18px] text-center">
                <div className="w-8 h-8 rounded-full bg-text-highlight/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-text-highlight text-sm font-bold">03</span>
                </div>
                <h3 className="font-heading text-lg mb-2">Growth</h3>
                <p className="text-text-secondary font-body text-sm">
                  Strategic expansion into new markets and minerals
                </p>
              </div>
            </div>
          </DepthContainer>
        </motion.section>

        {/* Long-term Vision */}
        <motion.section
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <DepthContainer depth="engraved" className="p-5 md:p-8 shadow-permanent">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h3 className="font-heading text-lg md:text-xl mb-3 text-text-highlight">Geographic Expansion</h3>
                <p className="text-text-secondary font-body text-sm md:text-base leading-relaxed">
                  Establishing operational hubs in key mineral regions across Africa, 
                  with strategic partnerships in Asia, Europe, and the Americas.
                </p>
              </div>
              
              <div>
                <h3 className="font-heading text-lg md:text-xl mb-3 text-text-highlight">Technological Integration</h3>
                <p className="text-text-secondary font-body text-sm md:text-base leading-relaxed">
                  Implementing blockchain for supply chain transparency and AI-driven 
                  market analytics for optimized trading strategies.
                </p>
              </div>
            </div>
          </DepthContainer>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <DepthContainer depth="engraved" className="p-5 md:p-8 shadow-permanent">
            <h2 className="font-heading text-xl md:text-2xl mb-3 md:mb-4">
              Explore Our Strategic Direction
            </h2>
            <p className="text-text-secondary font-body text-sm md:text-base mb-4 md:mb-6 max-w-xl mx-auto">
              Discover how our vision translates into actionable expertise and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/expertise")}
                className="shadow-permanent-button px-6 py-3 md:py-4 rounded-[18px] text-text-primary font-body text-sm md:text-base"
              >
                Our Expertise
              </button>
              <button
                onClick={() => navigate("/minerals")}
                className="shadow-permanent-button px-6 py-3 md:py-4 rounded-[18px] text-text-primary font-body text-sm md:text-base"
              >
                Mineral Portfolio
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="shadow-permanent-button px-6 py-3 md:py-4 rounded-[18px] text-text-primary font-body text-sm md:text-base"
              >
                Strategic Partnership
              </button>
            </div>
          </DepthContainer>
        </motion.div>

        {/* Mobile Optimization Note */}
        <div className="mt-8 text-center lg:hidden">
          <p className="text-text-secondary font-body text-xs">
            All vision elements feature permanent raised effect with clear strategic messaging.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurVision;