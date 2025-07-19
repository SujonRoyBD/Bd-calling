import { Radio } from '@material-tailwind/react';
import React from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
const Register = () => {
    const [data, setdata] = useState (false)
    const handleClick = () => {
        Swal.fire({
          title: "Success!",
          text: "Your action was successful!",
          icon: "success",
          draggable: true,
        });
      };
    
    const { register, handleSubmit, formState: { errors } } = useForm(false)
    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <form className="w-full md:w-1/3 mx-auto p-10 rounded-lg shadow-lg bg-white border" onSubmit={handleSubmit(onSubmit)}>
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

                <div className='flex justify-between opacity-60'>
                    <div className='flex gap-2 py-3 text-xl'>
                    <input type='checkbox'/>
                    <p>Remember me</p>
                </div>
                <Link to="/forget">
                <div className='py-3 text-xl'>
                    <p>Forget Password</p>
                </div>
                </Link>
                </div>
              
                <div className="flex justify-center items-center mt-2">
                    <button className=" rounded-lg py-1 px-6 bg-orange-500 w-full text-white text-lg font-bold" type="Register" onClick={handleClick}>Register</button>
                </div>
                <div className='flex justify-center items-center text-xl py-3 opacity-60 gap-2'>Don't have account? <Link to="/login">
                <strong>login</strong></Link></div>
               <div className='flex gap-4 justify-center items-center'><hr className='border w-[100px] border-black'/> <span className='-mt-[15px]'>or</span> <hr  className='border w-[100px] border-black'/></div>

              <Link to="https://google.com">
              <div className='py-4'>
                 <div className='flex gap-5 text-black text-xl font-bold border-2 border-gray-300 py-2 justify-center items-center'><img src='/assets/googles.png' alt='google' width={30} height={30}></img> <p>Continue With Googe</p></div>
              </div>
              </Link>
            </form>
        </div>
    )
}
export default Register;
