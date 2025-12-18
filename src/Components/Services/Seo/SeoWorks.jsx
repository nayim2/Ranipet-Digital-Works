import React from "react";
import {
  FaSearch,
  FaKey,
  FaCogs,
  FaPenNib,
  FaChartLine,
} from "react-icons/fa";
import { assets } from "../../../assets/assets";

const SeoWorks = () => {
const steps = [
  {
    icon: <FaSearch size={28} className="text-red-500 text-xl" />,
    title: "Website Audit & Research",
    desc: "We analyze your website’s structure, speed, and competitors to uncover SEO opportunities for better rankings.",
  },
  {
    icon: <FaKey size={28} className="text-red-500 text-xl" />,
    title: "Keyword & Market Strategy",
    desc: "We find the most relevant, high-intent keywords aligned with your audience and business goals.",
  },
  {
    icon: <FaCogs size={28} className="text-red-500 text-xl" />,
    title: "On-Page Optimization",
    desc: "We optimize meta tags, headings, and content to improve visibility, site speed, and user experience.",
  },
  {
    icon: <FaPenNib size={28} className="text-red-500 text-xl" />,
    title: "Content Creation & Link Building",
    desc: "We create SEO-rich content and earn quality backlinks to boost your site’s authority and reach.",
  },
  {
    icon: <FaChartLine size={28} className="text-red-500 text-xl" />,
    title: "Tracking & Reporting",
    desc: "We track keyword rankings and traffic, refining strategies for consistent, long-term SEO growth.",
  },
];


  return (
    <section className="relative pt-8 md:pt-16 px-6 md:px-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 min-h-[700px]">
        {/* Left Side Content */}
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center md:text-left mb-6">
            How We Work
          </h2>
          <p className="text-gray-400 text-lg mb-10 text-center md:text-left max-w-lg">
            We follow a transparent, step-by-step SEO process designed to deliver
            long-term, measurable results.
          </p>

          {/* Vertical Timeline */}
          <div className="relative mt-8">
            {/* Vertical Line */}
            <div className="absolute left-7 top-7 bottom-24 md:bottom-10 border-l-2 border-dashed border-red-500"></div>

            {/* Steps */}
            <div className="space-y-6 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 relative">
                  {/* Icon circle */}
                  <div className="relative z-10 flex-shrink-0 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-black/30 backdrop-blur-md border-2 border-red-500 flex items-center justify-center shadow-md">
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

        {/* Right Side Image */}
        <div className="flex items-center justify-center h-full">
          <img
            src={assets.social} // Replace with your SEO-related image
            alt="SEO Process"
            className="rounded-2xl h-[450px] w-[450px] object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default SeoWorks;
