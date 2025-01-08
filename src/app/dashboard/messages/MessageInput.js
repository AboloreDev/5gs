import { ClientContext } from "@/app/context/ClientContext";
import React, { useContext } from "react";
import { FaPaperclip } from "react-icons/fa6";
import { AiOutlineSend } from "react-icons/ai";

const MessageInput = () => {
  const { uploadFile, sendMessage, newMessage, setNewMessage, previewFiles } =
    useContext(ClientContext);
  return (
    <form
      onSubmit={sendMessage}
      className="p-2 flex bg-white rounded-full items-center space-x-4 sticky bottom-0"
    >
      <label className="text-black mr-4 cursor-pointer">
        <FaPaperclip size={24} />
        <input type="file" multiple className="hidden" onChange={uploadFile} />
      </label>
      {/* input field */}
      <input
        type="text"
        className="flex-1 p-2 rounded-lg text-[20px] text-black outline-none"
        placeholder={
          previewFiles.length > 0
            ? "Add a caption (optional)"
            : "Type your message..."
        }
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button className="ml-4 text-black hover:text-orange-600" type="submit">
        <AiOutlineSend size={24} />
      </button>
    </form>
  );
};

export default MessageInput;
