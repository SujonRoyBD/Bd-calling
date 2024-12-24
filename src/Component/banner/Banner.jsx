import React from 'react'
import { CiLocationOn } from "react-icons/ci";


const Banner = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 px-12'>
                <div className='mt-[100px]'>
                    <h3 className='text-6xl text-black font-bold'>Good <strong className='text-red-600'>food</strong>, great <br />
                        memories
                    </h3>
                    <p> Enable diners to customize their bookin Enable diners to customize their booking by
                        requesting  specific table location or view.</p>
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
