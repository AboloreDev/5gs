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
      <div className="bg-white max-w-[400px] h-auto py-2 px-4 rounded-md shadow-lg flex flex-col justify-center items-start space-y-4">
        <h2 className="text-xl font-bold mb-2 tracking-widest text-center">
          Reset Password
        </h2>
        <p className="text-sm text-[#1E1E1E] font-semibold">
          Enter the email address associated with your account and we&apos;ll
          send you a link to reset your password.
        </p>
        <input
          type="email"
          placeholder="johndoe@example.com"
          className="w-full px-4 py-4 text-lg rounded-md bg-[#99999933] focus:outline-none"
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
          className="bg-orange-600 text-sm text-white font-semibold py-2 rounded-lg hover:scale-105 transition-transform w-full tracking-wide"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
