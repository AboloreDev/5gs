"use client";

import { AdminContext } from "@/app/context/AdminContext";
import React, { useContext, useState } from "react";

const FilterButtons = () => {
  const { filterPosts } = useContext(AdminContext);

  // State to track the active filter
  const [activeType, setActiveType] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");

  // Handle type filter change
  const handleTypeFilter = (type) => {
    setActiveType(type);
    filterPosts(type);
  };

  // Handle category filter change
  const handleCategoryFilter = (category) => {
    setActiveCategory(category);
    filterPosts(category);
  };

  return (
    <div className="text-white px-6 py-8 flex flex-col space-y-6">
      {/* Filter by Type */}
      <div className="text-gray-500 bg-gray-900 flex justify-between items-center p-2">
        <h2 className="text-sm font-thin mb-2">Filter feed by....</h2>
        <p>0</p>
      </div>

      <div>
        <div
          onClick={() => handleTypeFilter("all")}
          className={`text-white mb-2 w-full rounded space-x-2 flex items-center cursor-pointer ${
            activeType === "all"
          }`}
        >
          <input
            type="radio"
            checked={activeType === "all"}
            onChange={() => handleTypeFilter("all")}
          />
          <label>All</label>
        </div>

        <div
          onClick={() => handleTypeFilter("picture")}
          className={`text-white mb-2 w-full rounded space-x-2 flex items-center cursor-pointer ${
            activeType === "picture"
          }`}
        >
          <input
            type="radio"
            checked={activeType === "picture"}
            onChange={() => handleTypeFilter("picture")}
          />
          <label>Picture</label>
        </div>

        <div
          onClick={() => handleTypeFilter("video")}
          className={`text-white mb-2 w-full rounded space-x-2 flex items-center cursor-pointer ${
            activeType === "video"
          }`}
        >
          <input
            type="radio"
            checked={activeType === "video"}
            onChange={() => handleTypeFilter("video")}
          />
          <label>Video</label>
        </div>
      </div>

      {/* Filter by Category */}
      <div className="flex flex-wrap gap-2">
        {["all", "makeup", "photography", "videography", "graphics"].map(
          (category) => (
            <button
              key={category}
              onClick={() => handleCategoryFilter(category)}
              className={`bg-transparent border-2 text-white p-2 mb-2 w-[150px] rounded-full ${
                activeCategory === category
                  ? "border-primary-secondaryColor"
                  : "border-white"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default FilterButtons;
