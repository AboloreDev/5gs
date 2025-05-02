"use client";

import { ClientContext } from "@/app/context/ClientContext";
import React, { useContext } from "react";

const CheckOut = () => {
  // Render the checkout section
  return (
    <div className="w-full sticky bottom-0 bg-black z-20 p-4">
      <div className="flex flex-col gap-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal:</p>
          <p className="text-[#8B8B8B]">GHS</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery Fee:</p>
          <p className="text-[#8B8B8B]">GHS </p>
        </div>
        <div className="flex justify-between font-bold">
          <p>Total:</p>
          <p className="text-[#8B8B8B]">GHS </p>
        </div>
        <button className="bg-orange-500 w-full py-2 text-white rounded-md hover:bg-orange-600 mt-2">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
