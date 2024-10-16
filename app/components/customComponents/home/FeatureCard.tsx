// FeatureCard.tsx
import Image from 'next/image';
import React from 'react';

interface FeatureCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className='group flex flex-col gap-2 items-center'>
      <Image
        src={imageSrc}
        alt={title}
        width={260}
        height={260}
        className='object-cover transition-transform duration-300 group-hover:scale-105'
      />
      <span className='flex flex-col px-4'>
        <h3 className='font-bold mt-4 text-xl md:text-2xl'>{title}</h3>
        <p className='text-black/50 text-xs sm:text-sm 2xl:text-base'>{description}</p>
      </span>
    </div>
  );
};

export default FeatureCard;
