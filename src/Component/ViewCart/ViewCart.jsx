import React from 'react'
import Items from '../Items/Items'
import { Link } from 'react-router-dom'

const ViewCart = () => {
    const data =[
        {
            img:"/assets/img/long_t_shirt (1).webp",
            title:"Long Sleeve T-shirt 1",
            desc:"Delicious tackos appetizing",
            price:"4.5"
        },
        {
            img:"/assets/img/long_t_shirt (1).webp",
            title:"Long Sleeve T-shirt 2",
            desc:"Delicious tackos appetizing",
            price:"4.5"
        },
        {
            img:"/assets/img/crazyfood.webp",
            title:"Long Sleeve T-shirt 3",
            desc:"Delicious tackos appetizing",
            price:"4.5"
        },
        {
            img:"/assets/img/long_t_shirt (1).webp",
            title:"Long Sleeve T-shirt 4",
            desc:"Delicious tackos appetizing",
            price:"4.5"
        },
        {
            img:"/assets/img/long_t_shirt (1).webp",
            title:"Long Sleeve T-shirt 5",
            desc:"Delicious tackos appetizing",
            price:"4.5"
        },
        {
            img:"/assets/img/crazyfood.webp",
            title:"Long Sleeve T-shirt 6",
            desc:"Delicious tackos appetizing",
            price:"4.5"
        },
        {
            img:"/assets/img/long_t_shirt (1).webp",
            title:"Long Sleeve T-shirt 7",
            desc:"Delicious tackos appetizing",
            price:"4.5"
        },
        {
            img:"/assets/img/long_t_shirt (1).webp",
            title:"Long Sleeve T-shirt 8",
            desc:"Delicious tackos appetizing",
            price:"4.5"
        },
        {
            img:"/assets/img/crazyfood.webp",
            title:"Long Sleeve T-shirt 9",
            desc:"Delicious tackos appetizing",
            price:"4.5"
        },
        {
            img:"/assets/img/long_t_shirt (1).webp",
            title:"Long Sleeve T-shirt 10",
            desc:"Delicious tackos appetizing",
            price:"4.5"
        },
        {
            img:"/assets/img/long_t_shirt (1).webp",
            title:"Long Sleeve T-shirt 11",
            desc:"Delicious tackos appetizing",
            price:"4.5"
        },
        {
            img:"/assets/img/crazyfood.webp",
            title:"Long Sleeve T-shirt 12",
            desc:"Delicious tackos appetizing",
            price:"4.5"
        }
    ]
  return (
    <div>
      <Items/>
      <div className='grid grid-cols-1 md:grid-cols-3 px-20 mt-5 gap-3'>
        {
            data.map((data)=>{
                return <div key={data}>
                    <img src={data.img} alt="tshirt" height={300} width={350} />
                  <div className='flex gap-5'>
                  <div>
                     {/* <Link to={`/viewLongTshirt/${data?.title}`}>{data.title}</Link> */}
                     <Link to={`/viewLogoTshirt/${data.title}`}>{data.title}</Link>
                   <h2>{data.desc}</h2>
                   </div>
                     <div className='mt-3 text-2xl'>
                     <p>{data.price}</p>
                     </div>
                  </div>
                    
                </div>
            })
        }
      </div>
    </div>
  )
}

export default ViewCart
