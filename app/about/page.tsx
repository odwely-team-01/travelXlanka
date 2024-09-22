'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import { ABOUTINFO, ACORDIANITEMS } from '@/app/lib/constants';
import AccordionItem from '@/app/components/AccordianItem';

interface AboutInfoItem {
  title: string;
  subTitle: string;
  content: string;
}

const About: React.FC = () => {
  const [activeButton, setActiveButton] = useState<AboutInfoItem>(ABOUTINFO[0]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Single state to track the active accordion item
  const [fadeState, setFadeState] = useState<'fade-in' | 'fade-out'>('fade-in');
  const [previousContent, setPreviousContent] = useState<AboutInfoItem | null>(
    null,
  );

  // Handle button click for About section
  const handleButtonClick = (button: AboutInfoItem) => {
    if (activeButton !== button) {
      setFadeState('fade-out');
      setPreviousContent(activeButton);
      setTimeout(() => {
        setActiveButton(button);
        setFadeState('fade-in');
        setPreviousContent(null);
      }, 300);
    }
  };

  // Determine if the button is active
  const isActive = (button: AboutInfoItem) => activeButton === button;

  // Handle accordion item click
  const handleAccordionClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full">
      {/* Hero Section */}
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

      {/* About Section */}
      <div className="mx-auto max-w-7xl md:p-16 xl:p-20 pt-20">
        <div className="flex flex-col md:flex-row">
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
                  className={`text-sm lg:text-lg transition-all duration-500 ease-in-out ${
                    isActive(info)
                      ? 'rounded-full bg-[#78d5ef] h-12 w-28 text-white hover:text-white'
                      : 'rounded-3xl text-gray-400 h-12 w-28 hover:text-black'
                  }`}
                >
                  {info.title}
                </button>
              ))}
            </div>

            {/* About Content Fade-in/Fade-out */}
            <div className="relative">
              {previousContent && (
                <div className="absolute inset-0 transition-opacity duration-500 ease-out opacity-0">
                  <h1 className="mb-6 text-2xl">{previousContent.subTitle}</h1>
                  <p className="text-base">{previousContent.content}</p>
                </div>
              )}
              <div
                className={`transition-opacity duration-500 ease-out ${fadeState === 'fade-in' ? 'opacity-100' : 'opacity-0'}`}
              >
                <h1 className="mb-6 text-2xl">{activeButton.subTitle}</h1>
                <p className="text-base">{activeButton.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#f8faff] w-full">
        <div className="mx-auto max-w-7xl p-7 md:p-16 xl:p-20 pt-20 space-y-2">
          <p className="text-sm text-[#4d4d4d] font-medium">FAQs</p>
          <p className="text-3xl text-[#4d4d4d]">
            <span className="text-3xl font-bold text-black">Frequently</span>{' '}
            Ask Question
          </p>
        </div>

        {/* FAQ Accordions for Mobile */}
        <div className="flex flex-col gap-4 max-w-7xl mx-auto px-7 md:hidden pb-12">
          {ACORDIANITEMS.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={activeIndex === index}
              onClick={() => handleAccordionClick(index)}
            />
          ))}
        </div>

        {/* FAQ Accordions for Desktop */}
        <div className="hidden md:flex max-w-7xl mx-auto gap-7 px-16 xl:px-20">
          <div className="flex flex-col gap-4 pb-12 w-1/2">
            {ACORDIANITEMS.slice(0, 4).map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={activeIndex === index}
                onClick={() => handleAccordionClick(index)}
              />
            ))}
          </div>
          <div className="flex flex-col gap-4 pb-12 w-1/2">
            {ACORDIANITEMS.slice(4, 7).map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={activeIndex === index + 4}
                onClick={() => handleAccordionClick(index + 4)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
