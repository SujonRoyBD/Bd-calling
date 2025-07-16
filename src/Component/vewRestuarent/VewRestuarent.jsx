import React from 'react';
import { Link } from 'react-router-dom';

const VewRestuarent = () => {
    const view =[
        {
            img:"/assets/img/Kitchen1.png",
            titel:"Skateboard Shoe",
            price:"$125"
        },
        {
            img:"/assets/img/Kitchen2.png",
            
              titel:"Skateboard Shoe",
            price:"$125"
        },
        {
            img:"/assets/img/Kitchen3.png",
            titel:"Skateboard Shoe",
            price:"$125"
          
        },
        {
            img:"/assets/img/Kitchen4.png",
            titel:"Skateboard Shoe",
            price:"$125"
          
        },
        {
            img:"/assets/img/Kitchen5.png",
            titel:"Skateboard Shoe",
            price:"$125"
          
        },
        {
            img:"/assets/img/Kitchen6.png",
            titel:"Skateboard Shoe",
            price:"$125"
          
        },
        {
            img:"/assets/img/Kitchen7.png",
            titel:"Skateboard Shoe",
            price:"$125"
          
        },
        {
            img:"/assets/img/Kitchen3.png",
            titel:"Skateboard Shoe",
            price:"$125"
          
        },
        {
            img:"/assets/img/Kitchen9.png",
            titel:"Skateboard Shoe",
            price:"$125"
          
        }
    ]
    return (
        <div>
            <div className='flex justify-between px-4 md:px-20 mt-7'>
            <div>
                    <h2 className='text-3xl '>Expore <strong className='text-orange-600'>Top Restaurants</strong></h2>
                    <p>Check your city and town <span className='text-gray-400'>Near by <br />
                        Restaurant</span></p> 
                </div>
                <div>
             
                </div>
            </div>
              
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-8 px-4 md:px-20 '>
               {
                view.map((data)=>{
                    return <div key={data} className='border-2 px-5 py-6 rounded-xl'>
                        <img src={data.img} alt="ff" className='rounded-lg'/>
                        <h2>{data.titel}</h2>
                        <h2>{data.price}</h2>
                     <Link to="/viewtarial">   <button className='text-center bg-green-500 w-full rounded-lg py-2'>Visit</button></Link>


                    </div> 
                })
               }
            </div>
        </div>
    );
};

export default VewRestuarent;