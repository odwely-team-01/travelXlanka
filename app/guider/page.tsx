import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ReviewCard from '../components/customComponents/guider/ReviewCard';


const page = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center text-black">
      <div className="relative h-[200px] sm:h-[300px] flex flex-col items-center justify-center guider-bg w-full mt-16 ">
        <div className="absolute z-50 flex flex-col text-white gap-3 blur-[2px]">
          <div className="flex items-center justify-center gap-4">
            <Link
              className="text-xs md:text-sm font-normal border-b-2 border-white/30"
              href={'/'}
            >
              HOME
            </Link>
            <Link
              className="text-xs md:text-sm font-normal border-b-2 border-white/30 uppercase"
              href={'/tour'}
            >
              Guider
            </Link>
          </div>
          <h1 className="font-poppins text-4xl md:text-5xl xl:text-6xl font-bold">
            Travle X Guider
          </h1>
        </div>
      </div>
      <div className="max-w-[1140px] flex justify-center items-center">
        <div className="h-full w-full flex flex-col md:flex-row pt-6 md:pt-10 gap-6 justify-center px-6 lg:px-0">
          <div className="flex flex-col w-full md:w-1/2">
            <div className=''>
              <div className="flex flex-col items-center md:items-start justify-center">
                <Image
                  src="/testimony/person_4.jpg"
                  alt="hero"
                  width={100}
                  height={40}
                  className="rounded-full"
                />
                <p className="text-red-400 text-base sm:text-xl">Gunasekara</p>
                <p className="text-red-600 font-semibold text-xs md:text-sm">
                  From Sri Lanka
                </p>
              </div>
              <hr className="my-2"></hr>
              <div className="flex">
                <p className="text-sm xl:text-base">
                A guider serves as a supportive tool or person who offers direction, insight, and expertise, assisting individuals in navigating challenges, achieving goals, and making informed decisions. By providing step-by-step guidance, a guider empowers people to progress with clarity and confidence, ensuring they remain focused and on the right path.
                </p>
              </div>
              <hr className="my-2"></hr>
            </div>
            <div className='flex flex-col gap-3'>
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />

            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-2xl py-3">Photographs of the Tours</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 gap-3">
              <Image
                src="/feature/destination-1.jpg"
                alt="hero"
                width={200}
                height={40}
              />
              <Image
                src="/feature/destination-2.jpg"
                alt="hero"
                width={200}
                height={40}
              />
              <Image
                src="/feature/destination-3.jpg"
                alt="hero"
                width={200}
                height={40}
              />
              <Image
                src="/feature/destination-4.jpg"
                alt="hero"
                width={200}
                height={40}
              />

              <Image
                src="/feature/destination-5.jpg"
                alt="hero"
                width={200}
                height={40}
              />
              <Image
                src="/feature/destination-1.jpg"
                alt="hero"
                width={200}
                height={40}
              />
              <Image
                src="/feature/destination-2.jpg"
                alt="hero"
                width={200}
                height={40}
              />

              <Image
                src="/feature/destination-3.jpg"
                alt="hero"
                width={200}
                height={40}
              />
              <Image
                src="/feature/destination-4.jpg"
                alt="hero"
                width={200}
                height={40}
              />
              <Image
                src="/feature/destination-5.jpg"
                alt="hero"
                width={200}
                height={40}
              />

              <Image
                src="/feature/destination-2.jpg"
                alt="hero"
                width={200}
                height={40}
              />
              <Image
                src="/feature/destination-1.jpg"
                alt="hero"
                width={200}
                height={40}
              />
              <Image
                src="/feature/destination-4.jpg"
                alt="hero"
                width={200}
                height={40}
              />

              <Image
                src="/feature/destination-5.jpg"
                alt="hero"
                width={200}
                height={40}
              />
              <Image
                src="/feature/destination-1.jpg"
                alt="hero"
                width={200}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
