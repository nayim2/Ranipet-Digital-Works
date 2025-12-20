import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaChevronDown,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdLocationOn, MdCall } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

/* ================= SERVICES ================= */

const serviceOptions = [
  "Social Media Marketing (Meta, Instagram, Facebook)",
  "Google Ads / PPC",
  "SEO",
  "Website Design & Development",
  "Branding & Creative",
  "Content Marketing",
  "WhatsApp / Lead Generation Campaigns",
  "E-commerce Marketing",
];

/* ================= MAIN COMPONENT ================= */

const MarketingAuditWithForm = () => {
  const [services, setServices] = useState([]);
  const [open, setOpen] = useState(false);
  const [agree, setAgree] = useState(false);

  const handleServiceChange = (service) => {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <section id="lead-form" className="bg-black text-white py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-center order-2 md:text-left"
        >
          <span className="inline-block text-red-500 font-semibold tracking-widest text-sm">
            FREE MARKETING AUDIT
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Most Marketing Money Is Wasted —
            <span className="text-red-500"> Let’s Fix That</span>
          </h1>

          <p className="text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
            After thousands of audits, we found that{" "}
            <span className="text-red-400 font-semibold">
              over 60% of marketing spend
            </span>{" "}
            goes to waste. We identify the leaks and show you exactly how to
            scale profitably.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 pt-4 flex flex-col ">
            
              <div className="flex gap-2 ">
                <MdLocationOn size={20} className="" />
       
              <p>No:5, Railway Station Road, Ranipet – 632401</p>
              </div>
           

           <div className="flex gap-2">
            <TfiEmail size={20} />
              <p>info@ranipetdigitalworks.com</p>
           </div>
         

           <div className="flex gap-2">
            <MdCall size={20} />
              <p> +91 63803 04674</p>
           </div>
           
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-6 justify-center md:justify-start">
            <SocialIcon>
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon>
              <FaInstagram />
            </SocialIcon>
            <SocialIcon>
              <FaTwitter />
            </SocialIcon>
            <SocialIcon>
              <FaYoutube />
            </SocialIcon>
          </div>
        </motion.div>

        {/* ================= RIGHT FORM ================= */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#0b0b0b] border border-white order-1 rounded-3xl p-8 shadow-2xl"
        >
          <h2 className="text-2xl font-bold mb-6">
            Get Your <span className="text-red-500">Free Audit</span>
          </h2>

          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input label="Full Name *" required />
              <Input label="Email Address *" type="email" required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Phone */}
              <div>
                <label className="text-sm text-gray-400 mb-1 block">
                  Phone Number *
                </label>
                <div className="flex items-center border border-white rounded-xl overflow-hidden">
                  <span className="px-3 text-sm text-gray-400">+91</span>
                  <input
                    type="tel"
                    required
                    className="flex-1 bg-transparent px-4 py-3 text-sm focus:outline-none text-white"
                  />
                </div>
              </div>

              {/* Services */}
              <div className="relative">
                <label className="text-sm text-gray-400 mb-1 block">
                  Services Interested In *
                </label>

                <button
                  type="button"
                  onClick={() => setOpen(!open)}
                  className="w-full bg-transparent border border-white rounded-xl px-4 py-3 flex justify-between items-center text-sm text-white"
                >
                  <span className="truncate">
                    {services.length ? services.join(", ") : "Select services"}
                  </span>
                  <FaChevronDown
                    className={`transition ${open ? "rotate-180" : ""}`}
                  />
                </button>

                {open && (
                  <div className="absolute z-20 mt-2 w-full bg-black border border-white rounded-xl p-2 max-h-56 overflow-y-auto">
                    {serviceOptions.map((service) => (
                      <label
                        key={service}
                        className="flex items-center gap-3 px-3 py-2 hover:bg-red-600/10 rounded-lg cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={services.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="accent-red-600"
                        />
                        <span className="text-sm text-gray-300">{service}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <Input label="Company / Business Name" />
            <Input label="Website URL (optional)" />

            <div>
              <label className="text-sm text-gray-400 mb-1 block">
                Message *
              </label>
              <textarea
                rows={4}
                className="w-full bg-transparent border border-white rounded-xl px-4 py-3 text-sm resize-none focus:outline-none text-white"
              />
            </div>

            {/* ✅ CONSENT CHECKBOX (FIXED) */}
            <label className="flex items-start gap-3 text-sm text-gray-400">
              <input
                type="checkbox"
                checked={agree}
                onChange={() => setAgree(!agree)}
                className="mt-1 accent-red-600"
                required
              />
              <span>
                I agree to be contacted regarding my enquiry and accept the
                privacy policy.
              </span>
            </label>

            <button
              type="submit"
              disabled={!agree}
              className={`w-full py-3 rounded-xl font-semibold transition ${
                agree
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-red-600 cursor-not-allowed"
              }`}
            >
              Get Free Audit
            </button>
          </form>
        </motion.div>
      </div>

      {/* Watermark */}
      <h1 className="mt-16 text-center text-[50px] sm:text-[80px] md:text-[110px] font-bold text-white/5 select-none">
        Ranipet Digital Works
      </h1>
    </section>
  );
};

export default MarketingAuditWithForm;

/* ================= REUSABLE COMPONENTS ================= */

const Input = ({ label, type = "text", required }) => (
  <div>
    <label className="text-sm text-gray-400 mb-1 block">{label}</label>
    <input
      type={type}
      required={required}
      className="w-full bg-transparent border border-white rounded-xl px-4 py-3 text-sm focus:outline-none text-white"
    />
  </div>
);

const Info = ({ icon, title, children }) => (
  <div className="flex gap-4 items-start">
    <div className="bg-white hover:bg-red-700 cursor-pointer text-black p-3 rounded-full">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-white">{title}</h4>
      <p className="text-gray-400 text-sm">{children}</p>
    </div>
  </div>
);

const SocialIcon = ({ children }) => (
  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black cursor-pointer hover:bg-red-700 transition cursor-pointer">
    {children}
  </div>
);
