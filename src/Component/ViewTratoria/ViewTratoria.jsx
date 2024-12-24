import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { PiFireFill } from "react-icons/pi";
import Items from '../Items/Items';
import TshirtView1 from '../TshirtView1/TshirtView1';
import { Link } from 'react-router-dom';


const ViewTratoria = () => {
    
  return (
    <div className='px-20 mt-7'>
      <div>
        <img src="/assets/img/thumbnail.png" alt="thumbinal"height={300} width={1200} />
        <h2 className='text-2xl font-bold'>Trattoria dall'Oste</h2>
        <hr className='h-1 w- bg-gray-400 mb-9' />
        <div className='flex gap-[70px]'>
            <h3 className='flex gap-3'><IoLocationOutline className='mt-1 text-green-400 text-xl'/>Via Luigi Alamanni, 3, 50123 Firenze</h3>
            <p><IoMdMenu className='mt-1 text-green-400 text-3xl'/></p>

        </div>
       <div className='flex gap-8'>
       <div className='flex text-orange-500 text-3xl'>
       <IoMdStar/>
       <IoMdStar/>
       <IoMdStar/>
       <IoMdStar/>
    </div>
    <div className='text-3xl text-gray-300 flex gap-4'><IoMdStar/>
    <h2 className='text-2xl text-black'>4.3</h2></div>
      </div>
    </div>
    <div className='flex justify-between'> 
        <h3 className='flex gap-7 text-2xl'>Items < PiFireFill className='mt-1 text-orange-500'/> </h3>
        {/*  */}
        <Link to="/viewcart"><button className='bg-green-200 px-3 rounded-full'>see all</button></Link>
    </div>
    <Items/>
    <TshirtView1/>
    
       </div>
       
  ) 
}

export default ViewTratoria
