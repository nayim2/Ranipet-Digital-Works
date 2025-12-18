import React from "react";
import { assets } from "../../../assets/assets";

const SocialAgency = () => {
  return (
    <section className="text-white min-h-screen px-4 sm:px-6 lg:px-12 py-8 bg-black">
      {/* ====== Section 1: Top Social Media Agency ====== */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-16 max-w-7xl mx-auto">
        {/* === Left Side (Content) === */}
        <div className="w-full lg:w-3/4 space-y-6 text-gray-300 leading-relaxed">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center lg:text-left">
            Top Social Media Agency in India
          </h1>

          <p className="text-base text-gray-400 sm:text-lg text-justify">
            Boost your brand, engage your audience, and drive sales with smart
            social media strategies. We help businesses like yours grow online
            with creative campaigns that convert.
          </p>

          <p className="text-base text-gray-400 sm:text-lg text-justify">
            Your brand deserves to be seen, remembered, and talked about. Our
            team crafts powerful campaigns tailored for Facebook, Instagram,
            LinkedIn, Twitter, Snapchat, TikTok, and YouTube — turning followers
            into loyal customers.
          </p>

          <p className="text-base text-gray-400 sm:text-lg text-justify">
            We combine strategy, creativity, and analytics to make every post count.
          </p>
        </div>

        {/* === Right Side (Image) === */}
        <div className="w-full lg:w-1/4 flex justify-center">
          <img
            src={assets.social}
            alt="Social Media"
            className="object-cover rounded-2xl w-full sm:w-[400px] md:w-[450px] lg:w-[350px] h-auto"
          />
        </div>
      </div>

      {/* ====== Section 2: What We Do (same design but reversed) ====== */}
<div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-20 max-w-7xl mx-auto mt-20">
  {/* === Left Side (Image) === */}
  <div className="w-full lg:w-2/5 flex justify-center">
    <img
      src={assets.social} // ✅ replace with your actual image (e.g., assets.lightbulb)
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
      We manage everything your brand needs to shine on social media.
    </h3>

   <ul className="space-y-4 text-base text-gray-400 leading-relaxed">
  <li className="flex items-start gap-3">
    {/* Circle bullet for heading */}
    <span className="w-3 h-3 mt-2.5 rounded-full border-3 border-gray-100/60 flex-shrink-0"></span>
    <div>
      <strong className="text-white block text-lg">Brand Building</strong>
      <p>
        We create a consistent and memorable brand identity that connects with your audience 
        and builds long-term recognition across all platforms.
      </p>
    </div>
  </li>

  <li className="flex items-start gap-3">
    <span className="w-3 h-3 mt-2.5 rounded-full border-3 border-gray-100/60 flex-shrink-0"></span>
    <div>
      <strong className="text-white block text-lg">Engagement Campaigns</strong>
      <p>
        Our campaigns inspire interaction, boost audience participation, and strengthen your 
        online community with meaningful engagement.
      </p>
    </div>
  </li>

  <li className="flex items-start gap-3">
    <span className="w-3 h-3 mt-2.5 rounded-full border-3 border-gray-100/60 flex-shrink-0"></span>
    <div>
      <strong className="text-white block text-lg">Content Creation</strong>
      <p>
        We design high-quality visuals, videos, and stories that grab attention and clearly 
        communicate your brand’s message.
      </p>
    </div>
  </li>

  <li className="flex items-start gap-3">
    <span className="w-3 h-3 mt-2.5 rounded-full border-3 border-gray-100/60 flex-shrink-0"></span>
    <div>
      <strong className="text-white block text-lg">Paid Advertising</strong>
      <p>
        We run targeted ad campaigns that increase reach, drive conversions, and deliver 
        measurable business growth.
      </p>
    </div>
  </li>

  <li className="flex items-start gap-3">
    <span className="w-3 h-3 mt-2.5 rounded-full border-3 border-gray-100/60 flex-shrink-0"></span>
    <div>
      <strong className="text-white block text-lg">Social Media Management</strong>
      <p>
        From planning to performance tracking, we handle your social platforms to ensure 
        consistent activity and growth.
      </p>
    </div>
  </li>
</ul>

  </div>
</div>

    </section>
  );
};

export default SocialAgency;
