import React, { useContext } from "react";
import Image from "next/image";
import { ClientContext } from "@/app/context/ClientContext";

const ProductsList = ({ product }) => {
  // destructuring product
  const { id, name, description, price, days, image } = product;

  //   context
  const { list, cart, handleAddToList, handleAddToCart } =
    useContext(ClientContext);

  const isInList = list.some((item) => item.id === product.id);
  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="flex flex-col space-y-2 px-4 py-2">
      {/* Image */}
      <Image src={image} alt="Product Image" width={200} height={200} />
      {/* details */}
      <div className="flex flex-col gap-2">
        {/* name */}
        <h3 className="text-[18px]">{name}</h3>
        {/* description */}
        <p className="text-[#8B8B8B] text-[14px]">{description}</p>
        {/* price */}
        <p className="text-[14px]">GHs {price}</p>
        {/* days */}
        <p>
          <span className="text-[#8B8B8B] text-[14px]"> for</span> {days}{" "}
          {days > 1 ? "days" : "day"}
        </p>
      </div>
      {/* buttons */}
      <div className="flex flex-col gap-2">
        <button
          onClick={() => handleAddToList(product)}
          className={`bg-white px-6 py-2 text-black text-center ${
            isInList ? "cursor-not-allowed" : ""
          }`}
          disabled={isInList}
        >
          {isInList ? "Added to List" : "Add to List"}
        </button>
        <button
          onClick={() => handleAddToCart(product)}
          className={`bg-primary-secondaryColor px-6 py-2 text-center text-white ${
            isInCart ? "cursor-not-allowed" : ""
          }`}
          disabled={isInCart}
        >
          {isInCart ? "Already Rented" : "Rent Now"}
        </button>
      </div>
    </div>
  );
};

export default ProductsList;
