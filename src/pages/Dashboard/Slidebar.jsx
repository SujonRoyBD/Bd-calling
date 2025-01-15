import React from 'react';
import { Link } from 'react-router-dom';

const Slidebar = () => {
    return (
        <div>
          <ul>
            <Link to="/dashboard" rel='nofollow'><li className='border border-gray-300 py-1 px-2 text-lg font-bold text-black leading-normal hover:text-white bg-blue-500 my-1 text-center'>Dashboard</li></Link>
            <Link to="/order" rel='nofollow'><li className='border border-gray-300 py-1 px-2 text-lg font-bold text-black leading-normal hover:text-white bg-blue-500 my-1 text-center'>Order</li></Link>
            <Link to="/shoppingCart" rel='nofollow'><li className='border border-gray-300 py-1 px-2 text-lg font-bold text-black leading-normal hover:text-white bg-blue-500 my-1 text-center'>Shopping</li></Link>
            <Link to="/setting" rel='nofollow'><li className='border border-gray-300 py-1 px-2 text-lg font-bold text-black leading-normal hover:text-white bg-blue-500 my-1 text-center'>Setting</li></Link>
            <Link to="/logout" rel='nofollow'><li className='border border-gray-300 py-1 px-2 text-lg font-bold text-black leading-normal hover:text-white bg-blue-500 my-1 text-center'>Logout</li></Link>
          </ul>
        </div>
    );
};

export default Slidebar;