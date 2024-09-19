import React from 'react';
import { CiStar } from 'react-icons/ci';
import Man from '../../../../public/guider/guiderCard/man.png';
import Image from 'next/image';

const guiderCard = () => {
  return (
    <>
     
     <div className='flex flex-row border border-red-700 space-x-7 p-2 rounded-xl '>
     <div className="flex flex-col justify-center gap-4 w-3/12">
        <h2>Jogh bush</h2>
        <Image src={Man} alt="alt" className='w-full h-full' />
      </div>
      <div className="flex flex-col  gap-4 text-[10px] w-9/12">
        <p className=''>
          Uncover the best of cities, nature, and culture with detailed
          itineraries, local tips, and hidden gems. From iconic landmarks to
          off-the-beaten-path adventures, this guide is your perfect travel
          companion. Start exploring today!
        </p>
        <div className="flex flex-row border border-green-300 gap-5">
          <div className="flex flex-row  border border-red-700">
            <p className='font-bold'>Cover Locations: </p>
            <ul className='flex flex-row gap-1 '>
              <li>Ella,</li>
              <li>Hikkaduwa,</li>
              <li>Galle</li>
              <li>Nuwara Eliya</li>
            </ul>
          </div>
          <div className='flex flex-row gap-1'>
            <div className="flex">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </div>
            <p className='text-[9px] '> 58 Ratings </p>
          </div>
        </div>
      </div>
     </div>
    </>
  );
};

export default guiderCard;
