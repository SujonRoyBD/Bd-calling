import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div >
      <nav className='flex justify-between mt-7 bg-blue-500 sticky z-50'>
        <NavLink to='/'><img src="../../public/img/Discount me-01-01 1.png" alt="discount"height={170} width={170} /></NavLink>
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
        <NavLink to='/error'>Error</NavLink>
        
      </nav>
    
    </div>
  )
}

export default Navbar
