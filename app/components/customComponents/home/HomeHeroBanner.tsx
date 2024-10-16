import React from 'react';
import SearchBar from './SearchBar';

const HomeHeroBanner = () => {
  return (
    <div className="flex flex-col items-start w-full text-white gap-5">
      <span className="flex flex-col text-4xl md:text-5xl xl:text-6xl 2x:text-7xl items-start">
        <p className="font-bold">Travel</p>
        <p>where you feel most alive...</p>
      </span>
      <p>Find great places to travel</p>
      <div className="w-full">
        <SearchBar />
      </div>
    </div>
  );
};

export default HomeHeroBanner;
