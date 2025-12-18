import React from "react";

const EcommerceSection = () => {
  return (
    <section className="relative flex flex-col mb-4 md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16 md:py-20 overflow-hidden">
      
      {/* === LEFT TEXT CONTENT === */}
      <div className="md:w-1/2 z-10 text-center md:text-left flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug mb-6">
          Results Obtained
        </h2>
        <p className="text-gray-300 text-start md:text-lg mb-10 max-w-md mx-auto md:mx-0">
          The campaign successfully increased awareness of the university’s new
          programs and generated quality academic leads. In just 1 month and 10
          days, it delivered 326 Google Ads leads (in 15 days), 1,972 Meta Ads
          leads, and 2,328 TikTok Ads leads.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="bg-red-700 hover:bg-red-600 cursor-pointer  text-white font-medium px-8 md:px-10 py-3 rounded-md transition w-auto min-w-[160px]">
            Talk to us
          </button>
        </div>
      </div>

      {/* === RIGHT STATS (Always 2x2 Grid) === */}
      <div className="md:w-1/2 mt-12 md:mt-20 grid grid-cols-2 gap-10">
        {[
          { value: "7,886,353", label: "Impressions" },
          { value: "57,220", label: "Clicks" },
          { value: "4,626", label: "Leads" },
          { value: "44,058.93 SAR", label: "Total Ad Spend" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:items-start space-y-2"
          >
            <p className="text-red-500 text-lg md:text-4xl font-bold">
              {item.value}
            </p>
            <p className="text-white text-[16px] p-2 md:text-2xl">{item.label}</p>
            <div className="w-30 md:w-50 border-b border-red-500 mt-1"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EcommerceSection;
