import React from 'react'
import { CiLocationOn } from "react-icons/ci";


const Banner = () => {
    return (
        <div className='relative'>
            
            <div className='absolute top-0 right-0 left-0 w-full flex justify-center items-center'>
                    <img src="/assets/img/arrow_bar.png" alt="banner" height={300} width={500} />
                </div>
            <div className='grid grid-cols-1 md:grid-cols-2 px-12'>
                <div className='mt-[100px]'>
                    <h3 className='text-6xl text-black font-bold'>this is garate the point  <strong className='text-red-600'>food</strong>, great <br />
                        memories
                    </h3>
                    <p> Enable diners to her customize their bookin Enable diners to customize their booking by
                        requesting this prtesr specific table location or view.</p>
                    <div className='border-2 rounded-full '>
                        <div className='flex gap-12 border-2 bg-red-400 w-[200px] rounded-full'>
                            <CiLocationOn className='mt-1'/>
                            <p>Location</p>
                        </div>
                     
                    </div>
                </div>
                <div>
                    <img src="/assets/img/home_banner_bg.webp" alt="banner" height={300} width={500} />
                </div>
            </div>

        </div>
    )
}

export default Banner
