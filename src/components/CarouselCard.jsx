import {NIKE_JORDAN} from "../utils/constants";

const CarouselCard = ({shoesData}) => {

    const {imageSrc, discountRate, shoesType, shoesTitle, shoesDiscountPrice, shoesPrice} = shoesData;

  return (
        <div className="px-2 py-2 carousel-item">
           <div className="card bg-base-100 w-48 h-56 shadow-sm relative">
              <div className='absolute left-0 font-bold rounded-sm bg-red-700 text-white text-sm px-2 py-1'>
                -{discountRate}%
              </div>
              <figure>
                <img
                  className="rounded-sm w-full h-32 object-cover"
                  src={imageSrc}
                  alt="Shoes" />
              </figure>
              <div className="p-2">
                <h2 className="text-sm font-bold">{shoesTitle}</h2>
                <h2 className="text-sm font-bold">{shoesType}</h2>
                <p className='text-sm font-bold text-red-500'>₹ {shoesDiscountPrice.toLocaleString()}</p>
                <p className='text-sm line-through'>₹ {shoesPrice.toLocaleString()}</p>
              </div>
          </div>
        </div>
  )
}

export default CarouselCard