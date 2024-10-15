'use client';
// #f85959

import React from 'react';
import Image from 'next/image';
import Banner from '@/app/components/customComponents/home/Banner';
import BannerBg from '@/public/homeBanner.jpg';
import WhyChooseUs from './components/customComponents/home/WhyChooseUs';
import HomeHeroCards from './components/customComponents/home/HomeHeroCards';
import FeatureCard from './components/customComponents/home/FeatureCard';
import { toursCardData } from './lib/constants';
import TourCard from './components/customComponents/tour/TourCard';
import HomeHeroBanner from './components/customComponents/home/HomeHeroBanner';
import Testimony from './components/customComponents/home/Testimony';
import FeatureCarousel from './components/customComponents/home/FeatureCarousel';

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center "></div>

      <div className="flex w-full flex-col items-center justify-center h-screen homebg1 px-4">
        <div className="flex justify-center items-center  max-w-[1140px] w-full">
          <HomeHeroBanner />
        </div>
      </div>

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
      </div>

      <div className="w-full flex flex-col justify-center items-start sm:items-center bg-[#f8f9fa] overflow-hidden px-4">
        <div className="w-full xl:w-[1140px]">
          <div className="flex text-black flex-col w-full justify-start gap-5">
            <span className="flex flex-row items-end gap-3">
              <p className="text-2xl font-bold">Featured</p>
              <p>Destination</p>
            </span>
          </div>
        </div>

        <div className="flex flex-row">
          <FeatureCarousel />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-20">
        <div className="max-w-[1140px] w-full">
          <div className="w-full">
            <p className="text-black/55">Special Offers</p>
            <span className="flex text-2xl gap-2">
              <p className="font-bold">Top</p>Tour Packages
            </span>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1400px]">
            {toursCardData?.map((tour, index) => (
              <TourCard
                key={index}
                title={tour.title}
                price={tour.price}
                hashtags={tour.hashtags}
                duration={tour.duration}
                imageSrc={tour.imageSrc}
                rating={tour.rating}
                description={tour.description}
                numOfShare={tour.numOfShare}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center homebg2">
        <div className="flex justify-center items-center  max-w-[1140px] sm:h-[400px] md:xl:h-[500px] 2xl:h-[600px]">
          <Banner
            title="We love Sri Lanka"
            description="Embracing the Heart of Serendipity: Our Enduring Love for Sri Lanka, Where Rich Heritage, Natural Splendor, and Unity Flourish in Harmony!"
            customers={100000}
            places={200}
            hotels={2000}
            unseenPlaces={50}
            // backgroundImage={BannerBg}
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center px-4 py-4">
        <div className="flex flex-col sm:flex-row justify-center items-center  max-w-[1140px] sm:h-[400px] md:xl:h-[450px] 2xl:h-[550px] space-y-4 sm:space-y-0">
          <div className="w-full sm:w-1/2">
            <WhyChooseUs
              title="Choose Us"
              description="We offer exceptional experiences, personalized services, and unmatched expertise for all your travel needs."
              buttonText="Learn More"
              onButtonClick={() => alert('Button clicked!')}
            />
          </div>
          <div className="w-full sm:w-1/2">
            <Testimony />
          </div>
        </div>
      </div>
    </>
  );
}
