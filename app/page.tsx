'use client';
// #f85959

import React from 'react';
import Image from 'next/image';
import Banner from '@/app/components/customComponents/home/Banner';
import BannerBg from '@/public/homeBanner.jpg';
import WhyChooseUs from './components/customComponents/home/WhyChooseUs';
import HomeHeroCards from './components/customComponents/home/HomeHeroCards';
import FeatureCard from './components/customComponents/home/FeatureCard';



interface FeatureData {
  imageSrc: string;
  title: string;
  description: string;
}

export default function Home() {


  const featureData: FeatureData[] = [
    {
      imageSrc: '/feature/destination-1.jpg',
      title: 'Galle, Light House',
      description: 'Spiritual heart',
    },
    {
      imageSrc: '/feature/destination-4.jpg',
      title: 'Waligama',
      description: 'Surfing paradise',
    },
    {
      imageSrc: '/feature/destination-2.jpg',
      title: 'GYala, National Park',
      description: 'Unforgettable safari adventures',
    },
    {
      imageSrc: '/feature/destination-3.jpg',
      title: 'Kandy, Temple of tooth',
      description: 'Spiritual heart',
    },
  ];



  return (
    <>
      <div className="flex w-full flex-col items-center justify-center"></div>

      {/* Banner */}
      <Banner
        title="We love Sri Lanka"
        description="Embracing the Heart of Serendipity: Our Enduring Love for Sri Lanka, Where Rich Heritage, Natural Splendor, and Unity Flourish in Harmony!"
        customers={100000}
        places={200}
        hotels={2000}
        unseenPlaces={50}
        // backgroundImage={BannerBg}
      />

      <div className="w-full flex justify-center bg-[#f8f9fa] pb-10 ">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 relative bottom-12 gap-5 lg:gap-10 px-8 max-w-[1140px]">
          <HomeHeroCards
            imageSrc="/icons/guarantee.png"
            title="Best Price"
            description="Access unbeatable deals for dream destinations with our exclusive best price offers."
          />
          <HomeHeroCards
            imageSrc="/icons/heart.png"
            title="Travellers Love Us"
            description="With personalized experiences, unbeatable deals, and exceptional customer service, keep travelers coming back."
          />
          <HomeHeroCards
            imageSrc="/icons/detective.png"
            title="Best Travel Agent"
            description="Experience the difference and start your next adventure with us today!"
          />
          <HomeHeroCards
            imageSrc="/icons/support.png"
            title="Dedicated Support"
            description="From booking to beyond, our team is here to ensure your journey is seamless and stress-free."
          />
        </div>
      </div><div className="w-full flex justify-center border bg-[#f8f9fa]">
      <div className="flex text-black flex-col max-w-[1140px] justify-start w-full gap-5">
        <p>Featured</p>
        <span className="flex flex-row items-end">
          <p className="text-2xl font-bold">Featured</p>
          <p>Destination</p>
        </span>
        <div className="flex flex-row gap-6">
          {featureData.map((feature, index) => (
            <FeatureCard
              key={index}
              imageSrc={feature.imageSrc}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>

      

      <div>
        <WhyChooseUs
          title="Choose Us"
          description="We offer exceptional experiences, personalized services, and unmatched expertise for all your travel needs."
          buttonText="Learn More"
          onButtonClick={() => alert('Button clicked!')}
        />
      </div>
    </>
  );
}
