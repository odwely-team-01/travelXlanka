// components/customComponents/home/FeatureCarousel.tsx
import React from 'react';
import { Carousel } from 'primereact/carousel';
import { DestinationData } from '@/app/data/destinationData';
import Image from 'next/image';

interface DestinationData {
  imageSrc: string;
  title: string;
  description: string;
}

const FeatureCarousel: React.FC = () => {
  const itemTemplate = (feature: DestinationData) => {
    return (
      <div className="w-full flex justify-center items-center">
        <div className="feature-card flex flex-col w-full justify-center items-center">
          <div>
            <Image src={feature.imageSrc} alt={feature.title} width={300} height={300} />
          </div>
          <div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Carousel
      value={DestinationData}
      itemTemplate={itemTemplate}
      numVisible={8}
      numScroll={2}

      circular
      autoplayInterval={3000}
    />
  );
};

export default FeatureCarousel;
