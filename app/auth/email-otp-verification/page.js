"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import axiosInstance from "../../../../utils/axiosInstance";
import { API_PATHS } from "../../../../utils/store";
import { usePasswordReset } from "@/app/context/PasswordResetContext";

function EmailVerification() {
  const [digits, setDigits] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const router = useRouter();
  const { setResetToken } = usePasswordReset();

  // Handle input change
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const updatedDigits = [...digits];
      updatedDigits[index] = value;
      setDigits(updatedDigits);
      if (value && index < digits.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };
  // Handle Backspace key
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();
    if (/^\d{5}$/.test(pastedData)) {
      setDigits(pastedData.split(""));
      setError("");
      inputRefs.current[5]?.focus();
    }
  };

  // Handle verification
  const handleVerify = async () => {
    const otp = digits.join("");
    if (otp.length < 6) {
      toast.error("Please enter a valid OTP");
      return;
    }

    try {
      const response = await axiosInstance.post(
        API_PATHS.AUTH.EMAIL_OTP_TOKEN,
        {
          token: otp,
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setResetToken(otp);
        setDigits(["", "", "", "", "", ""]);
        router.push("/auth/create-new-password");
      } else {
        toast.error(response.data.message || "Verification failed.");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to verify token.");
    }
  };

  // Resend OTP
  const handleResendCode = () => {
    setDigits(["", "", "", "", "", ""]);
    toast.success("Verification code resent to your email");
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-bgImage bg-no-repeat bg-cover sticky p-4">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <div className="bg-white w-full sm:w-[400px] py-6 px-6 rounded-lg shadow-lg flex flex-col justify-center items-center space-y-6">
        <h2 className="text-lg tracking-widest font-bold text-center">
          Email Verification
        </h2>
        <p className="text-sm text-gray-600 text-center">
          Please enter the 5-digit verification code sent to your email.
        </p>

        <div className="flex gap-2 w-full justify-center">
          {digits.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              className="w-12 h-12 text-lg text-center border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 text-gray-900"
              maxLength="1"
              required
            />
          ))}
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          className="w-full text-sm bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition"
        >
          Verify
        </button>

        {/* Resend Code */}
        <p className="text-sm text-gray-600 text-center">
          Didn&apos;t receive the code?{" "}
          <button
            onClick={handleResendCode}
            className="text-blue-500 underline"
          >
            Resend
          </button>
        </p>
      </div>
    </div>
  );
}

export default EmailVerification;
