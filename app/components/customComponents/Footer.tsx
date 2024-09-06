// Footer.js
import Image from 'next/image';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
              {/* Add your logo here */}
              {/* <Image src="/sample-logo.png" width={50} height={50} alt="Logo" /> */}
              <h1 className="text-2xl font-bold">Travel X Sri Lanka</h1>
            </div>
            <p className="mt-4 text-sm">
              Explore Sri Lanka with ease. Plan, discover, and experience your journey effortlessly.
            </p>
            <div className="flex space-x-4 mt-4">
              <FaTwitter className="text-2xl hover:text-white cursor-pointer" />
              <FaFacebook className="text-2xl hover:text-white cursor-pointer" />
              <FaInstagram className="text-2xl hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Customer Support Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
            <ul>
              <li className="mb-2">
                <a href="/about" className="hover:underline">About</a>
              </li>
              <li className="mb-2">
                <a href="/services" className="hover:underline">Services</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:underline">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Details</h3>
            <p className="mb-2">24/5, 6th lane, Colombo 5, Sri Lanka</p>
            <p className="mb-2">+94 70 2132105</p>
            <p className="mb-2">travelxslanka@gmail.com</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center">
          <p>© 2024 All Rights Reserved</p>
          <p>Solution Powered by Explore Tech Labs</p>
        </div>
      </div>
    </footer>
  );
}
