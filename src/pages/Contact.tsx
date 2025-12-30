import { motion } from "framer-motion";
import { useState } from "react";
import DepthContainer from "@/components/DepthContainer";
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
            Contact Us
          </h1>
          <p className="text-text-secondary font-body text-sm md:text-base max-w-2xl mx-auto">
            Get in touch with our trading desk for pricing, availability, and sourcing inquiries
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Contact Information - Left Side */}
          <motion.div
            className="lg:col-span-1 space-y-4 md:space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {/* Headquarters Card */}
            <DepthContainer depth="engraved" className="p-5 md:p-6 shadow-permanent">
              <h3 className="font-heading text-base md:text-lg mb-3 md:mb-4 text-text-highlight">Headquarters</h3>
              <p className="text-text-primary font-body text-sm md:text-base mb-2">
                Adonnow Trading Limited
              </p>
              <p className="text-text-secondary font-body text-xs md:text-sm leading-relaxed">
                PO BOX 667-00523<br />
                Yaya Center | Kilimani<br />
                Nairobi, Kenya
              </p>
            </DepthContainer>

            {/* Trading Desk Card */}
            <DepthContainer depth="engraved" className="p-5 md:p-6 shadow-permanent">
              <h3 className="font-heading text-base md:text-lg mb-3 md:mb-4 text-text-highlight">Trading Desk</h3>
              <a 
                href="tel:+254707513272"
                className="block text-text-highlight font-body text-base md:text-lg mb-2 transition-colors duration-200"
              >
                +254 707 513 272
              </a>
              <p className="text-text-secondary font-body text-xs md:text-sm">
                Monday - Friday<br />
                08:00 - 18:00 EAT
              </p>
            </DepthContainer>

            {/* Correspondence Card */}
            <DepthContainer depth="engraved" className="p-5 md:p-6 shadow-permanent">
              <h3 className="font-heading text-base md:text-lg mb-3 md:mb-4 text-text-highlight">Correspondence</h3>
              <div className="space-y-2">
                <a 
                  href="mailto:info@adonnowtrading.com"
                  className="block text-text-highlight font-body text-sm break-all transition-colors duration-200"
                >
                  info@adonnowtrading.com
                </a>
                <a 
                  href="mailto:care@adonnowtrading.com"
                  className="block text-text-highlight font-body text-sm break-all transition-colors duration-200"
                >
                  care@adonnowtrading.com
                </a>
              </div>
              <p className="text-text-secondary font-body text-xs md:text-sm mt-3 md:mt-4">
                Response within 24 hours
              </p>
            </DepthContainer>

            {/* Business Hours Card */}
            <DepthContainer depth="engraved" className="p-5 md:p-6 shadow-permanent">
              <h3 className="font-heading text-base md:text-lg mb-3 md:mb-4 text-text-highlight">Service Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-text-secondary font-body text-xs md:text-sm">Monday - Friday</span>
                  <span className="text-text-primary font-body text-xs md:text-sm">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary font-body text-xs md:text-sm">Saturday</span>
                  <span className="text-text-primary font-body text-xs md:text-sm">09:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary font-body text-xs md:text-sm">Sunday</span>
                  <span className="text-text-primary font-body text-xs md:text-sm">Emergency Only</span>
                </div>
              </div>
            </DepthContainer>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <DepthContainer depth="engraved" className="p-5 md:p-8 shadow-permanent">
              <h2 className="font-heading text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 text-text-highlight">
                Send Inquiry
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                {/* Name & Company Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      className="w-full shadow-permanent-input px-4 py-3 rounded-[18px] text-text-primary font-body focus:outline-none bg-transparent placeholder:text-text-secondary/50"
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
                      className="w-full shadow-permanent-input px-4 py-3 rounded-[18px] text-text-primary font-body focus:outline-none bg-transparent placeholder:text-text-secondary/50"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                {/* Email & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      className="w-full shadow-permanent-input px-4 py-3 rounded-[18px] text-text-primary font-body focus:outline-none bg-transparent placeholder:text-text-secondary/50"
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
                      className="w-full shadow-permanent-input px-4 py-3 rounded-[18px] text-text-primary font-body focus:outline-none bg-transparent placeholder:text-text-secondary/50"
                      placeholder="+254..."
                    />
                  </div>
                </div>

                {/* Mineral Interest */}
                <div>
                  <label className="block text-text-secondary font-body text-sm mb-2">
                    Mineral Interest
                  </label>
                  <select
                    name="mineral"
                    value={formData.mineral}
                    onChange={handleInputChange}
                    className="w-full shadow-permanent-input px-4 py-3 rounded-[18px] text-text-primary font-body focus:outline-none bg-transparent appearance-none"
                  >
                    <option value="" className="bg-depth-pressed">Select mineral...</option>
                    <option value="copper" className="bg-depth-pressed">Copper Cathode</option>
                    <option value="coltan" className="bg-depth-pressed">Coltan</option>
                    <option value="gold" className="bg-depth-pressed">Gold</option>
                    <option value="tanzanite" className="bg-depth-pressed">Tanzanite</option>
                    <option value="multiple" className="bg-depth-pressed">Multiple / Other</option>
                  </select>
                </div>

                {/* Message */}
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
                    className="w-full shadow-permanent-input px-4 py-3 rounded-[18px] text-text-primary font-body focus:outline-none bg-transparent placeholder:text-text-secondary/50 resize-none"
                    placeholder="Describe your requirements, quantities, timelines..."
                  />
                </div>

                {/* Additional Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-text-secondary font-body text-sm mb-2">
                      Inquiry Type
                    </label>
                    <select
                      name="inquiryType"
                      onChange={handleInputChange}
                      className="w-full shadow-permanent-input px-4 py-3 rounded-[18px] text-text-primary font-body focus:outline-none bg-transparent appearance-none"
                    >
                      <option value="general" className="bg-depth-pressed">General Inquiry</option>
                      <option value="quote" className="bg-depth-pressed">Request Quote</option>
                      <option value="partnership" className="bg-depth-pressed">Partnership</option>
                      <option value="logistics" className="bg-depth-pressed">Logistics</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-text-secondary font-body text-sm mb-2">
                      Preferred Response
                    </label>
                    <select
                      name="responseType"
                      onChange={handleInputChange}
                      className="w-full shadow-permanent-input px-4 py-3 rounded-[18px] text-text-primary font-body focus:outline-none bg-transparent appearance-none"
                    >
                      <option value="email" className="bg-depth-pressed">Email</option>
                      <option value="phone" className="bg-depth-pressed">Phone Call</option>
                      <option value="whatsapp" className="bg-depth-pressed">WhatsApp</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full shadow-permanent-button px-6 py-3 md:py-4 rounded-[18px] text-text-primary font-body text-sm md:text-base"
                >
                  Submit Inquiry
                </button>
              </form>
            </DepthContainer>

            {/* Additional Contact Information */}
            <motion.div
              className="mt-6 md:mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <DepthContainer depth="engraved" className="p-5 md:p-6 shadow-permanent">
                <h3 className="font-heading text-base md:text-lg mb-3 md:mb-4 text-text-highlight">Response Time</h3>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-text-highlight mt-1.5 mr-3"></div>
                    <p className="text-text-secondary font-body text-sm">Initial response within 24 hours</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-text-highlight mt-1.5 mr-3"></div>
                    <p className="text-text-secondary font-body text-sm">Detailed proposals within 2-3 business days</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-text-highlight mt-1.5 mr-3"></div>
                    <p className="text-text-secondary font-body text-sm">Urgent inquiries flagged for immediate attention</p>
                  </div>
                </div>
              </DepthContainer>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Optimization Note */}
        <div className="mt-8 text-center lg:hidden">
          <p className="text-text-secondary font-body text-xs">
            Tap any field to begin. All form inputs have permanent raised effect.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;