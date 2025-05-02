"use client";
import { AdminContext } from "@/app/context/AdminContext";
import React, { useContext, useState } from "react";
import Image from "next/image";
import EditProductModal from "./EditProductModal";

const AdminProductsList = ({ product }) => {
  // destructure product
  const { name, price, image, isAvailable } = product;
  // context menu
  const { removeProduct, markAsAvailable } = useContext(AdminContext);
  // editing states
  const [isEditing, setIsEditing] = useState(false);

  // edit function
  function handleEdit() {
    setIsEditing(true);
  }

  return (
    <div className="grid grid-cols-2 gap-2 text-black bg-white w-full rounded-xl ">
      {/* image */}
      <Image
        src={image}
        alt="image"
        width={150}
        height={150}
        className="w-[250px] h-full"
      />
      {/* container for details */}
      <div className="flex flex-col gap-2 py-2 px-4 ">
        <h3 className="font-bold">{name}</h3>
        <p>
          Ghs {price} <span className="text-[12px] text-gray-500">per day</span>
        </p>
        <p>
          Status:{" "}
          <span
            className={`${
              isAvailable ? "text-green-500" : "text-red-500"
            } text-[14px] font-bold`}
          >
            {isAvailable ? "Available" : "Rented"}
          </span>
        </p>
        {/* buttons */}
        <button
          onClick={handleEdit}
          className="bg-blue-600 text-white px-5 py-2 rounded-xl text-[12px] font-thin"
        >
          Edit
        </button>
        <button
          onClick={() => removeProduct(product.id)}
          className="bg-red-600 text-white px-5 py-2 rounded-xl  text-[12px] font-thin"
        >
          Remove
        </button>
        <button
          onClick={() => markAsAvailable(product.id)}
          className="bg-green-600  text-white px-5 py-2 rounded-xl  text-[12px] font-thin"
        >
          Mark as Available
        </button>
      </div>

      {isEditing && (
        <EditProductModal
          product={product}
          closeModal={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default AdminProductsList;
