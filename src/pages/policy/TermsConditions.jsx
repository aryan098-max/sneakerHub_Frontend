import React from 'react'

const TermsConditions = () => {
  return (
    <div className='max-w-3xl mx-auto py-8 px-6 text-center'>
      <h1 className='text-2xl font-bold mb-8'>Terms & Conditions</h1>
      <div className='bg-gray-50 shadow-md p-8 mb-8 text-left space-y-4'>
        
        <div>
          <h1 className='font-semibold text-lg'>1. Use of Our Website</h1>
          <ul className='list-disc pl-5'>
            <li>You must be at least 16 years old to make purchases.</li>
            <li>You agree not to use the website for illegal or harmful activities.</li>
            <li>We may update or modify the website at any time without notice.</li>
          </ul>
        </div>

        <div>
          <h1 className='font-semibold text-lg'>2. Orders & Payments</h1>
          <ul className='list-disc pl-5'>
            <li>By placing an order, you agree that all information you provide (name, address, payment info) is accurate.</li>
            <li>Orders are confirmed only after successful payment.</li>
            <li>Prices may change anytime without prior notice.</li> 
            <li>Sneaker Hub is not responsible for delays caused by payment gateways or banks.</li>
          </ul>
        </div>
        
        <div>
          <h1 className='font-semibold text-lg'>3. Product Information</h1>
          <ul className='list-disc pl-5'>
            <li>We try to display product details accurately, but colors, sizes, and availability may vary slightly.</li>
            <li>Sneaker Hub reserves the right to limit or cancel orders if products are out of stock or mispriced.</li>
          </ul>
        </div>

        <div>
          <h1 className='font-semibold text-lg'>4. Shipping & Delivery</h1>
          <ul className='list-disc pl-5'>
            <li>Delivery times are estimates and may vary based on location and courier delays.</li>
            <li>Sneaker Hub is not responsible for delays caused by third-party courier services.</li>
            <li>Customers must provide the correct delivery address.</li>
          </ul>
        </div>

        <div>
          <h1 className='font-semibold text-lg'>5. Returns & Refunds</h1>
          <ul className='list-disc pl-5'>
            <li>Returns are accepted only for unused and undamaged products within [mention number] days of delivery.</li>
            <li>Refunds will be processed according to our Return Policy.</li>
            <li>Shipping fees are non-refundable unless the product is defective.</li>
          </ul>
        </div>

        <div>
          <h1 className='font-semibold text-lg'>6. User Accounts</h1>
          <ul className='list-disc pl-5'>
            <li>You are responsible for keeping your account and password secure.</li>
            <li>Any activity under your account is your responsibility.</li>
            <li>We may suspend accounts for policy violations or fraudulent activities.</li>
          </ul>
        </div>

        <div>
          <h1 className='font-semibold text-lg'>7. Intellectual Property</h1>
          <ul className='list-disc pl-5'>
            <li>All images, logos, product descriptions, and website content belong to Sneaker Hub.</li>
            <li>You may not copy, distribute, or use our content without permission.</li>
          </ul>
        </div>

        <div>
          <h1 className='font-semibold text-lg'>8. Third-Party Links</h1>
          <ul className='list-disc pl-5'>
            <li>Our website may contain links to third-party sites.</li>
            <li>We are not responsible for their content, policies, or actions.</li>
          </ul>
        </div>

        <div>
          <h1 className='font-semibold text-lg'>9. Limitation of Liability</h1>
          <p className='py-2'>Sneaker Hub is not liable for:</p>
          <ul className='list-disc pl-5'>
            <li>any damage caused by incorrect product use,</li>
            <li>delays in delivery,</li>
            <li>website downtime,</li>
            <li>errors in product descriptions,</li>
            <li>or any loss resulting from using our website.</li>
          </ul>
          <p className='py-2'>Your use of the website is at your own risk.</p>
        </div>
        
        <div>
          <h1 className='font-semibold text-lg'>10. Changes to Terms</h1>
          <ul className='list-disc pl-5'>
            <li>Sneaker Hub may update these Terms and Conditions anytime.</li>
            <li>Changes take effect once posted on this page.</li>
          </ul>
        </div>

        <div>
          <h1 className='font-semibold text-lg'>11. Contact Us</h1>
          <p>For questions or concerns:</p>
          <p className='font-semibold'>📧 Email: ali.monish260@gmail.com</p>
        </div>

      </div>
    </div>
  )
}

export default TermsConditions