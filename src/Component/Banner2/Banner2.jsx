import React from 'react'

const Banner2 = () => {
   const data = [
        {
            id:1,
            img:"/assets/img/discount.webp",
            title:"Discount",
            desc:"Every week new sales"
        },
        {
            id:2,
            img:"/assets/img/delivery.webp",
            title:"Free Delivery",
            desc:"100% Free for all orders"
        },
        {
            id:3,
            img:"/assets/img/support.webp",
            title:"Great Support 24/7",
            desc:"We care your experiences"
        },
        {
            id:4,
            img:"/assets/img/secure.webp",
            title:"Secure Payment",
            desc:"100% Secure Payment "
        }
    ]
  return (
    <div className='px-[80px] '>
    <div className='grid grid-cols-1 md:grid-cols-4  justify-center items-center border-2 py-8 gap-5 rounded-md mt-5 px-3'>
      { 
        data.map((bus)=>{
            return <div key={bus.id}>
                <div className='flex gap-3'>
                <div>
                <img src={bus.img} alt="" />
                </div>
             
             <div>
                <h2 className='font-bold'>{bus.title}</h2>
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
