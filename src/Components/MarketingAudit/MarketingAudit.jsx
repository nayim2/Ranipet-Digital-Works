import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { motion } from "framer-motion";

const MarketingAudit = () => {
  const [visible, setVisible] = useState(false);

  const handleLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="explore"
      className="relative text-white flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 py-10 overflow-hidden"
    >
      {/* === Left Image Animation === */}
      <motion.div
        className="flex justify-center items-center w-full md:w-1/2 mb-10 md:mb-0 relative"
        onViewportEnter={() => setVisible(true)}
        onViewportLeave={() => setVisible(false)}
        viewport={{ amount: 0.2 }}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={
          visible
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 50, scale: 0.9 }
        }
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="relative w-72 sm:w-96 md:w-[420px]">
          <img
            src={assets.money5}
            alt="Marketing Audit"
            className="object-cover relative z-10"
          />
        </div>
      </motion.div>

      {/* === Right Content Animation === */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left space-y-6 relative z-10"
        initial="hidden"
        animate={visible ? "show" : "hidden"}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.18 },
          },
        }}
      >
        {/* Tag */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="inline-block text-sm sm:text-base text-red-500 py-2 rounded-full font-semibold tracking-wide"
        >
          FREE MARKETING AUDIT
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 25 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug"
        >
          Most Marketing Money Are Wasted—
          <span className="text-red-500"> Let’s Fix That</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-xl"
        >
          After thousands of audits, we’ve found that{" "}
          <span className="text-red-400 font-semibold">60% of marketing spend</span>{" "}
          goes to waste. We’ll show you exactly where yours is leaking — and how
          to fix it fast.
        </motion.p>

        {/* Button */}
        <motion.button
          variants={{
            hidden: { opacity: 0, y: 25 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
          onClick={() => handleLinkClick("lead-form")}
          className="bg-red-700 hover:bg-red-600 cursor-pointer text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
        >
          Get Your Free Marketing Audit
        </motion.button>
      </motion.div>
    </section>
  );
};

export default MarketingAudit;
