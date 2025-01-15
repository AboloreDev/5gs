"use client";

import { useContext, useState } from "react";
import { ClientContext } from "@/app/context/ClientContext";
import HomeContent from "./HomeContent";
import HomeRightSideBar from "./HomeRightSideBar";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Import icons

export default function HomePage() {
  const { filterPosts } = useContext(ClientContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to control dropdown visibility

  const filteredPosts = filterPosts();

  return (
    <div className="text-white h-screen overflow-y-auto">
      {/* Desktop Layout (1024px and above) */}
      <div className="hidden lg:grid lg:grid-cols-[auto_350px] p-2 min-h-screen">
        {/* Posts */}
        <div className="overflow-y-auto overflow-hidden h-screen">
          <div className="border-b-2 border-gray-600 py-2 px-2 sticky top-0 bg-black z-10">
            <h1 className="text-lg font-bold">Home</h1>
            <p className="text-gray-500 text-sm">Explore our products</p>
          </div>
          {filteredPosts.map((post, index) => (
            <HomeContent post={post} key={index} />
          ))}
        </div>
        {/* Right Sidebar */}
        <div className="border-l-2 px-6">
          <HomeRightSideBar />
        </div>
      </div>

      {/* Tablet & Mobile Layout (1024px and below) */}
      <div className="lg:hidden py-1 h-screen">
        {/* Dropdown Toggle Button */}
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className=" text-white px-4 py-2 rounded-md top-20 h-[100px] w-1/2 text-left flex items-center justify-between"
        >
          {isDropdownOpen ? "Filter Feed " : "Filter Feed"}
          {isDropdownOpen ? (
            <FiChevronUp size={20} />
          ) : (
            <FiChevronDown size={20} />
          )}
        </button>

        {/* Dropdown Content */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isDropdownOpen ? "max-h-[1000px] mt-2" : "max-h-0"
          }`}
        >
          <div className="border-t-2 border-gray-600 mt-2">
            <HomeRightSideBar />
          </div>
        </div>

        {/* Posts Section */}
        <div className="overflow-y-auto overflow-hidden h-screen">
          <div className="border-b-2 border-gray-600 py-2 px-2 sticky top-0 bg-black z-10">
            <h1 className="text-lg font-bold ">Home</h1>
            <p className="text-gray-500 text-sm">Explore our products</p>
          </div>
          {filteredPosts.map((post, index) => (
            <HomeContent post={post} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
