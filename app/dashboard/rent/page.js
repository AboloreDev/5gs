"use client";

import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductsList from "./ProductsList";
import ItemAddedToList from "./ItemAddedToList";
import ItemAddedToCart from "./ItemAddedToCart";
import CheckOut from "../components/CheckOut";
import { CiSearch } from "react-icons/ci";
import { BsCart, BsX } from "react-icons/bs";
import { useRental, RentalProvider } from "@/app/context/RentalContext";
import LoadingSpinner from "../components/LoadingSpinner";

const RentContent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { cart, clearCart } = useRental();
  const [showModal, setShowModal] = useState(false);

  const list = [];
  const itemCount = cart.length;

  const { items, loading, query } = useRental();
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4 flex gap-4 flex-col lg:flex-row min-h-screen">
      {/* Mobile View */}
      <div className="block w-full lg:hidden bg-black overflow-y-auto max-h-screen">
        <div className="flex justify-between mb-5 items-center border-b-2 border-gray-600 p-2">
          <div>
            <h1 className="text-lg font-bold text-white">Rent</h1>
            <p className="text-gray-500 text-sm">
              Affordable gadgets for hiring
            </p>
          </div>
          <div className="relative">
            <BsCart
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-white text-2xl cursor-pointer"
            />
            {itemCount > 0 && (
              <div className="absolute top-3 right-0 text-xs text-white bg-red-600 rounded-full w-4 h-4 px-2 flex justify-center items-center">
                {itemCount}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <SearchBar />
          <div className="grid grid-cols-2 place-items-center">
            {loading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <LoadingSpinner key={index} />
              ))
            ) : query && filteredItems.length === 0 ? (
              <div className="flex flex-col space-y-6 text-[#8B8B8B] text-center animate-fade-in">
                <p className="text-xl">Oops!</p>
                <p>No matching products found for &quot;{query}&quot;.</p>
              </div>
            ) : (
              filteredItems.map((product) => (
                <ProductsList product={product} key={product._id} />
              ))
            )}
          </div>
        </div>

        {/* Sidebar for Cart (Mobile) */}
        <div
          className={`transition-transform duration-300 ease-in-out transform fixed inset-y-0 right-0 bg-black bg-opacity-70 z-50 w-full md:w-2/4 ${
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          } lg:translate-x-0 lg:static lg:w-auto`}
        >
          <div className="lg:border-l-2 px-4 py-2 flex flex-col bg-black space-y-3 opacity-90 text-white h-full">
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white text-2xl self-end mb-2"
            >
              <BsX size={40} />
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
                  <div className="flex gap-1 overflow-x-auto">
                    {list.map((item, index) => (
                      <ItemAddedToList item={item} key={item._id || index} />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="flex flex-col gap-2 overflow-y-auto max-h-[400px] px-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
              {loading ? (
                Array.from({ length: 6 }).map((_, index) => (
                  <LoadingSpinner key={index} />
                ))
              ) : (
                <>
                  {cart.length > 0 && (
                    <div className="flex justify-end mb-2">
                      <button
                        onClick={() => setShowModal(true)}
                        className="bg-red-600 hover:bg-red-700 text-white text-xs rounded-md py-1 px-3"
                      >
                        Clear Cart
                      </button>
                    </div>
                  )}

                  {cart.length === 0 ? (
                    <p className="text-center text-sm">No Items in the Cart</p>
                  ) : (
                    cart.map((item, index) => (
                      <ItemAddedToCart item={item} key={item._id || index} />
                    ))
                  )}
                </>
              )}
            </div>

            {cart.length > 0 && <CheckOut />}
          </div>
        </div>
      </div>

      {/* Desktop Products Section */}
      <div className="hidden lg:block lg:w-2/3 bg-black overflow-y-auto max-h-screen">
        <div className="border-b-2 border-gray-600 p-2 mb-5">
          <h1 className="text-lg font-bold text-white">Rent</h1>
          <p className="text-gray-500 text-sm">Affordable gadgets for hiring</p>
        </div>
        <SearchBar />
        <div className="grid grid-cols-2 place-items-center mt-5">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <LoadingSpinner key={index} />
            ))
          ) : query && filteredItems.length === 0 ? (
            <div className="flex flex-col space-y-6 text-[#8B8B8B] text-center animate-fade-in">
              <p className="text-xl">Oops!</p>
              <p>No matching products found for {query}</p>
            </div>
          ) : (
            filteredItems.map((product) => (
              <ProductsList product={product} key={product._id} />
            ))
          )}
        </div>
      </div>

      {/* Desktop Cart/Sidebar */}
      <div className="hidden lg:block lg:w-1/3 bg-black text-white border-l-2 sticky top-0 h-screen p-4">
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
                  <ItemAddedToList item={item} key={item._id || index} />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="flex flex-col gap-2 overflow-y-auto h-[300px]">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <LoadingSpinner key={index} />
            ))
          ) : (
            <>
              {cart.length > 0 && (
                <div className="flex justify-end mb-2">
                  <button
                    onClick={() => setShowModal(true)}
                    className="bg-red-600 hover:bg-red-700 text-white text-xs rounded-md py-1 px-3"
                  >
                    Clear Cart
                  </button>
                </div>
              )}

              {cart.length === 0 ? (
                <p className="text-center text-sm">No Items in the Cart</p>
              ) : (
                cart.map((item, index) => (
                  <ItemAddedToCart item={item} key={item._id || index} />
                ))
              )}
            </>
          )}
        </div>

        {cart.length > 0 && <CheckOut />}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-start  bg-black bg-opacity-50 z-50 justify-center">
          <div className="bg-white p-6 rounded-lg text-center space-y-4">
            <h2 className="text-lg font-semibold text-black">
              Are you sure you want to clear the cart?
            </h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={async () => {
                  await clearCart();
                  setShowModal(false);
                  console.log("Cart cleared", cart);
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
              >
                Yes, Clear
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Rent = () => (
  <RentalProvider>
    <RentContent />
  </RentalProvider>
);

export default Rent;
