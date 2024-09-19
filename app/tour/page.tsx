import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegStar } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';
import TourCard from '../components/customComponents/tour/TourCard';
import GuiderCard from '../components/customComponents/guider/GuiderCard';

function Tour() {
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
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 my-10 px-4">
        
        {/* left */}
        <div className="w-full border">
        <GuiderCard />
        </div>

        {/* right */}
        <div className="lg:col-span-3 w-full   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* card sections here */}

          <TourCard
            title="2 Days Sigiriya"
            price={2}
            hashtags={['Sigiriya', 'Dambulla']}
            duration="2 days 3 nights"
            imageSrc="/tour/sigiriya.png"
            rating={4.5}
            description=" Climb Sigiriya Rock, Climb Pidurangala mountain, Minneriya
                  National Park Safari, Ayurvedic Spa, Golden Temple in
                  Dambulla, Pinnawala Elephant Orphanage"
          />

          <TourCard
            title="2 Days Sigiriya"
            price={2}
            hashtags={['Sigiriya', 'Dambulla']}
            duration="2 days 3 nights"
            imageSrc="/tour/sigiriya.png"
            rating={4.5}
            description=" Climb Sigiriya Rock, Climb Pidurangala mountain, Minneriya
                  National Park Safari, Ayurvedic Spa, Golden Temple in
                  Dambulla, Pinnawala Elephant Orphanage"
          />

          <TourCard
            title="2 Days Sigiriya"
            price={2}
            hashtags={['Sigiriya', 'Dambulla']}
            duration="2 days 3 nights"
            imageSrc="/tour/sigiriya.png"
            rating={4.5}
            description=" Climb Sigiriya Rock, Climb Pidurangala mountain, Minneriya
                  National Park Safari, Ayurvedic Spa, Golden Temple in
                  Dambulla, Pinnawala Elephant Orphanage"
          />

          <TourCard
            title="2 Days Sigiriya"
            price={2}
            hashtags={['Sigiriya', 'Dambulla']}
            duration="2 days 3 nights"
            imageSrc="/tour/sigiriya.png"
            rating={4.5}
            description=" Climb Sigiriya Rock, Climb Pidurangala mountain, Minneriya
                  National Park Safari, Ayurvedic Spa, Golden Temple in
                  Dambulla, Pinnawala Elephant Orphanage"
          />
        </div>
      </div>
    </div>
  );
}

export default Tour;
