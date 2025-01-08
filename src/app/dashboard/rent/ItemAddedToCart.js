"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { ClientContext } from "@/app/context/ClientContext";

const ItemAddedToCart = ({ item }) => {
  // Destructure the item properties
  const { id, name, image, price, quantity, days } = item;

  // Get context functions and state
  const { handleUpdateCart, deliveryFee } = useContext(ClientContext);

  return (
    <div className="flex items-center bg-[#1E1E1E] px-3 py-3 rounded-xl">
      {/* Item details */}
      <div className="flex flex-col gap-2">
        <p className="text-[14px]">{name}</p>
        <Image src={image} alt={`${name} Image`} width={150} height={150} />
      </div>

      {/* Quantity and Days */}
      <div className="flex flex-col gap-2">
        {/* Quantity */}
        <div className="flex flex-col text-[14px]">
          <p className="text-[14px] text-[#8B8B8B]">Quantity</p>
          <div className="flex justify-between items-center gap-4">
            <div className="flex gap-2 items-center">
              <button
                onClick={() => handleUpdateCart(id, "decrement", "quantity")}
                className="bg-primary-secondaryColor px-2 rounded-sm"
              >
                -
              </button>
              <span className="text-white ">{quantity}</span>
              <button
                onClick={() => handleUpdateCart(id, "increment", "quantity")}
                className="bg-primary-secondaryColor px-2 rounded-sm"
              >
                +
              </button>
            </div>
            <div className="text-[14px]">GHs {price * quantity}</div>
          </div>
        </div>

        {/* Days */}
        <div className="flex flex-col gap-2">
          <p className="text-sm text-[#8B8B8B]">Days</p>
          <div className="flex justify-between items-center ">
            <div className="flex gap-2 items-center">
              <button
                onClick={() => handleUpdateCart(id, "decrement", "days")}
                className="bg-primary-secondaryColor px-2 rounded-sm"
              >
                -
              </button>
              <span className="text-white">{days}</span>
              <button
                onClick={() => handleUpdateCart(id, "increment", "days")}
                className="bg-primary-secondaryColor px-2 rounded-sm"
              >
                +
              </button>
            </div>
            <div>GHs {deliveryFee}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemAddedToCart;
