import React, { useRef, useState } from "react";
import { FiVolume2, FiVolumeX } from "react-icons/fi";
import { FaAngleDown, FaUpDown } from "react-icons/fa6"; // ✅ correct import
import { assets } from "../../assets/assets";

const Home = () => {


   const handleLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative w-full h-[90vh] overflow-hidden flex items-center justify-center bg-black" id="home">
      {/* Background Video */}
      <video
        ref={videoRef}
        src={assets.video}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Volume Button */}
      <button
        onClick={toggleMute}
        className="absolute center-6 left-6 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition"
      >
        {isMuted ? <FiVolumeX size={20} /> : <FiVolume2 size={20} />}
      </button>

      {/* Explore More Button */}
      <div onClick={() => handleLinkClick("risk")} className="absolute bottom-18 left-1/2 transform -translate-x-1/2" >
        <button className="flex flex-col items-center gap-2 text-white font-medium px-6 py-2  transition">
          Explore More
          <FaAngleDown className="text-sm animate-bounce" />
        </button>
      </div>
    </div>
  );
};

export default Home;
