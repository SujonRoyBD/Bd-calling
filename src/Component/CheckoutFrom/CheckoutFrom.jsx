import React from "react";

export default function CheackoutFrom() {
  return (
    <div className="flex gap-9 ">
      <div className="w-2/4 px-12 py-16">
        <div className="flex px-4 py-2 text-xl rounded-xl text-white justify-between bg-slate-500">
          <div>Product</div>
          <div>price</div>
          <div>Quantity</div> 
          <div>Subtotal</div>
        </div>
        <p className="text-3xl font-bold text-center py-9">Not Cart Found</p>
        <div className="flex justify-between text-xl">
            <button className="bg-orange-500 py-2 px-4 rounded-xl text-white">Return to shop</button>
        <button className="bg-orange-500 py-2 px-4 rounded-xl text-white">Return to shop</button>
        </div>
      </div>

      <div className="w-2/4">
        <div className="px-6 py-[55px]">
          <h2 className="font-bold text-lg bg-slate-400 text-center rounded-md w-full mt-4">
            Your order
          </h2>
          <div className="border-2 px-4 mt-4 rounded-md">
            <h3 className="text-2xl text-black font-bold">Order Summary</h3>
            <p className="text-2xl text-center">Cart Not Found</p>
            <hr className="w-full bg-slate-500 h-0.5 my-2" />
            <p className="flex justify-between">
              Shipping <span>Free</span>
            </p>
            <p className="flex justify-between">
              Total <span className="font-bold">0$</span>
            </p>

            <h3 className="text-2xl mt-4">Payment Method</h3>
            <p>
              <input type="radio" name="payment" /> Cash on Delivery
            </p>
            <p>
              <input type="radio" name="payment" /> PayPal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
