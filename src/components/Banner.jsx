import { HERO_BANNER, HERO_BANNER2 } from '../utils/constants';
import Shop from './Shop';
import VideoContainer from './VideoContainer';

const Banner = () => {
  return (
    <div className='lg:pb-8'>

    <div className='relative'>
      <div className="lg:absolute inset-0 bg-linear-to-r from-black to-transparent"></div>
      <div className='absolute hidden lg:block left-10 top-80 '>
        <h1 className='text-2xl text-white font-bold m-2'>
          FOR THE TRENDSETTERS
        </h1>
        <h1 className='text-xl text-white m-2'>
          SPEEDCAT RETURNS IN NEW COLORWAYS
        </h1>
        <h1 className='text-xl text-white m-2'>
          FOR THE SEASON
        </h1>
        <div>
            <button className='text-white px-4 py-3 rounded font-bold bg-gray-800 m-2'>NEW TRENDING</button>
            <button className='text-white px-4 py-3 rounded font-bold bg-gray-800 m-2'>NEW ARRIVALS</button>
        </div>
      </div>
      
      <img 
        className='w-full'
        alt="hero banner"
        src={HERO_BANNER}
      />

    <div className='lg:hidden p-8 text-center'>
        <h1 className=' text-black text-2xl font-bold'>
          FOR THE TRENDSETTERS
        </h1>
        <h1 className=' text-black'>
          NEW ARRIVALS STIRRING THE MARKET
        </h1>
        <h1 className=' text-black'>
          FOR THE SEASON
        </h1>
        <div className='pt-4'>
            <button className='text-white px-4 py-3 rounded font-bold bg-gray-800 m-2'>NEW TRENDING</button>
            <button className='text-white px-4 py-3 rounded font-bold bg-gray-800 m-2'>NEW ARRIVALS</button>
        </div>
      </div>

    </div>
  
    <div className='p-2 m-2'>
      <VideoContainer/>
    </div>
    
    <div>
      <Shop/>
    </div>

    <div className='relative py-2'>

    <div className='absolute hidden lg:block right-10 top-20 '>
        <h1 className='text-2xl text-black font-bold m-2'>
            AS THE LEGNED GOES
        </h1>
        <h1 className='text-xl text-black m-2'>
          NEW ARRIVALS STIRRING THE MARKET
        </h1>
        <div>
            <button className='text-white px-4 py-3 rounded font-bold bg-gray-800 m-2'>SHOP NOW</button>
        </div>
      </div>

       <img 
        className='w-full'
        alt="hero banner"
        src={HERO_BANNER2}
      />

    <div className='lg:hidden p-8 text-center'>
        <h1 className=' text-black text-2xl font-bold'>
            AS THE LEGNED GOES
        </h1>
        <h1 className=' text-black'>
          NEW ARRIVALS STIRRING THE MARKET
        </h1>
        <div className='pt-4'>
            <button className='text-white px-4 py-3 rounded font-bold bg-gray-800 m-2'>SHOP NOW</button>
        </div>
      </div>


    </div>

  </div>



  )
}


export default Banner