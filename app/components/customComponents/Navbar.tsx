// components/Navbar.tsx

'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute left-0 top-0 z-10 w-full bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-red-900">
              Travel X Lanka
            </div>
          </div>
          <div className="hidden space-x-8 md:flex">
            <a
              href="/"
              className=" transition duration-300 hover:text-gray-300"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-black transition duration-300 hover:text-gray-300"
            >
              About
            </a>
            <a
              href="/tour"
              className="text-black transition duration-300 hover:text-gray-300"
            >
              Tour
            </a>
            <a
              href="/contact"
              className="text-black transition duration-300 hover:text-gray-300"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="bg-black/70 md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <a
              href="/"
              className="block text-black transition duration-300 hover:text-gray-300"
            >
              Home
            </a>
            <a
              href="/about"
              className="block text-black transition duration-300 hover:text-gray-300"
            >
              About
            </a>
            <a
              href="/tour"
              className="block text-black transition duration-300 hover:text-gray-300"
            >
              Tour
            </a>
            <a
              href="/contact"
              className="block text-black transition duration-300 hover:text-gray-300"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
