import React from "react";
import { assets } from "../../../assets/assets";

const SeoAgency = () => {
  return (
    <section className="text-white min-h-screen px-4 sm:px-6 lg:px-12 py-12 sm:py-16 bg-black">
      {/* ====== Section 1: Drive Long-Term Growth with Strategic SEO ====== */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-16 max-w-7xl mx-auto">
        {/* === Left Side (Content) === */}
        <div className="w-full lg:w-3/4 space-y-6 text-gray-300 leading-relaxed">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center lg:text-left">
            Drive Long-Term Growth with Strategic SEO
          </h1>

          <p className="text-base text-gray-400 sm:text-lg text-justify">
            Want your business to appear exactly when your customers are searching?
            Our SEO services help you rank higher, attract qualified traffic, and
            convert visitors into real customers.
          </p>

          <p className="text-base text-gray-400 sm:text-lg text-justify">
            At our digital marketing agency in India, we go beyond keywords — we
            build an SEO strategy that strengthens your brand’s visibility and
            authority online.
          </p>

          <p className="text-base text-gray-400 sm:text-lg text-justify">
            From technical optimization to high-quality content and link-building,
            our team ensures that your website earns and maintains top positions on
            Google and other search engines.
          </p>
        </div>

        {/* === Right Side (Image) === */}
        <div className="w-full lg:w-1/4 flex justify-center">
          <img
            src={assets.social} // replace with your SEO-related image
            alt="SEO Strategy"
            className="object-cover rounded-2xl w-full sm:w-[400px] md:w-[450px] lg:w-[350px] h-auto"
          />
        </div>
      </div>

      {/* ====== Section 2: What We Do ====== */}
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-20 max-w-7xl mx-auto mt-20">
        {/* === Left Side (Image) === */}
        <div className="w-full lg:w-2/5 flex justify-center">
          <img
            src={assets.digitalmarketing} // replace with your SEO team or analytics image
            alt="What We Do"
            className="object-cover rounded-2xl w-full sm:w-[420px] md:w-[500px] lg:w-[450px] h-[280px] sm:h-[400px] md:h-[480px] lg:h-[550px]"
          />
        </div>

        {/* === Right Side (Content) === */}
        <div className="w-full lg:w-3/4 space-y-6 text-gray-300 leading-relaxed px-4 lg:px-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center lg:text-left">
            What We Do
          </h2>

          <h3 className="text-lg sm:text-xl text-gray-400">
            We deliver a complete SEO solution that boosts visibility, traffic,
            and conversions — built for long-term success.
          </h3>

          <ul className="space-y-4 text-base text-gray-400 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="w-3 h-3 mt-2.5 rounded-full border-3 border-gray-100/60 flex-shrink-0"></span>
              <div>
                <strong className="text-white block text-lg">Technical SEO</strong>
                <p>
                  We fix crawl errors, improve site speed, structure, and mobile
                  responsiveness — ensuring both users and search engines love your
                  website.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-3 h-3 mt-2.5 rounded-full border-3 border-gray-100/60 flex-shrink-0"></span>
              <div>
                <strong className="text-white block text-lg">On-Page Optimization</strong>
                <p>
                  From keyword research to content optimization, metadata, and
                  internal linking — we fine-tune every page for maximum visibility
                  and engagement.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-3 h-3 mt-2.5 rounded-full border-3 border-gray-100/60 flex-shrink-0"></span>
              <div>
                <strong className="text-white block text-lg">Off-Page SEO & Link Building</strong>
                <p>
                  We secure high-quality backlinks from trusted sites to boost your
                  domain authority and outperform competitors.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-3 h-3 mt-2.5 rounded-full border-3 border-gray-100/60 flex-shrink-0"></span>
              <div>
                <strong className="text-white block text-lg">Local SEO</strong>
                <p>
                  Appear in Google Maps and regional searches with optimized listings,
                  localized content, and consistent NAP details across the web.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-3 h-3 mt-2.5 rounded-full border-3 border-gray-100/60 flex-shrink-0"></span>
              <div>
                <strong className="text-white block text-lg">Content Strategy & SEO Copywriting</strong>
                <p>
                  We craft SEO-focused content that educates, engages, and converts —
                  ensuring your brand ranks and resonates with your target audience.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SeoAgency;
