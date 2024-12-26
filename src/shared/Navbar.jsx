import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
  const [isActive, setIsActive] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='sticky top-0 z-50 py-3'>
      {/* large device  */}
      <div className='hidden md:block -mt-4'>
        <nav className=' flex items-center justify-between bg-blue-500 px-20 pt-3 pb-2'>
          <NavLink to='/'>
            <img src="/assets/img/Discount me-01-01 1.png" alt="discount" height={170} width={170} />
          </NavLink>

          <div className='w-1/4 flex items-center'>
            <input className='py-2 px-3 w-full text-lg font-bold rounded-l-full outline-none border-none' type="text" name="" id="" placeholder='Search' />
            <button className='bg-orange-500 text-white text-lg font-bold rounded-r-full py-2 px-4'>Search</button>
          </div>

          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/about'>Blog</NavLink>
          <NavLink onMouseEnter={() => setIsOpen(!isOpen)} onMouseLeave={() => setIsOpen(!isOpen)} to='#category'>Category {!isOpen ? ">" : "<"} </NavLink>
          <div className={`fixed top-16 right-[290px] ${isOpen && "bg-gray-950"}  text-white px-4 py-2 -mt-[2px]`}>
            {
              isOpen && <ul>
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            }

          </div>
          <NavLink onMouseEnter={() => setIsOpen(!isOpen)} onMouseLeave={() => setIsOpen(!isOpen)} to='#dropdown'>Dropdown{!isOpen ? ">" : "<"}</NavLink>
          <div className={`fixed top-16 right-[180px] ${isOpen && "bg-gray-950"}  text-white px-4 py-2 -mt-[2px]`}>
            {
              isOpen && <ul>
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            }

          </div>
          <NavLink to='/error'>Error</NavLink>

        </nav>
      </div>

      {/* small device  */}
      <div className='block md:hidden'>
        <div className='flex items-center justify-between px-4 py-1 bg-white -mt-5'>
          <div>
            <img src="/assets/img/Discount me-01-01 1.png" alt="discount" height={170} width={170} />
          </div>
          <div className='cursor-pointer' onClick={() => setIsActive(!isActive)}>
            {
              isActive ? <IoMenu className='w-[32px] h-[32px]' /> : <RxCross2 className='w-[32px] h-[32px]' />
            }
          </div>
        </div>
        {/* menu open */}
        <div className={`{!isActive ? "left-0 w-2/3": "-left-[100%] w-full"} bg-orange-500 fixed h-[400px] top-10`}>
          {
            !isActive && (
              <nav className='w-full text-black flex flex-col pl-4 pr-28 py-3'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='blog'>Blog</NavLink>
                <NavLink to='contact us'>Contact Us</NavLink>
              </nav>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
