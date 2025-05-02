import React from "react";
import Image from "next/image";
import { useRental } from "@/app/context/RentalContext";

const ProductsList = ({ product }) => {
  const { addToCart } = useRental();
  // destructuring product
  const { _id, name, description, dailyRate, quality } = product;
  let days = 1;
  const handleRentNow = () => {
    addToCart(product._id, 1, 1);
  };

  return (
    <div className="flex flex-col space-y-2 px-4 py-2 text-white">
      {/* Image */}
      {/* <Image
        src={product.imageUrl || "/fallback.jpg"}
        alt={name || "Product Image"}
        width={200}
        height={200}
        className="rounded object-cover"
      /> */}
      {/* details */}
      <div className="flex flex-col gap-2">
        {/* name */}
        <h3 className="text-[14px]">{name}</h3>
        {/* description */}
        <p className="text-[#8B8B8B] text-[10px]">{description}</p>
        {/* price */}
        <p className="text-[12px]">GHs {dailyRate}</p>
        <p className="text-[12px]"> {quality}</p>
        {/* days */}
        <p className="text-[12px]">
          <span className="text-[#8B8B8B] text-[12px]"> for</span> {days}{" "}
          {days > 1 ? "days" : "day"}
        </p>
      </div>
      {/* buttons */}
      <div className="flex flex-col gap-2 w-full sm:w-2/3">
        <button
          onClick={() => handleAddToList(product)}
          className={`bg-white px-2 py-1 text-black text-center text-sm `}
        >
          <p>Add to List</p>
        </button>
        <button
          onClick={handleRentNow}
          className={`bg-primary-secondaryColor px-2 py-1 text-center text-white text-sm`}
        >
          <p> Rent Now</p>
        </button>
      </div>
    </div>
  );
};

export default ProductsList;
