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
    <div className="flex flex-col gap-4 p-6 rounded-lg">
      {/* Filter Header */}
      <div className="bg-[#0D0D0D] text-sm text-[#8B8B8B] py-2 px-4 rounded-md">
        Filter feed by...
      </div>

      {/* Radio Buttons for Type */}
      <div className="flex flex-col gap-2 text-sm">
        <h3 className="text-white">Type:</h3>
        {["All", "Picture", "Video"].map((type) => (
          <label key={type} className="flex items-center gap-2">
            <input
              type="radio"
              checked={filters.type === type}
              onChange={() => handleTypeChange(type)}
            />
            {type}
          </label>
        ))}
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-2">
        {["All", "Photography", "Make-up", "Graphic design", "Videography"].map(
          (category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-3 py-1 rounded-full text-sm ${
                filters.category === category
                  ? "border border-primary-secondaryColor"
                  : "border border-white"
              }`}
            >
              {category}
            </button>
          )
        )}
      </div>

      {/* Appointment Link */}
      <div className="mt-4 border border-white p-4 rounded-lg text-sm text-gray-400">
        <p>Experience fast attendance by scheduling ahead.</p>
        <Link href="/dashboard/appointment">
          <button className="bg-primary-secondaryColor text-white px-4 py-2 mt-2 rounded-md w-full">
            Book an Appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeRightSideBar;
