import React from 'react'

const TshirtView1 = () => {
  const data = [
    {
      img:"../../../src/assets/img/long_t_shirt (1).webp",
      title:"Long Sleeve T-shirt",
      desc:"Delicious tackos appetizing",
      pirce:"45.5"
    },
    {
      img:"../../../src/assets/img/long_t_shirt (1).webp",
      title:"Long Sleeve T-shirt",
      desc:"Delicious tackos appetizing",
      pirce:"45.5"
    },
    {
      img:"../../../src/assets/img/crazyfood.webp",
      title:"Long Sleeve T-shirt",
      desc:"Delicious tackos appetizing",
      pirce:"45.5"
    },
    {
      img:"../../../src/assets/img/long_t_shirt (1).webp",
      title:"Long Sleeve T-shirt",
      desc:"Delicious tackos appetizing",
      pirce:"45.5"
    },
    {
      img:"../../../src/assets/img/long_t_shirt (1).webp",
      title:"Long Sleeve T-shirt",
      desc:"Delicious tackos appetizing",
      pirce:"45.5"
    },
    {
      img:"../../../src/assets/img/crazyfood.webp",
      title:"Long Sleeve T-shirt",
      desc:"Delicious tackos appetizing",
      pirce:"45.5"
    },
    {
      img:"../../../src/assets/img/long_t_shirt (1).webp",
      title:"Long Sleeve T-shirt",
      desc:"Delicious tackos appetizing",
      pirce:"45.5"
    },
    {
      img:"../../../src/assets/img/long_t_shirt (1).webp",
      title:"Long Sleeve T-shirt",
      desc:"Delicious tackos appetizing",
      pirce:"45.5"
    },
    {
      img:"../../../src/assets/img/crazyfood.webp",
      title:"Long Sleeve T-shirt",
      desc:"Delicious tackos appetizing",
      pirce:"45.5"
    },
    {
      img:"../../../src/assets/img/long_t_shirt (1).webp",
      title:"Long Sleeve T-shirt",
      desc:"Delicious tackos appetizing",
      pirce:"45.5"
    },
    {
      img:"../../../src/assets/img/long_t_shirt (1).webp",
      title:"Long Sleeve T-shirt",
      desc:"Delicious tackos appetizing",
      pirce:"45.5"
    },
    {
      img:"../../../src/assets/img/crazyfood.webp",
      title:"Long Sleeve T-shirt",
      desc:"Delicious tackos appetizing",
      pirce:"45.5"
    }
  ]

  return (
    <div className=''>
      <div className='grid grid-cols-1 md:grid-cols-3 mt-7'>
        {
          data.map((shirt)=>{
            return <div key={shirt} className='mt-9' >
             
           
              <img src={shirt.img} alt="dd" />
              <div className='flex gap-8'>
              <div>
              <a href=""className='text-2xl'>{shirt.title}</a>
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
