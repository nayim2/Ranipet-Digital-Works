import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSectionClick = (sectionId) => {
    setMenuOpen(false);

    if (location.pathname === "/") {
      // Already on home page → just scroll
      scrollToSection(sectionId);
    } else {
      // Navigate to home first → scroll after page loads
      navigate("/");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 300); // small delay to wait for home to render
    }
  };

  return (
    <nav className="text-white px-8 md:px-28 bg-black py-2 flex items-center justify-between relative z-50">
 
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img
            src={assets.logo}
            alt="Logo"
            className="w-38 h-auto object-contain"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8 text-[17px] font-light ml-auto">
        <ul className="flex space-x-12 items-center">
          <li>
            <Link to="/" className="text-red-500 transition">
              Home
            </Link>
          </li>
          <li
            onClick={() => handleSectionClick("services")}
            className="hover:text-gray-300 cursor-pointer transition"
          >
            Services
          </li>
          <li
            onClick={() => handleSectionClick("results")}
            className="hover:text-gray-300 cursor-pointer transition"
          >
            Results
          </li>
          <li>
            <Link to="/blogs" className="hover:text-gray-300 transition">
              Blogs
            </Link>
          </li>
          <li
            onClick={() => handleSectionClick("contact")}
            className="hover:text-gray-300 cursor-pointer transition"
          >
            Contact
          </li>
        </ul>

        <Link
          to="/quote"
          className="bg-red-700 hover:bg-red-600 text-white px-5 py-1.5 font-medium transition"
        >
          Get Quote
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center ml-auto">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <RiMenu2Fill size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-[56px] left-0 w-full bg-black text-white rounded-b-2xl shadow-lg md:hidden animate-slideDown">
          <ul className="flex flex-col items-center space-y-4 py-6 text-sm font-medium">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li
              onClick={() => handleSectionClick("services")}
              className="hover:text-gray-300 cursor-pointer"
            >
              Services
            </li>
            <li
              onClick={() => handleSectionClick("results")}
              className="hover:text-gray-300 cursor-pointer"
            >
              Results
            </li>
            <li>
              <Link to="/blogs" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">
                Blogs
              </Link>
            </li>
            <li
              onClick={() => handleSectionClick("contact")}
              className="hover:text-gray-300 cursor-pointer"
            >
              Contact
            </li>
            <Link
              to="/quote"
              onClick={() => setMenuOpen(false)}
              className="bg-red-500 text-black px-4 py-1.5 rounded-full font-medium hover:bg-red-400 transition"
            >
              Get Quote
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
