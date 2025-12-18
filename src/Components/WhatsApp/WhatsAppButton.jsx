import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-1/2 md:m-6 m-2 right-0 transform translate-y-1/2 z-50 flex flex-col items-center">
      {/* WhatsApp Icon Button */}
      <a
        href="https://wa.me/7868055827"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-0.5 rounded-md shadow-lg hover:bg-green-600 transition duration-300 mb-1"
      >
        <FaWhatsapp size={20} />
      </a>
      
      {/* Vertical "Let's Chat" Text - Visible on all screens */}
      <div className="writing-mode-vertical-rl text-white font-semibold text-[14px] mt-6 md:mt-8 md:text-[16px] font-bold tracking-wider rotate-270">
        Let's Chat
      </div>
    </div>
  );
};

export default WhatsAppButton;