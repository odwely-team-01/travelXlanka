'use client';
// #f85959

import React from 'react';
import Image from 'next/image';
import Banner from '@/app/components/customComponents/home/Banner';
import BannerBg from '@/public/homeBanner.jpg';
import WhyChooseUs from './components/customComponents/home/WhyChooseUs';
import HomeHeroCards from './components/customComponents/home/HomeHeroCards';

export default function Home() {
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

      <div className="w-full flex justify-center bg-[#f8f9fa] pb-10">
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
      </div>

      <div className=''>

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
