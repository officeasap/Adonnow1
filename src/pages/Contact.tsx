import { motion } from "framer-motion";
import { useState } from "react";
import DepthContainer from "@/components/DepthContainer";
import NeuButton from "@/components/NeuButton";
import { Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Inquiry submitted. Our team will respond within 24 hours.");
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      mineral: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-canvas pt-20 md:pt-28 pb-24 md:pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="font-heading text-4xl md:text-5xl mb-4">
            Contact Us
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1 space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <DepthContainer depth="engraved" className="p-6">
              <h3 className="font-heading text-lg mb-4">Headquarters</h3>
              <p className="text-text-primary font-body text-sm mb-2">
                Adonnow Trading Limited
              </p>
              <p className="text-text-secondary font-body text-sm">
                PO BOX 667-00523<br />
                Nairobi, Kenya
              </p>
            </DepthContainer>

            <DepthContainer depth="engraved" className="p-6">
              <h3 className="font-heading text-lg mb-4">Trading Desk</h3>
              <a 
                href="tel:+254707513272"
                className="block text-text-highlight font-body text-lg mb-2 hover:underline"
              >
                +254 707 513 272
              </a>
              <p className="text-text-secondary font-body text-xs">
                Monday - Friday, 08:00 - 18:00 EAT
              </p>
            </DepthContainer>

            <DepthContainer depth="engraved" className="p-6">
              <h3 className="font-heading text-lg mb-4">Correspondence</h3>
              <a 
                href="mailto:adonnowtrading@gmail.com"
                className="block text-text-highlight font-body text-sm hover:underline break-all"
              >
                adonnowtrading@gmail.com
              </a>
              <p className="text-text-secondary font-body text-xs mt-2">
                Response within 24 hours
              </p>
            </DepthContainer>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <DepthContainer depth="engraved" className="p-6 md:p-8">
              <h2 className="font-heading text-2xl mb-6">
                Send Inquiry
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-text-secondary font-body text-sm mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full depth-pressed px-4 py-3 rounded-[18px] bg-transparent text-text-primary font-body focus:outline-none"
                      placeholder="Full name"
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
                      className="w-full depth-pressed px-4 py-3 rounded-[18px] bg-transparent text-text-primary font-body focus:outline-none"
                      placeholder="Company name"
                    />
                  </div>
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
                      required
                      className="w-full depth-pressed px-4 py-3 rounded-[18px] bg-transparent text-text-primary font-body focus:outline-none"
                      placeholder="email@company.com"
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
                      className="w-full depth-pressed px-4 py-3 rounded-[18px] bg-transparent text-text-primary font-body focus:outline-none"
                      placeholder="+254..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-text-secondary font-body text-sm mb-2">
                    Mineral Interest
                  </label>
                  <select
                    name="mineral"
                    value={formData.mineral}
                    onChange={handleInputChange}
                    className="w-full depth-pressed px-4 py-3 rounded-[18px] bg-depth-pressed text-text-primary font-body focus:outline-none"
                  >
                    <option value="">Select mineral...</option>
                    <option value="copper">Copper Cathode</option>
                    <option value="coltan">Coltan</option>
                    <option value="gold">Gold</option>
                    <option value="tanzanite">Tanzanite</option>
                    <option value="multiple">Multiple / Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-text-secondary font-body text-sm mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full depth-pressed px-4 py-3 rounded-[18px] bg-transparent text-text-primary font-body focus:outline-none resize-none"
                    placeholder="Describe your requirements, quantities, timelines..."
                  />
                </div>

                <NeuButton
                  variant="raised"
                  size="lg"
                  type="submit"
                  icon={<Send size={18} />}
                  className="w-full justify-center"
                >
                  Submit Inquiry
                </NeuButton>
              </form>
            </DepthContainer>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
