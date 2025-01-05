import React, { useState } from "react";
import Modal from "./Modal";
import Link from "next/link";
import EmailVerification from "./EmailVerification";

const ForgotPassword = ({ onContinue }) => {
  const handleBackdropClick = (event) => {
    // Check if the click is outside the modal content
    if (event.target.id === "modal-backdrop") {
      onClose();
    }
  };

  return (
    <div
      id="modal-backdrop"
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white w-[90%] max-w-[650px] h-auto  sm:w-[80%] md:h-auto py-6 px-8 rounded-md shadow-lg flex flex-col justify-center items-start space-y-8">
        <h2 className="text-2xl font-bold mb-2 tracking-widest text-center sm:text-xl">
          Reset Password
        </h2>
        <p className="text-lg text-[#1E1E1E] font-semibold  sm:text-base">
          Enter the email address associated with your account and we&apos;ll
          send you a link to reset your password.
        </p>
        <input
          type="email"
          placeholder="johndoe@example.com"
          className="w-full px-6 py-4 text-xl rounded-md bg-[#99999933] focus:outline-none"
          required
        />
        <Link
          href={`/auth/SignIn`}
          className="font-medium text-sm text-blue-500 underline text-center block"
        >
          Return to login
        </Link>
        <button
          onClick={onContinue}
          className="bg-orange-600 text-xl text-white font-semibold py-4 rounded-lg hover:scale-105 transition-transform w-full tracking-wide"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
