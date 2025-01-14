import React from 'react'
import { Link } from 'react-router-dom'

const TshirtView1 = () => {
  const data = [
    {
      img:"/assets/img/long_t_shirt (1).webp",
      title:"Long Sleeve T-shirt 1",
      desc:"Delicious tackos appetizing",
      pirce:"45.5"
    },
    {
      img:"/assets/img/long_t_shirt (1).webp",
      title:"Long Sleeve T-shirt 2",
      desc:"Delicious tackos appetizing",
      pirce:"45.5"
    },
    {
      img:"/assets/img/crazyfood.webp",
      title:"Long Sleeve T-shirt 3",
      desc:"Delicious tackos appetizing",
      pirce:"45.5"
    },
    {
      img:"/assets/img/crazyfood.webp",
      title:"Long Sleeve T-shirt 4",
      desc:"Delicious tackos appetizing",
      pirce:"45.5"
    },
    {
      img:"/assets/img/book (2).webp",
      title:"Long Sleeve T-shirt 5",
      desc:"Delicious tackos appetizing",
      pirce:"45.5"
    },
    {
      img:"/assets/img/crazy_toy.webp",
      title:"Long Sleeve T-shirt 6",
      desc:"Delicious tackos appetizing",
      pirce:"45.5"
    },
    {
      img:"/assets/img/crazyfood.webp",
      title:"Long Sleeve T-shirt 7",
      desc:"Delicious tackos appetizing",
      pirce:"45.5"
    },
    {
      img:"/assets/img/book (2).webp",
      title:"Long Sleeve T-shirt 8",
      desc:"Delicious tackos appetizing",
      pirce:"45.5"
    },
    {
      img:"/assets/img/crazy_toy.webp",
      title:"Long Sleeve T-shirt 9",
      desc:"Delicious tackos appetizing",
      pirce:"45.5"
    }
  ]

  return (
    <div className=''>
      <div className='grid grid-cols-1 md:grid-cols-3 mt-7 gap-3 mb-3'>
        {
          data.map((shirt)=>{
            return <div key={shirt} className='mt-9' >
              
           
              <img src={shirt.img} alt="dd" />
              <div className='flex gap-8'>
              <div className=''>
              {/* <a href=""className='text-2xl'>{shirt.title}</a> */}
              <Link to={`/viewTshirt/${shirt?.title}`} className='text-2xl font-bold'>{shirt.title}</Link>
              <h2>{shirt.desc}</h2>
              </div>
             
              <div className='mt-5 text-2xl'>
              <h2>{shirt.pirce}</h2>
              </div>
             </div>
            </div>
          })
        }
      </div>
    </div>
 )
}

export default TshirtView1
