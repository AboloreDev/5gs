"use client";

import { ClientContext } from "@/app/context/ClientContext";
import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const Meessages = () => {
  // context menu
  const { messages, previewFiles, updateCaption, removeFile } =
    useContext(ClientContext);

  const router = useRouter();

  const searchParams = useSearchParams();
  const [postId, setPostId] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const postId = searchParams.get("postId");
    const image = searchParams.get("image");
    if (postId && image) {
      setPostId(postId);
      setImage(image);
    }
  }, [searchParams]);

  return (
    <div className=" px-10 py-2 ">
      <div className="border-b-2 py-2 ">
        <h1 className="text-[20px] font-bold"> Meessages</h1>
        <p className="text-gray-500 text-[14px]">Chat directly with 5GS</p>
      </div>

      <div className="flex flex-col space-y-4 overflow-y-auto h-[700px]">
        {/* messages */}
        <div className=" mt-10 flex-1 overflow-y-auto  p-2  space-y-4">
          {messages.length === 0 ? (
            <div className="flex justify-center items-center text-center  text-gray-500">
              <p> Start a conversation with 5GS admin </p>
            </div>
          ) : (
            messages.map((message, index) => (
              <Message message={message} key={index} />
            ))
          )}

          {/* Preview Section */}
          <div className="p-4 flex flex-col text-black items-start space-y-2">
            {previewFiles.map((file, index) => (
              <div key={index} className="flex flex-col items-center">
                <button
                  onClick={() => removeFile(index)}
                  className="absolute top-0 right-0 bg-red-600 text-white px-2 py-1 rounded-full text-sm z-10 hover:bg-red-700"
                >
                  Delete
                </button>
                <Image
                  src={file.url}
                  alt={file.name}
                  width={300}
                  height={300}
                  className="rounded-md"
                />
                <input
                  type="text"
                  placeholder="Add a caption (optional)"
                  className="mt-2 p-2 rounded border w-full"
                  value={file.caption}
                  onChange={(e) => updateCaption(index, e.target.value)}
                />
              </div>
            ))}
          </div>

          {/* message input */}
        </div>
      </div>
      <div className=" w-full sticky z-10 p-2 -bottom-4">
        <MessageInput />
      </div>
    </div>
  );
};

export default Meessages;
