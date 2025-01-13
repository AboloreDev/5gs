"use client";

import { ClientContext } from "@/app/context/ClientContext";
import React, { useContext } from "react";

const Feedback = () => {
  const { rating, setRating, feedback, setFeedback, submitFeedback } =
    useContext(ClientContext);
  return (
    <div>
      {" "}
      <div className="border-b-2 py-2 ">
        <h1 className="text-sm font-bold"> Feedback</h1>
        <p className="text-gray-500 text-[12px]">
          Provide feedback on our Service
        </p>
      </div>
      <div className="flex flex-col items-start mt-20 justify-center bg-black text-white p-6 rounded-lg max-w-[1000px] w-2/3 mx-auto  space-y-6">
        <div className="flex flex-col gap-1">
          <h4 className="font-bold text-xl">Give Feedback</h4>
          <p className="text-sm">How satisfied are you with our services</p>
        </div>
        <div className="flex space-x-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className={`text-4xl ${
                star <= rating ? "text-yellow-400" : "text-gray-600"
              }`}
            >
              ★
            </button>
          ))}
        </div>
        <div className="gap-3 flex flex-col w-full">
          <p>Do you have any thoughts you ‘d like to share?</p>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Type your message here..."
            className="w-2/3  h-[150px] p-2 rounded border border-gray-600 bg-gray-800 text-white mb-4"
          />
        </div>

        <div className="mb-4">
          <h5>
            Do you consent we share your feedback with others on our website?
          </h5>
          <div className="flex gap-8">
            <div className="flex gap-2 items-center">
              <input type="radio" name="Yes" className="w-4 h-4" />
              <label>Yes</label>
            </div>
            <div className="flex gap-2 items-center">
              <input type="radio" name="No" className="w-4 h-4" />
              <label>No</label>
            </div>
          </div>
        </div>

        <button
          onClick={submitFeedback}
          disabled={rating === 0 || feedback.trim() === ""}
          className={`w-2/3 py-2 rounded bg-primary-secondaryColor text-white font-bold ${
            rating === 0 || feedback.trim() === ""
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-primary-secondaryColor"
          }`}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Feedback;
