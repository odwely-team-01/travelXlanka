import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col">
      <div className="h-screen flex justify-center items-center">
        <Image
          src="/contact-us/bg_5.webp"
          alt="contact-us"
          layout="fill"

          className="absolute -z-10 h-full w-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-poppins">Contact Us</h1>
          <h1>Contact Us</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
