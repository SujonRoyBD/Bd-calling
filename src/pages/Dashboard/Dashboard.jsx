import React from 'react';
import Order from './Order';
import Slidebar from './Slidebar';

const Dashboard = () => {
    return (
        <div className='flex flex-col md:flex-row gap-4 md:gap-6'>
            <div className='w-full md:w-1/4'>
            <Slidebar/>
            </div>
            <div className='w-full md:w-3/4'>
                dashboard page
            </div>
        </div>
    );
};

export default Dashboard;