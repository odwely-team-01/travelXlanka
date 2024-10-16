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
    <div className='flex flex-col gap-2 items-center'>
      <Image
        src={imageSrc}
        alt={title}
        width={260}
        height={260}
        className='object-cover'
      />
      <span className='flex flex-col px-4'>
        <h3 className='font-bold mt-4 text-2xl'>{title}</h3>
        <p>{description}</p>
      </span>
    </div>
  );
};

export default FeatureCard;
