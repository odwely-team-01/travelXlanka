// Tour.js
'use client';
import React, { useState } from 'react';
import { packagesData } from '../data/packagesData';
import { guiderData } from '../data/guiderData'; // Import guider data
import Link from 'next/link';
import TourCard from '../components/customComponents/tour/TourCard';
import InputText from '../components/customComponents/tour/InputText';
import DateInput from '../components/customComponents/tour/DateInput';
import LocationSelect from '../components/customComponents/tour/inputSelect';
import ButtonSection from '../components/customComponents/tour/ButtonSection';
import Pagination from '../components/customComponents/pagination/Pagination';
import GuiderCard from '../components/customComponents/tour/GuiderCard';

function Tour() {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const locations = [
    { label: 'New York', value: 'new_york' },
    { label: 'Los Angeles', value: 'los_angeles' },
    { label: 'Chicago', value: 'chicago' },
    { label: 'Houston', value: 'houston' },
    { label: 'Miami', value: 'miami' },
  ];

  const handleChange = (event:any ) => {
    setSelectedLocation(event.target.value);
  };

  const handlePageChange = (page :any) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col">
      {/* Main Section with Background */}
      <div className="min-h-screen h-auto flex flex-col items-center justify-center tour-bg">
        <div className="flex flex-col text-white gap-3">
          <div className="flex items-center justify-center gap-4">
            <Link className="text-xs md:text-sm font-normal border-b-2 border-white/30" href={'/'}>
              HOME
            </Link>
            <Link className="text-xs md:text-sm font-normal border-b-2 border-white/30" href={'/tour'}>
              TOUR
            </Link>
          </div>
          <h1 className="font-poppins text-4xl md:text-5xl xl:text-6xl font-bold">Destination</h1>
        </div>
      </div>

      {/* Description Card Section */}
      <div className="max-w-[1140px] w-full mx-auto flex items-center justify-center px-4 xl:px-0">
        <div className="flex flex-col sm:flex-row gap-4 my-10 w-full">
          {/* Left Section */}
          <div className="sm:w-1/2 md:w-1/3 flex flex-col gap-5">
            {/* Form Section */}
            <div className="p-3 rounded-md bg-[#F8FAFF] flex flex-col gap-5">
              <span className="uppercase md:text-lg">Find Destination</span>
              <InputText placeholder="Destination, City" />
              <LocationSelect
                locations={locations}
                name="locationSelect"
                id="locationSelect"
                value={selectedLocation}
                onChange={handleChange}
                placeholder="Choose a location"
                className="w-full"
              />
              <DateInput placeholder="FROM DATE" />
              <DateInput placeholder="TO DATE" />
              <ButtonSection text="Search" />
            </div>

            {/* Guide Section */}
            <div className="p-3 rounded-md bg-[#F8FAFF] sm:flex flex-col gap-2 hidden max-h-[calc(10*56px)] overflow-y-auto custom-scrollbar">
              {guiderData.map((guider) => (
                 <Link key={guider.id} href={`/guider`} passHref>
                 <GuiderCard {...guider} />
               </Link>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-3 w-full grid xsm:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {packagesData?.map((tour, index) => (
              <TourCard
                key={index}
                title={tour.title}
                price={tour.price}
                hashtags={tour.hashtags}
                duration={tour.duration}
                imageSrc={tour.imageSrc}
                rating={tour.rating}
                description={tour.description}
                numOfShare={tour.numOfShare}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center w-full py-5">
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
      </div>

      {/* Mobile Guide Section */}
      <div className="flex sm:hidden p-4 overflow-x-auto gap-5 snap-x snap-mandatory">
        {guiderData.map((guider) => (
          <div key={guider.id} className="flex-shrink-0 w-full snap-center">
            <Link href={`/guider`} passHref>
              <GuiderCard {...guider} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tour;
