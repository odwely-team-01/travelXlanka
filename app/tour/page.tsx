'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaRegStar } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';
import TourCard from '../components/customComponents/tour/TourCard';
import { toursCardData } from '../lib/constants';
import InputText from '../components/customComponents/tour/InputText';
import DateInput from '../components/customComponents/tour/DateInput';
import InputSelect from '../components/customComponents/tour/inputSelect';
import LocationSelect from '../components/customComponents/tour/inputSelect';
import ButtonSection from '../components/customComponents/tour/ButtonSection';
import RatingSection from '../components/customComponents/tour/RatingSection';
import Pagination from '../components/customComponents/pagination/Pagination';

function Tour() {
  const [selectedLocation, setSelectedLocation] = useState('');

  const locations = [
    { label: 'New York', value: 'new_york' },
    { label: 'Los Angeles', value: 'los_angeles' },
    { label: 'Chicago', value: 'chicago' },
    { label: 'Houston', value: 'houston' },
    { label: 'Miami', value: 'miami' },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(event.target.value);
  };

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Total number of pages you want

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col">
      {/* main secion with bg */}
      <div className=" min-h-screen h-auto flex flex-col items-center justify-center tour-bg">
        <div className="flex flex-col text-white gap-3">
          <div className="flex items-center justify-center gap-2 ">
            <Link className="text-xs md:text-sm font-bold" href={'/'}>
              HOME
            </Link>
            <Link
              className="text-xs md:text-sm font-bold opacity-80"
              href={'/tour'}
            >
              TOUR
            </Link>
          </div>
          <h1 className="font-poppins text-4xl md:text-5xl xl:text-6xl font-bold ">
            Destination
          </h1>
        </div>
      </div>

      {/* description card section */}
      <div className='max-w-[1140px] w-full mx-auto flex items-center justify-center'>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 my-10 px-4 ">
          {/* left */}
          <div className="w-full flex flex-col gap-5 ">
            {/* form section here */}
            <div className="p-5 rounded-md bg-[#F8FAFF] flex flex-col gap-5">
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

            {/* rating section */}
            <div className="p-5 rounded-md bg-[#F8FAFF] flex flex-col gap-5">
              <span className="uppercase md:text-lg">Start Rating</span>
              <RatingSection />
              <RatingSection />
              <RatingSection />
              <RatingSection />
              <RatingSection />
            </div>
          </div>

          {/* right */}
          <div className="lg:col-span-3 w-full   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* card sections here */}
            {toursCardData?.map((tour, index) => (
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

      <div className="flex items-center justify-center w-full py-5">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Tour;
