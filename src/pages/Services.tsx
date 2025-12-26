import { motion } from "framer-motion";
import DepthContainer from "@/components/DepthContainer";
import NeuButton from "@/components/NeuButton";
import { ArrowRight, Briefcase, Calculator, Shield, Truck, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Briefcase,
    title: "Portfolio Management",
    description: "Comprehensive mineral portfolio management tailored to your investment goals and risk appetite.",
    features: ["Diversification strategy", "Market timing", "Performance tracking"],
  },
  {
    icon: Calculator,
    title: "Supply Chain Financing",
    description: "Flexible financing solutions to optimize your mineral trading operations and cash flow.",
    features: ["Trade finance", "Letter of credit", "Payment terms"],
  },
  {
    icon: Shield,
    title: "Commodity Hedging",
    description: "Protect your positions with sophisticated hedging strategies against price volatility.",
    features: ["Futures contracts", "Options strategies", "Risk mitigation"],
  },
  {
    icon: Truck,
    title: "Logistics & Export",
    description: "End-to-end logistics management from African mines to global destinations.",
    features: ["Customs clearance", "Secure transport", "Documentation"],
  },
  {
    icon: Users,
    title: "Consulting Services",
    description: "Expert advisory on market entry, compliance, and strategic partnerships in mineral trading.",
    features: ["Market analysis", "Due diligence", "Partnership facilitation"],
  },
];

const Services = () => {
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
            Our Services
          </h1>
          <p className="text-text-secondary font-body text-lg max-w-2xl mx-auto haptic-text-1">
            Comprehensive solutions for every stage of your mineral trading journey, 
            from sourcing to delivery.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <DepthContainer tier={2} className="p-6 h-full flex flex-col">
                    <div className="neu-raised w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-text-highlight" size={24} />
                    </div>
                    <h3 className="font-heading text-lg text-text-highlight mb-2 haptic-text-2">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary font-body text-sm mb-4 flex-grow haptic-text-1">
                      {service.description}
                    </p>
                    <ul className="space-y-1">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-text-muted font-body text-xs haptic-text-1"
                        >
                          <div className="w-1 h-1 rounded-full bg-depth-5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </DepthContainer>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <DepthContainer tier={4} className="p-8 text-center">
            <h2 className="font-heading text-2xl text-text-highlight mb-4 haptic-text-2">
              Ready to Get Started?
            </h2>
            <p className="text-text-secondary font-body mb-6 max-w-xl mx-auto haptic-text-1">
              Contact our team to discuss how we can support your mineral trading objectives.
            </p>
            <NeuButton
              variant="hero"
              size="lg"
              icon={<ArrowRight size={18} />}
              iconPosition="right"
              onClick={() => navigate("/contact")}
            >
              Contact Trading Desk
            </NeuButton>
          </DepthContainer>
        </motion.section>
      </div>
    </div>
  );
};

export default Services;
