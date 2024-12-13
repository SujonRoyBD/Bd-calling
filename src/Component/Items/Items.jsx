import React from 'react'

const Items = () => {
    const data = [
        {
            img:"../../../src/assets/img/milk (1).webp",
            title:"Milk"
        },
        {
            img:"../../../src/assets/img/milk (1).webp",
            title:"Milk"
        },
        {
            img:"../../../src/assets/img/milk (1).webp",
            title:"Milk"
        },
        {
            img:"../../../src/assets/img/t_shirt.webp",
            title:"T Shirt"
        },
        {
            img:"../../../src/assets/img/dessert.webp",
            title:"Dessert"
        },
        {
            img:"../../../src/assets/img/toy.webp",
            title:"Toy"
        },
        {
            img:"../../../src/assets/img/book.webp",
            title:"Book"
        },
        {
            img:"../../../src/assets/img/dessert (1).webp",
            title:"Dessert"
        },
        {
            img:"../../../src/assets/img/noodles (1).webp",
            title:"Noodles"
        },
        {
            img:"../../../src/assets/img/milk (1).webp",
            title:"Milk"
        },
        {
            img:"../../../src/assets/img/noodles (1).webp",
            title:"Noodles"
        },
        {
            img:"../../../src/assets/img/rice.webp",
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
