'use client';
import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import Show from '../Show/Show';

const Banner = () => {
  return (
    <div className="relative mt-3 md:-mt-[100px]">
      {/* Top Arrow Bar */}
      <div className="absolute top-[220px] left-10 md:left-0 right-16 flex justify-center items-center z-10">
        <img
          src="/assets/img/arrow_bar.png"
          alt="arrow banner"
          width={500}
          height={300}
        />
      </div>

      {/* Banner Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-20  gap-8 items-center">
        {/* Text Content */}
        <div className='md:mt-[120px]'>
          <h3 className="text-4xl text-black font-bold leading-4xl  uppercase">
            food, great <br /> memories
          </h3>
          <p className="text-gray-600 mt-4">
            Enable diners to customize their booking by requesting specific table location or view.
          </p>

          {/* Location Input Box */}
          <div className="mt-9 w-fit border-2 rounded-full p-1">
            <div className="flex items-center gap-3 bg-orange-500 px-6 py-2 rounded-full">
              <CiLocationOn size={20} />
              <p className="text-white font-medium">Location</p>
            </div>
          </div>
        </div>

        {/* Banner Image */}
        <div>
          <img
            src="/assets/img/home_banner_bg.webp"
            alt="banner"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Show Section */}
      {/* <Show /> */}
    </div>
  );
};

export default Banner;
