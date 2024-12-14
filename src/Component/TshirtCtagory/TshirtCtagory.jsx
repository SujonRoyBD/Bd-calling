import React from 'react'
import { IoStar } from "react-icons/io5";

const TshirtCtagory = () => {
  return (
    <div>
      <img src="../../../src/assets/img/image.png" alt="bg" />
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div>
            <img src="../../../src/assets/img/long_t_shirt (1).webp" alt="rrt" />
        </div>
        <div>
            <div className='flex gap-8'>
            <h2 className='text-3xl flex gap-6'> Long Sleeve T-Shirt</h2> <strong className='text bg-orange-100 rounded-full px-2 mt-2'>in stock</strong>
            </div>
            <div className='flex gap-6'>
            <div className='flex text-orange-400 mt-5 gap-3'>
            <IoStar/>
            <IoStar/>
            <IoStar/>
            <IoStar/> 
            <IoStar/>
            </div>
            <div className='mt-4 text-gray-400'>
                <p>4 Review</p>
            </div>
            </div>
            <h3 className='text-3xl text-orange-400'>$45.5</h3>
            <strong className='flex gap-2'>Category : <p className='text-gray-400'>
            Freeze</p></strong>
            <p className='text-gray-400 mt-4'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.</p>
        </div>
        
      </div>
    </div>
  ) 
}

export default TshirtCtagory
