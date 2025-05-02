"use client";

import React, { useEffect, useState } from "react";
import { useRental } from "@/app/context/RentalContext";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const { fetchRentalItems } = useRental();
  const [searchInput, setSearchInput] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchInput);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchInput]);

  useEffect(() => {
    if (debouncedQuery) {
      fetchRentalItems({ name: debouncedQuery });
    } else {
      fetchRentalItems();
    }
  }, [debouncedQuery]);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="w-full flex relative items-center justify-center py-2">
      <input
        value={searchInput}
        onChange={handleInputChange}
        type="text"
        placeholder="Search for anything"
        className="w-2/3 py-2 px-6 rounded-full bg-gray-700 focus:outline-none text-white"
      />
      <span className="absolute right-[20%] text-white text-xl">
        <CiSearch />
      </span>
    </div>
  );
};

export default SearchBar;
