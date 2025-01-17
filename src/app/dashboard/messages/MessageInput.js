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
      className="p-2 flex rounded-lg bg-white items-center space-x-4 shadow-md"
    >
      <label className="text-gray-500 cursor-pointer">
        <FaPaperclip size={20} />
        <input type="file" multiple className="hidden" onChange={uploadFile} />
      </label>

      {/* Input Field */}
      <input
        type="text"
        className="flex-1 rounded-lg text-[16px] sm:text-[20px] font-thin text-black outline-none border p-2"
        placeholder={
          previewFiles.length > 0
            ? "Add a caption (optional)"
            : "Type your message..."
        }
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />

      {/* Send Button */}
      <button className="text-gray-500 hover:text-orange-600" type="submit">
        <AiOutlineSend size={20} />
      </button>
    </form>
  );
};

export default MessageInput;
