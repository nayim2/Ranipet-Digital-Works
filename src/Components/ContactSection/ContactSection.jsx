import React, { useState } from "react";
import {
  FaArrowDown,
  FaChevronDown,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdLocationOn, MdCall } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

export default function ContactForm() {
  const [services, setServices] = useState([]);
  const [open, setOpen] = useState(false);

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

  const handleServiceChange = (service) => {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full bg-white/5 rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* LEFT SECTION */}
        <div className="md:w-1/2 bg-white/10 p-8 md:p-10">
          <h2 className="text-3xl font-bold text-red-600 mb-3">Get in Touch</h2>
          <p className="text-white mb-8">
            Have a project in mind? Fill out the form and our team will contact
            you shortly.
          </p>

          <div className="space-y-6 text-white">
            <Info icon={<MdLocationOn size={20} />} title="Head Office">
              No:5, Railway Station Road,
              <br />
              Ranipet – 632401
            </Info>

            <Info icon={<TfiEmail size={18} />} title="Email Us">
              info@ranipetdigitalworks.com
            </Info>

            <Info icon={<MdCall size={18} />} title="Call Us">
              +91 63803 04674
            </Info>
          </div>

          <div className="mt-10">
            <h4 className="font-semibold text-gray-800 mb-4">
              Follow us on social media
            </h4>
            <div className="flex gap-4">
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
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="md:w-1/2 p-8 md:p-10">
          <h2 className="text-2xl font-bold text-white mb-6">
            Send us a message
          </h2>

          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
              <Input
                label="Full Name *"
                // placeholder="Enter your full name"
                required
                
              />
              <Input
                label="Email Address *"
                type="email"
                // placeholder="Enter your email"
                required
              />
            </div>

            {/* Phone + Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <div className="flex rounded-xl overflow-hidden border border-red-100 focus-within:ring-2 focus-within:ring-red-500">
                  <div className="px-3 flex items-center text-sm text-white">
                    +91
                  </div>
                  <input
                    type="tel"
                    required
                    // placeholder="Phone number"
                    className="flex-1 px-4 py-3 text-sm focus:outline-none text-white"
                  />
                </div>
              </div>

              {/* Services Dropdown */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Services Interested In *
                </label>

                <button
                  type="button"
                  onClick={() => setOpen(!open)}
                  className="w-full rounded-xl px-4 py-3 text-sm flex justify-between items-center border border-gray-300 hover:border-red-500 focus:ring-2 focus:ring-red-500 transition"
                >
                  <span className="text-white truncate">
                    {services.length ? services.join(", ") : "Select services"}
                  </span>

                  <span
                    className={`text-white transition-transform duration-200 ${
                      open ? "rotate-180" : ""
                    }`}
                  >
                    <FaChevronDown size={14} />
                  </span>
                </button>

                {open && (
                  <div className="absolute z-20 mt-2 w-full bg-white rounded-xl shadow-lg border p-2 max-h-60 overflow-y-auto">
                    {serviceOptions.map((service) => (
                      <label
                        key={service}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-50 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={services.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="accent-red-600"
                        />
                        <span className="text-sm text-gray-700">{service}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
              <Input
                label="Company / Business Name"
                placeholder="Company name"
              />
              <Input
                label="Website URL (optional)"
                placeholder="https://example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2 font-no">
                Message *
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your requirements..."
                className="w-full rounded-xl border text-white border-gray-300 px-4 py-3 text-sm resize-none focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" className="accent-red-600" />
              <span>I agree to be contacted regarding my enquiry</span>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
       {/* Watermark */}
      <h1 className="text-[28px] sm:text-[60px] md:text-[90px] lg:text-[110px] text-center font-extrabold text-white/10 select-none leading-tight p-2">
        RANIPET DIGITAL WORKS
      </h1>
    </div>
  );
}

/* Reusable Components */
const Input = ({ label, type = "text", placeholder, required }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      required={required}
      placeholder={placeholder}
      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
    />
  </div>
);

const Info = ({ icon, title, children }) => (
  <div className="flex items-start gap-4">
    <div className="bg-red-600 text-white p-3 rounded-full">{icon}</div>
    <div>
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <p className="text-gray-600 text-sm">{children}</p>
    </div>
  </div>
);

const SocialIcon = ({ children }) => (
  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700 cursor-pointer transition">
    {children}
  </div>
);


     
  
