import React, { useState } from "react";
import Link from "next/link";

const ForgotPassword = ({ onContinue }) => {
  return (
    <div
      id="modal-backdrop"
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl p-6 md:p-8 rounded-lg shadow-lg flex flex-col space-y-4">
        <h2 className="text-xl md:text-2xl font-bold tracking-widest text-center">
          Reset Password
        </h2>
        <p className="text-sm md:text-base text-[#1E1E1E] font-semibold text-center">
          Enter the email associated with your account and we&apos;ll send you a
          link to reset your password.
        </p>
        <input
          type="email"
          placeholder="johndoe@example.com"
          className="w-full px-4 py-3 md:py-4 text-lg rounded-md bg-gray-200 focus:outline-none"
          required
        />
        <Link
          href="/auth/SignIn"
          className="font-medium text-sm md:text-base text-blue-500 underline text-center block"
        >
          Return to login
        </Link>
        <button
          onClick={onContinue}
          className="bg-orange-600 text-white text-sm md:text-base font-semibold py-2 md:py-3 rounded-lg hover:scale-105 transition-transform w-full tracking-wide"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
