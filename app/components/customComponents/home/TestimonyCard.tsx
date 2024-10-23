import React from "react";
import Image from 'next/image'; 
import Slider from "react-slick"; // Import react-slick for the carousel

interface TestimonyCardProps {
  imageUrl: string;
  quote: string;
  name: string;
  position: string;
}

const TestimonyCard: React.FC<TestimonyCardProps> = ({ imageUrl, quote, name, position }) => {
  return (
    <div className="item flex">
      <div className="flex gap-4">
        <div className="user-img mb-5">
          <Image 
            src={imageUrl} 
            alt={name} 
            width={150} 
            height={150} 
            className="rounded-full" 
          />
          <span className="quote d-flex align-items-center justify-content-center">
            <i className="icon-quote-left"></i>
          </span>
        </div>
        <div className="text ml-md-4">
          <p className="mb-5 text-sm">{quote}</p>
          <p className="name text-sm sm:text-base">{name}</p>
          <span className="position text-sm sm:text-base">{position}</span>
        </div>
      </div>
    </div>
  );
};

interface TestimonyCarouselProps {
  testimonies: TestimonyCardProps[];
}

const TestimonyCarousel: React.FC<TestimonyCarouselProps> = ({ testimonies }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="md:w-2/3 lg:w-4/5 xl:w-full">
      <Slider {...settings}>
        {testimonies.map((testimony, index) => (
          <TestimonyCard
            key={index}
            imageUrl={testimony.imageUrl}
            quote={testimony.quote}
            name={testimony.name}
            position={testimony.position}
          />
        ))}
      </Slider>
    </div>
  );
};

export default TestimonyCarousel;
