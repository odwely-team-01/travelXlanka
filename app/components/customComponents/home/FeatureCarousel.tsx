import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { DestinationData } from '@/app/data/destinationData';
import FeatureCard from './FeatureCard';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,              
  autoplaySpeed: 3000, 
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 815,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const FeatureCarousel: React.FC = () => {
  return (
    <div className='w-full py-10'>
      <Slider {...settings}>
        {DestinationData.map((destination, index) => (
          <FeatureCard
            key={index}
            imageSrc={destination.imageSrc}
            title={destination.title}
            description={destination.description}
          />
        ))}
      </Slider>
    </div>
  );
};

export default FeatureCarousel;
