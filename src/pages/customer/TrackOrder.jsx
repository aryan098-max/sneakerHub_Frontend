import { useState } from "react";
import {Link} from "react-router";

const TrackOrder = () => {

  const [trackingNumber, setTrackingNumber] = useState("");

  const handleTracking = ()=>{

    // prevent empty submit, even empty space can be considered input
    if(!trackingNumber.trim()) return;

    const trackinUrl =  `https://www.delhivery.com/tracking?ref=${trackingNumber}`;
    window.open(trackinUrl, "_blank");

  }

  return (
    <div className='max-w-3xl mx-auto py-8 px-6 text-center'>
      <h1 className='text-2xl font-semibold'>Track Order</h1>

      <div className='bg-gray-50 rounded-lg shadow-md mt-4 py-8 px-6'>
        <p className='font-semibold'>You can track your order below by entering the AWB number</p>
        <div className='flex items-center justify-center'>
          <input 
            value={trackingNumber} 
            type='text' placeholder='Enter AWB Number'
            onChange={(e)=>setTrackingNumber(e.target.value)}
            className='my-2 w-1/2 border-2 rounded-sm py-1 px-1'
          />
          <button onClick={handleTracking} className='btn btn-primary mx-2'>Submit</button>
        </div>
      </div>

    </div>
  )
}

export default TrackOrder