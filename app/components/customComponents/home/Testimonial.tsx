
import { TestimonialProps } from '@/types/types';
import React from 'react';

const Testimonial: React.FC<TestimonialProps> = ({ name, country, feedback, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-left">
      <h3 className="text-gray-500">Testimony</h3>
      <h2 className="text-3xl font-bold mb-4">
        Our Guests Says
      </h2>
      <div className="flex items-center space-x-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <p className="text-gray-800 mb-2">{feedback}</p>
          <p className="font-semibold">{name}</p>
          <p className="text-gray-500">{`Guest from ${country}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
