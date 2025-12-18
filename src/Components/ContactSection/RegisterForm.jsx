import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaTimes } from 'react-icons/fa';

export default function RegisterForm() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null; // 🔹 Hide the form completely when closed

  return (
    <div className="py-14 flex items-center justify-center px-4">
      {/* <div className="relative bg-white/5 rounded-3xl shadow-2xl w-full max-w-md p-8 pt-14 text-center border border-gray-200">
      
        <button
          onClick={() => setIsVisible(false)} // 👈 Click to close
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition text-xl"
        >
          <FaTimes />
        </button>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-6">Contact Us</h2>

        <form className="space-y-5 text-left">
      
          <div className="flex items-center bg-gray-100 rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-red-400">
            <FaUser className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent outline-none text-gray-700 w-full"
            />
          </div>

          <div className="flex items-center bg-gray-100 rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-red-400">
            <FaEnvelope className="text-gray-400 mr-3" />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent outline-none text-gray-700 w-full"
            />
          </div>

          <div className="flex items-center bg-gray-100 rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-red-400">
            <FaPhone className="text-gray-400 mr-3" />
            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-transparent outline-none text-gray-700 w-full"
            />
          </div>

          <div className="flex items-start bg-gray-100 rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-red-400">
            <FaLock className="text-gray-400 mt-2 mr-3" />
            <textarea
              placeholder="Message"
              rows="3"
              className="bg-transparent outline-none text-gray-700 w-full resize-none"
            ></textarea>
          </div>

          
          <button
            type="submit"
            className="w-full bg-red-700 hover:bg-red-900 text-white py-3 rounded-full font-medium shadow-md transition"
          >
            Submit
          </button>
        </form>
      </div> */}
    </div>
  );
}
