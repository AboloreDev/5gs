"use client";

import React, { useContext } from "react";
import SearchBar from "../components/SearchBar";
import { ClientContext } from "@/app/context/ClientContext";
import ProductsList from "./ProductsList";
import ItemAddedToList from "./ItemAddedToList";
import ItemAddedToCart from "./ItemAddedToCart";
import CheckOut from "../components/CheckOut";
import { CiSearch } from "react-icons/ci";

const Rent = () => {
  // products context menu
  const { product, list, cart, filteredProducts } = useContext(ClientContext);

  return (
    <div className="">
      {/* Intro */}
      <div className="border-b-2 py-2 px-2">
        <h1 className="text-lg font-bold"> Rent</h1>
        <p className="text-gray-500 text-sm">Affordable gadgets for hiring</p>
      </div>

      <div className="grid grid-cols-[auto_400px] p-2 h-screen">
        {/* Content */}
        <div className="flex flex-col space-y-2">
          {/* searchbar */}
          <SearchBar />
          {/* products */}
          <div className="grid grid-cols-2 place-items-center gap-4 overflow-y-auto h-[800px] overflow-hidden space-y-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductsList product={product} key={product.id} />
              ))
            ) : (
              <div className="flex flex-col space-y-6  text-[#8B8B8B]">
                <p className="text-xl">Oops</p>
                <div>
                  <CiSearch className="text-[100px]" />
                </div>
                <p>Search yielded no results</p>
              </div>
            )}
          </div>
        </div>
        {/* right side */}
        <div className="border-l-2 px-4 py-2 flex flex-col space-y-3 ">
          {/* <div className="flex flex-col space-y-4 px-4 py-3 h-full">  */}
          <h2 className="text-lg font-bold">List</h2>
          {/* Render items added to the list */}
          <div className="flex flex-col space-y-4 overflow-y-auto">
            {list.length === 0 ? (
              <p className="text-center text-sm">
                No Items in the List, Add a new Item to the list
              </p>
            ) : (
              <>
                <div className="flex justify-between items-center px-2 text-[#8B8B8B]">
                  <p className="text-sm font-semibold">Items in the List</p>
                  <p className="text-sm">{list.length}</p>
                </div>
                {/* Horizontal scrolling for the list */}
                <div className="flex gap-1 overflow-x-auto">
                  {list.map((item, index) => (
                    <ItemAddedToList item={item} key={item.id || index} />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* render items to cart */}

          <div className="flex flex-col gap-2 overflow-y-auto h-[300px]">
            {cart.length === 0 ? (
              <p className="flex justify-center items-center h-auto text-sm">
                No Items in the Cart
              </p>
            ) : (
              <div className="flex flex-col items-start gap-2">
                {cart.map((item, index) => (
                  <ItemAddedToCart item={item} key={item.id || index} />
                ))}
              </div>
            )}
          </div>

          {/* checkout */}
          <div className=" w-full sticky bottom-0 text-white z-10 p-4">
            {cart.length > 0 && <CheckOut />}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Rent;
