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
    <div className="h-screen">
      {/* Large Screen Layout */}
      <div className="hidden lg:grid lg:grid-cols-[250px_auto_350px] h-full">
        {/* Posts Section */}
        <div className="h-full overflow-y-auto border-r border-gray-600">
          <div className="sticky top-0 bg-black z-10 p-4">
            <h1 className="text-lg font-bold">Home</h1>
            <p className="text-gray-400">Explore our products</p>
          </div>
          {filteredPosts.map((post, index) => (
            <HomeContent post={post} key={index} />
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="border-l border-gray-600 h-full bg-gray-100">
          <HomeRightSideBar />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden h-full flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-black z-10 p-4 flex justify-between items-center border-b border-gray-600">
          <div>
            <h1 className="text-lg font-bold">Home</h1>
            <p className="text-gray-400">Explore our products</p>
          </div>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 text-white"
          >
            Filter Feed
            {isDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
          </button>
        </div>

        {/* Dropdown Section */}
        {isDropdownOpen && (
          <div className="bg-black border-t border-gray-600">
            <HomeRightSideBar />
          </div>
        )}

        {/* Posts Section */}
        <div className="flex-1 overflow-y-auto p-4">
          {filteredPosts.map((post, index) => (
            <HomeContent post={post} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
