// components/Navbar.tsx
'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent absolute top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-red-900">Travel X Lanka</div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="/" className=" hover:text-gray-300 transition duration-300">Home</a>
            <a href="/about" className="text-black hover:text-gray-300 transition duration-300">About</a>
            <a href="/tour" className="text-black hover:text-gray-300 transition duration-300">Tour</a>
            <a href="/contact" className="text-black hover:text-gray-300 transition duration-300">Contact</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-70">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block text-black hover:text-gray-300 transition duration-300">Home</a>
            <a href="/about" className="block text-black hover:text-gray-300 transition duration-300">About</a>
            <a href="/tour" className="block text-black hover:text-gray-300 transition duration-300">Tour</a>
            <a href="/contact" className="block text-black hover:text-gray-300 transition duration-300">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
