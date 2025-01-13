"use client";

import { ClientContext } from "@/app/context/ClientContext";
import React, { useContext } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  // context
  const { query, setQuery } = useContext(ClientContext);
  return (
    <div className="w-full flex relative items-center justify-center py-2">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search for anything"
        className="w-2/3 py-2 px-6 rounded-full bg-gray-700 focus:outline-none"
      />

      <span className="absolute flex justify-end items-end text-xl translate-x-64">
        <CiSearch />
      </span>
    </div>
  );
};

export default SearchBar;
