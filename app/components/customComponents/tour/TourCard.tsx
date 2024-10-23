import Image from 'next/image';
import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { IoMdShareAlt } from 'react-icons/io';
import { IoCalendarOutline, IoHeart } from 'react-icons/io5';

type TourCardProps = {
  title: string;
  price: number;
  imageSrc: string;
  rating: number;
  description: string;
  duration: string;
  hashtags: string[];
  numOfShare: string;
};

const TourCard = ({
  title,
  price,
  imageSrc,
  rating,
  description,
  duration,
  hashtags,
  numOfShare = '1K',
}: TourCardProps) => {
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          {[...Array(fullStars)].map((_, idx) => (
            <FaStar key={`full-star-${idx}`} className="text-[#F1ED00]" />
          ))}
          {[...Array(emptyStars)].map((_, idx) => (
            <FaRegStar key={`empty-star-${idx}`} className="text-[#F1ED00]" />
          ))}
        </div>
        <span className="text-white text-[11px]">{rating} Rating</span>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full gap-3 rounded-md shadow-md max-h-[650px]">
      <div>
        <Image
          src={imageSrc}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-auto cursor-pointer group-hover:scale-105 duration-300"
        />
      </div>

      <div className='p-4'>
        <div className="group flex items-center justify-center overflow-hidden transition-all duration-150 relative ">
          <div className="absolute bottom-0 left-0 w-full p-3 px-5 flex items-center justify-between backdrop-blur-sm">
            {renderStars()}

            <div className="flex flex-col gap-1">
              <IoHeart
                color="#FF0000"
                size={25}
                className="cursor-pointer hover:scale-110"
              />
              <span className="text-white text-[11px]">{numOfShare} Likes</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full gap-5 ">
          <div className="flex items-center justify-between font-medium text-base md:text-lg">
            <span>{title}</span>
            <span className="text-[#63A7FD]">${price}</span>
          </div>

          <div className="flex">
            <span className="text-sm text-[#4D4D4D] md:text-base">
              {description}
            </span>
          </div>

          <div className="flex items-center justify-between font-light text-[#949494] md:text-sm text-xs">
            <span className="flex items-center gap-2">
              <IoCalendarOutline /> {duration}
            </span>
            <span className=" text-[#4D4D4D] flex items-center gap-1">
              <IoMdShareAlt size={20} /> {numOfShare} share{' '}
            </span>
          </div>

          <hr className="h-[1.5px] border-none bg-[#adacac]" />

          <div className=" flex items-center justify-between">
            <span className="text-sm font-light text-[#696969] md:text-base">
              {hashtags.map((tag) => (
                <span key={tag}>#{tag} </span>
              ))}
            </span>

            <button className="rounded-lg bg-[#8bc34a] py-1 px-2 text-white transition duration-150 hover:bg-[#78b731] text-xs md:text-sm">
              Discover
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
