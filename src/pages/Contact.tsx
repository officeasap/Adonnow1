import { useState } from "react";
import { motion } from "framer-motion";
import DepthContainer from "@/components/DepthContainer";
import InstitutionalButton from "@/components/InstitutionalButton";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    mineralInterest: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Institutional inquiry submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-canvas pt-20 pb-16 px-4 contact-section">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h1 className="font-heading text-4xl text-text-primary mb-4">
            Institutional Contact
          </h1>
          <p className="font-body text-text-secondary max-w-4xl">
            Engage with Adonnow Trading Limited regarding mineral procurement,
            verification, logistics coordination, and long-term institutional
            supply relationships.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Inquiry Form */}
          <div className="contact-form-container">
            <h2 className="font-heading text-2xl text-text-primary mb-8">
              Submit Inquiry
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="contact-form-group">
                <label className="contact-label">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-input"
                  placeholder="Enter full name"
                />
              </div>

              <div className="contact-form-group">
                <label className="contact-label">
                  Company / Institution <span className="required">*</span>
                </label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="contact-input"
                  placeholder="Company or institution name"
                />
              </div>

              <div className="contact-form-grid">
                <div className="contact-form-group">
                  <label className="contact-label">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-input"
                    placeholder="institutional@email.com"
                  />
                </div>

                <div className="contact-form-group">
                  <label className="contact-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="contact-input"
                    placeholder="+254 XXX XXX XXX"
                  />
                </div>
              </div>

              <div className="contact-form-group">
                <label className="contact-label">
                  Mineral Interest <span className="required">*</span>
                </label>
                <select
                  name="mineralInterest"
                  value={formData.mineralInterest}
                  onChange={handleChange}
                  required
                  className="contact-input contact-select"
                >
                  <option value="">Select mineral category</option>
                  <option value="gold">Gold</option>
                  <option value="tanzanite">Tanzanite</option>
                  <option value="copper">Copper Cathode</option>
                  <option value="coltan">Coltan</option>
                  <option value="smelting">Industrial Smelting</option>
                  <option value="vault">Vault Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="contact-form-group">
                <label className="contact-label">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="contact-input contact-textarea"
                  placeholder="Provide details about your inquiry, including quantity requirements, quality specifications, timeline, and any relevant documentation..."
                />
              </div>

              <div className="contact-form-group">
                <button
                  type="submit"
                  className="contact-submit-btn"
                >
                  Submit Institutional Inquiry
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-card">
            <h2 className="font-heading text-2xl text-text-primary mb-8">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-lg text-text-primary mb-2">
                  Headquarters
                </h3>
                <p className="text-text-secondary">
                  Adonnow Trading Limited<br />
                  Kilimani, Nairobi KENYA<br />
                  East Africa Regional Office<br />
                  Dar es Salaam, TANZANIA
                </p>
              </div>

              <div>
                <h3 className="font-heading text-lg text-text-primary mb-2">
                  Operating Hours
                </h3>
                <p className="text-text-secondary">
                  Monday – Friday<br />
                  08:00 – 18:00 EAT<br />
                  Saturday: 09:00 – 13:00 EAT<br />
                  Sunday: Closed
                </p>
              </div>

              <div>
                <h3 className="font-heading text-lg text-text-primary mb-2">
                  Response Standards
                </h3>
                <p className="text-text-secondary">
                  Verified institutional inquiries: Within 2 business hours<br />
                  General inquiries: Within 24 hours<br />
                  All communications are encrypted by default
                </p>
              </div>

              <div>
                <h3 className="font-heading text-lg text-text-primary mb-2">
                  Secure Correspondence
                </h3>
                <p className="text-text-secondary">
                  <a href="mailto:info@adonnowtrading.com" className="text-text-highlight hover:text-text-primary transition-colors">
                    info@adonnow.com
                  </a><br />
                  <a href="tel:+254707513272" className="text-text-highlight hover:text-text-primary transition-colors">
                    +254 707 513 272 <br/>
                    +255 772 832 777
                  </a>
                </p>

              </div>
            </div>

            <div className="mt-10 aspect-video overflow-hidden rounded-lg">
              <img
                src="/mineral-images/minerals1.png"
                alt="Adonnow Trading Operations"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
