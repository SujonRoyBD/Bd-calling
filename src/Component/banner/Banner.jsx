import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import Show from '../Show/Show';



const Banner = () => {
    return (
        <div className='relative'>

            <div className='absolute top-0 right-0 left-0 w-full flex justify-center items-center'>
                <img src="/assets/img/arrow_bar.png" alt="banner" height={300} width={500} />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 px-12'>
                <div className='mt-[100px]'>
<<<<<<< HE AD
                    <h3 className='text-6xl text-black font-bold'>food, great <br />
                        memories
                    </h3>
                    <p> Enable diners to customize their bookin Enable diners to customize their booking by
                        requesting  specific table location or view.</p>
                    <div className='border-2 rounded-full mt-9'>
                        <div className='flex gap-12 border-2 bg-orange-400 w-[200px] rounded-full'>
=======
                    <h3 className='text-6xl text-black font-bold'>this is garates the point  <strong className='text-red-600'>food</strong>, great <br />
                    memorie
                </h3>
                <p> Enable diners to her customize their bookin Enable to make diners to customize their booking by
                    requesting this customies from here table he is those can make location or view.</p>
                <div className='border-2 rounded-full '>
                    <div className='flex gap-12 border-2 bg-red-400 w-[200px] rounded-full'>
>>>>>>> c4d35ec143f540e8231aab08e1e085dc868cae8e
                        <CiLocationOn className='mt-1' />
                        <p>Location</p>
                    </div>

                </div>
            </div>
            <div>
                <img src="/assets/img/home_banner_bg.webp" alt="banner" height={300} width={500} />
            </div>
        </div>
        <Show />
        </div >
    )
}

export default Banner
