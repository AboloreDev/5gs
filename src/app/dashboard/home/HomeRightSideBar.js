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
    <div className="flex px-3 flex-col gap-2 justify-center space-y-6 py-2">
      {/* filter */}
      <div className="bg-[#0D0D0D] text-[#8B8B8B] py-2 px-2 w-full  rounded-md">
        Filter feed by...
      </div>

      {/* radio buttons  */}
      <div className="flex flex-col gap-1 text-sm">
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
      <div className="flex flex-col gap-2 mb-8 text-sm">
        <h2 className="text-xl font-bold">Category:</h2>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleCategoryChange("All")}
            className={` px-4 py-2 rounded-full bg-transparent border-2  ${
              filters.category === "All" ? "border-primary-secondaryColor" : ""
            }`}
          >
            All Categories
          </button>
          <button
            onClick={() => handleCategoryChange("Photography")}
            className={`btn px-4 py-2 rounded-full bg-transparent border-2  ${
              filters.category === "Photography"
                ? "border-primary-secondaryColor"
                : "bg-gray-200"
            }`}
          >
            Photography
          </button>
          <button
            onClick={() => handleCategoryChange("Make-up")}
            className={`btn  px-4 py-2 rounded-full bg-transparent border-2  ${
              filters.category === "Make-up"
                ? "border-primary-secondaryColor"
                : "bg-gray-200"
            }`}
          >
            Make-Up
          </button>
          <button
            onClick={() => handleCategoryChange("Graphic design")}
            className={` px-4 py-2 rounded-full bg-transparent border-2  ${
              filters.category === "Graphic design"
                ? "border-primary-secondaryColor"
                : "bg-gray-200"
            }`}
          >
            Graphic design
          </button>
          <button
            onClick={() => handleCategoryChange("Videography")}
            className={` px-4 py-2 rounded-full bg-transparent border-2  ${
              filters.category === "Videography"
                ? "border-primary-secondaryColor"
                : "bg-gray-200"
            }`}
          >
            Videography
          </button>
        </div>
      </div>

      {/* appointment Link */}
      <div className="flex flex-col gap-4 text-sm border-2 px-3 py-3 w-full rounded-xl">
        <p>
          Experience fast attendance by scheduling ahead. Secure your spot and
          receive prompt attention upon arrival.
        </p>
        <Link href="/dashboard/appointment">
          <button className="bg-primary-secondaryColor px-3 py-2 w-full rounded-xl">
            Book an Appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeRightSideBar;
