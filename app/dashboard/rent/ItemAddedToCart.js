"use client";

import React from "react";
import Image from "next/image";
import { useRental } from "@/app/context/RentalContext";

const ItemAddedToCart = ({ item }) => {
  const { updateCartItem, removeCartItem } = useRental();
  const { quantity, rentalDuration, price, name, image } = item;
  console.log(item);

  const handleUpdateCart = (_id, action, type) => {
    updateCartItem(_id, action, type);
  };

  const handleRemoveFromCart = (_id) => {
    removeCartItem(_id);
  };

  const totalItemPrice = price * quantity * rentalDuration;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-white gap-4 bg-[#1E1E1E] px-2 py-3 rounded-xl w-full">
      {/* Item details */}
      <div className="flex flex-col gap-1 sm:w-[120px]">
        <p className="text-[12px] sm:text-[10px]">{name}</p>
        {/* <Image src={image} alt={`${name} Image`} width={100} height={100} /> */}
      </div>

      {/* Quantity and Days */}
      <div className="flex flex-col gap-4">
        {/* Quantity */}
        <div className="flex flex-col gap-2 items-center">
          <p className="text-[10px] text-[#8B8B8B]">Quantity</p>
          <div className="flex gap-2 items-center">
            <button
              onClick={() =>
                handleUpdateCart(item._id, "decrement", "quantity")
              }
              className="bg-primary-secondaryColor px-2 rounded-sm"
            >
              -
            </button>
            <span className="text-white text-[12px]">{quantity}</span>
            <button
              onClick={() =>
                handleUpdateCart(item._id, "increment", "quantity")
              }
              className="bg-primary-secondaryColor px-2 rounded-sm"
            >
              +
            </button>
          </div>
        </div>

        {/* Days */}
        <div className="flex flex-col gap-2 items-center">
          <p className="text-[10px] text-[#8B8B8B]">Days</p>
          <div className="flex gap-2 items-center">
            <button
              onClick={() => handleUpdateCart(item._id, "decrement", "days")}
              className="bg-primary-secondaryColor px-2 rounded-sm"
            >
              -
            </button>
            <span className="text-white text-[12px]">{rentalDuration}</span>
            <button
              onClick={() => handleUpdateCart(item._id, "increment", "days")}
              className="bg-primary-secondaryColor px-2 rounded-sm"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Total price and Remove button */}
      <div className="flex flex-col gap-2 items-center">
        <div className="flex flex-col items-center">
          <p className="text-[10px] text-[#8B8B8B]">Total Price</p>
          <p className="text-white text-[12px]">GHs {totalItemPrice}</p>
        </div>
        <button
          onClick={() => handleRemoveFromCart(item._id)}
          className="bg-red-500 px-2 py-1 rounded-sm text-[12px]"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ItemAddedToCart;
