import React from 'react';
import { Radio } from '@material-tailwind/react';

import { useState } from "react";
import { useForm } from "react-hook-form"
import Slidebar from './Slidebar';

const Setting = () => {
    const [data, setdata] = useState (false)
     const { register, handleSubmit, formState: { errors } } = useForm(false)
        const onSubmit = (data) => console.log(data)
    return (
        <div className='flex gap-6'>
            <div className='w-2/5 md:w-1/6'>
            <Slidebar/>
            </div>
            <div className='w-3/5 md:w-5/6'>
                  <div>
            <form className="w-full  mx-auto p-10 rounded-lg shadow-lg bg-white border" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="text-base font-bold text-black w-full flex justify-start">Name</label> <br />
                    <input className="border-2 rounded-lg py-1 px-3 w-full" placeholder="Enter your name..." {...register("name", { required: true })} />
                    {errors?.name && <span>This field is required</span>}
                </div>
                <div>
                    <label className="text-base font-bold text-black w-full flex justify-start">Email</label> <br />
                    <input className="border-2 rounded-lg py-1 px-3 w-full" placeholder="Enter your email..." {...register("email", { required: true })} />
                    {errors?.email && <span>This field is required</span>}
                </div>
                <div>
                    <label className="text-base font-bold text-black w-full flex justify-start">Password</label> <br />
                    <input type='password' className="border-2 rounded-lg py-1 px-3 w-full" placeholder="Enter your password" {...register("password", { required: true })} />
                    {errors?.password && <span>This field is required</span>}
                </div>
                <div>
                    <label className="text-base font-bold text-black w-full flex justify-start">Contact</label> <br />
                    <input type='number' className="border-2 rounded-lg py-1 px-3 w-full" placeholder="Enter your number" {...register("number", { required: true })} />
                    {errors?.password && <span>This field is required</span>}
                </div>
              
                <div className="flex justify-center items-center mt-2">
                    <button className=" rounded-lg py-1 px-6 bg-orange-500 w-full text-white text-lg font-bold" type="Register" >Register</button>
                </div>
            </form>
        </div>
            </div>

        </div>
    );
};

export default Setting;