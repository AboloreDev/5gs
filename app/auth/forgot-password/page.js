"use client";

import { useState } from "react";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import axiosInstance from "../../../../utils/axiosInstance";
import { API_PATHS } from "../../../../utils/store";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const trimmedEmail = email.trim();

      if (!trimmedEmail) {
        toast.error("Please enter your email.");
        return;
      }

      const response = await axiosInstance.post(
        API_PATHS.AUTH.FORGOT_PASSWORD,
        {
          email: trimmedEmail,
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setEmail("");
        router.push("/auth/email-otp-verification");
      } else {
        toast.error(response.data.message || "Something went wrong.");
      }
    } catch (error) {
      const message =
        error.response?.data?.message || "Failed to send password reset email.";
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-bgImage bg-no-repeat bg-cover sticky p-4">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <div className="bg-white w-full max-w-md md:max-w-lg p-6 md:p-8 rounded-lg shadow-lg">
        <h2 className="text-xl md:text-2xl font-bold tracking-widest text-center">
          Reset Password
        </h2>
        <p className="text-sm md:text-base text-gray-700 font-semibold text-center mt-2">
          Enter the email associated with your account, and we&apos;ll send you
          a link to reset your password.
        </p>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <input
            type="email"
            placeholder="johndoe@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 md:py-4 text-lg rounded-md bg-gray-200 focus:outline-none"
            required
          />
          <Link
            href="/auth/SignIn"
            className="font-medium text-sm md:text-base text-right text-blue-500 underline  block mt-4"
          >
            Return to login
          </Link>
          <button
            type="submit"
            disabled={isLoading}
            className={`bg-orange-600 text-white text-sm md:text-base font-semibold py-2 md:py-3 rounded-lg hover:scale-105 transition-transform w-full tracking-wide ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
