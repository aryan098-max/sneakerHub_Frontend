import { useRef } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

const Shop = () => {

  const carouselRef = useRef(null);

  const handleScrollLeft=()=>{
    carouselRef.current.scrollBy({left:-400, behavior:"smooth"});
  }

  const handleScrollRight =()=>{    
    carouselRef.current.scrollBy({left:400, behavior:"smooth"});
  }


  return (
    <div className='relative pt-2 pb-8 lg:pt-8'>
        <div className='py-2'>
            <h1 className='text-center text-red-900 text-2xl font-bold'>Visit Our Store</h1>
            <h1 className='text-center text-red-900 text-xl font-bold py-1'>Location: Palia Kalan, 262902</h1>
        </div>

          <button
           className="absolute flex items-center justify-center left-0 top-1/2 -translate-y-1/2 rounded-full bg-gray-700 text-white p-2"
           onClick={handleScrollLeft}
          >
          <ChevronLeftIcon className="w-5"/>
          </button>  

           <div ref={carouselRef} className="flex overflow-x-auto rounded-box px-1">
                <div className="carousel-item pl-3 pr-2">
                    <img
                    className='object-cover rounded-xl w-full h-130'
                    src="https://res.cloudinary.com/drk7m7qcx/image/upload/v1762871404/storefront_shmvhl.jpg"
                    alt="Burger" />
                </div>

                <div className="carousel-item pr-2">
                    <img
                    className='rounded-xl w-full h-130'
                    src="https://res.cloudinary.com/drk7m7qcx/image/upload/v1762872242/exclusiveshoescollection_ln1fvu.jpg"
                    alt="Burger" />
                </div>

                <div className="carousel-item pr-2">
                    <img
                    className='rounded-xl w-full h-130'
                    src="https://res.cloudinary.com/drk7m7qcx/image/upload/v1762872376/leathershoes_l0hshq.jpg"
                    alt="Burger" />
                </div>

                <div className="carousel-item pr-2">
                    <img
                    className='rounded-xl w-full h-130'
                    src="https://res.cloudinary.com/drk7m7qcx/image/upload/v1762872696/bag_re5pjk.jpg"
                    alt="Burger" />
                </div>

                <div className="carousel-item pr-2">
                    <img
                    className='rounded-xl w-full h-130'
                    src="https://res.cloudinary.com/drk7m7qcx/image/upload/v1762872160/shoescollection_utbagm.jpg"
                    alt="Burger" />
                </div>
           
             
                <div className="carousel-item pr-3">
                    <img
                    className='rounded-xl w-full h-130'
                    src="https://res.cloudinary.com/drk7m7qcx/image/upload/v1762872538/newcollection_fnkyay.jpg"
                    alt="Burger" />
                </div>
         
                <div className="carousel-item">
                    <img
                    className='rounded-xl w-full h-130'
                    src="https://res.cloudinary.com/drk7m7qcx/image/upload/v1762872696/newcollection_wrts6h.jpg"
                    alt="Burger" />
                </div>
           </div>
          <button
          className="absolute flex items-center justify-center right-2 top-1/2 -translate-y-1/2 rounded-full bg-gray-700 text-white p-2"
          onClick={handleScrollRight}
          >
          <ChevronRightIcon className="w-5"/>
          </button> 

    </div>
  )
}

export default Shop