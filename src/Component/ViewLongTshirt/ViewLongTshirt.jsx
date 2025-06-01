import React from 'react';
import { useParams } from 'react-router-dom';
import Login from '../Login/Login';
import CheackoutFrom from '../CheckoutFrom/CheckoutFrom';

const data = [
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
];

const ViewTshirt = () => {
    // const {title} = useParams();
    // const filterData = data?.filter((data)=> data?.title === title)
    // console.log(filterData)
    const {title} = useParams();
    const filterData= data?.filter((data)=>data?.title===title)
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
                            <h3 className=''>{data?.title}</h3>
                            <h3>{data?.location}</h3>
                            <p>{data?.desc}</p>
                            <button>Add to Cart</button>
                            <button>Checkout</button>
                        </div>
                    </div>
                ))
            }
            <CheackoutFrom/>
        </div>
    );
};

export default ViewTshirt;