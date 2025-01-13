import React, { useContext } from "react";
import Link from "next/link";
import { ClientContext } from "@/app/context/ClientContext";

const HomeRightSideBar = () => {
  const { filters, setFilters } = useContext(ClientContext);

  // Handle category change for category buttons
  const handleCategoryChange = (category) => {
    setFilters((prev) => ({ ...prev, category }));
  };

  // Handle type change for radio buttons
  const handleTypeChange = (type) => {
    setFilters((prev) => ({ ...prev, type }));
  };

  return (
    <div className="flex flex-col gap-2 justify-center space-y-6 py-2">
      {/* filter */}
      <div className="bg-[#0D0D0D] text-sm text-[#8B8B8B] py-2 px-2 w-full rounded-md">
        Filter feed by...
      </div>

      {/* radio buttons for Type */}
      <div className="flex flex-col gap-1 text-sm">
        <h3>Type:</h3>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={filters.type === "All"}
            onChange={() => handleTypeChange("All")}
          />
          All
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={filters.type === "Picture"}
            onChange={() => handleTypeChange("Picture")}
          />
          Picture
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={filters.type === "Video"}
            onChange={() => handleTypeChange("Video")}
          />
          Video
        </label>
      </div>

      {/* category selection */}
      <div className="flex flex-col gap-2 text-sm">
        <h2 className="text-sm font-bold">Category:</h2>
        <div className="flex gap-4 flex-wrap text-sm">
          <button
            onClick={() => handleCategoryChange("All")}
            className={`px-2 py-1 rounded-full text-sm bg-transparent border-2 ${
              filters.category === "All" ? "border-primary-secondaryColor" : ""
            }`}
          >
            All Categories
          </button>
          <button
            onClick={() => handleCategoryChange("Photography")}
            className={`btn px-2 text-sm py-1 rounded-full bg-transparent border-2 ${
              filters.category === "Photography"
                ? "border-primary-secondaryColor"
                : "bg-gray-200"
            }`}
          >
            Photography
          </button>
          <button
            onClick={() => handleCategoryChange("Make-up")}
            className={`btn px-2 text-sm py-1 rounded-full bg-transparent border-2 ${
              filters.category === "Make-up"
                ? "border-primary-secondaryColor"
                : "bg-gray-200"
            }`}
          >
            Make-Up
          </button>
          <button
            onClick={() => handleCategoryChange("Graphic design")}
            className={`px-2 text-sm py-1 rounded-full bg-transparent border-2 ${
              filters.category === "Graphic design"
                ? "border-primary-secondaryColor"
                : "bg-gray-200"
            }`}
          >
            Graphic Design
          </button>
          <button
            onClick={() => handleCategoryChange("Videography")}
            className={`px-2 text-sm py-1 rounded-full bg-transparent border-2 ${
              filters.category === "Videography"
                ? "border-primary-secondaryColor"
                : "bg-gray-200"
            }`}
          >
            Videography
          </button>
        </div>
      </div>

      {/* Appointment Link */}
      <div className="flex flex-col gap-4 text-[12px] border-2 px-3 py-3 w-full rounded-xl">
        <p>
          Experience fast attendance by scheduling ahead. Secure your spot and
          receive prompt attention upon arrival.
        </p>
        <Link href="/dashboard/appointment">
          <button className="bg-primary-secondaryColor px-2 py-2 w-full rounded-xl">
            Book an Appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeRightSideBar;
