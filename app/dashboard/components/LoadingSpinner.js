"use client";

import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col space-y-2 px-4 py-2 animate-pulse">
      {/* Image Skeleton */}
      <div className="bg-gray-700 rounded-lg w-[200px] h-[200px]"></div>

      {/* Text Skeleton */}
      <div className="flex flex-col gap-2 mt-2">
        <div className="bg-gray-700 rounded w-2/3 h-4"></div>
        <div className="bg-gray-700 rounded w-3/4 h-3"></div>
        <div className="bg-gray-700 rounded w-1/2 h-3"></div>
        <div className="bg-gray-700 rounded w-1/4 h-3"></div>
      </div>

      {/* Button Skeleton */}
      <div className="flex flex-col gap-2 w-2/3">
        <div className="bg-gray-700 rounded w-full h-8"></div>
        <div className="bg-gray-700 rounded w-full h-8"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
