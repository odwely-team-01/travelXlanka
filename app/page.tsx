"use client";

import React from 'react';
import Image from 'next/image';
import Banner from '@/app/components/customComponents/home/Banner'; 
import BannerBg from "@/public/homeBanner.jpg"
import WhyChooseUs from './components/customComponents/home/WhyChooseUs';

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
