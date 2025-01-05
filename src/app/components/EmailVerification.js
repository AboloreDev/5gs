import React, { useState } from "react";

export default function EmailVerification({
  onVerify,
  onCloseEmailVerification,
}) {
  const [digits, setDigits] = useState(["", "", "", "", ""]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isResent, setIsResent] = useState(false);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const updatedDigits = [...digits];
      updatedDigits[index] = value;
      setDigits(updatedDigits);
      setError("");

      // Auto-focus next input if filled
      if (value && index < digits.length - 1) {
        document.getElementById(`digit-${index + 1}`).focus();
      }
    }
  };

  const handleVerify = () => {
    const code = digits.join("");
    if (code.length !== 5) {
      setError("Please enter a valid 5-digit code.");
    } else {
      if (code === "12345") {
        setSuccess("Code verified successfully!");
        onVerify && onVerify();
        onCloseEmailVerification();
      } else {
        setError("Invalid verification code. Please try again.");
        setDigits(["", "", "", "", ""]);
      }
    }
  };

  const handleResendCode = () => {
    setDigits(["", "", "", "", ""]);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      document.getElementById(`digit-${index - 1}`).focus();
    }
  };

  const handleBackdropClick = (event) => {
    if (event.target.id === "modal-backdrop") {
      onCloseEmailVerification();
    }
  };

  return (
    <div
      id="modal-backdrop"
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white w-full sm:w-[500px] md:w-[600px] max-w-[90%] py-6 px-6 rounded-md shadow-lg flex flex-col justify-center items-start space-y-8">
        <h2 className="text-2xl sm:text-xl md:text-3xl tracking-widest font-bold text-center">
          Email Verification
        </h2>
        <p className="mb-4 text-lg sm:text-base text-[#5D6A83] font-light text-center">
          Please enter the 5-digit verification code that was sent to the email
          you provided.
        </p>
        <div className="flex gap-2 w-full justify-between items-center space-x-2 mb-4">
          {digits.map((digit, index) => (
            <input
              key={index}
              id={`digit-${index}`}
              type="text"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-[50px] sm:w-[70px] h-[50px] sm:h-[70px] text-xl sm:text-2xl text-center border rounded-md focus:ring-[#FF4820] focus:ring-2 text-[#FF3D00] "
              maxLength="1"
              required
            />
          ))}
        </div>
        {error && (
          <p className="text-red-500 text-sm text-center mb-2">{error}</p>
        )}
        {success && (
          <p className="text-green-500 text-sm text-center mb-2">{success}</p>
        )}
        <button
          onClick={handleVerify}
          className="w-full text-xl bg-[#FF4820] text-white py-4 rounded-md hover:bg-orange-600"
        >
          Continue
        </button>
        <div className="flex justify-center items-center text-sm text-center">
          <button
            onClick={handleResendCode}
            className="text-blue-500 hover:underline mt-4"
          >
            Resend code
          </button>
        </div>
      </div>
    </div>
  );
}
