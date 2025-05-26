import { useForm } from "react-hook-form";

export default function CheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // এখানে তুমি চাইলে axios/fetch দিয়ে backend এ পাঠাতে পারো
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[100px] p-4">
      {/* Billing Form */}
      <div className="md:w-[700px] px-6 mb-8 py-5 border rounded-lg shadow">
        <h3 className="font-bold text-3xl mb-4">Billing Information</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Name Fields */}
          <div className="flex flex-col md:flex-row gap-4">
            <label className="flex-1">
              First Name:
              <input
                {...register("firstName", { required: "First name is required" })}
                className="w-full border-2 rounded-md bg-gray-50 hover:border-orange-200 p-2 mt-1"
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
            </label>

            <label className="flex-1">
              Last Name:
              <input
                {...register("lastName", { required: "Last name is required" })}
                className="w-full border-2 rounded-md bg-gray-50 hover:border-orange-200 p-2 mt-1"
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
            </label>
          </div>

          {/* Company Name */}
          <label>
            Company Name (optional):
            <input
              {...register("companyName")}
              className="w-full border-2 rounded-md bg-gray-50 hover:border-orange-200 p-2 mt-1"
            />
          </label>

          {/* Street Address */}
          <label>
            Street Address:
            <input
              {...register("street", { required: "Street address is required" })}
              className="w-full border-2 rounded-md bg-gray-50 hover:border-orange-200 p-2 mt-1"
              placeholder="Enter your street"
            />
            {errors.street && <p className="text-red-500 text-sm">{errors.street.message}</p>}
          </label>

          {/* State Selection */}
          <div className="flex flex-col md:flex-row gap-6">
            <label className="flex-1">
              State 1:
              <select
                {...register("state1", { required: "State is required" })}
                className="w-full border-2 rounded-md hover:border-orange-200 p-2 mt-1"
              >
                <option value="">Select State</option>
                <option value="Panchagarh">Panchagarh</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Rangpur">Rangpur</option>
              </select>
              {errors.state1 && <p className="text-red-500 text-sm">{errors.state1.message}</p>}
            </label>

            <label className="flex-1">
              State 2:
              <select
                {...register("state2")}
                className="w-full border-2 rounded-md hover:border-orange-200 p-2 mt-1"
              >
                <option value="">Select State</option>
                <option value="Panchagarh">Panchagarh</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Rangpur">Rangpur</option>
              </select>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-orange-500 text-white text-lg px-6 py-2 rounded-lg hover:bg-orange-600"
          >
            Place Order
          </button>
        </form>
      </div>

      {/* Order Summary */}
      <div className="px-6">
        <h2 className="font-bold text-lg bg-slate-400 text-center rounded-md py-2">Your Order</h2>
        <div className="border-2 px-4 mt-4 rounded-md py-4">
          <h3 className="text-2xl font-bold mb-2">Order Summary</h3>
          <p className="text-center text-xl mb-2">Cart Not Found</p>
          <hr className="my-2" />
          <p className="flex justify-between">Shipping <span>Free</span></p>
          <hr className="my-2" />
          <p className="flex justify-between font-bold">Total <span>$0</span></p>

          <h3 className="text-xl mt-4 mb-2">Payment Method</h3>
          <div className="space-y-2">
            <label><input type="radio" value="cash" {...register("paymentMethod")} /> Cash on Delivery</label><br />
            <label><input type="radio" value="paypal" {...register("paymentMethod")} /> PayPal</label>
          </div>
        </div>
      </div>
    </div>
  );
}
