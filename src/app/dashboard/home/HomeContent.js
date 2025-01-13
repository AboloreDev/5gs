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
  const { toggleLike, filters, setFilters } = useContext(ClientContext);
  const [isClient, setIsClient] = useState(false);

  // Handle default filter logic
  useEffect(() => {
    setIsClient(true);
    if (!filters.category) {
      setFilters({ category: "All", type: ["All"] });
    }
  }, [setFilters, filters.category]);

  const isPostVisible =
    filters.type.includes("All") || filters.type.includes(post.type);

  if (!isClient) return null;

  return (
    isPostVisible && (
      <div className="flex flex-col gap-2 px-10 py-8 h-screen">
        <h1 className="font-bold text-lg flex items-center gap-2 tracking-widest">
          5GS Admin{" "}
          <span>
            <MdVerified className="text-blue-700" />
          </span>
        </h1>
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-thin">{post.title}</h3>
          <p className="text-sm text-gray-500">{post.date}</p>
        </div>

        <Image
          src={post.image}
          alt={post.title}
          className=" w-full rounded-md mb-4"
          width={800}
          height={600}
        />

        <div className="flex justify-between items-center text-sm text-gray-500">
          <div className="flex gap-1 items-center">
            <CiHeart
              className={`cursor-pointer ${post.liked ? "text-red-500" : ""}`}
              onClick={() => toggleLike(post.id)}
            />
            <span>{post.likes}</span>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <Link
              href={`/dashboard/messages?postId=${post.id}&image=${post.image}`}
              className="flex items-center gap-1"
            >
              <FaRegComment className="cursor-pointer" />
              <p className="text-sm">Chat about this post</p>
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

export default HomeContent;
