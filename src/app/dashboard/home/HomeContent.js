import { ClientContext } from "@/app/context/ClientContext";
import Image from "next/image";
import { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const HomeContent = ({ post }) => {
  // context menu

  return (
    <div className="flex flex-col gap-2 px-20 py-8">
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
        className="w-full h-[800px] object-cover rounded-md mb-4"
        width={600}
        height={400}
      />

      <div className="flex justify-between items-center text-xl text-gray-500">
        <div className="flex gap-1 items-center">
          <CiHeart />
          <span>{post.likes}</span>
        </div>
        <div className="flex gap-1 items-center">
          <FaRegComment />
          <span>{post.comments}</span>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
