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
        <div>
          <h1 className="font-poppins text-2xl">Contact Us</h1>
          <h1>Contact Us</h1>
        </div>
      </div>
    </div>
  );
}

export default Contact;
