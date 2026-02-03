import {HeartIcon} from "@heroicons/react/24/solid"
import { useSelector } from "react-redux";
import LoginControllerPage from "../auth/page/LoginControllerPage";

const Wishlist = () => {

  const user = useSelector((store)=>store?.user);

  if(!user) return <LoginControllerPage/>

  return (
    <div className='min-h-screen'>
      <div className='max-w-4xl mx-auto py-8 px-6'>
        <div className='bg-gray-100 shadow-md rounded-lg p-8'>
          <div className='flex items-center justify-between'>
            <h1 className='text-2xl'>My Wishlist</h1>
            <h1 className='text-2xl'>0 items</h1>
          </div>
          <div className='my-4 border border-red-200'></div>
          <div className="flex flex-col items-center justify-center min-h-screen">
            <HeartIcon className="text-white w-1/4"/>
            <p className="font-bold text-2xl">Your Whishlist is Empty</p>
          </div>
        </div> 
      </div>
       
    </div>
  )
}

export default Wishlist;