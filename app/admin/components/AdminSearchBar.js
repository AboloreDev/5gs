"use client";

import { AdminContext } from "@/app/context/AdminContext";
import React, { useContext } from "react";
import { CiSearch } from "react-icons/ci";

const AdminSearchBar = () => {
  const { query, setQuery } = useContext(AdminContext);
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

export default AdminSearchBar;
