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
  const [customerCount, setCustomerCount] = useState(0);
  const [placesCount, setPlacesCount] = useState(0);
  const [hotelsCount, setHotelsCount] = useState(0);
  const [unseenPlacesCount, setUnseenPlacesCount] = useState(0);

  useEffect(() => {
    const increment = (start: number, end: number, setCount: React.Dispatch<React.SetStateAction<number>>) => {
      let current = start;
      const step = Math.ceil(end / 100);
      const interval = setInterval(() => {
        current += step;
        if (current >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(current);
        }
      }, 20);
    };

    increment(0, customers, setCustomerCount);
    increment(0, places, setPlacesCount);
    increment(0, hotels, setHotelsCount);
    increment(0, unseenPlaces, setUnseenPlacesCount);
  }, [customers, places, hotels, unseenPlaces]);

  return (
    <div className="relative  bg-cover bg-center " >
      <div className="absolute inset-0 "></div>
      <div className="relative flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
        <p className="mt-4 w-full text-lg md:text-xl px-6">{description}</p>
        <div className="flex flex-col lg:flex-row justify-center mt-10 space-y-10 lg:space-y-0 lg:space-x-10">
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-bold">{customerCount.toLocaleString()}</span>
            <span className="mt-2">Happy Customers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-bold">{placesCount.toLocaleString()}</span>
            <span className="mt-2">Destination Places</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-bold">{hotelsCount.toLocaleString()}</span>
            <span className="mt-2">Hotels</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-bold">{unseenPlacesCount.toLocaleString()}</span>
            <span className="mt-2">Unseen Places to Travel</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
