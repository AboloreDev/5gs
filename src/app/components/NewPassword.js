"use client";

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";

const CreateNewPasswordModal = ({ setShowCreatePassword }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Toggle confirm password visibility

  const router = useRouter();

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    // Add your password update logic here (e.g., API call)
    console.log("New Password Set:", password);
    setErrorMessage("");
    setTimeout(() => {
      router.push("/auth/SignIn"); // Make sure the case matches the route
    }, 500); // Navigate back to sign-in
  };

  function handleCloseCreatePasswordModal() {
    handleSubmit();
    setShowCreatePassword(false);
  }

  return (
    <div>
      {/* Modal */}
      <div className="fixed inset-0 bg-black bg-opacity-50  backdrop-blur-md flex items-center justify-center z-50">
        <div className="bg-white w-full sm:w-[500px] md:w-[550px] lg:w-[600px] max-w-[90%] py-6 px-8 rounded-3xl shadow-lg">
          <div className="flex flex-col space-y-8">
            <h2 className="text-2xl font-bold text-center">
              Create New Password
            </h2>
            <p className="text-sm text-[#718096] text-center">
              Please enter a new password. Your new password must be different
              from your previous password.
            </p>

            {/* Input for New Password */}
            <div className="flex flex-col space-y-4">
              <label className="text-[#5D6A83]">Password</label>
              <div className="relative mb-4">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="New Password"
                  className="w-full p-2 border border-[#E2E8F0] rounded-md outline-none bg-slate-200 focus:ring-2 focus:ring-[#FF4820] transition-all"
                />
                <div
                  className="absolute right-3 top-2 cursor-pointer text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            {/* Input for Confirm Password */}
            <div className="flex flex-col space-y-4">
              <label className="text-[#5D6A83]">Confirm Password</label>

              <div className="relative mb-4">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  className="w-full p-2 border border-[#E2E8F0] rounded-md outline-none bg-slate-200 focus:ring-2 focus:ring-[#FF4820] transition-all"
                />
                <div
                  className="absolute right-3 top-2 cursor-pointer text-gray-500"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <p className="text-red-500 text-sm text-center mb-4">
                {errorMessage}
              </p>
            )}

            <button
              onClick={handleCloseCreatePasswordModal}
              className={`w-full text-lg bg-[#FF4820] text-white py-2 rounded-md hover:bg-orange-600 transition-all 
                ${
                  !password || !confirmPassword || password !== confirmPassword
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              disabled={
                !password || !confirmPassword || password !== confirmPassword
              }
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPasswordModal;
