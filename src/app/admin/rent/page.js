"use client";

import { AdminContext } from "@/app/context/AdminContext";

import React, { useContext, useState } from "react";
import AdminSearchBar from "../components/AdminSearchBar";
import AdminProductsList from "./AdminProductsList";
import { CiSearch } from "react-icons/ci";
import UploadItems from "./UploadItems";
import { FaCheckCircle } from "react-icons/fa";
import { MdFreeCancellation, MdOutlineCancel } from "react-icons/md";
import { GiTempleGate } from "react-icons/gi";
import AdminRequestTable from "./AdminRequestTable";
import ClientInfo from "./ClientInfo";

const AdminRent = () => {
  // context menu
  const { filteredProducts, totalItems, availableItems, rentedItems } =
    useContext(AdminContext);

  // states
  const [activeTab, setActiveTab] = useState("products");

  console.log(filteredProducts);
  return (
    <div>
      {/* header */}
      <div className="border-b-2 border-gray-600 py-2">
        <h1 className="text-sm font-bold">Rent</h1>
        <p className="text-gray-500 text-[12px]">Explore our products</p>
      </div>
      {/* content */}
      <div className="grid grid-cols-[auto_400px]">
        <div className="flex flex-col items-center space-y-3 py-4">
          {/* Tabs */}
          <div className=" bg-white text-black px-6 py-2 rounded-full flex space-x-4">
            <button
              className={`px-5 text-[12px] py-2 rounded-full shadow-md ${
                activeTab === "products"
                  ? "bg-primary-secondaryColor text-white "
                  : " hover:bg-primary-secondaryColor"
              }`}
              onClick={() => setActiveTab("products")}
            >
              Products
            </button>
            <button
              className={`px-5 text-[12px] py-2 rounded-full shadow-md ${
                activeTab === "requested"
                  ? "bg-primary-secondaryColor text-white "
                  : " hover:bg-primary-secondaryColor"
              }`}
              onClick={() => setActiveTab("requested")}
            >
              Requested
            </button>
          </div>
          {/*products list */}
          {activeTab === "products" && (
            <div className="flex items-center flex-col w-full justify-center gap-2">
              <AdminSearchBar />
              <div className="grid grid-cols-2 gap-4 px-4 py-4 overflow-y-auto max-h-[700px] overflow-hidden space-y-4">
                {/* products  */}
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <AdminProductsList product={product} key={product.id} />
                  ))
                ) : (
                  <div className=" font-bold text-2xl flex justify-center  text-[#8B8B8B]">
                    <p className="text-center mt-10">
                      There is no item availabe, please upload a new product
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* requested */}
          {activeTab === "requested" && (
            <div className=" w-full px-6 py-4 ">
              <AdminRequestTable />
            </div>
          )}
        </div>

        {/* sidebar for products */}
        {activeTab === "products" && (
          <div className="border-l-2 min-h-screen">
            <div className="flex flex-col px-4 py-6 space-y-2">
              {/* product summary */}
              <div className="flex flex-col font-bold gap-6 bg-white text-black p-6  rounded-lg">
                <h2 className=" text-lg ">Summary:</h2>
                <div className="flex items-center gap-2">
                  <GiTempleGate />
                  <p className="">Total Items Posted: {totalItems}</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle />
                  <p className="">Available Items: {availableItems}</p>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineCancel />
                  <p className="">Rented Items: {rentedItems}</p>
                </div>
              </div>

              {/* upload items */}
              <UploadItems />
            </div>
          </div>
        )}

        {/* sidebar for requests */}
        {activeTab === "requested" && (
          <div className="border-l-2 min-h-screen">
            <ClientInfo />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminRent;
