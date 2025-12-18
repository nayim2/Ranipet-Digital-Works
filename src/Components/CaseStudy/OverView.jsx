import React from "react";
import { assets } from "../../assets/assets";

const OverView = () => {
  return (
    <section className="text-white px-6 sm:px-10 md:px-20 lg:px-32 py-10 flex flex-col md:flex-row items-center md:items-start gap-10">
      {/* Left Side – Text Content */}
      <div className="flex flex-col gap-8 md:w-3/5 w-full text-center md:text-left">
        {/* Overview Section */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold mb-3">Overview</h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-start">
            This project showcases professional experience in executing a
            digital marketing campaign for Prince Sultan University (PSU) in
            Saudi Arabia. The university was preparing to launch three new
            academic programs and required a strategic campaign to generate
            high-quality student inquiries within a short timeframe.
          </p>
        </div>

        {/* Challenge Section */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold mb-3">Challenge</h1>
          <ul className="space-y-4 text-base text-gray-400 leading-relaxed">
            {[
              "Build awareness and generate leads for the new academic programs.",
              "Effectively target both local and regional audiences.",
              "Reach a niche academic audience with tailored messaging.",
              "Manage multiple platforms simultaneously (Meta, TikTok, Google Ads).",
              "Achieve measurable results within a limited campaign period.",
            ].map((item, index) => (
              <li key={index} className="flex gap-2 md:gap-3">
                {/* Circle bullet */}
                <span className="w-3 h-3 mt-2.5 rounded-full border-3 border-gray-100/60 flex-shrink-0"></span>
                <p className="text-justify">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Side – Image */}
      <div className="md:w-2/5 w-full flex justify-center md:justify-end">
        <img
          src={assets.client1}
          alt="Project Overview"
          className="rounded-2xl h-100 w-100 max-w-sm sm:max-w-md md:max-w-lg object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default OverView;
