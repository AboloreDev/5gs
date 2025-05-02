"use client";

import { ClientContext } from "@/app/context/ClientContext";
import React, { useContext } from "react";

const Feedback = () => {
  const {
    rating,
    setRating,
    feedback,
    setFeedback,
    submitFeedback,
    consent,
    setConsent,
  } = useContext(ClientContext);

  return (
    <div className="p-4 h-screen overflow-y-auto">
      {/* Title Section */}
      <div className="border-b-2 py-2 mt-10 sticky top-0">
        <h1 className="text-xl text-white font-bold">Feedback</h1>
        <p className="text-gray-500 text-[12px]">
          Provide feedback on our Service
        </p>
      </div>

      {/* Feedback Form Section */}
      <div className="flex flex-col items-start justify-center bg-black text-white p-6 rounded-lg mx-auto space-y-6 max-w-4xl w-full">
        {/* Feedback Title */}
        <div className="flex flex-col gap-1">
          <h4 className="font-bold text-xl">Give Feedback</h4>
          <p className="text-sm">How satisfied are you with our services?</p>
        </div>

        {/* Star Rating Section */}
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

        {/* Feedback Textarea Section */}
        <div className="gap-3 flex flex-col w-full">
          <p>Do you have any thoughts you’d like to share?</p>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Type your message here..."
            className="w-full sm:w-2/3 h-[150px] p-2 rounded border border-gray-600 bg-gray-800 text-white mb-4"
          />
        </div>

        {/* Consent Section */}
        <div className="mb-4">
          <h5>
            Do you consent we share your feedback with others on our website?
          </h5>
          <div className="flex gap-8">
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                name="consent"
                value="Yes"
                checked={consent === "Yes"}
                onChange={(e) => setConsent(e.target.value)}
                className="w-4 h-4"
              />
              <label>Yes</label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                name="consent"
                value="No"
                checked={consent === "No"}
                onChange={(e) => setConsent(e.target.value)}
                className="w-4 h-4"
              />
              <label>No</label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={submitFeedback}
          disabled={rating === 0 || feedback.trim() === "" || !consent}
          className={`w-full sm:w-2/3 py-2 rounded bg-primary-secondaryColor text-white font-bold ${
            rating === 0 || feedback.trim() === "" || !consent
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
