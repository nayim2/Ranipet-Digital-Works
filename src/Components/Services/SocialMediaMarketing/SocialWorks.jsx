import React from "react";
import {
  FaSearch,
  FaPenNib,
  FaCameraRetro,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";
import { assets } from "../../../assets/assets";

const SocialWorks = () => {
  const steps = [
    {
      icon: <FaSearch size={28} className="text-red-500 text-xl" />,
      title: "Discover & Plan",
      desc: "Understand your brand, goals, and audience to build a strong foundation for success.",
    },
    {
      icon: <FaPenNib size={28} className="text-red-500 text-xl" />,
      title: "Strategy & Design",
      desc: "Craft creative campaigns that align with your business objectives and visual identity.",
    },
    {
      icon: <FaCameraRetro size={28} className="text-red-500 text-xl" />,
      title: "Create & Publish",
      desc: "Produce high-quality posts, videos, and ads that engage your target audience effectively.",
    },
    {
      icon: <FaChartLine size={28} className="text-red-500 text-xl" />,
      title: "Analyze & Optimize",
      desc: "Track campaign performance, refine strategies, and maximize overall impact.",
    },
    {
      icon: <FaUsers size={28} className="text-red-500 text-xl" />,
      title: "Grow & Convert",
      desc: "Build a loyal audience and turn engagement into measurable sales and growth.",
    },
  ];

  return (
    <section className="relative py-8 px-6 md:px-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 min-h-[700px]">
        {/* Left Side Content */}
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center md:text-left mb-14">
            How We Work
          </h2>

          {/* Line now contained and ends exactly at last icon */}
          <div className="relative mt-8">
            {/* Vertical Line behind icons */}
            <div className="absolute left-7 top-7 bottom-16 md:bottom-10 border-l-2 border-dashed border-red-500"></div>

            {/* Steps */}
            <div className="space-y-6 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 relative">
                  {/* Icon circle perfectly aligned to line */}
                  <div className="relative z-10 flex-shrink-0 flex flex-col items-center">
                    <div className="w-14 p- h-14 rounded-full bg-black/30 backdrop-blur-md border-2 border-red-500 flex items-center justify-center shadow-md">
                      {step.icon}
                    </div>
                  </div>

                  {/* Step Text */}
                  <div className="pt-1">
                    <h3 className="text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Image (centered perfectly) */}
        <div className="flex items-center justify-center h-full">
          <img
            src={assets.nayimImage4}
            alt="Working Process"
            className="rounded-2xl h-[450px] w-[450px] object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default SocialWorks;
