import { useState } from 'react';
import {Link} from 'react-router'
import { LOGO, PROFILE_ICON } from '../utils/constants';
import { Bars3Icon, MagnifyingGlassIcon, HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";

const Header = () => {

  const [open, setOpen] = useState(false)

  return (
    <div>
      <div className="navbar bg-gray-800 shadow-sm">
        <div className="relative flex flex-1 items-center w-full">
            <div className="absolute left-0 ml-2 flex justify-start lg:hidden">
              <button onClick={()=>setOpen(!open)}>
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
              </div>

            <div className='flex justify-center items-center lg:justify-start w-full lg:w-auto pl-30 lg:pl-0'> 
              <Link to="/">
              <img
                className="h-15 md:h-15 w-auto"
                alt="logo"
                src={LOGO}
              />
              </Link>
            </div>

            <div className='lg:flex hidden'> 
              <Link to="/new" className="text-white font-bold mx-5">New</Link>
              <Link to="/men" className="text-white font-bold mx-5">Men</Link>
              <Link to="/women" className="text-white font-bold mx-5">Women</Link>
              <Link to="/sports" className="text-white font-bold mx-5">Sports</Link>
            </div> 

            <div className={`lg:hidden rounded-lg absolute left-0 w-1/2 top-full bg-gray-900 shadow-md transition-all duration-300 z-10 ${open?"block":"hidden"}`}>
                <Link to="/new" className="block px-4 py-2 text-white border-b border-gray-700">
                  New
                </Link>
                <Link to="/men" className="block px-4 py-2 text-white border-b border-gray-700">
                  Men
                </Link>
                <Link to="/women" className="block px-4 py-2 text-white border-b border-gray-700">
                  Women
                </Link>
                <Link to="/sports" className="block px-4 py-2 text-white">
                  Sports
                </Link>
            </div>
            <div className='absolute left-8'>
              <MagnifyingGlassIcon className='text-white m-2 h-7 w-7 font-bold lg:hidden'/>
            </div>

        </div>
        <div className="flex items-center gap-2">
          <div className='flex items-center lg:border-2 border-black px-2'>
            <button className='hidden lg:flex items-center font-bold px-2 text-white'>
            <MagnifyingGlassIcon className='text-white m-2 h-7 w-7 font-bold'/>
             SEARCH
            </button>
          </div>
          
          <div className='flex items-center'>
             <Link to='/whishlist'>
              <HeartIcon className="hidden lg:block w-7 h-7 mx-2 text-white" />
             </Link>

              <Link to='/bag'>
                <ShoppingBagIcon className="w-7 h-7 mx-2 text-white" />
             </Link>
          </div>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={PROFILE_ICON} />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-gray-900 rounded-box z-1 mt-3 w-52 p-2 shadow-md">
              <li className="border-b border-gray-700">
                <a className="text-white text-lg px-4 py-2">
                  My Account
                </a>
              </li>
              <li className="border-b border-gray-700" ><Link to='/whishlist' className='text-white text-lg px-4 py-2'>Whislist</Link></li>
              <li className="border-b border-gray-700" ><Link to='' className='text-white text-lg px-4 py-2'>Check Order/Return</Link></li>
              <li className="border-b border-gray-700" ><Link to='' className='text-white text-lg px-4 py-2'>Language </Link></li>
              <li className="border-b border-gray-700" ><Link to='' className='text-white text-lg px-4 py-2'>Logout</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header