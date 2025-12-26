import { motion } from "framer-motion";
import Logo from "@/components/Logo";
import DepthContainer from "@/components/DepthContainer";
import NeuButton from "@/components/NeuButton";
import { ArrowRight, Globe, Users, Award, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const timeline = [
  { year: "2010", event: "Founded in Nairobi, Kenya" },
  { year: "2015", event: "Expanded to international markets" },
  { year: "2018", event: "Achieved LME certification" },
  { year: "2022", event: "Launched blockchain traceability" },
  { year: "2024", event: "Serving 50+ global clients" },
];

const WhoWeAre = () => {
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
            Who We Are
          </h1>
          <p className="text-text-secondary font-body text-lg max-w-2xl mx-auto haptic-text-1">
            A legacy of excellence in mineral trading, bridging African resources 
            with global markets through ethical practices and unmatched expertise.
          </p>
        </motion.div>

        {/* Philosophy */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <DepthContainer tier={4} className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-heading text-3xl text-text-highlight mb-4 haptic-text-2">
                  Our Philosophy
                </h2>
                <p className="text-text-secondary font-body mb-4 haptic-text-1">
                  At Adonnow Trading Limited, we believe that mineral trading is more 
                  than commerce—it's a responsibility. Every transaction represents 
                  a commitment to ethical sourcing, community development, and 
                  environmental stewardship.
                </p>
                <p className="text-text-muted font-body haptic-text-1">
                  From the mines of Tanzania to the trading floors of London and 
                  Shanghai, we maintain the highest standards of integrity and 
                  transparency.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Globe, label: "Global Reach" },
                  { icon: Users, label: "Expert Team" },
                  { icon: Award, label: "Certified" },
                  { icon: TrendingUp, label: "Growth" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <DepthContainer key={i} tier={2} className="p-4 text-center">
                      <Icon className="mx-auto text-text-highlight mb-2" size={28} />
                      <span className="text-text-secondary font-body text-sm haptic-text-1">
                        {item.label}
                      </span>
                    </DepthContainer>
                  );
                })}
              </div>
            </div>
          </DepthContainer>
        </motion.section>

        {/* Timeline */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="font-heading text-2xl text-text-highlight mb-8 text-center haptic-text-2">
            Our Journey
          </h2>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <DepthContainer tier={1} className="p-4 flex items-center gap-4">
                  <span className="font-heading text-xl text-text-highlight haptic-text-2">
                    {item.year}
                  </span>
                  <div className="h-px flex-1 bg-depth-3" />
                  <span className="text-text-secondary font-body haptic-text-1">
                    {item.event}
                  </span>
                </DepthContainer>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <div className="text-center">
          <NeuButton
            variant="hero"
            size="lg"
            icon={<ArrowRight size={18} />}
            iconPosition="right"
            onClick={() => navigate("/our-vision")}
          >
            Discover Our Vision
          </NeuButton>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
