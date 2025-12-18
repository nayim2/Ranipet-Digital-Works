import React from "react";
import { assets } from "../../../assets/assets";

const SmmLead = () => {
  const handleLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="explore"
      className="relative text-white flex flex-col md:flex-row items-center justify-center md:justify-between px-6 sm:px-10 md:px-16 py-12 overflow-hidden"
    >
      {/* === Left Image (Hidden on Mobile) === */}
      <div className="hidden md:flex justify-center items-center w-full md:w-1/2 md:mb-0 relative">
        <div className="relative w-72 sm:w-96 md:w-[420px]">
          <img
            src={assets.money5}
            alt="Grow Your Brand Illustration"
            className="object-cover relative z-10 brightness-75"
          />
        </div>
      </div>

      {/* === Right Content === */}
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start space-y-6 relative z-10">
        <div className="inline-block text-sm sm:text-base text-red-500 rounded-full font-semibold tracking-wide">
          BOOST YOUR BRAND
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
          Ready to <span className="text-red-500">Grow Your Brand</span> Online?
        </h1>

        <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-xl">
          Partner with us and watch your social media presence transform.{" "}
          <span className="text-red-400 font-semibold">
            Creative, targeted, and result-driven campaigns
          </span>{" "}
          are just a call away. Let’s take your brand to the next level together.
        </p>

        <button
          onClick={() => handleLinkClick("lead-form")}
          className="bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
        >
          Contact Us Today
        </button>
      </div>
    </section>
  );
};

export default SmmLead;
