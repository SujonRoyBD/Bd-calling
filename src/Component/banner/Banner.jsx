import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import Show from '../Show/Show';

const Banner = () => {
    return (
        <div className='relative'>
            {/* Arrow Banner */}
            <div className='absolute top-0 left-0 right-0 flex justify-center'>
                <img src="/assets/img/arrow_bar.png" alt="arrow banner" height={300} width={500} />
            </div>

            {/* Main Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 px-12 pt-[120px]'>
                {/* Text Content */}
                <div>
                    <h3 className='text-6xl text-black font-bold leading-tight'>
                        This is the greates point of <strong className='text-red-600'>food</strong>, great <br />
                        memories
                    </h3>
                    <p className='mt-4 text-gray-700'>
                        Enable diners to customize their booking by requesting specific table location or view.
                    </p>

                    {/* Location Search Box */}
                    <div className='mt-6 w-fit bg-orange-400 rounded-full px-6 py-3 flex items-center gap-3 cursor-pointer'>
                        <CiLocationOn size={24} />
                        <p className='text-white font-semibold'>Location</p>
                    </div>
                </div>

                {/* Image */}
                <div className='flex justify-center mt-8 md:mt-0'>
                    <img src="/assets/img/home_banner_bg.webp" alt="home banner" height={300} width={500} />
                </div>
            </div>

            {/* Show Component */}
            <Show />
        </div>
    );
};

export default Banner;
