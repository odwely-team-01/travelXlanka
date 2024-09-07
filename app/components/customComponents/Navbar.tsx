// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Track scrolling and apply styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 transition-colors duration-300 ${
        scrolling ? "bg-white text-black shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              Travel X Lanka
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-gray-600 transition duration-300">
              Home
            </a>
            <a href="/about" className="hover:text-gray-600 transition duration-300">
              About
            </a>
            <a href="/tour" className="hover:text-gray-600 transition duration-300">
              Tour
            </a>
            <a href="/contact" className="hover:text-gray-600 transition duration-300">
              Contact
            </a>
          </div>
          <div className="md:hidden z-50">
            <button onClick={toggleMenu} className={`${scrolling ? "text-black" : "text-white"}`}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with smooth open/close transition */}
      <div
        className={`md:hidden fixed z-40 inset-0 bg-black bg-opacity-70 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {isOpen && (
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <a href="/" className="text-white hover:text-gray-300 text-xl transition duration-300">
              Home
            </a>
            <a href="/about" className="text-white hover:text-gray-300 text-xl transition duration-300">
              About
            </a>
            <a href="/tour" className="text-white hover:text-gray-300 text-xl transition duration-300">
              Tour
            </a>
            <a href="/contact" className="text-white hover:text-gray-300 text-xl transition duration-300">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
