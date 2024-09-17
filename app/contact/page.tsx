import Image from 'next/image';
import React from 'react';

function Contact() {
  return (
    <div className="flex flex-col">
      <div className="flex h-screen items-center justify-center">
        <Image
          src="/contact-us/bg_5.webp"
          alt="contact-us"
          layout="fill"
          className="absolute -z-10 size-full object-cover"
        />
        <div className="flex w-full flex-col items-center justify-center text-white">
          <span className="flex space-x-4 text-xs sm:text-sm md:text-base">
            <h1 className="w-fit border-b font-poppins hover:cursor-pointer hover:text-black">
              <a href="/">Home</a>
            </h1>
            <h1 className="w-fit border-b font-poppins hover:cursor-pointer hover:text-black">
              Contact Us
            </h1>
          </span>
          <h1 className="cursor-pointer text-4xl font-bold sm:text-5xl 2xl:text-6xl">
            Contact Us
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Contact;
