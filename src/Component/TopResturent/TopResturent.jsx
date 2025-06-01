
import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';



const TopResturent = () => {

    const data = [

        {
            img: "/assets/img/Kitchen1.png",
            title: "Trattoria dall'Oste 1",
            location: "Via Luigi Alamanni, 3, 50123 Firenze",
            desc: {
                main: "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you're dining, seafood can be truly exceptional.",
                readMore: "Read more..."
            }
        },
        {
            img: "/assets/img/Kitchen2.png",
            title: "Trattoria dall'Oste 2",
            location: "Via Luigi Alamanni, 3, 50123 Firenze",
            desc: {
                main: "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you're dining, seafood can be truly exceptional.",
                readMore: "Read more..."
            }
        },
        {
            img: "/assets/img/Kitchen3.png",
            title: "Trattoria dall'Oste 3",
            location: "Via Luigi Alamanni, 3, 50123 Firenze",
            desc: {
                main: "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you're dining, seafood can be truly exceptional.",
                readMore: "Read more..."
            }
        },
    ];


    return (
        <div>
            <div className='mt-12 px-2 md:px-20 flex items-center justify-cneter '>
                <div className='w-2/3'>
                    <h2 className='text-3xl '>Explore <strong className='text-orange-600'>Top Restaurants</strong></h2>
                    <p>Check your city <span className='text-gray-400'>Near by <br />
                        Restaurant</span></p>
                </div>
                <div className='w-1/3 md:ml-[400px] sm:justify-center'>
                    <Link className=' gap-2 text-end' to="/vewresturent"><button className=' hover:text-green-400 flex text-xl font-bold'>see all <IoIosArrowForward className='mt-1.5' /> </button></Link>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 px-20 gap-3 '>
                {
                    data.map((data, index) => {
                        return (
                            <div key={index} className='border-2 px-6 py-6  rounded-lg'>
                                <img src={data.img} alt="kitchen" height={100} width={300} />
                                <h2 className='flex gap-3 font-bold text-xl'>
                                    {data.title}
                                    <MdOutlineStarPurple500 className='text-yellow-400 h-9 w-7' /> (4.5)
                                </h2>

                                <h3 className='text-blac'>{data.location}</h3>
                                <div className=''>
                                    <h2 className='text-gray-500' >{data.desc.main}</h2>
                                    <h2 className=''>
                                        <span>{data.desc.readMore}</span>
                                    </h2>
                                    <Link to={`/view-top-restaurant/${data?.title}`}>
                                    <button className='text-center bg-green-500 w-full rounded-lg py-2'>Visit</button>
                                    </Link>
                                    
                                </div>
                            </div>
                        );
                    })
                }
            </div>


        </div>
    )
}

export default TopResturent
