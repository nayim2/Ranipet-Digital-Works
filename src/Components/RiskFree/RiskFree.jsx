import React, { useEffect, useState } from "react";
import "./risk.css";
import { assets } from "../../assets/assets";
import RegisterForm from "../ContactSection/RegisterForm";
import { motion } from "framer-motion";

const RiskFree = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleClose = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowPopup(false);
      setFadeOut(false);
    }, 300);
  };

  return (
    <sectio id="risk" className="relative text-white flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 py-8 overflow-hidden">

      {/* === Left Image === */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex justify-center items-center w-full md:w-1/2 mb-10 md:mb-0"
      >
        <div className="relative flex flex-col sm:flex-row items-center gap-6">
          <div className="relative w-72 sm:w-96 md:w-[420px]">
            <img
              src={assets.moneylogo}
              alt="Wallet illustration"
              className="object-cover relative z-10 brightness-75"
            />
          </div>
        </div>
      </motion.div>

      {/* === Right Content === */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 text-center md:text-left space-y-6 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block text-sm sm:text-base text-red-500 py-2 rounded-full font-regular tracking-wide font-reg"
        >
          RISK-FREE GUARANTEE
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold  leading-snug"
        >
          Get Results in <span className="text-red-500">90 Days</span>
          <br className="hidden sm:inline" /> Or You Don’t Pay
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-300 font-medium"
        >
          We Don’t Guess. We Audit, Prove, and Deliver.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 leading-relaxed text-sm sm:text-base  font-regular max-w-xl"
        >
          Get a free marketing audit to uncover where your money is being wasted
          and how to fix it fast. Even if you don’t work with us, you’ll receive
          a clear, actionable plan to grow smarter and faster. For qualified
          brands, we guarantee measurable growth within 90 days — or your money
          back. No fluff. No long contracts. Just results that matter.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          onClick={() => setShowPopup(true)}
          className="bg-red-700 hover:bg-red-600 cursor-pointer text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
        >
          Get Your Free Marketing Audit
        </motion.button>
      </motion.div>

      {/* Popup Modal */}
      {showPopup && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <RegisterForm onClose={handleClose} />
        </div>
      )}
    </sectio>
  );
};

export default RiskFree;
