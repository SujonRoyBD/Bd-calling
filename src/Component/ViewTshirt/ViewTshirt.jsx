import React from 'react';
import { useParams } from 'react-router-dom';

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
      pirce:"45.8"
    },
    {
      img:"/assets/img/crazyfood.webp",
      title:"Long Sleeve T-shirt 7",
      desc:"Delicious tacko appetizing",
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
      desc:"Delicious tackon appetizing",
      pirce:"45.5"
    }
  ];

const ViewTshirt = () => {
    const {title} = useParams();
    const filterData = data?.filter((data)=> data?.title === title)
    console.log(filterData)
    return (
        <div>
            {
                filterData?.map((data, index)=>(
                    <div key={index} className='w-full flex justify-center items-center gap-5'>
                        <div className='w-1/2'>
                            <img src={data?.img} alt={data?.title} width={500} height={400}/>
                        </div>
                        <div className='w-1/2'>
                            <h3>{data?.title}</h3>
                            <h3>{data?.location}</h3>
                            <p>{data?.desc?.main}</p>
                            <button>Add to Cart</button>
                            <button>Checkout</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ViewTshirt;