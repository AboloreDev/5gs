import React, { useContext } from "react";
import Link from "next/link";
import { ClientContext } from "@/app/context/ClientContext";

const HomeRightSideBar = () => {
  const { filters, setFilters } = useContext(ClientContext);

  const handleCategoryChange = (category) => {
    setFilters((prev) => ({ ...prev, category }));
  };

  const handleTypeChange = (type) => {
    setFilters((prev) => {
      const isTypeSelected = prev.type.includes(type);
      return {
        ...prev,
        type: isTypeSelected
          ? prev.type.filter((t) => t !== type)
          : [...prev.type, type],
      };
    });
  };

  return (
    <div className="flex px-4 flex-col justify-center space-y-6 py-4">
      {/* filter */}
      <div className="bg-[#0D0D0D] text-[#8B8B8B] p-2 rounded-md">
        Filter feed by...
      </div>

      {/* radio buttons  */}
      <div className="flex flex-col gap-1">
        <h3 className="font-medium">Type:</h3>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.type.includes("All")}
            onChange={() => handleTypeChange("All")}
          />
          All
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.type.includes("Picture")}
            onChange={() => handleTypeChange("Picture")}
          />
          Picture
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.type.includes("Video")}
            onChange={() => handleTypeChange("Video")}
          />
          Video
        </label>
      </div>

      {/* category */}
      <div className="flex flex-col gap-2 mb-8">
        <h2 className="text-xl font-bold">Category:</h2>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleCategoryChange("All")}
            className={`btn w-1/2 px-4 py-2 rounded-full bg-transparent border-2  ${
              filters.category === "All" ? "border-primary-secondaryColor" : ""
            }`}
          >
            All Categories
          </button>
          <button
            onClick={() => handleCategoryChange("Photography")}
            className={`btn  w-1/2 px-4 py-2 rounded-full bg-transparent border-2  ${
              filters.category === "Photography"
                ? "border-primary-secondaryColor"
                : "bg-gray-200"
            }`}
          >
            Photography
          </button>
          <button
            onClick={() => handleCategoryChange("Make-up")}
            className={`btn  w-1/2 px-4 py-2 rounded-full bg-transparent border-2  ${
              filters.category === "Make-up"
                ? "border-primary-secondaryColor"
                : "bg-gray-200"
            }`}
          >
            Make-Up
          </button>
          <button
            onClick={() => handleCategoryChange("Graphic design")}
            className={`btn  w-1/2 px-4 py-2 rounded-full bg-transparent border-2  ${
              filters.category === "Graphic design"
                ? "border-primary-secondaryColor"
                : "bg-gray-200"
            }`}
          >
            Graphic design
          </button>
          <button
            onClick={() => handleCategoryChange("Videography")}
            className={`btn w-1/2 px-4 py-2 rounded-full bg-transparent border-2  ${
              filters.category === "Videography"
                ? "border-primary-secondaryColor"
                : "bg-gray-200"
            }`}
          >
            Videography
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeRightSideBar;
