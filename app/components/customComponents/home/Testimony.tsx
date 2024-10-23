import React from 'react';
import TestimonyCard from './TestimonyCard';
import TestimonyCarousel from './TestimonyCard';
import { testimonies } from '../../../data/testimonyData';

const Testimony = () => {
  return (
    <div className="flex flex-col justify-center sm:justify-start space-y-2 sm:space-y-4 overflow-hidden">
      <p>Testimony</p>
      <span className="flex gap-2 text-sm md:text-2xl">
        <p className="font-bold">Our</p>
        <p>Guests Says</p>
      </span>

      {/* Render the testimony cards */}
      <div className="w-[620px] md:w-[550px] lg:w-[600px]">
        <TestimonyCarousel testimonies={testimonies} />
      </div>
    </div>
  );
};

export default Testimony;
