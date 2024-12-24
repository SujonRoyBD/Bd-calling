import React from 'react';

const Restuarent1 = () => {
    const view =[
        {
            img:"../../../public/assets/img/Food1.png",
            titel:"Skateboard Shoe",
            price:"$125"
        },
        {
            img:"../../../public/assets/img/food2.png",
            
              titel:"Skateboard Shoe",
            price:"$125"
        },
        {
            img:"../../../public/assets/img/food3.png",
            titel:"Skateboard Shoe",
            price:"$125"
          
        },
        {
            img:"../../../public/assets/img/food4.png",
            titel:"Skateboard Shoe",
            price:"$125"
          
        },
        {
            img:"../../../public/assets/img/food5.png",
            titel:"Skateboard Shoe",
            price:"$125"
          
        },
        {
            img:"../../../public/assets/img/food6.png",
            titel:"Skateboard Shoe",
            price:"$125"
          
        },
        {
            img:"../../../public/assets/img/food7.png",
            titel:"Skateboard Shoe",
            price:"$125"
          
        },
        {
            img:"../../../public/assets/img/food8.png",
            titel:"Skateboard Shoe",
            price:"$125"
          
        },
        {
            img:"../../../public/assets/img/food5.png",
            titel:"Skateboard Shoe",
            price:"$125"
          
        }
    ]
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-8 px-20'>
               {
                view.map((data)=>{
                    return <div key={data}>
                        <img src={data.img} alt="ff" className='rounded-lg'/>
                        <h2>{data.titel}</h2>
                        <h2>{data.price}</h2>

                    </div> 
                })
               }
            </div>
        </div>
    );
};

export default Restuarent1;