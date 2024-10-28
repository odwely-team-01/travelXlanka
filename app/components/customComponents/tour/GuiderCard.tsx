import Image from 'next/image';
import React from 'react';
import RatingSection from './RatingSection';

// Define the props interface
interface GuiderCardProps {
  name: string;
  img: string;
  description: string;
  coverLocation: string;
  ratings: number;
}

const GuiderCard: React.FC<GuiderCardProps> = ({ name, img, description, coverLocation, ratings }) => {
  return (
    <div className="w-full">
      <div className="item flex w-full sm:max-w-[420px] p-2.5 rounded-xl backdrop-blur-sm bg-[#8bc34a]/5 border border-[#8bc34a]">
        <div className="flex gap-2">
          <div className="flex justify-start items-center flex-col">
            <div>
              <p className="text-[11px] font-bold pb-1">{name}</p>
            </div>
            <div className="w-2/3">
              <Image
                src={img}
                alt={`${name}'s image`}
                width={20}
                height={20}
                className="rounded-full w-full"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <span className="position text-[9px]">
              {description}
            </span>
            <p className="name text-[10px] font-semibold">
              Cover Location: {coverLocation}
            </p>
            <div>
              {/* <RatingSection ratings={ratings} /> */}
              <RatingSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuiderCard;
