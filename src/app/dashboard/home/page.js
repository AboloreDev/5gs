"use client";

import { useContext, useState } from "react";
import { ClientContext } from "@/app/context/ClientContext";
import HomeContent from "./HomeContent";
import HomeRightSideBar from "./HomeRightSideBar";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function HomePage() {
  const { filterPosts } = useContext(ClientContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredPosts = filterPosts();

  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row min-h-screen">
      {/* Large Screen Layout */}
      <div className="hidden lg:block lg:w-2/3 bg-black overflow-y-auto max-h-screen">
        <div className="text-white p-4 border-b-2 border-gray-600">
          <h1 className="text-lg font-bold">Home</h1>
          <p className="text-gray-400">Explore our products</p>
        </div>
        {filteredPosts.map((post, index) => (
          <HomeContent post={post} key={index} />
        ))}
      </div>

      <div className="hidden lg:block lg:w-1/3 md:w-[45%] md:p-2 bg-black text-white relative border-l-2 lg:sticky lg:top-0 lg:h-screen p-4">
        <HomeRightSideBar />
      </div>

      {/* Dropdown Section */}
      {isDropdownOpen && (
        <div className="bg-black text-white ">
          <HomeRightSideBar />
        </div>
      )}

      {/* Posts Section */}
      <div className="block w-full lg:hidden bg-black overflow-y-auto max-h-screen">
        <div className="flex justify-between items-center border-b-2 border-gray-600">
          <div className="text-white">
            <h1 className="text-lg font-bold">Home</h1>
            <p className="text-gray-400">Explore our products</p>
          </div>
          <div className="text-white">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 text-white"
            >
              Filter Feed
              {isDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>
          </div>
        </div>
        {filteredPosts.map((post, index) => (
          <HomeContent post={post} key={index} />
        ))}
      </div>
    </div>
  );
}
