import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-gray-300 md:pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col justify-between space-y-6 md:flex-row md:space-x-8 md:space-y-0">
          {/* Logo and Description */}
          <div className="md:w-1/3">
            <div className="flex items-center space-x-3">
              {/* Add your logo here */}
              {/* <Image src="/sample-logo.png" width={50} height={50} alt="Logo" /> */}
              <Link className="text-3xl font-bold" href={'/'}>Travel X Sri Lanka</Link>
            </div>
            <p className="mt-6 text-sm leading-relaxed sm:text-base 2xl:text-xl">
              Explore Sri Lanka with ease. Plan, discover, and experience your
              journey effortlessly.
            </p>
            <div className="mt-6 flex space-x-6">
              <FaTwitter className="cursor-pointer text-2xl hover:text-white" />
              <FaFacebook className="cursor-pointer text-2xl hover:text-white" />
              <FaInstagram className="cursor-pointer text-2xl hover:text-white" />
            </div>
          </div>

          {/* Customer Support Links */}
          <div className="md:w-1/3">
            <h3 className="mb-6 text-xl font-semibold">Customer Support</h3>
            <ul className="space-y-2 text-sm sm:space-y-4 sm:text-base 2xl:text-xl">
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-sm sm:text-base md:w-1/3 2xl:text-xl">
            <h3 className="mb-6 text-xl font-semibold">Contact Details</h3>
            <p className="mb-4">24/5, 6th lane, Colombo 5, Sri Lanka</p>
            <p className="mb-4">+94 70 2132105</p>
            <p className="mb-4">travelxslanka@gmail.com</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm sm:text-base 2xl:text-xl">
          <p>© 2024 All Rights Reserved</p>
          <p className="mt-2">Solution Powered by Explore Tech Labs</p>
        </div>
      </div>
    </footer>
  );
}
