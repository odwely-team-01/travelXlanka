'use client';
import React, { useState } from 'react';

const RatingSection: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  // Handler function to toggle checkbox state
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="flex items-center gap-5">
      <input
        id="red-checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
      />

      <div className="flex items-center gap-3">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-sm border border-[#F85959] ${
              isChecked ? 'bg-[#F85959]' : 'bg-transparent'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default RatingSection;
