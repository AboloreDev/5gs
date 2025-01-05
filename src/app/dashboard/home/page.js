"use client";

import { useContext } from "react";

import { ClientContext } from "@/app/context/ClientContext";
import HomeContent from "./HomeContent";
import HomeRightSideBar from "./HomeRightSideBar";

export default function HomePage() {
  const { posts, setPosts, filterPosts, filters, setFilters } =
    useContext(ClientContext);

  const filteredPosts = filterPosts();

  return (
    <div className="text-white">
      <div className="border-b-2 py-2">
        <h1 className="text-xl font-bold"> Home</h1>
        <p className="text-gray-500">Explore our products</p>
      </div>

      <div className="grid md:grid-cols-[auto_250px] lg:grid-cols-[auto_350px] md:p-2">
        {/* posts */}
        <div className="px-40 overflow-y-auto h-screen">
          {filteredPosts.map((post, index) => (
            <HomeContent post={post} key={index} />
          ))}
        </div>
        {/* rightside */}
        <div className="border-l-2 h-screen">
          <HomeRightSideBar />
        </div>
      </div>
    </div>
  );
}
