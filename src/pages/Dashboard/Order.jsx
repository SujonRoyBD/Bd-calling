import React from 'react';
import Slidebar from './Slidebar';

const Order = () => {
    return (
        <div className='flex gap-6'>
        <div className='w-2/5 md:w-1/4'>
        <Slidebar/>
        </div>
        <div className='w-3/5 md:w-3/4'>
            order
        </div>

    </div>
    );
};

export default Order;