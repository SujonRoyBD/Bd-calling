import React, { useState } from 'react';
import Items from '../Items/Items';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToCart } from '../redux/features/carts/cartsSlice';

const ViewCart = () => {
  const filterData = useSelector((state) => state.carts.carts)
  const dispatch = useDispatch();

  const data = [
    { id: 1, img: "/assets/img/long_t_shirt (1).webp", title: "Long Sleeve T-shirt 1", desc: "Delicious tackos appetizing", price: "4.5" },
    { id: 2, img: "/assets/img/long_t_shirt (1).webp", title: "Long Sleeve T-shirt 2", desc: "Delicious tackos appetizing", price: "4.5" },
    { id: 3, img: "/assets/img/crazyfood.webp", title: "Long Sleeve T-shirt 3", desc: "Delicious tackos appetizing", price: "4.5" },
    { id: 4, img: "/assets/img/long_t_shirt (1).webp", title: "Long Sleeve T-shirt 4", desc: "Delicious tackos appetizing", price: "4.5" },
    { id: 5, img: "/assets/img/long_t_shirt (1).webp", title: "Long Sleeve T-shirt 5", desc: "Delicious tackos appetizing", price: "4.5" },
    { id: 6, img: "/assets/img/crazyfood.webp", title: "Long Sleeve T-shirt 6", desc: "Delicious tackos appetizing", price: "4.5" },
    { id: 7, img: "/assets/img/long_t_shirt (1).webp", title: "Long Sleeve T-shirt 7", desc: "Delicious tackos appetizing", price: "4.5" },
    { id: 8, img: "/assets/img/long_t_shirt (1).webp", title: "Long Sleeve T-shirt 8", desc: "Delicious tackos appetizing", price: "4.5" },
    { id: 9, img: "/assets/img/crazyfood.webp", title: "Long Sleeve T-shirt 9", desc: "Delicious tackos appetizing", price: "4.5" },
    { id: 10, img: "/assets/img/long_t_shirt (1).webp", title: "Long Sleeve T-shirt 10", desc: "Delicious tackos appetizing", price: "4.5" },
    { id: 11, img: "/assets/img/long_t_shirt (1).webp", title: "Long Sleeve T-shirt 11", desc: "Delicious tackos appetizing", price: "4.5" },
    { id: 12, img: "/assets/img/crazyfood.webp", title: "Long Sleeve T-shirt 12", desc: "Delicious tackos appetizing", price: "4.5" }
  ];

  return (
    <div>
      <Items />
      <div className="grid grid-cols-1 md:grid-cols-3  md:px-20 mt-5 gap-3">
        {data.map((item) => {
          const isCart = filterData?.find((cart) => cart.id == item.id)
          return <div key={item.id}>
            <img src={item.img} alt="tshirt" height={300} width={350} />
            <div className="flex gap-5">
              <div>
                <Link to={`/viewLongTshirt/${item.title}`} className='text-2xl font-bold'>{item.title}</Link>
                <h2>{item.desc}</h2>
              </div>
              <div className="flex items-center gap-5 mt-3 text-2xl">
                <p>{item.price}</p>
                <p >
                  <button onClick={()=>{
                    if(!isCart){
                      dispatch(addToCart(item))
                    }
                  }}>
                    {isCart ? <CiCircleMinus/>:<CiCirclePlus />}
                  
                  </button>
                  
                  


                </p>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  );
};

export default ViewCart;
