import ContactForm from '@/app/components/ContactForm';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Contact() {
  return (
    <section className="w-full">
      <div className="flex h-screen w-full items-center justify-center">
        <Image
          src="/contact-us/bg_5.webp"
          alt="contact-us"
          layout="fill"
          className="absolute -z-10 size-full object-cover"
        />
        <div className="flex w-full flex-col items-center justify-center text-white">
          <span className="flex w-full flex-col items-center justify-center text-white gap-4">
            <div className="flex items-center justify-center gap-4">
              <Link
                className="text-xs md:text-sm font-normal border-b-2 border-white/30"
                href={'/'}
              >
                HOME
              </Link>
              <Link
                className="text-xs md:text-sm font-normal opacity-80 border-b-2 border-white/30"
                href={'/contact'}
              >
                CONTACT
              </Link>
            </div>
            <h1 className="font-poppins text-4xl md:text-5xl xl:text-6xl font-bold ">
              Contact Us
            </h1>
          </span>
        </div>
      </div>

      {/* contact info */}
      <div className="flex flex-col w-11/12 max-w-7xl mx-auto my-12 md:my-24 gap-8 xl:px-20">
        <h1 className="font-normal text-2xl">Contact Information</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 lg:gap-12 text-[#4D4D4D] text-sm font-light">
          <p>Address: 24/5, 6th lane, Colombo 5, Sri Lanka.</p>
          <p>Phone: (+94) 702132105</p>
          <p>Email: travelnexusceylon@gmail.com</p>
          <p>Website travelnexusceylon.lk</p>
        </div>
      </div>

      {/* contact form */}
      <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 xl:px-20 md:mb-24">
        <ContactForm />
        <div className="relative flex items-center justify-center">
            <Image
              src="/contact-us/buddhist_monks.jpg"
              alt="buddhist_monks"
              fill
              className="object-cover"
            />
          </div>
      </div>
    </section>
  );
}

export default Contact;
