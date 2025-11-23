import { useState } from "react";
import { Link } from "react-router";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

const Footer = () => {

    const [togglePolicy, setTogglePolicy] = useState(true);
    const [toggleCustomer, setToggleCusotmer] = useState(true);

    const handleTogglePolicy = ()=>{
        setTogglePolicy(!togglePolicy);
        setToggleCusotmer(false);
    }

    const handleToggleCustomer = ()=>{
        setToggleCusotmer(!toggleCustomer);
        setTogglePolicy(false);
    }

  return (
    <div className="pt-10">
        <footer className="footer lg:hidden sm:footer-horizontal bg-gray-800 text-base-content py-10 px-4">
            
           <nav className="w-full">
                <div onClick={handleTogglePolicy} className="flex w-full justify-between">
                    <h6  className="footer-title font-bold text-white ">Policy Links</h6>
                    <div className="lg:hidden"><ChevronDownIcon className="w-6 text-white"/></div>
                </div>
   

                {/* Mobile: toggle visibility */}
                {togglePolicy && (
                <div className="flex flex-col gap-2 lg:hidden mb-2">
                    <Link to='/policy/privacy' className="link link-hover text-white">Privacy Policy</Link>
                    <Link to='/policy/shipping' className="link link-hover text-white">Shipping Policy</Link>
                    <Link to='/policy/return' className="link link-hover text-white">Return & Refund Policy</Link>
                    <Link to='/policy/terms' className="link link-hover text-white">Terms & Conditions</Link>
                    <Link to='/policy/contact' className="link link-hover text-white">Contact Us</Link>
                </div>
                )}
                    
                <div onClick={handleToggleCustomer} className="w-full flex justify-between">
                    <h6  className="footer-title font-bold text-white">Customer Support</h6>
                    <div className="lg:hidden"><ChevronDownIcon className="w-6 text-white"/></div>
                </div>
      

                {/* {Mobile visibility} */}
               { toggleCustomer && (
                <div className="flex flex-col gap-2 mb-2 lg:hidden">
                    <Link to='/customer/about' className="link link-hover  text-white">About us</Link>
                    <Link to='/customer/shop' className="link link-hover  text-white">Shop</Link>
                    <Link to='/customer/faq' className="link link-hover  text-white">FAQs</Link>
                    <Link to='/customer/track' className="link link-hover  text-white">Track Order</Link>
                </div>
               
                )}
            
            <h6 className="footer-title font-bold  text-white">Social</h6>
            <div className="grid grid-flow-col gap-4">
            <Link to="" target="_blank">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current text-white"
                >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm10 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7z" />
                </svg>
            </Link>
            <Link to=''>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current  text-white">
                <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
            </Link>
            <Link to=''>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current  text-white">
                <path
                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
            </Link>
            <Link to=''>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current  text-white">
                <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
            </Link>
            </div>
              
           </nav>

           {/*Desktop  */}
        </footer>

        <footer className="hidden lg:flex lg:justify-around footer sm:footer-horizontal bg-gray-800 text-base-content py-10">
            <nav>
                <h6 className="footer-title text-white">Policy Links</h6>
                <Link to='/policy/privacy' className="link link-hover text-white">Privacy Policy</Link>
                <Link to='/policy/shipping' className="link link-hover text-white">Shipping Policy</Link>
                <Link to='/policy/return' className="link link-hover text-white">Return & Refund Policy</Link>
                <Link to='/policy/terms' className="link link-hover text-white">Terms & Conditions</Link>
                <Link to='/policy/contact' className="link link-hover text-white">Contact Us</Link>
            </nav>
            <nav>
                <h6 className="footer-title text-white">Customer Support</h6>
               <Link to='/customer/about' className="link link-hover  text-white">About us</Link>
                <Link to='/customer/shop' className="link link-hover  text-white">Shop</Link>
                <Link to='/customer/faq' className="link link-hover  text-white">FAQs</Link>
                <Link to='/customer/track' className="link link-hover  text-white">Track Order</Link>
            </nav>
            <nav>
                <h6 className="footer-title text-white">Social</h6>
                <div className="grid grid-flow-col gap-4">
                <Link to="" target="_blank">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current text-white"
                    >
                        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm10 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7z" />
                    </svg>
                </Link>

                <Link to=''>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current text-white">
                    <path
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                </Link>
                <Link to=''>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current text-white">
                    <path
                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                </Link>
                <Link to=''>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current text-white">
                    <path
                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                </Link>
                </div>
            </nav>
        </footer>
           
        <footer className="footer lg:border-t lg:py-4  border-gray-900 sm:footer-horizontal footer-center bg-gray-800 text-base-content">
            <aside>
                <p className='text-white'>Copyright © {new Date().getFullYear()} - All right reserved by Sneaker Hub</p>
            </aside>
        </footer>

    </div>
  )
}

export default Footer