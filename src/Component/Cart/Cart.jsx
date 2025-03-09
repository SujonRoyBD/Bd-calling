import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CiCircleRemove } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { decrementQuantity, incrementQuantity, removeCart } from '../redux/features/carts/cartsSlice';
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import CheackoutFrom from '../CheckoutFrom/CheckoutFrom';

const Cart = () => {
    const ProductData = useSelector((state) => state.carts.carts)
    const totalPrice = ProductData?.reduce((total, item)=> total + (item.quantity * item.price), 0)
    const dispatch = useDispatch();
    const removeCartLogic = (id)=>{
        dispatch(removeCart(id))
    }

    return (
        <div>
            <div className='w-full flex justify-end items-center pr-10'>
            <Link to="/viewCart">
            <button className='bg-orange-500 text-white py-1 px-4 rounded-lg'>Back</button>
            </Link>
            </div>
            <ul className='w-1/2 mx-auto'>
                {
                    ProductData?.map((data, index) => {
                        return <div key={index}>

                            <li className='flex items-center justify-center gap-8 border-2 border-gray-200 rounded-lg shadow-lg mb-5 py-2 px-4'>
                                <img src={data.img} alt='data.title' width={100} height={100} />
                                <h3>{data.title}</h3>
                                <IoIosRemoveCircleOutline onClick={()=>dispatch(decrementQuantity(data?.id))} className='w-[26px] h-[26px] cursor-pointer'/>
                                <h3>{data.quantity}</h3>
                                <CiCirclePlus onClick={()=> dispatch(incrementQuantity(data?.id))} className='w-[26px] h-[26px] cursor-pointer'/>
                                <h3>{data.price}</h3>
                                <CiCircleRemove onClick={()=>removeCartLogic(data?.id)} className='w-[26px] h-[26px] cursor-pointer'/>
                                    <h5>{data.quantity * data.price}</h5>
                            </li>
                            
                        </div>
                    })
                }
            </ul>
<<<<<<< HEAD
            <CheackoutFrom/>
=======
>>>>>>> 567b0df (fff)
            <h3 className='text-end w-3/4 text-xl font-bold mt-1'><strong>Total Price : </strong> {totalPrice}</h3>
           

        </div>
    );
};

export default Cart;