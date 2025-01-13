"use client";

import { AdminContext } from "@/app/context/AdminContext";
import React, { useContext } from "react";
import Image from "next/image";
import { FaHeart, FaTrash } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";

const PostLists = ({ post }) => {
  // destucture post
  const { title, content, image, date, id, likes } = post;
  // context menu
  const { likePost, deletePost } = useContext(AdminContext);
  return (
    <div className=" space-y-2">
      <div className="flex items-center gap-1">
        <h2 className="font-bold">{title}</h2>
        <span className="text-blue-700">
          <MdVerified />
        </span>
      </div>

      <div className="flex justify-between items-center mt-3 text-[13px]">
        <p>{content}</p>
        <p className="text-gray-500">{date} </p>
      </div>

      <Image
        src={post.fileUrl || image}
        alt="Images"
        width={100}
        height={100}
        className="w-full h-[500px] object-cover"
      />

      {/* Likes and delete */}
      <div className="flex justify-between items-center text-gray-500">
        <div className="flex gap-2 items-center">
          <button onClick={() => likePost(id)}>
            {" "}
            <FaHeart />
          </button>
          <p>{likes}</p>
        </div>
        <div className="flex gap-2 items-center">
          <button onClick={() => deletePost(id)}>
            <FaTrash />
          </button>
          <p>Delete this post</p>
        </div>
      </div>
    </div>
  );
};

export default PostLists;
