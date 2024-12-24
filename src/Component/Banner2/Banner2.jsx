import React from 'react'

const Banner2 = () => {
   const data = [
        {
            id:1,
            img:"../../../public/assets/img/discount.webp",
            title:"Discount",
            desc:"Every week new sales"
        },
        {
            id:2,
            img:"../../../public/assets/img/delivery.webp",
            title:"Discount",
            desc:"Every week new sales"
        },
        {
            id:1,
            img:"../../../public/assets/img/support.webp",
            title:"Discount",
            desc:"Every week new sales"
        },
        {
            id:1,
            img:"../../../public/assets/img/secure.webp",
            title:"Discount",
            desc:"Every week new sales"
        }
    ]
  return (
    <div className=''>
    <div className='grid grid-cols-1 md:grid-cols-4 sm: px-16 justify-center items-center border-2 py-6 gap-5'>
      { 
        data.map((bus)=>{
            return <div key={bus.id}>
                <div className='flex gap-3'>
                <div>
                <img src={bus.img} alt="" />
                </div>
             
             <div>
                <h2>{bus.title}</h2>
                <h2>{bus.desc}</h2>
             </div>
                </div>
                

            </div>
        })
      }
    </div>
    </div>
  )
}

export default Banner2
