import React from 'react';
import TestimonyCard from './TestimonyCard';
import profile1 from "../../../../public/testimony/person_1.jpg"

const Testimony = () => {
const testimonies = [

  
  {
    imageUrl: "/testimony/person_3.jpg",
    quote:
      "Travel Nexus Ceylon elevated my journey. Effortless planning, real-time guidance – the perfect companion for an amazing travel experience.",
    name: "Akash Patel",
    position: "Guest from India",
  },
];


  return (
    <div className="flex flex-col justify-center sm:justify-start space-y-2 sm:space-y-4">
      <p>Testimony</p>
      <span className="flex gap-2 text-xs sm:text-2xl">
        <p className="font-bold">Our</p>
        <p>Guests Says</p>
      </span>

      {/* Render the testimony cards */}
      <div className="carousel-testimony owl-carousel">
        {testimonies.map((testimony, index) => (
          <TestimonyCard
            key={index}
            imageUrl={testimony.imageUrl}
            quote={testimony.quote}
            name={testimony.name}
            position={testimony.position}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimony;
