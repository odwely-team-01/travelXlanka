import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-8">
          {/* Logo and Description */}
          <div className="md:w-1/3">
            <div className="flex items-center space-x-3">
              {/* Add your logo here */}
              {/* <Image src="/sample-logo.png" width={50} height={50} alt="Logo" /> */}
              <h1 className="text-3xl font-bold">Travel X Sri Lanka</h1>
            </div>
            <p className="mt-6 text-sm sm:text-base 2xl:text-xl leading-relaxed">
              Explore Sri Lanka with ease. Plan, discover, and experience your journey effortlessly.
            </p>
            <div className="flex space-x-6 mt-6">
              <FaTwitter className="text-2xl hover:text-white cursor-pointer" />
              <FaFacebook className="text-2xl hover:text-white cursor-pointer" />
              <FaInstagram className="text-2xl hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Customer Support Links */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold mb-6">Customer Support</h3>
            <ul className="space-y-2 sm:space-y-4 text-sm sm:text-base 2xl:text-xl">
              <li>
                <a href="/about" className="hover:underline">About</a>
              </li>
              <li>
                <a href="/services" className="hover:underline">Services</a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:w-1/3 text-sm sm:text-base 2xl:text-xl">
            <h3 className="text-xl font-semibold mb-6">Contact Details</h3>
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
