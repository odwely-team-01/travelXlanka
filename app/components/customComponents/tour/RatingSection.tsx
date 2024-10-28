'use client';
import React, { useState } from 'react';
import { PiStarThin } from "react-icons/pi"; // Import your star icon
import { RiStarSFill } from "react-icons/ri";
import { RiStarHalfFill } from "react-icons/ri";
import { RiStarLine } from "react-icons/ri";


const RatingSection: React.FC = () => {
  const [rating, setRating] = useState(0); // State to store the current rating

  // Handler to set the rating based on star click
  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };

  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <RiStarSFill
            key={index}
            onClick={() => handleStarClick(index)}
            className={`cursor-pointer text-xs ${
              index < rating ? 'text-[#F1ED00]' : 'text-gray-400 '
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RatingSection;
