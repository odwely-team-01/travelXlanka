import React from "react";
import Image from 'next/image'; // Import Next.js Image component

interface TestimonyCardProps {
  imageUrl: string;
  quote: string;
  name: string;
  position: string;
}

const TestimonyCard: React.FC<TestimonyCardProps> = ({ imageUrl, quote, name, position }) => {
  return (
    <div className="item">
      <div className="flex gap-4">
        <div className="user-img mb-5">
          <Image 
            src={imageUrl} 
            alt={name} 
            width={150} // set the appropriate width
            height={150} // set the appropriate height
            className="rounded-full" // you can add styling classes if needed
          />
          <span className="quote d-flex align-items-center justify-content-center">
            <i className="icon-quote-left"></i>
          </span>
        </div>
        <div className="text ml-md-4">
          <p className="mb-5">{quote}</p>
          <p className="name">{name}</p>
          <span className="position">{position}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;
