import React, { useState, useRef } from "react";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

const Solution = () => {
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

  const handleMouseDown = (e) => {
    startX.current = e.clientX || e.touches?.[0]?.clientX;
  };
  const handleMouseMove = (e) => {
    if (startX.current === null) return;
    const currentX = e.clientX || e.touches?.[0]?.clientX;
    const deltaX = currentX - startX.current;
    setRotation((prev) => prev + deltaX * 0.2);
    startX.current = currentX;
  };
  const handleMouseUp = () => (startX.current = null);

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-20 max-w-7xl mx-auto mt-10 sm:mt-16 px-4 text-gray-300">

     {/* === Left Side (3D Carousel + Buttons below) === */}
<div className="w-full lg:w-2/5 flex flex-col items-center md:pt-10 overflow-hidden">

  {/* === 3D Carousel === */}
  <div
    className="relative w-full flex justify-center items-center min-h-[250px] sm:min-h-[320px] overflow-hidden"
    style={{ perspective: "1000px" }}
    onMouseDown={handleMouseDown}
    onMouseMove={handleMouseMove}
    onMouseUp={handleMouseUp}
    onTouchStart={handleMouseDown}
    onTouchMove={handleMouseMove}
    onTouchEnd={handleMouseUp}
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
          className="absolute w-32 h-48 sm:w-40 sm:h-56 md:w-52 md:h-64 rounded-xl overflow-hidden shadow-xl border border-white/10"
          style={{
            transform: `rotateY(${index * anglePerCard}deg) translateZ(180px)`,
            transformStyle: "preserve-3d",
          }}
        >
          <img
            src={img}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  </div>

  {/* === Navigation Buttons COMPLETELY OUTSIDE the image === */}
   <div className="md:mt-4 flex items-center justify-center gap-10 z-10">
                 <button
                   onClick={() => prevSlide()}
                   className=" text-white"
                 >
                   <MdOutlineArrowBackIos  className="text-white/90 border-2 border-white/90 h-10 w-10 rounded-full p-2 transition" />
                 </button>
                 <button
                   onClick={() => nextSlide()}
                   className="backdrop-blur-sm transition-all duration-300 text-white"
                 >
                   <MdOutlineArrowForwardIos  className="text-white/90 border-2 border-white/90 h-10 w-10 rounded-full p-2 transition" />
                 </button>
               </div>
</div>


      {/* === Right Side (Content) === */}
  <div className="w-full lg:w-3/4 space-y-5 px-6 sm:space-y-6 leading-relaxed text-left">
  <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-white">
    The Solution
  </h2>

  <h3 className="text-base sm:text-xl text-gray-400">
    A strategic, multi-channel paid campaign was launched to maximize reach and conversions.
  </h3>

  <ul className="space-y-6 text-sm sm:text-base text-gray-400 leading-relaxed">
    <li className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full border border-3 flex-shrink-0"></span>
        <strong className="text-white text-base sm:text-lg">
          Multi-Channel Campaign Execution
        </strong>
      </div>
      <p>
        Executed paid campaigns using <strong>Google Ads</strong>,{" "}
        <strong>Meta Ads</strong>, and <strong>TikTok Ads</strong> for maximum reach.
      </p>
    </li>

    <li className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full border border-3 flex-shrink-0"></span>
        <strong className="text-white text-base sm:text-lg">
          Dedicated Landing Page
        </strong>
      </div>
      <p>
        Built a custom landing page with lead form integrated via <strong>Google Forms</strong> 
        and connected to <strong>Google Sheets</strong>.
      </p>
    </li>

    <li className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full border border-3 flex-shrink-0"></span>
        <strong className="text-white text-base sm:text-lg">
          Platform-Specific Optimization
        </strong>
      </div>
      <p>
        Tailored creatives and messaging for each platform to match audience behavior and trends.
      </p>
    </li>

    <li className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full border border-3 flex-shrink-0"></span>
        <strong className="text-white text-base sm:text-lg">
          Continuous Performance Tracking
        </strong>
      </div>
      <p>
        Used real-time analytics and budget optimization to maintain high engagement 
        and conversion rates.
      </p>
    </li>
  </ul>
</div>


    </div>
  );
};

export default Solution;
