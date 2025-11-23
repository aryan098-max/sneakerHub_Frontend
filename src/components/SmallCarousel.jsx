import Countdown from 'react-countdown';
import CarouselCard from './CarouselCard';
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/solid";
import {useRef} from "react";


const SmallCarousel = () => {

  // useRef hook
  const refCarousel = useRef(null);

 
  const handleScrollLeft=()=>{
    refCarousel.current.scrollBy({left:-200, behavior:"smooth"})
  }

   const handleScrollRight = ()=>{
    refCarousel.current.scrollBy({ left:200, behavior:"smooth" })
  }


  const dummyData = [
    {
      _id:1,
      imageSrc:"https://res.cloudinary.com/drk7m7qcx/image/upload/v1762848995/NikeJordan_dha12c.png",
      discountRate:40, // why error at this line
      shoesType:"Basketball Sneaker",
      shoesTitle:"Air Jordan High 1",
      shoesDiscountPrice:2999,
      shoesPrice:4499
    },
    {
      _id:2,
      imageSrc:"https://res.cloudinary.com/drk7m7qcx/image/upload/v1762849132/NikeRunning_kgpplf.png",
      discountRate:50, // why error at this line
      shoesType:"Trail-to-Road Running",
      shoesTitle:"Nike ZoomX Zegama",
      shoesDiscountPrice:3199,
      shoesPrice:6399
    },
    {
      _id:3,
      imageSrc:"https://res.cloudinary.com/drk7m7qcx/image/upload/v1762849497/Nike_qw1lh8.png",
      discountRate:50, // why error at this line
      shoesType:"Basketball Sneaker",
      shoesTitle:"Nike Dunk Low",
      shoesDiscountPrice:2999,
      shoesPrice:5999
    },
    {
      _id:4,
      imageSrc:"https://res.cloudinary.com/drk7m7qcx/image/upload/v1762853265/Nikewhite_h02sbv.png",
      discountRate:50,
      shoesType:"Basketball Sneaker",
      shoesTitle:"Nike Dunk Low",
      shoesDiscountPrice:2999,
      shoesPrice:5999
    },
    {
      _id:5,
      imageSrc:"https://res.cloudinary.com/drk7m7qcx/image/upload/v1762849700/nikeblack_jhph39.png",
      discountRate:50, // why error at this line
      shoesType:"Limited Edition Sneaker",
      shoesTitle:"Nike Dunk Low",
      shoesDiscountPrice:2999,
      shoesPrice:5999
    },
    {
      _id:6,
      imageSrc:"https://res.cloudinary.com/drk7m7qcx/image/upload/v1762864454/run_sfqmtr.png",
      discountRate:50, // why error at this line
      shoesType:"Trail Running Sneaker",
      shoesTitle:"Nike Pegasus Trail 4",
      shoesDiscountPrice:2499,
      shoesPrice:4999
    },
    {
      _id:7,
      imageSrc:"https://res.cloudinary.com/drk7m7qcx/image/upload/v1762853322/nikerun_io2zth.jpg",
      discountRate:50, // why error at this line
      shoesType:"Trail Racing Sneaker",
      shoesTitle:"Nike Ultrafly",
      shoesDiscountPrice:3199,
      shoesPrice:6399
    }
  ]

  return (
    <div className='relative pb-4 lg:py-10'>

      <div className="text-center">
        <h1 className="text-xl font-bold">Today's Spotlight</h1>
        <h1 className="font-bold text-sm">HANDPICKED FOR YOU | ENDS IN</h1>
      </div>

      <div className="my-2 text-lg font-bold text-center">
        <Countdown date={Date.now() + 3 * 60 * 60 * 1000} />
      </div>

      
    <button 
      onClick={handleScrollLeft}
      className="absolute flex justify-center items-center w-6 h-6 left-2 top-1/2 -translate-y-1/2 text-white bg-gray-700 rounded-full z-10"
    >
        {<ChevronLeftIcon className="w-4 h-4"/>}
    </button>

    <div ref={refCarousel} className="flex overflow-x-auto py-2 pl-2 pr-2">
      {
        dummyData.map((shoes)=>{ 
           return <CarouselCard key={shoes._id} shoesData={shoes}/>
        })
      }
    </div>

    <button 
      className="absolute flex items-center justify-center w-6 h-6 right-2 top-1/2 -translate-y-1/2 text-white bg-gray-700 rounded-full z-10" 
      onClick={handleScrollRight}
    >
      {<ChevronRightIcon className="w-4 h-4"/>}
    </button>
 
  </div>
  );
};

export default SmallCarousel;
