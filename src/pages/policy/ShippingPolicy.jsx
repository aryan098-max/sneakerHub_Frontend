import React from 'react'

const ShippingPolicy = () => {
  return (
    <div className='max-w-3xl mx-auto px-6 py-8 text-center'>
      <h1 className='text-2xl font-bold mb-8'>Shipping Policy</h1>
      <div className='bg-gray-50 shadow-md rounded-2xl space-y-4 p-8 mb-8 text-left'>
        <p>We deliver across India through trusted courier partners.</p>
        <div>
            <h1 className='font-semibold'>Order Processing:</h1>
            <p>- Orders are processed within 1–2 business days after payment confirmation.</p>
        </div>
        <div>
          <h1 className='font-semibold'>Delivery Timelines:</h1>
          <ul className='pl-5 list-disc'>
            <li>Standard delivery: 3–5 business days within metro cities.</li>
            <li>Other locations: 5–7 business days.</li>
            <li>Remote/pin code areas may take up to 10 business days.</li>
          </ul>
        </div>
        <div>
          <h1 className='font-semibold'>Shipping Charges:</h1>
          <p>- Shipping charges (if applicable) will be displayed at checkout before payment.</p>
        </div>

        <p>In case of delays due to courier or unforeseen events, our support team will keep you informed.</p>

        <p className='font-semibold'>For support, email srisriportlp@gmail.com or call +91-8052747236</p>
      </div>

    </div>
  )
}

export default ShippingPolicy