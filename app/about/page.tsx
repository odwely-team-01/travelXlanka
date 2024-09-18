'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import { ABOUTINFO } from '@/app/lib/constants';
import AccordionItem from '@/app/components/AccordianItem';
import { ACORDIANITEMS } from '@/app/lib/constants';

interface AboutInfoItem {
  title: string;
  subTitle: string;
  content: string;
}

function About() {
  const [activeButton, setActiveButton] = useState<AboutInfoItem>(ABOUTINFO[0]);
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleButtonClick = (button: AboutInfoItem) => {
    setActiveButton(button);
  };

  const isActive = (button: AboutInfoItem) => activeButton === button;

  return (
    <section className="w-full">
      <div className="flex h-screen w-full items-center justify-center">
        <Image
          src="/contact-us/bg_5.jpg"
          alt="contact-us"
          layout="fill"
          className="absolute -z-10 size-full object-cover"
        />

        <span className="flex w-full flex-col items-center justify-center text-white">
          <h1 className="text-center font-poppins text-3xl font-bold md:text-4xl lg:text-5xl">
            Welcome to Travel X Lanka
          </h1>
          <p className="mt-4">Explore the beauty with us</p>
        </span>
      </div>

      <div className="mx-auto max-w-7xl md:p-16 xl:p-20 pt-20">
        <div className="flex flex-col md:flex md:flex-row">
          <div className="relative flex items-center justify-center md:w-1/2">
            <Image
              src="/contact-us/coco.jpg"
              alt="contact-us"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-7 md:py-12 md:pl-12 md:pr-0 md:w-1/2">
            <div className="mb-10 flex justify-center gap-4 sm:justify-start">
              {ABOUTINFO.map((info: AboutInfoItem) => (
                <button
                  key={info.title}
                  onClick={() => handleButtonClick(info)}
                  className={` text-sm lg:text-lg ${
                    isActive(info)
                      ? 'rounded-full bg-[#78d5ef] h-12 w-28 text-white hover:text-white'
                      : 'rounded-3xl text-gray-400 h-12 w-28 hover:text-black'
                  }`}
                >
                  {info.title}
                </button>
              ))}
            </div>

            <div>
              <h1 className="mb-6 text-2xl">{activeButton.subTitle}</h1>
              <p className="text-base">{activeButton.content}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f8faff] w-full">
        <div className="mx-auto max-w-7xl p-7 md:p-16 xl:p-20 pt-20 space-y-2">
          <p className="text-sm text-[#4d4d4d] font-medium">FAQs</p>
          <p className="text-3xl text-[#4d4d4d]">
            <span className="text-3xl font-bold text-black">Frequently</span>{' '}
            Ask Question
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-7xl mx-auto px-7 md:px-16 xl:px-20 pb-12">
          {ACORDIANITEMS.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
