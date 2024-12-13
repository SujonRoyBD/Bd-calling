
import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Link } from 'react-router-dom';


const TopResturent = () => {
    const data = [
        
            {
                img: "../../../src/assets/img/Kitchen1.png",
                title: "Trattoria dall'Oste",
                location: "Via Luigi Alamanni, 3, 50123 Firenze",
                desc: {
                    main: "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you're dining, seafood can be truly exceptional.",
                    readMore: "Read more..."
                }
            },
            {
                img: "../../../src/assets/img/Kitchen2.png",
                title: "Trattoria dall'Oste",
                location: "Via Luigi Alamanni, 3, 50123 Firenze",
                desc: {
                    main: "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you're dining, seafood can be truly exceptional.",
                    readMore: "Read more..."
                }
            },
            {
                img: "../../../src/assets/img/Kitchen3.png",
                title: "Trattoria dall'Oste",
                location: "Via Luigi Alamanni, 3, 50123 Firenze",
                desc: {
                    main: "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you're dining, seafood can be truly exceptional.",
                    readMore: "Read more..."
                }
            },
        ];
        
    
    return (
        <div>
            <div className='mt-12 px-20 grid grid-cols-1 md:grid-cols-2 justify-between '>
                <div>
                    <h2 className='text-3xl '>Explore <strong className='text-orange-600'>Top Restaurants</strong></h2>
                    <p>Check your city <span className='text-gray-400'>Near by <br />
                        Restaurant</span></p>
                </div>
                <div className='text-end'>
                    <Link to="/vewresturent"><button>see all </button></Link>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 px-20 gap-3 '>
    {
        data.map((data, index) => {
            return (
                <div key={index} className='border-2 px-6 py-6 rounded-lg'>
                    <img src={data.img} alt="kitchen" height={100} width={300} />
                    <h2 className='flex gap-3 font-bold text-2xl'>
                        {data.title}
                        <MdOutlineStarPurple500 className='text-yellow-400 h-9 w-7' /> (4.5)
                    </h2>
                  
                   <h3 className='text-blac'>{data.location}</h3>
                   <div className=''>
                    <h2 className='text-gray-500' >{data.desc.main}</h2>
                    <h2 className=''>
                        <span>{data.desc.readMore}</span>
                    </h2>
                    <button className='text-center bg-green-500 w-full rounded-lg py-2'>Visit</button>
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
