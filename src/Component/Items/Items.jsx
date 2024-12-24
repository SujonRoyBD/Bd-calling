import React from 'react'

const Items = () => {
    const data = [
        {
            img:"../../../public/assets/img/milk (1).webp",
            title:"Milk"
        },
        {
            img:"../../../public/assets/img/milk (1).webp",
            title:"Milk"
        },
        {
            img:"../../../public/assets/img/milk (1).webp",
            title:"Milk"
        },
        {
            img:"../../../public/assets/img/t_shirt.webp",
            title:"T Shirt"
        },
        {
            img:"../../../public/assets/img/dessert.webp",
            title:"Dessert"
        },
        {
            img:"../../../public/assets/img/toy.webp",
            title:"Toy"
        },
        {
            img:"../../../public/assets/img/book.webp",
            title:"Book"
        },
        {
            img:"../../../public/assets/img/dessert (1).webp",
            title:"Dessert"
        },
        {
            img:"../../../public/assets/img/noodles (1).webp",
            title:"Noodles"
        },
        {
            img:"../../../public/assets/img/milk (1).webp",
            title:"Milk"
        },
        {
            img:"../../../public/assets/img/noodles (1).webp",
            title:"Noodles"
        },
        {
            img:"../../../public/assets/img/rice.webp",
            title:"Rice"
        },
    ]
    return (
        <div>
            <div className='grid grid-cols-2 md:grid-cols-6 gap-16 
            justify-items-center px-20 mt-8'>
                {
                    data.map((view)=>{
                        
                        return <div key={view} className='bg-white shadow-lg    rounded-lg px-4'>
                            
                            <img src={view.img} alt="milk" />
                            <h3>{view.title}</h3>
                            
                           
                        </div>
                    })

                }
            </div>
        </div>
    )
}

export default Items
