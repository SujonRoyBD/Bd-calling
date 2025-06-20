import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function CheackoutFrom() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        Swal.fire({
            title: "Success!",
            text: "Your order has been placed!",
            icon: "success",
        });
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[300px]">
            <div className="md:w-[800px] px-6 mb-8 py-5">
                <h3 className="font-bold text-3xl mb-4">Billing Information</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="gap-5 border-2 px-8 py-5">
                    <div className="py-3 flex flex-col md:flex-row gap-8">
                        <label className="grid">First Name:
                            <input {...register('firstName', { required: "First name is required" })} className="border-2 rounded-md bg-gray-50" />
                        </label>
                        <label className="grid">Last Name:
                            <input {...register('lastName', { required: "Last name is required" })} className="border-2 rounded-md bg-gray-50" />
                        </label>
                    </div>
                    <p className="text-red-500">{errors.firstName?.message || errors.lastName?.message}</p>

                    <label className="grid">Company Name (optional):
                        <input {...register('companyName')} className="border-2 rounded-md" />
                    </label>

                    <label className="grid mt-4">Street Address:
                        <input {...register('streetAddress', { required: "Street address is required" })} className="border-2 rounded-md" />
                    </label>
                    <p className="text-red-500">{errors.streetAddress?.message}</p>

                    <label className="grid mt-4">State:
                        <select {...register('state', { required: "State is required" })} className="border-2 rounded-md">
                            <option value="">Select state</option>
                            <option value="Panchagarh">Panchagarh</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Rangpur">Rangpur</option>
                        </select>
                    </label>
                    <p className="text-red-500">{errors.state?.message}</p>

                    <div className="flex flex-col md:flex-row gap-6 mt-4">
                        <label className="grid">Email:
                            <input {...register('email', { required: "Email is required" })} className="border-2 rounded-md" />
                        </label>
                        <label className="grid">Phone:
                            <input {...register('phone', {
                                required: "Phone number is required",
                                pattern: {
                                    value: /^\d+$/,
                                    message: "Phone must be a number"
                                }
                            })} className="border-2 rounded-md" />
                        </label>
                    </div>
                    <p className="text-red-500">{errors.email?.message || errors.phone?.message}</p>

                    <button type="submit" className="bg-orange-500 mt-6 px-6 py-2 text-white rounded-md">
                        Place Order
                    </button>
                </form>
            </div>

            <div className="px-6">
                <h2 className="font-bold text-lg bg-slate-400 text-center rounded-md w-full mt-4">Your order</h2>
                <div className="border-2 px-4 mt-4 rounded-md">
                    <h3 className="text-2xl text-black font-bold">Order Summary</h3>
                    <p className="text-2xl text-center">Cart Not Found</p>
                    <hr className="w-full bg-slate-500 h-0.5 my-2" />
                    <p className="flex justify-between">Shipping <span>Free</span></p>
                    <p className="flex justify-between">Total <span className="font-bold">0$</span></p>

                    <h3 className="text-2xl mt-4">Payment Method</h3>
                    <p><input type="radio" name="payment" /> Cash on Delivery</p>
                    <p><input type="radio" name="payment" /> PayPal</p>
                </div>
            </div>
        </div>
    );
}
