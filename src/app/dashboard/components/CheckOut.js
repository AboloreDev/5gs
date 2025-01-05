"use client";

import { ClientContext } from "@/app/context/ClientContext";
import React, { useContext } from "react";

const CheckOut = () => {
  // contextClientContext);
  const { subTotal, deliveryFee, total } = useContext(ClientContext);

  // Render the checkout section
  return (
    <div>
      {/* Checkout Section */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <p>Subtotal:</p>
          <p className="text-[#8B8B8B]">GHS {subTotal}</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery Fee:</p>
          <p className="text-[#8B8B8B]">GHS {deliveryFee}</p>
        </div>
        <div className="flex justify-between font-bold">
          <p>Total:</p>
          <p className="text-[#8B8B8B]"> GHS {total}</p>
        </div>
        <button className="bg-orange-500 w-full py-2 text-white rounded-md hover:bg-orange-600">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
