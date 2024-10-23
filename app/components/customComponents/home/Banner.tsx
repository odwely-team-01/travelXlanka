'use client';
import React, { useEffect, useState } from 'react';

interface BannerProps {
  title: string;
  description: string;
  customers: number;
  places: number;
  hotels: number;
  unseenPlaces: number;
}

const Banner: React.FC<BannerProps> = ({
  title,
  description,
  customers,
  places,
  hotels,
  unseenPlaces,
}) => {
  const [customerCount, setCustomerCount] = useState<string>('0');
  const [placesCount, setPlacesCount] = useState<string>('0');
  const [hotelsCount, setHotelsCount] = useState<string>('0');
  const [unseenPlacesCount, setUnseenPlacesCount] = useState<string>('0');

  useEffect(() => {
    const increment = (
      start: number, 
      end: number, 
      setCount: React.Dispatch<React.SetStateAction<string>>
    ) => {
      let current = start;
      const step = Math.ceil(end / 100);
      const interval = setInterval(() => {
        current += step;
        if (current >= end) {
          setCount(end.toLocaleString() + '+');
          clearInterval(interval);
        } else {
          setCount(current.toLocaleString());
        }
      }, 20);
    };

    increment(0, customers, setCustomerCount);
    increment(0, places, setPlacesCount);
    increment(0, hotels, setHotelsCount);
    increment(0, unseenPlaces, setUnseenPlacesCount);
  }, [customers, places, hotels, unseenPlaces]);

  return (
    <div className="relative bg-cover bg-center">
      <div className="absolute inset-0"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-3xl md:text-4xl xl:text-5xl">{title}</h1>
        <p className="mt-4 w-full text-sm sm:text-base px-6">{description}</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-6">
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-4xl font-bold">{customerCount}</span>
            <span className="mt-2 text-sm sm:text-base">Happy Customers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-4xl font-bold">{placesCount}</span>
            <span className="mt-2 text-sm sm:text-base">Destination Places</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-4xl font-bold">{hotelsCount}</span>
            <span className="mt-2 text-sm sm:text-base">Hotels</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-4xl font-bold">{unseenPlacesCount}</span>
            <span className="mt-2 text-sm sm:text-base">Unseen Places to Travel</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
