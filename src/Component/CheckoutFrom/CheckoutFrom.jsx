import { useForm, } from "react-hook-form"


export default function CheackoutFrom() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(); // watch input value by passing the name of it

    return (
        <div className="grid grid-cols-1  md:grid-cols-2 gap-10 md:gap-[390px]">

            <div className="sm:-w-[80px]  md:w-[800px] md: px-20 mb-8 py-5">
                <h3 className="font-bold text-3xl mb-4">Billing Information</h3>
                <form onSubmit={handleSubmit((data) => console.log(data))} className="   gap-5 border-2 sm:  px-8 py-5">

                    <div className="  py-3  flex flex-col md:flex-row gap-8 rounded-full w-9 ml-0 md:-ml-6 mt-7">


                        <label htmlFor="" className="grid ">Name :
                            <input {...register('firstName')} className="border-2 rounded-md bg-gray-50 hover:border-orange-200" /> </label>

                        <label htmlFor="" className="grid">Last name :
                            <input {...register('lastName', { required: true })} className="border-2 rounded-md bg-gray-50 hover:border-orange-200" /> </label>
                        {errors.lastName && <p>Last name is required.</p>}

                        <label htmlFor="" className="grid">Company Name (optional)
                            <input {...register('age', { pattern: />\d+/ })} className="border-2 rounded-md hover:border-orange-200" /></label>
                        {errors.age && <p>Please enter number for age.</p>}

                    </div>

                    <label htmlFor="" className="grid ">Street Address :
                        <input {...register('age', { pattern: />\d+/ })} className="border-2 rounded-md hover:border-orange-200" placeholder="enter your street" /></label>
                    {errors.age && <p>Please enter number for age.</p>}

                    <div className="flex flex-col md:flex-row gap-0 md:gap-[200px] mt-3">
                        <label htmlFor="" className="grid">States
                            <select {...register('age', { pattern: />\d+/ })} className="border-2 rounded-md hover:border-orange-200 w-[170px]" placeholder="enter your street">
                                <option value="">select status</option>
                                <option value="">Panchagarh</option>
                                <option value="">Dhaka</option>
                                <option value="">Rangpur</option>
                            </select></label>

                        {errors.age && <p>Please enter number for age.</p>}

                        <label htmlFor="" className="grid ml-0 md:ml-4 h-8 ">States
                            <select {...register('age', { pattern: />\d+/ })} className="border-2 rounded-md hover:border-orange-200 w-[170px]" placeholder="enter your street ml-12">
                                <option value="">select status</option>
                                <option value="">Panchagarh</option>
                                <option value="">Dhaka</option>
                                <option value="">Rangpur</option>
                            </select></label>

                        {errors.age && <p>Please enter number for age.</p>}
                    </div>
                    <div className="flex flex-col md:flex-row gap-0  md:gap-[200px] mt-3">
                        <label htmlFor="" className="grid">Email Address :
                            <input {...register('age', { pattern: />\d+/ })} className="border-2 rounded-md hover:border-orange-200" placeholder="enter your street" /></label>
                        {errors.age && <p>Please enter number for age.</p>}
                        <label htmlFor="" className="grid">Phone Number :
                            <input {...register('age', { pattern: />\d+/ })} className="border-2 rounded-md hover:border-orange-200" placeholder="enter your street" /></label>
                        {errors.age && <p>Please enter number for age.</p>}
                    </div>
                </form>
            </div>

            <div className=" px-6">
                <h2 className="font-bold text-lg bg-slate-400 text-center rounded-md  w-full mt-4">Your order</h2>
                <div className="border-2 px-4 mt-4 rounded-md">
                    <h3 className="text-2xl text-black font-bold">Order Summery</h3>
                    <p className="text-2xl text-center">Cart Not Found</p>
                    <hr className="w-full bg-slate-500 h-0.5" />
                    <p className="flex justify-between">Shipping <span>Free</span></p>
                    <hr className="w-full bg-slate-500 h-0.5" />
                    <p className="flex justify-between">Total <span className="font-bold">0$</span></p>

                    <h3 className="text-2xl f">Payment Method</h3>

                    <p><input type="radio" name="radio" /> Cash on Deliveri</p>
                    <p><input type="radio" name="radio" /> paypal</p>
                    <button className="bg-orange-500 text-center px-[100px] rounded-lg mb-5">Place order</button>




                </div>
            </div>
        </div>


    )
}