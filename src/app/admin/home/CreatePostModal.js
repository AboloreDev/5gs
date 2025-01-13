"use client";

import { useState, useContext } from "react";

import Image from "next/image";
import { AdminContext } from "@/app/context/AdminContext";

export default function CreatePostModal({ onClose }) {
  const { addPost } = useContext(AdminContext);
  const [title, setTitle] = useState("5GS Admin (You)");
  const [content, setContent] = useState("");
  const [type, setType] = useState("picture");
  const [category, setCategory] = useState("makeup");
  const [file, setFile] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState("");

  // Handle file input change
  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    validateFile(uploadedFile);
  };

  // Handle drag-and-drop
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const uploadedFile = e.dataTransfer.files[0];
    validateFile(uploadedFile);
  };

  // Validate file type
  const validateFile = (uploadedFile) => {
    if (!uploadedFile) return;

    // Allowed file types
    const imageTypes = ["image/png", "image/jpeg", "image/jpg"];
    const videoTypes = ["video/mp4", "video/webm", "video/ogg"];

    if (type === "picture" && imageTypes.includes(uploadedFile.type)) {
      setFile(uploadedFile);
      setError("");
    } else if (type === "video" && videoTypes.includes(uploadedFile.type)) {
      setFile(uploadedFile);
      setError("");
    } else {
      setFile(null);
      setError(
        `Please upload a valid ${type === "picture" ? "image" : "video"} file.`
      );
    }
  };

  // Submit form
  const handleSubmit = () => {
    if (!title || !content || !file) {
      alert("Please fill in all fields and upload a file.");
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      content,
      type,
      category,
      fileUrl: URL.createObjectURL(file),
      date: new Date().toLocaleDateString(),
      likes: 0,
    };

    addPost(newPost);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white text-black p-5 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Create New Post</h2>
        <input
          type="text"
          placeholder="Title"
          className="border p-2 mb-2 w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled
        />
        <textarea
          placeholder="Content"
          className="border p-2 mb-2 w-full"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <select
          className="border p-2 mb-2 w-full"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="picture">Picture</option>
          <option value="video">Video</option>
        </select>
        <select
          className="border p-2 mb-2 w-full"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="makeup">Makeup</option>
          <option value="photography">Photography</option>
          <option value="videography">Videography</option>
          <option value="graphics">Graphics</option>
        </select>

        {/* Drag-and-Drop Area */}
        <div
          className={`border-dashed border-2 p-4 mb-2 w-full text-center ${
            dragOver ? "bg-gray-200" : "bg-white"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
        >
          {file ? (
            type === "picture" ? (
              <Image
                src={URL.createObjectURL(file)}
                alt="Preview"
                className="w-full h-80  object-contain "
                width={150}
                height={100}
              />
            ) : (
              <video controls className="w-full h-40">
                <source src={URL.createObjectURL(file)} type={file.type} />
                Your browser does not support the video tag.
              </video>
            )
          ) : (
            <p>Drag and drop a file here, or click to upload</p>
          )}
        </div>

        {/* File Upload Button */}
        <input
          type="file"
          className="border p-2 mb-2 w-full"
          accept={type === "picture" ? "image/*" : "video/*"}
          onChange={handleFileChange}
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          onClick={handleSubmit}
          className="bg-primary-secondaryColor text-white p-2 rounded w-full"
        >
          Create Post
        </button>
        <button
          onClick={onClose}
          className="bg-gray-300 text-black p-2 rounded w-full mt-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
