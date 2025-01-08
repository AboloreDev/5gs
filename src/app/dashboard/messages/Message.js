"use client";

import { ClientContext } from "@/app/context/ClientContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";

const Message = ({ message }) => {
  // context menu
  const { deleteMessage, copyMessage } = useContext(ClientContext);

  // show menu state menu
  const [menuVisible, setMenuVisible] = useState(false);
  // destructuring message
  const { id, text, sender, date, file, fileName } = message;
  //   use ref
  const menuRef = useRef(null);

  // A click on outside the screen after the three dots menu is visible to close the screen
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`flex flex-col mb-6 p-4 rounded-lg shadow-md w-1/2 h-auto ${
        sender === "client"
          ? "translate-x-[100%] bg-gray-200 text-sm "
          : "self-start bg-gray-300 text-sm"
      }`}
    >
      {text && <p className="text-black px-4 py-2 rounded-lg">{text}</p>}
      {file && (
        <div className="p-2 rounded-lg">
          <Image
            src={file}
            alt={fileName}
            width={500}
            height={400}
            className="rounded-md"
          />
        </div>
      )}
      <div className="flex justify-between items-center mt-2">
        <BsThreeDotsVertical
          className="text-gray-700  cursor-pointer"
          onClick={() => setMenuVisible(!menuVisible)}
        />
        {menuVisible && (
          <div className="absolute inline-block -translate-x-28 translate-y-6  bg-gray-800 text-white rounded-lg shadow-lg py-2">
            <button
              className="block px-4 py-2 hover:bg-gray-700"
              onClick={() => {
                copyMessage(text);
                setMenuVisible(false);
              }}
            >
              Copy
            </button>
            <button
              className="block px-4 py-2 hover:bg-gray-700"
              onClick={() => {
                deleteMessage(id);
                setMenuVisible(false);
              }}
            >
              Delete
            </button>
          </div>
        )}
        <p className="text-sm text-gray-500 text-right flex-grow ">{date}</p>
      </div>
    </div>
  );
};

export default Message;
