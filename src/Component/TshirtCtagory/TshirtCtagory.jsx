import React from 'react'
import { IoStar } from "react-icons/io5";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { IoBagCheck } from "react-icons/io5";
import { MdShoppingCartCheckout } from "react-icons/md";
import { Link } from 'react-router-dom';



const TshirtCtagory = () => {
  const cheakout = [
    {
        img:"/assets/img/kristin.webp",
        title:"Kristin Watson",
        time:"2 min ago",
        desc:"Duis at ullamcorper nulla, eu dictum eros."
    },
    {
        img:"/assets/img/jane.webp",
        title:"Jane Cooper",
        time:"30 Apr, 2021",
        desc:"Keep the soil evenly moist for the healthiest growth. If the sun gets too hot, Chinese cabbage tends to 'bolt' or go to seed; in long periods of heat, some kind of shade may be helpful. Watch out for snails, as they will harm the plants."
    },
    {
        img:"/assets/img/jacob.webp",
        title:"Jacob Jones",
        time:"2 min ago",
        desc:"Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia lacus."
    },
    {
        img:"/assets/img/ralph.webp",
        title:"Ralph Edwards",
        time:"2 min ago",
        desc:"200+ Canton Pak Choi Bok Choy Chinese Cabbage Seeds Heirloom Non-GMO Productive Brassica rapa VAR. chinensis, a.k.a. Canton's Choice, Bok Choi, from USA"
    },
]
  return (
    <div className='px-20 '>
      <img src="/assets/img/image.png" alt="bg" />
      <div className='grid grid-cols-1 md:grid-cols-2 mt-7'>
        <div>
            <img src="/assets/img/long_t_shirt (1).webp" alt="rrt" />
        </div>
        <div>
            <div className='flex gap-8'>
            <h2 className='text-3xl flex gap-6'> Long Sleeve T-Shirt</h2> <strong className='text bg-orange-100 rounded-full  md: px-2 mt-2'>in stock</strong>
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
            <h3 className='text-3xl text-orange-400'>$46.5</h3>
            <strong className='flex gap-2'>Category : <p className='text-gray-400'>
            Freeze</p></strong>
            <p className='text-gray-400 mt-4'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.</p>

            <div className='flex border-2 w-[100px] rounded-full'>
            <CiCircleMinus className='text-gray-400 w-12 h-10'/>
            <p className='text-xl mt-2'>5</p>
            < CiCirclePlus className='text-gray-400 w-12 h-10'/>
            </div >
            <div>
                <div className='flex gap-12 mt-7 mb-7'>
                   <div className=' bg-orange-400 flex gap-3 rounded-full px-3 py-2'>
                 <Link to="/cheakout">  <button>Checkout</button>
                 <IoBagCheck/> </Link>
                   </div>
                   <Link to="/cheakout">  <MdShoppingCartCheckout  className='text-gray-400 w-12 h-10  border-2 rounded-full py-2 px-2'/> </Link>

                </div>
            </div>
        </div>
        
      </div>

      <div>
                <div>
                    {
                        cheakout.map((name)=>{
                            return <div key={name}>
                                <div className='flex '>
                                    <div className='flex gap-6'>
                                        <img src={name.img} alt="ff" />
                                        <div>
                                            <h2>{name.title}</h2>
                                            <p className='flex text-orange-400'>
                                                <IoStar />
                                                <IoStar />
                                                <IoStar />
                                                <IoStar />
                                                <IoStar />
                                            </p>
                                        </div>
                                    </div>
                                    <div className='mt-4 -mr-[100px] md: ml-[300px]'>
                                      <p>{name.time}</p>
                                    </div> 
                                    
                                </div>
                                <p className='text-gray-400'>{name.desc}</p>
                                <hr className='h-4 w-[100px text-slate-500' />
                            </div>
                        })
                    } 
                </div>
            </div>
    </div>
  ) 
}

export default TshirtCtagory
