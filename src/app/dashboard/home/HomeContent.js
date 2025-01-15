"use client";

import { ClientContext } from "@/app/context/ClientContext";
import Image from "next/image";
import { useContext, useEffect, useState, useRef } from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import Link from "next/link";

const HomeContent = ({ post }) => {
  // Context Menu
  const { toggleLike, filters, setFilters } = useContext(ClientContext);
  const [isClient, setIsClient] = useState(false);

  // Reference to scrollable container
  const contentRef = useRef(null);

  // Handle default filter logic
  useEffect(() => {
    setIsClient(true);
    if (!filters.category) {
      setFilters({ category: "All", type: ["All"] });
    }
  }, [setFilters, filters.category]);

  // Scroll to the bottom when the component is rendered
  useEffect(() => {
    if (window.innerWidth < 1024) {
      // Scroll to the bottom of the content container
      if (contentRef.current) {
        contentRef.current.scrollTop = contentRef.current.scrollHeight;
      }
    }
  }, [post]); // Runs whenever new posts are added/filtered

  const isPostVisible =
    filters.type.includes("All") || filters.type.includes(post.type);

  if (!isClient) return null;

  return (
    isPostVisible && (
      <div
        ref={contentRef}
        className="flex flex-col gap-2 px-2 py-6 md:px-10 md:py-8 bg-black rounded-lg w-full h-auto overflow-y-auto"
      >
        {/* Post Author */}
        <h1 className="font-bold text-base md:text-lg flex items-center gap-2 tracking-wide">
          5GS Admin{" "}
          <span>
            <MdVerified className="text-blue-700" />
          </span>
        </h1>

        {/* Post Title and Date */}
        <div className="flex justify-between items-center">
          <h3 className="text-[12px] md:text-base font-thin">{post.title}</h3>
          <p className="text-xs md:text-sm text-gray-500">{post.date}</p>
        </div>

        {/* Post Image */}
        <Image
          src={post.image}
          alt={post.title}
          className="rounded-md w-full"
          width={600}
          height={400}
        />

        {/* Like and Comment Section */}
        <div className="flex justify-between items-center text-xs md:text-sm text-gray-500">
          <div className="flex gap-1 items-center">
            <CiHeart
              className={`cursor-pointer ${post.liked ? "text-red-500" : ""}`}
              onClick={() => toggleLike(post.id)}
            />
            <span>{post.likes}</span>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <Link
              href={"/dashboard/messages"}
              className="flex items-center gap-1"
            >
              <FaRegComment className="cursor-pointer" />
              <p className="text-xs md:text-sm">Chat about this post</p>
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

export default HomeContent;
