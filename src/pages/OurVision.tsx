import { motion } from "framer-motion";
import DepthContainer from "@/components/DepthContainer";
import NeuButton from "@/components/NeuButton";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OurVision = () => {
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
            Our Vision
          </h1>
        </motion.div>

        {/* Vision Statement */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <DepthContainer depth="engraved" className="p-8 md:p-12">
            <h2 className="font-heading text-2xl md:text-3xl mb-6">
              Market Position
            </h2>
            
            <div className="space-y-6 text-text-primary font-body">
              <p>
                Adonnow Trading Limited operates at the intersection of African mineral wealth and 
                global commodity demand. Our objective is to establish a reliable conduit for strategic 
                resources that power industrial economies worldwide.
              </p>
              
              <p>
                We pursue market leadership through institutional credibility, operational transparency, 
                and sustained commitment to regulatory compliance. The company's trajectory is calibrated 
                for long-term positioning within the global minerals trade.
              </p>
            </div>
          </DepthContainer>
        </motion.section>

        {/* Strategic Priorities */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <DepthContainer depth="engraved" className="p-8 md:p-12">
            <h2 className="font-heading text-2xl md:text-3xl mb-6">
              Strategic Priorities
            </h2>
            
            <div className="space-y-4 text-text-primary font-body">
              <div className="depth-raised p-4 rounded-[18px]">
                <h3 className="font-heading text-lg mb-2">Supply Chain Intelligence</h3>
                <p className="text-text-secondary text-sm">
                  Development of proprietary sourcing networks across verified mining operations.
                </p>
              </div>
              
              <div className="depth-raised p-4 rounded-[18px]">
                <h3 className="font-heading text-lg mb-2">Compliance Infrastructure</h3>
                <p className="text-text-secondary text-sm">
                  Adherence to international trade regulations and export certification requirements.
                </p>
              </div>
              
              <div className="depth-raised p-4 rounded-[18px]">
                <h3 className="font-heading text-lg mb-2">Market Access</h3>
                <p className="text-text-secondary text-sm">
                  Expansion of buyer relationships across industrial and institutional segments.
                </p>
              </div>
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
            onClick={() => navigate("/expertise")}
          >
            Our Expertise
          </NeuButton>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
