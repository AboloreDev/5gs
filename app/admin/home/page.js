"use client";

import { AdminContext } from "@/app/context/AdminContext";
import React, { useContext, useState } from "react";
import PostLists from "./PostLists";
import FilterButtons from "./FilterButtons";
import CreatePostModal from "./CreatePostModal";

const AdminHome = () => {
  // states
  const [isOpenModal, setIsOpenModal] = useState(false);

  // context
  const { posts } = useContext(AdminContext);

  return (
    <div className="grid grid-cols-[auto_400px] min-h-screen ">
      {/* Main content */}
      <div className="">
        {/* Header */}
        <div className="border-b-2 border-gray-600 py-2">
          <h1 className="text-sm font-bold">Home</h1>
          <p className="text-gray-500 text-[12px]">Explore our products</p>
        </div>
        {/* Create post btn */}
        <div className="flex justify-end items-center px-4 py-2 text-[12px] border-b-2 border-gray-500">
          <button
            className="bg-primary-secondaryColor px-2 py-2 rounded-full"
            onClick={() => setIsOpenModal(true)}
          >
            Create new post
          </button>
        </div>

        {/* content/posts */}
        <div className="flex flex-col space-y-12 px-6 py-4 overflow-y-auto overflow-hidden h-[800px]">
          {posts.map((post, index) => (
            <PostLists post={post} key={index} />
          ))}
        </div>

        {/* Create post modal */}
        {isOpenModal && (
          <CreatePostModal onClose={() => setIsOpenModal(false)} />
        )}
      </div>

      {/* sidebar */}
      <div className="border-l-2">
        <FilterButtons />
      </div>
    </div>
  );
};

export default AdminHome;
