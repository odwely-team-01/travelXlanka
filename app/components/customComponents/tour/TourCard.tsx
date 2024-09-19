import Image from 'next/image';
import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

type TourCardProps = {
  title: string;
  price: number;
  imageSrc: string;
  rating: number;
  description: string;
  duration: string;
  hashtags: string[];
};

const TourCard = ({ title, price, imageSrc, rating, description, duration, hashtags }: TourCardProps) => {
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, idx) => (
          <FaStar key={`full-star-${idx}`} className="text-[#F85959]" />
        ))}
        {[...Array(emptyStars)].map((_, idx) => (
          <FaRegStar key={`empty-star-${idx}`} className="text-[#F85959]" />
        ))}
        <span className="text-[#4D4D5E] text-[11px]">{rating} Rating</span>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full gap-5 rounded-md shadow-md">
      <div className="group flex items-center justify-center overflow-hidden rounded-t-md transition-all duration-150">
        <Image
          src={imageSrc}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-auto rounded-t-md cursor-pointer group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col w-full gap-5 px-5">
        <div className="flex items-center justify-between font-medium text-sm md:text-base">
          <span>{title}</span>
          <span className="text-[#63A7FD]">${price}</span>
        </div>

        {renderStars()}

        <div className="flex">
          <span className="text-sm text-[#696969] md:text-base">{description}</span>
        </div>

        <span className="text-sm font-light text-[#696969] md:text-base">{duration}</span>

        <hr className="h-[1.5px] border-none bg-[#adacac]" />

        <div className="mb-5 flex items-center justify-between">
          <span className="text-sm font-light text-[#696969] md:text-base">
            {hashtags.map((tag) => (
              <span key={tag}>#{tag} </span>
            ))}
          </span>

          <button className="rounded-md bg-[#8BC34A] py-1 px-2 text-white transition duration-150 hover:bg-[#acff4d] hover:text-[#696969]">
            Discover
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
