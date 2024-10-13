// WhyChooseUs.tsx
"use client";

import React from 'react';
import { WhyChooseUsProps } from '@/types/types';

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ title, description, buttonText, onButtonClick }) => {
  return (
    <div className="flex flex-col justify-center items-start bg-white text-left space-y-2 sm:space-y-4">
      <h3 className="text-gray-500">Best travelers,</h3>
      <h2 className="text-3xl font-bold">
        <span className="text-black">Why </span>{title}
      </h2>
      <p className="text-gray-700 leading-relaxed">{description}</p>
      <button
        className="px-6 py-3 bg-white border border-red-400 text-red-400 rounded-full hover:bg-red-400 hover:text-white transition"
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default WhyChooseUs;
