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
    <div className="h-screen overflow-y-auto">
      {/* Header */}
      <div className="border-b-2 py-2 px-2 sm:mt-0 mt-10 ">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-lg font-bold text-white">Rent</h1>
            <p className="text-gray-500 text-sm">
              Affordable gadgets for hiring
            </p>
          </div>
          {/* Cart Icon with Count only on mobile */}
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
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:hidden p-2 overflow-y-auto h-screen">
        {/* Products Section */}
        <div className="flex flex-col space-y-2">
          <SearchBar />
          <div className="grid grid-cols-2 gap-4 overflow-y-auto h-[500px] space-y-4 sm:grid-cols-2">
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
          className={`transition-transform duration-300 ease-in-out transform fixed inset-0 bg-black bg-opacity-70 z-50 ${
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          } lg:translate-x-0 lg:static lg:h-auto`}
        >
          <div className="border-l-2 px-4 py-2 flex flex-col bg-black space-y-3 w-[380px]  text-white h-full">
            {/* Close Button */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white text-2xl self-end mb-2"
            >
              <BsX className="text-white" />
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
      <div className="hidden lg:grid lg:grid-cols-[auto_400px] lg:p-2">
        {/* Products Section */}
        <div className="flex flex-col space-y-2">
          <SearchBar />
          <div className="grid grid-cols-2 gap-4 overflow-y-auto h-[700px] space-y-4">
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
        <div className="border-l-2 px-4 py-2 flex flex-col space-y-3">
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
          <div className="w-full text-white p-4 sticky bottom-0">
            {cart.length > 0 && <CheckOut />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rent;
