import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { id: 1, title: "Digital Marketing Strategy", image: assets.DIGITAL, to: "/services/digital-marketing" },
  { id: 2, title: "Social Media Marketing", image: assets.SOCIAL, to: "/services/social-media" },
  { id: 3, title: "Search Engine Optimization (SEO)", image: assets.SEO, to: "/services/seo" },
  { id: 4, title: "Branding & Creative Design", image: assets.BRANDING, to: "/services/branding" },
  { id: 5, title: "Content Marketing", image: assets.CONTENT, to: "/services/content-marketing" },
  { id: 6, title: "Web Design & Development", image: assets.WEBSITE, to: "/services/web-development" },
  { id: 7, title: "App Development & UI/UX Design", image: assets.CONTENT, to: "/services/app-development" },
  { id: 8, title: "Media, Analytics & Automation", image: assets.MEDIA, to: "/services/media-analytics" },
];

const Services = () => {
  const [visible, setVisible] = useState(false);

  return (
    <section className="bg-black p-8 px-4 md:px-12 lg:px-24">
      {/* Section Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-wide">
          Our Services
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Explore our wide range of creative and digital services crafted to elevate your brand.
        </p>
      </div>

      {/* Services Grid with Scroll IN + Scroll OUT effect */}
      <motion.div
        id="services"
        className="
          grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 
          justify-items-center items-center 
          gap-y-8 md:gap-x-8
          lg:gap-x-32 lg:gap-y-10
          max-w-[1400px] mx-auto
        "
        onViewportEnter={() => setVisible(true)}
        onViewportLeave={() => setVisible(false)}
        viewport={{ amount: 0.2 }} // detect scroll both directions
      >
        <AnimatePresence>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={
                visible
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 40 }
              }
              exit={{ opacity: 0, y: 40 }}
              transition={{
                duration: 0.45,
                delay: index * 0.15, // stagger animation
                ease: "easeOut",
              }}
            >
              <Link
                to={service.to}
                className="
                  relative group overflow-hidden 
                  h-[150px] w-[150px] md:h-[200px] md:w-[200px] 
                  lg:h-[335px] lg:w-[335px]
                  cursor-pointer flex items-center justify-center
                "
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform 
                             group-hover:scale-110 
                             transition-transform duration-[1600ms] ease-in-out"
                />

                <div className="absolute inset-0 bg-black/60"></div>

                <div className="absolute inset-0 flex items-center justify-center text-center px-3">
                  <h3 className="text-white font-semibold text-[15px] sm:text-[17px] md:text-[18px]">
                    {service.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Services;
