import { motion } from "framer-motion";
import { useState } from "react";
import DepthContainer from "@/components/DepthContainer";
import NeuButton from "@/components/NeuButton";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { toast } from "sonner";

const contactMethods = [
  {
    icon: Phone,
    label: "Trading Desk",
    value: "+254 707 513 272",
    href: "tel:+254707513272",
    description: "24/7 Trading Support",
  },
  {
    icon: Mail,
    label: "Email",
    value: "adonnowtrading@gmail.com",
    href: "mailto:adonnowtrading@gmail.com",
    description: "Response within 24 hours",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "PO BOX 667-00523 Nairobi",
    href: "#",
    description: "East Africa Hub",
  },
];

const Contact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    mineral: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit form
      toast.success("Your inquiry has been submitted. Our team will contact you shortly.");
      setStep(1);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        mineral: "",
        message: "",
      });
    }
  };

  const canProceed = () => {
    if (step === 1) return formData.name && formData.email;
    if (step === 2) return formData.mineral;
    return formData.message;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-depth-void to-depth-1 pt-20 md:pt-28 pb-24 md:pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero - H1 gets gold */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-heading text-4xl md:text-5xl mb-4">
            Contact Us
          </h1>
          <p className="text-text-secondary font-body text-lg max-w-2xl mx-auto">
            Begin your journey with Adonnow. Our trading desk is ready to assist 
            with your mineral sourcing requirements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Methods */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <DepthContainer tier={2} className="p-5 flex items-center gap-4 hover:scale-[1.02] transition-transform">
                    <div className="neu-raised w-12 h-12 rounded-[18px] flex items-center justify-center">
                      <Icon className="text-text-highlight" size={22} />
                    </div>
                    <div>
                      <span className="block text-text-muted font-body text-xs uppercase tracking-wider">
                        {method.label}
                      </span>
                      <span className="block text-text-highlight font-heading text-lg">
                        {method.value}
                      </span>
                      <span className="block text-text-secondary font-body text-xs">
                        {method.description}
                      </span>
                    </div>
                  </DepthContainer>
                </motion.a>
              );
            })}

            {/* Office Hours */}
            <DepthContainer tier={1} className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="text-text-highlight" size={18} />
                <span className="text-text-secondary font-body text-sm uppercase tracking-wider">
                  Trading Hours
                </span>
              </div>
              <p className="text-text-muted font-body text-sm">
                Monday - Friday: 08:00 - 18:00 EAT<br />
                24/7 Emergency Line Available
              </p>
            </DepthContainer>
          </motion.div>

          {/* Contact Form - 3 Step Ritual */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <DepthContainer tier={4} className="p-6 md:p-8">
              {/* Step Indicator - no gold */}
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center flex-1">
                    <motion.div
                      className={`w-10 h-10 rounded-[18px] flex items-center justify-center font-heading text-lg ${
                        s <= step
                          ? "neu-hero text-text-highlight"
                          : "neu-sunken text-text-muted"
                      }`}
                      animate={s === step ? { scale: [1, 1.05, 1] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      {s}
                    </motion.div>
                    {s < 3 && (
                      <div
                        className={`flex-1 h-0.5 mx-2 ${
                          s < step ? "bg-depth-5" : "bg-depth-2"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Step 1: Your Details */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  {/* H3 - white, not gold */}
                  <h3 className="font-heading text-xl mb-6">
                    Your Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-text-secondary font-body text-sm mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full neu-sunken px-4 py-3 rounded-[18px] bg-transparent text-text-primary font-body focus:outline-none focus:ring-1 focus:ring-depth-5"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-text-secondary font-body text-sm mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full neu-sunken px-4 py-3 rounded-[18px] bg-transparent text-text-primary font-body focus:outline-none focus:ring-1 focus:ring-depth-5"
                        placeholder="Company name"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-text-secondary font-body text-sm mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full neu-sunken px-4 py-3 rounded-[18px] bg-transparent text-text-primary font-body focus:outline-none focus:ring-1 focus:ring-depth-5"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-text-secondary font-body text-sm mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full neu-sunken px-4 py-3 rounded-[18px] bg-transparent text-text-primary font-body focus:outline-none focus:ring-1 focus:ring-depth-5"
                          placeholder="+254..."
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Mineral Interest */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  {/* H3 - white, not gold */}
                  <h3 className="font-heading text-xl mb-6">
                    Mineral Interest
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-text-secondary font-body text-sm mb-2">
                        Select Mineral *
                      </label>
                      <select
                        name="mineral"
                        value={formData.mineral}
                        onChange={handleInputChange}
                        className="w-full neu-sunken px-4 py-3 rounded-[18px] bg-depth-1 text-text-primary font-body focus:outline-none focus:ring-1 focus:ring-depth-5"
                      >
                        <option value="">Choose a mineral...</option>
                        <option value="coltan">Coltan (Tantalum Ore)</option>
                        <option value="copper">Copper Cathode</option>
                        <option value="tanzanite">Tanzanite</option>
                        <option value="other">Other / Multiple</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {["Coltan", "Copper", "Tanzanite", "Other"].map((m) => (
                          <motion.button
                            key={m}
                            type="button"
                            className={`p-4 rounded-[18px] text-left transition-all ${
                              formData.mineral.toLowerCase() === m.toLowerCase()
                                ? "neu-sunken text-text-highlight"
                                : "neu-raised text-text-secondary hover:text-text-primary"
                            }`}
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              mineral: m.toLowerCase(),
                            }))
                          }
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="font-heading text-sm">{m}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Message */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  {/* H3 - white, not gold */}
                  <h3 className="font-heading text-xl mb-6">
                    Your Message
                  </h3>
                  <div>
                    <label className="block text-text-secondary font-body text-sm mb-2">
                      Tell us about your requirements *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full neu-sunken px-4 py-3 rounded-[18px] bg-transparent text-text-primary font-body focus:outline-none focus:ring-1 focus:ring-depth-5 resize-none"
                      placeholder="Describe your trading requirements, quantities, timelines..."
                    />
                  </div>
                </motion.div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-8">
                {step > 1 ? (
                  <NeuButton
                    variant="raised"
                    size="md"
                    onClick={() => setStep(step - 1)}
                  >
                    Back
                  </NeuButton>
                ) : (
                  <div />
                )}
                <NeuButton
                  variant="hero"
                  size="md"
                  icon={step === 3 ? <Send size={18} /> : undefined}
                  onClick={handleNextStep}
                  disabled={!canProceed()}
                >
                  {step === 3 ? "Submit Inquiry" : "Continue"}
                </NeuButton>
              </div>
            </DepthContainer>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
