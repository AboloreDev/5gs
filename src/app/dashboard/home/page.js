"use client";

import { useContext } from "react";

import { ClientContext } from "@/app/context/ClientContext";
import HomeContent from "./HomeContent";
import HomeRightSideBar from "./HomeRightSideBar";

export default function HomePage() {
  const { filterPosts } = useContext(ClientContext);

  const filteredPosts = filterPosts();

  return (
    <div className="text-white">
      <div className="border-b-2 py-6 px-2">
        <h1 className="text-2xl font-bold"> Home</h1>
        <p className="text-gray-500">Explore our products</p>
      </div>

      <div className="grid md:grid-cols-[auto_250px] lg:grid-cols-[auto_400px] md:p-2">
        {/* posts */}
        <div className="px-16 overflow-y-auto h-screen">
          {filteredPosts.map((post, index) => (
            <HomeContent post={post} key={index} />
          ))}
        </div>
        {/* rightside */}
        <div className="border-l-2  px-8">
          <HomeRightSideBar />
        </div>
      </div>
    </div>
  );
}
