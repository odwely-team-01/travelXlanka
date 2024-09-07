// components/Navbar.tsx

'use client';

import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 z-10 w-full transition-colors duration-300 ${
        scrolling
          ? 'bg-white text-black shadow-md'
          : 'bg-transparent text-white'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold">Travel X Lanka</div>
          </div>
          <div className="hidden space-x-8 md:flex">
            <a href="/" className="transition duration-300 hover:text-gray-600">
              Home
            </a>
            <a
              href="/about"
              className="transition duration-300 hover:text-gray-600"
            >
              About
            </a>
            <a
              href="/tour"
              className="transition duration-300 hover:text-gray-600"
            >
              Tour
            </a>
            <a
              href="/contact"
              className="transition duration-300 hover:text-gray-600"
            >
              Contact
            </a>
          </div>
          <div className="z-50 md:hidden">
            <button
              onClick={toggleMenu}
              className={`${scrolling ? 'text-black' : 'text-white'}`}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with smooth open/close transition */}
      <div
        className={`fixed inset-0 z-40 transform bg-black bg-opacity-70 transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {isOpen && (
          <div className="flex h-full flex-col items-center justify-center space-y-6">
            <a
              href="/"
              className="text-xl text-white transition duration-300 hover:text-gray-300"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-xl text-white transition duration-300 hover:text-gray-300"
            >
              About
            </a>
            <a
              href="/tour"
              className="text-xl text-white transition duration-300 hover:text-gray-300"
            >
              Tour
            </a>
            <a
              href="/contact"
              className="text-xl text-white transition duration-300 hover:text-gray-300"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
