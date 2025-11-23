import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className='max-w-3xl mx-auto py-8 px-6 text-center'>
      <h1 className='text-2xl font-bold mb-8'>Privacy</h1>
      <div className='bg-gray-50 shadow-md rounded-2xl p-8 mb-8 space-y-4 text-left'>

        <div>
          <h1 className='text-lg font-semibold'>1. Information We Collect</h1>
          <p>We collect the following types of information:</p>
          <div className='pl-4 py-4 space-y-4'>
            <div>
              <h1 className=' font-semibold'>a. Personl Information</h1>
              <p>When you make a purchase or register an account, we may collect your name, email address, phone number, billing address, and shipping address.</p>
            </div>
            
            <div>
              <h1 className=' font-semibold'>b. Payment Information</h1>
              <p>When you make a purchase, your payment details (like credit/debit card information) are processed securely through our payment partners. We do not store your full payment details..</p>
            </div>

              <div>
                <h1 className=' font-semibold'>c. Non-Personl Information</h1>
                <p>We automatically collect certain information such as your IP address, browser type, device information, and browsing patterns through cookies and analytics tools.</p>
              </div>
          </div>
        </div>

        <div>
          <h1 className='text-lg font-semibold'>2. How We Use Your Information</h1>
          <p>We use your information to:</p>
          <ul className='pl-5 py-2 space-y-2 list-disc'>
            <li>Process and fulfill your orders.</li>
            <li>Send order confirmations, updates, and customer support messages.</li>
            <li>Improve our website and shopping experience.</li>
            <li>Send promotional offers and updates (only if you opt in).</li>
          </ul>
        </div>
        
        <div>
          <h1 className='text-lg font-semibold'>3. Cookies</h1>
          <div className='pl-4'>
             <p>Sneaker Hub uses cookies to enhance your browsing experience.</p>
             <p>Cookies help us remember your preferences, track site traffic, and improve website performance. You can disable cookies anytime through your browser settings.</p>
          </div>
        </div>

        <div>
          <h1 className='text-lg font-semibold'>4. Sharing of Information</h1>
          <p>We do not sell, trade, or rent your personal information.</p>
          <p>However, we may share your data with:</p>
          <ul className='pl-5 py-2 space-y-2 list-disc'>
            <li>Trusted service providers who help us operate our website (e.g., payment gateways, delivery partners).</li>
            <li>Legal authorities if required by law or to protect our rights.</li>
          </ul>
        </div>

        <div>
          <h1 className='text-lg font-semibold'>5. Data Security</h1>
          <p>We take appropriate technical and organizational measures to protect your information against unauthorized access, loss, or misuse. However, no method of online transmission is 100% secure, and we cannot guarantee absolute security.</p>
        </div>

        <div>
          <h1 className='text-lg font-semibold'>6. Your Rights</h1>
          <p>You have the right to:</p>
          <ul className='list-disc pl-5'>
            <li>Access, correct, or delete your personal information.</li>
            <li>Opt out of marketing emails anytime by clicking “unsubscribe.”</li>
            <li>Request details of the information we hold about you.</li>
          </ul>
          <p className='py-2'>To exercise these rights, contact us at ali.monish260@gmail.com.</p>
        </div>

        <div>
          <h1 className='font-semibold text-lg'>7. Changes to This Policy</h1>
          <p>Sneaker Hub may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated “Last Updated” date.</p>
        </div>

        <div>
          <h1 className='font-semibold'>8. Contact Us</h1>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
          <a target="_blank" href='https://mail.google.com/mail' className='hover:underline text-blue-600'>
              ali.monish260@gmail.com
          </a>
        </div>
        
        <div>
          
        </div>

      </div>
    </div>
  )
}

export default PrivacyPolicy