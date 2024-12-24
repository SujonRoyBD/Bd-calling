import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
  const [isActive, setIsActive] = useState(true);
  return (
    <div className='sticky top-0 z-50 '>
      {/* large device  */}
      <div className='hidden md:block'>
        <nav className=' flex items-center justify-between bg-blue-500'>
          <NavLink to='/'>
          <img src="/assets/img/Discount me-01-01 1.png" alt="discount" height={170} width={170} />
          </NavLink>
          <div className="flex items-center border-2 border-gray-300 rounded-full overflow-hidden">
            <div className="-ml-5 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M10.5 16.5a6 6 0 100-12 6 6 0 000 12z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search"
              className="flex px-3 py-3 border-red-500 text-gray-600"
            />
            <button className="px-4 py-3 bg-orange-500 text-white font-semibold">
              Search
            </button>
          </div>



          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/about'>Blog</NavLink>
          <NavLink to='/error'>Error</NavLink>

        </nav>
      </div>

      {/* small device  */}
      <div className='block md:hidden'>
        <div className='flex items-center justify-between px-4 py-1 bg-white'>
          <div>
            <img src="../../public/assets/img/Discount me-01-01 1.png" alt="discount" height={170} width={170} />
          </div>
          <div className='cursor-pointer' onClick={() => setIsActive(!isActive)}>
            {
              isActive ? <IoMenu className='w-[32px] h-[32px]' /> : <RxCross2 className='w-[32px] h-[32px]' />
            }
          </div>
        </div>
        {/* menu open */}
        <div>
          {
            !isActive && (
              <nav className='w-2/3 bg-gray-200 text-black flex flex-col items-center py-3'>
                <NavLink>Home</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Blog</NavLink>
                <NavLink>Contact Us</NavLink>
              </nav>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
