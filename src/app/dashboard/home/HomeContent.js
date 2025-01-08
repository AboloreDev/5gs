"use client";

import { ClientContext } from "@/app/context/ClientContext";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import Link from "next/link";

const HomeContent = ({ post }) => {
  // context menu
  const { toggleLike, filters, setFilters, refreshPosts } =
    useContext(ClientContext);
  const [isClient, setIsClient] = useState(false);

  // Handle default filter logic
  useEffect(() => {
    setIsClient(true);
    if (!filters.category) {
      setFilters({ category: "All", type: ["All"] });
      refreshPosts(); // Automatically refresh posts once on mount
    }
  }, []);
  // Check if the current post should be displayed based on filters
  // const isPostVisible = () => {
  //   if (!isClient) return false; // Prevent hydration mismatch by ensuring client-only rendering
  //   if (filters.type.includes("All")) return true;
  //   return filters.type.includes(post.type);
  // };

  const isPostVisible =
    filters.type.includes("All") || filters.type.includes(post.type);

  if (!isClient) return null;

  return (
    isPostVisible && (
      <div className="flex flex-col gap-2 px-10 py-8 h-screen">
        <h1 className="font-bold text-xl flex items-center gap-2">
          5GS Admin{" "}
          <span>
            <MdVerified className="" />
          </span>
        </h1>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-thin">{post.title}</h3>
          <p className="text-sm text-gray-500">{post.date}</p>
        </div>

        <Image
          src={post.image}
          alt={post.title}
          className=" w-full rounded-md mb-4"
          width={800}
          height={600}
        />

        <div className="flex justify-between items-center text-xl text-gray-500">
          <div className="flex gap-1 items-center">
            <CiHeart
              className={`cursor-pointer ${post.liked ? "text-red-500" : ""}`}
              onClick={() => toggleLike(post.id)}
            />
            <span>{post.likes}</span>
          </div>
          <div className="flex gap-1 items-center">
            <Link href={`/message?postId=${post.id}&image=${post.image}`}>
              <FaRegComment className="cursor-pointer" />
            </Link>
            <span>{post.comments}</span>
          </div>
        </div>
      </div>
    )
  );
};

export default HomeContent;
