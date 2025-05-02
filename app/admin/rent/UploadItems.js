"use client";

import { AdminContext } from "@/app/context/AdminContext";
import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";

const UploadItems = () => {
  const { addProduct } = useContext(AdminContext);

  //  Upload functionality
  const [productName, setProductName] = useState("");
  const [pricePerDay, setPricePerDay] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState("");

  // Generate image preview URL on the client
  useEffect(() => {
    if (image) {
      const previewUrl = URL.createObjectURL(image);
      setImagePreview(previewUrl);

      // Revoke the URL when the component unmounts
      return () => URL.revokeObjectURL(previewUrl);
    }
  }, [image]);

  // Handle product submission
  function handleAddProduct() {
    if (!productName || !pricePerDay || !image) {
      setError("All fields are required.");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: productName,
      price: pricePerDay,
      image: imagePreview,
      status: "available",
    };

    addProduct(newProduct);
    setProductName("");
    setPricePerDay("");
    setImage(null);
    setImagePreview(null);
    setError("");
  }

  // Handle image selection
  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  }

  return (
    <div className="flex flex-col gap-4 space-y-4 w-full">
      <div className="p-4 bg-white rounded-lg">
        <h2 className="text-black font-bold text-lg mb-4">Add Product</h2>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="w-full p-2 mb-4 bg-gray-300 border outline-none text-black border-gray-500 rounded"
        />
        <input
          type="number"
          placeholder="Price Per Day"
          value={pricePerDay}
          onChange={(e) => setPricePerDay(e.target.value)}
          className="w-full p-2 mb-4 bg-gray-300 border outline-none text-black border-gray-500 rounded"
        />
        <input
          type="file"
          onChange={handleImageChange}
          className="w-full p-2 mb-4 bg-green-600 rounded"
        />
        {imagePreview && (
          <div className="relative mb-4">
            <Image
              src={imagePreview}
              alt="Preview"
              className="w-full h-40 object-contain rounded"
              width={100}
              height={200}
            />
            <button
              onClick={() => {
                setImage(null);
                setImagePreview(null);
              }}
              className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full"
            >
              ✕
            </button>
          </div>
        )}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          onClick={handleAddProduct}
          className="bg-primary-secondaryColor text-white p-2 rounded w-full"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default UploadItems;
