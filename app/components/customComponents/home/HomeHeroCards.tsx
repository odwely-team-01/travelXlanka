import Image from 'next/image'
import React from 'react'

interface HomeHeroCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const HomeHeroCards: React.FC<HomeHeroCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className='group flex flex-col bg-white hover:bg-[#f85959]  items-center space-y-6 px-5 lg:px-7 py-8 md:py-12 transition-colors duration-300 shadow-inner'>
      <div className='md:w-[80px] md:h-[80px]'>
        <Image
          src={imageSrc}
          alt={title}
          width={80}
          height={80}
          className='transition-all duration-300 group-hover:brightness-0 group-hover:invert'
        />
      </div>
      <h3 className='group-hover:text-white transition-colors duration-300 text-base md:text-xl'>{title}</h3>
      <p className='text-center text-gray-500 group-hover:text-white transition-colors duration-300 text-sm md:text-base'>
        {description}
      </p>
    </div>
  )
}

export default HomeHeroCards
