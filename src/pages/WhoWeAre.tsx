import { motion } from "framer-motion";
import Logo from "@/components/Logo";
import DepthContainer from "@/components/DepthContainer";
import NeuButton from "@/components/NeuButton";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WhoWeAre = () => {
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
            Who We Are
          </h1>
        </motion.div>

        {/* Content */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <DepthContainer depth="engraved" className="p-8 md:p-12">
            <h2 className="font-heading text-2xl md:text-3xl mb-6">
              Adonnow Trading Limited
            </h2>
            
            <div className="space-y-6 text-text-primary font-body">
              <p>
                Adonnow Trading Limited is a Nairobi-based mineral trading company specializing in the 
                export of strategic commodities from East Africa to international markets.
              </p>
              
              <p>
                Our operations encompass the sourcing, verification, and facilitation of trade in 
                copper cathodes, tantalum ore (coltan), refined gold, and Tanzanian gemstones. 
                We maintain direct relationships with verified mining operations and certified 
                processing facilities across the region.
              </p>
              
              <p>
                The company serves institutional buyers, industrial consumers, and commodity traders 
                requiring reliable access to African mineral resources. All transactions adhere to 
                international compliance standards and regional export regulations.
              </p>
              
              <p className="text-text-secondary">
                Headquarters: Nairobi, Kenya<br />
                Trading Desk: +254 707 513 272<br />
                Correspondence: adonnowtrading@gmail.com
              </p>
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
            onClick={() => navigate("/our-vision")}
          >
            Our Vision
          </NeuButton>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
