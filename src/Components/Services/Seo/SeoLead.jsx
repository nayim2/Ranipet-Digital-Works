import React from "react";
import { assets } from "../../../assets/assets";

const SeoLead = () => {
  const handleLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="explore"
      className="relative text-white flex flex-col md:flex-row items-center justify-center md:justify-between px-6 sm:px-10 md:px-16 py-16 overflow-hidden"
    >
      {/* === Left Image (Hidden on Mobile) === */}
      <div className="hidden md:flex justify-center items-center w-full md:w-1/2 md:mb-0 relative">
        <div className="relative w-72 sm:w-96 md:w-[420px]">
          <img
            src={assets.money5}
            alt="SEO Growth Illustration"
            className="object-cover relative z-10 brightness-75"
          />
        </div>
      </div>

      {/* === Right Content === */}
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start space-y-6 relative z-10">
        <div className="inline-block text-sm sm:text-base text-red-500 rounded-full font-semibold tracking-wide">
          ORGANIC GROWTH STARTS HERE
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
          Ready to <span className="text-red-500">Grow Organically?</span>
        </h1>

        <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-xl">
          Get found. Get leads. Get results.{" "}
          <span className="text-red-400 font-semibold">
            Let’s optimize your website for visibility, traffic, and conversions.
          </span>{" "}
          Watch your brand climb to the top of search results — naturally.
        </p>

        <button
          onClick={() => handleLinkClick("lead-form")}
          className="bg-gradient-to-r from-red-500 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
        >
          Book a Free SEO Audit 
        </button>
      </div>
    </section>
  );
};

export default SeoLead;
