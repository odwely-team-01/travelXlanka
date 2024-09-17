import Image from 'next/image';
import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

type Props = {
  title: string;
  price: number;
  imageSrc: string;
  rating: number;
  description: string;
  duration: string;
  hashtags: string[];
};

const TourCard = (props: Props) => {
  const { title, price, imageSrc, rating, description, duration, hashtags } = props;

  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} className="text-[#F85959]" />
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={index} className="text-[#F85959]" />
        ))}
        <span className="text-[#4D4D5E] text-[11px]">{rating} Rating</span>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-5 w-full rounded-md shadow-md">
      <div className="flex items-center justify-center group overflow-hidden rounded-t-md duration-150 transition-all">
        <Image
          src={imageSrc}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-auto cursor-pointer rounded-t-md group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col w-full gap-5 px-5">
        <div className="flex items-center justify-between font-medium md:text-base text-sm">
          <span>{title}</span>
          <span className="text-[#63A7FD]">${price}</span>
        </div>

        {renderStars()}

        <div className="flex">
          <span className="text-[#696969] md:text-base text-sm">{description}</span>
        </div>

        <span className="text-[#696969] md:text-base text-sm font-light">{duration}</span>

        <hr className="bg-[#adacac] border-none h-[1.5px]" />

        <div className="flex items-center justify-between mb-5">
          <span className="text-[#696969] md:text-base text-sm font-light">
            {hashtags.map((tag, index) => (
              <span key={index}>#{tag} </span>
            ))}
          </span>

          <button className="text-white hover:text-[#696969] bg-[#8BC34A] hover:bg-[#acff4d] transition duration-150 py-1 px-2 rounded-md">
            Discover
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
