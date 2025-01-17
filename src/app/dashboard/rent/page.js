"use client";

import React, { useContext, useState } from "react";
import SearchBar from "../components/SearchBar";
import { ClientContext } from "@/app/context/ClientContext";
import ProductsList from "./ProductsList";
import ItemAddedToList from "./ItemAddedToList";
import ItemAddedToCart from "./ItemAddedToCart";
import CheckOut from "../components/CheckOut";
import { CiSearch } from "react-icons/ci";
import { BsCart, BsX } from "react-icons/bs"; // For Cart Icon

const Rent = () => {
  const { filteredProducts, list, cart } = useContext(ClientContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Count of items in the cart or list
  const itemCount = list.length + cart.length;

  return (
    <div className="p-4 flex gap-4 flex-col lg:flex-row min-h-screen">
      {/* Main Content */}
      <div className="block w-full lg:hidden bg-black overflow-y-auto overflow-hidden max-h-screen">
        <div className="flex justify-between mb-5 items-center border-b-2 border-gray-600 p-2">
          <div className="">
            <h1 className="text-lg font-bold text-white">Rent</h1>
            <p className="text-gray-500 text-sm">
              Affordable gadgets for hiring
            </p>
          </div>
          <div className="relative">
            <BsCart
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-white text-2xl cursor-pointer lg:hidden"
            />
            {itemCount > 0 && (
              <div className="absolute top-3 right-0 text-xs text-white bg-red-600 rounded-full w-4 h-4 px-2 flex justify-center items-center">
                {itemCount}
              </div>
            )}
          </div>
        </div>
        {/* Products Section */}
        <div className="flex flex-col space-y-2">
          <SearchBar />
          <div className="grid grid-cols-2 place-items-center">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductsList product={product} key={product.id} />
              ))
            ) : (
              <div className="flex flex-col space-y-6 text-[#8B8B8B]">
                <p className="text-xl">Oops</p>
                <CiSearch className="text-[100px]" />
                <p>Search yielded no results</p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Section (cart list) - for mobile */}
        <div
          className={`transition-transform duration-300 ease-in-out transform fixed inset-y-0 right-0 bg-black bg-opacity-70 z-50 w-full md:w-2/3 ${
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          } lg:translate-x-0 lg:static lg:w-auto`}
        >
          <div className="lg:border-l-2 px-4 py-2 flex flex-col bg-black space-y-3 opacity-90 text-white h-full">
            {/* Close Button */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white text-2xl self-end mb-2"
            >
              <BsX className="text-white" size={40} />
            </button>

            <h2 className="text-lg font-bold">List</h2>
            <div className="flex flex-col space-y-4 overflow-y-auto">
              {list.length === 0 ? (
                <p className="text-center text-sm">No Items in the List</p>
              ) : (
                <>
                  <div className="flex justify-between items-center px-2 text-[#8B8B8B]">
                    <p className="text-sm font-semibold">Items in the List</p>
                    <p className="text-sm">{list.length}</p>
                  </div>
                  <div className="flex gap-1 overflow-x-auto lg:overflow-x-auto">
                    {list.map((item, index) => (
                      <ItemAddedToList item={item} key={item.id || index} />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Cart Items */}
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

            {/* Checkout */}
            <div className="w-full text-white p-4">
              {cart.length > 0 && <CheckOut />}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout (Hidden Cart Icon) */}

      {/* Products Section */}
      <div className="hidden lg:block lg:w-2/3 bg-black overflow-y-auto overflow-hidden max-h-screen">
        <div className="border-b-2 border-gray-600 p-2 mb-5">
          <h1 className="text-lg font-bold text-white">Rent</h1>
          <p className="text-gray-500 text-sm">Affordable gadgets for hiring</p>
        </div>
        <SearchBar />
        <div className="grid grid-cols-2 place-items-center mt-5">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductsList product={product} key={product.id} />
            ))
          ) : (
            <div className="flex flex-col space-y-6 text-[#8B8B8B]">
              <p className="text-xl">Oops</p>
              <CiSearch className="text-[100px]" />
              <p>Search yielded no results</p>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar Section for Desktop (No Cart Icon) */}
      <div className="hidden lg:block lg:w-1/3 md:w-[45%] md:p-2 bg-black text-white border-l-2 lg:sticky lg:top-0 lg:h-screen p-4">
        <h2 className="text-lg font-bold">List</h2>
        <div className="flex flex-col space-y-4 overflow-y-auto">
          {list.length === 0 ? (
            <p className="text-center text-sm">No Items in the List</p>
          ) : (
            <>
              <div className="flex justify-between items-center px-2 text-[#8B8B8B]">
                <p className="text-sm font-semibold">Items in the List</p>
                <p className="text-sm">{list.length}</p>
              </div>
              <div className="flex gap-1 overflow-x-auto">
                {list.map((item, index) => (
                  <ItemAddedToList item={item} key={item.id || index} />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Cart Items */}
        <div className="flex flex-col gap-2 overflow-y-auto  scrollbar-hide h-[300px]">
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

        {/* Checkout */}
        <div className="w-full text-white bg-black p-4 sticky bottom-0">
          {cart.length > 0 && <CheckOut />}
        </div>
      </div>
    </div>
  );
};

export default Rent;
