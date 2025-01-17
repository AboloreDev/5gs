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
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="border-b-2 fixed top-0 bg-black w-full">
        <div className="p-4">
          <h1 className="text-xl text-white sm:text-[20px] font-bold">
            Messages
          </h1>
          <p className="text-gray-500 text-[12px] sm:text-[14px]">
            Chat directly with 5GS
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden bg-black pt-24 pb-16 px-4">
        {/* Messages */}
        <div className="w-full h-full overflow-y-auto">
          <div className="mt-10 space-y-4">
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
                <div
                  key={index}
                  className="flex flex-col items-center relative"
                >
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
      </div>

      {/* Message Input */}
      <div className="fixed bottom-0 left-0 right-0 bg-black text-black p-2 z-40">
        <div className="w-2/3 mx-auto">
          <MessageInput />
        </div>
      </div>
    </div>
  );
};

export default Meessages;
