"use client";

import { ClientContext } from "@/app/context/ClientContext";
import React, { useContext } from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";
import Image from "next/image";

const Meessages = () => {
  const { messages, previewFiles, updateCaption, removeFile } =
    useContext(ClientContext);

  return (
    <div className="px-4 sm:px-6 md:px-8 py-2 h-screen flex flex-col">
      {/* Header */}
      <div className="border-b-2 py-2 mt-10">
        <h1 className="text-xl text-white sm:text-[20px] font-bold">
          Messages
        </h1>
        <p className="text-gray-500 text-[12px] sm:text-[14px]">
          Chat directly with 5GS
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto pb-16">
        <div className="mt-10 flex-1 overflow-y-auto p-2 space-y-4">
          {messages.length === 0 ? (
            <div className="flex justify-center items-center text-center text-gray-500">
              <p>Start a conversation with 5GS admin</p>
            </div>
          ) : (
            messages.map((message, index) => (
              <Message message={message} key={index} />
            ))
          )}

          {/* Preview Section */}
          <div className="p-4 flex flex-col text-black items-start space-y-2">
            {previewFiles.map((file, index) => (
              <div key={index} className="flex flex-col items-center relative">
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
                  className="mt-2 p-2 rounded border w-full sm:w-[90%] md:w-[80%] lg:w-[70%]"
                  value={file.caption}
                  onChange={(e) => updateCaption(index, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Centered Message Input */}
      <div className="flex justify-center mt-4">
        <div className="w-full sm:w-2/3 lg:w-1/2">
          <MessageInput />
        </div>
      </div>
    </div>
  );
};

export default Meessages;
