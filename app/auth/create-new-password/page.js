"use client";

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import axiosInstance from "../../../../utils/axiosInstance";
import { API_PATHS } from "../../../../utils/store";
import { usePasswordReset } from "@/app/context/PasswordResetContext";

const CreateNewPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const { resetToken, clearToken } = usePasswordReset();

  useEffect(() => {
    if (!resetToken) {
      toast.error("Session expired. Please request a new reset link.");
      router.push("/auth/forgot-password");
    }
  }, [resetToken]);

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await axiosInstance.post(
        API_PATHS.AUTH.CREATE_NEW_PASSWORD,
        {
          token: resetToken,
          password,
        }
      );

      if (response.data.success) {
        toast.success("Password updated successfully!");
        clearToken();

        setTimeout(() => {
          router.push("/auth/SignIn");
        }, 800);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-bgImage bg-no-repeat bg-cover sticky p-4">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <div className="bg-white w-full max-w-md md:max-w-lg rounded-2xl shadow-lg p-6 sm:p-8">
        <div className="flex flex-col space-y-6">
          <h2 className="text-2xl font-bold text-center">
            Create New Password
          </h2>
          <p className="text-sm text-gray-600 text-center">
            Please enter a new password. Your new password must be different
            from your previous password.
          </p>

          {/* Password */}
          <div className="flex flex-col space-y-2 text-sm">
            <label className="text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="New Password"
                className="w-full p-3 border border-gray-300 rounded-md bg-slate-100 focus:ring-2 focus:ring-[#FF4820] outline-none"
              />
              <div
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col space-y-2 text-sm">
            <label className="text-gray-700">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className="w-full p-3 border border-gray-300 rounded-md bg-slate-100 focus:ring-2 focus:ring-[#FF4820] outline-none"
              />
              <div
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className={`w-full text-sm bg-[#FF4820] text-white py-3 rounded-md hover:bg-orange-600 transition-all 
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
  );
};

export default CreateNewPasswordPage;
