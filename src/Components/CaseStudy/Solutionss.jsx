import React, { useState, useRef } from "react";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

const Solutionss = () => {
  const [rotation, setRotation] = useState(0);
  const startX = useRef(null);

  const cards = [
    "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];

  const totalCards = cards.length;
  const anglePerCard = 360 / totalCards;

  const nextSlide = () => setRotation((prev) => prev - anglePerCard);
  const prevSlide = () => setRotation((prev) => prev + anglePerCard);

 



  return (
    <div className="text-white px-6 sm:px-10 md:px-20 lg:px-32 py-10 flex flex-col md:flex-row items-center md:items-start gap-10 text-gray-300">
      {/* === Text Content === */}
      <div className="w-full space-y-5 sm:space-y-6 leading-relaxed text-left">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-white">
          The Solution
        </h2>

        <h3 className="text-base sm:text-xl text-gray-400">
          A strategic, multi-channel paid campaign was launched to maximize reach
          and conversions.
        </h3>

       <ul className="space-y-4 text-sm sm:text-base text-gray-400 leading-relaxed">
  {[
    {
      title: "Multi-Channel Campaign Execution",
      desc: (
        <>
          Executed paid campaigns using <strong>Google Ads</strong>,{" "}
          <strong>Meta Ads</strong>, and <strong>TikTok Ads</strong> for maximum reach.
        </>
      ),
    },
    {
      title: "Dedicated Landing Page",
      desc: (
        <>
          Built a custom landing page with a lead form integrated via{" "}
          <strong>Google Forms</strong> and connected to{" "}
          <strong>Google Sheets</strong>.
        </>
      ),
    },
    {
      title: "Platform-Specific Optimization",
      desc: (
        <>
          Tailored creatives and messaging for each platform to match audience
          behavior and trends.
        </>
      ),
    },
    {
      title: "Continuous Performance Tracking",
      desc: (
        <>
          Used real-time analytics and budget optimization to maintain high
          engagement and conversion rates.
        </>
      ),
    },
  ].map((item, index) => (
    <li key={index} className="flex flex-col gap-2">
      {/* === Heading Row === */}
      <div className="flex items-start gap-3">
        {/* Circle */}
        <div className="mt-[6px] w-3 h-3 border-[3px] border-gray-100/60 rounded-full flex-shrink-0"></div>

        {/* Heading */}
        <h4 className="text-white text-base sm:text-lg font-semibold">
          {item.title}
        </h4>
      </div>

      {/* === Paragraph === */}
      <div className="pl-7 sm:pl-8 text-gray-400">{item.desc}</div>
    </li>
  ))}
</ul>

      </div>

      {/* === 3D Carousel === */}
      <div className="w-full flex flex-col items-center  overflow-hidden">
        <div
          className="relative w-full flex justify-center items-center 
                     min-h-[220px] sm:min-h-[300px] md:min-h-[420px] lg:min-h-[500px]
                     overflow-hidden"
          style={{ perspective: "1200px" }}
         
        >
          <div
            className="flex justify-center items-center transition-transform duration-1000 ease-in-out"
            style={{
              transform: `rotateY(${rotation}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            {cards.map((img, index) => (
              <div
                key={index}
                className="absolute 
                           w-60 h-40 
                           sm:w-68 sm:h-44 
                           md:w-[18rem] md:h-[15rem]
                           lg:w-[28rem] lg:h-[18rem]
                           rounded-2xl overflow-hidden shadow-xl mt-10 border border-white/10"
                style={{
                  transform: `rotateY(${index * anglePerCard}deg) translateZ(320px)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>

        {/* === Navigation Buttons === */}
        <div className="flex items-center mt-2 md:mt-0 justify-center gap-8 z-10">
          <button onClick={prevSlide}>
            <MdOutlineArrowBackIos className="text-white/90 border-2 border-white/90 h-9 w-9 sm:h-10 sm:w-10 rounded-full p-2" />
          </button>
          <button onClick={nextSlide}>
            <MdOutlineArrowForwardIos className="text-white/90 border-2 border-white/90 h-9 w-9 sm:h-10 sm:w-10 rounded-full p-2 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Solutionss;
