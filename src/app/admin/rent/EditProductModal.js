"use client";

import { AdminContext } from "@/app/context/AdminContext";
import React, { useContext, useState } from "react";

const EditProductModal = ({ product, closeModal }) => {
  const { updateProduct } = useContext(AdminContext);

  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [isAvailable, setIsAvailable] = useState(product.isAvailable);

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price) {
      alert("Please fill in all fields!");
      return;
    }

    const updatedProduct = {
      ...product,
      name,
      price: parseFloat(price),
      isAvailable,
    };

    updateProduct(updatedProduct);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-lg font-bold mb-4">Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Price per Day
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              value={isAvailable}
              onChange={(e) => setIsAvailable(e.target.value === "true")}
              className="mt-1 p-2 border rounded w-full"
            >
              <option value="true">Available</option>
              <option value="false">Rented</option>
            </select>
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;
