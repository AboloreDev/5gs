"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { FaRegEnvelope, FaRegEye } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";
import ForgotPassword from "@/app/components/ForgotPassword";
import EmailVerification from "@/app/components/EmailVerification";
import CreateNewPasswordModal from "@/app/components/NewPassword";
import Link from "next/link";
import { useRouter } from "next/navigation";

const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function Page() {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showEmailVerification, setShowEmailVerification] = useState(false);
  const [showCreatePassword, setShowCreatePassword] = useState(false);

  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      keepSignedIn: false,
    },
    validationSchema: signInSchema,
    onSubmit: (values) => {
      console.log("Sign-In Data:", values);
      // Handle sign-in logic here (e.g., API calls).
      if (values.keepSignedIn) {
        console.log("User will stay signed in.");
      } else {
        console.log("User will not stay signed in.");
      }

      router.push("/dashboard");
    },
  });

  const handleForgotPasswordContinue = () => {
    setShowForgotPassword(false);
    setShowEmailVerification(true);
  };

  function handleEmailVerificationContinue() {
    setShowEmailVerification(false);
    setShowCreatePassword(true);
  }

  return (
    <div className=" bg-bgImage bg-no-repeat bg-cover">
      <div className="flex justify-center items-center h-screen ">
        <form
          className="flex flex-col space-y-12 w-[300px] md:w-[500px]  px-4 py-2 h-auto  mx-auto bg-gradient-to-r from-[#FFFFFF80] 50%,  to-[#99999933] 20% rounded-lg shadow-lg bg-opacity-10 text-white font-thin backdrop-blur-sm text-xl"
          onSubmit={formik.handleSubmit}
        >
          <div className="text-xl text-center font-bold">Sign in</div>

          <div className="flex flex-col space-y-4 text-sm">
            {/* Email Field */}
            <div className="flex flex-col space-y-2">
              <p>Email</p>
              <div className="relative w-full flex justify-end items-center">
                <input
                  type="email"
                  className="p-2 rounded-lg bg-transparent border-2 border-white outline-none w-full"
                  {...formik.getFieldProps("email")}
                />
                <span className="absolute px-2 text-xl text-white">
                  <FaRegEnvelope />
                </span>
              </div>
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500">{formik.errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="flex flex-col space-y-2">
              <label>Password</label>
              <div className="relative w-full flex justify-end items-center">
                <input
                  type="password"
                  className="p-2 rounded-lg bg-transparent border-2 border-white outline-none w-full"
                  {...formik.getFieldProps("password")}
                />
                <span className="absolute px-2 text-xl text-white">
                  <FaRegEye />
                </span>
              </div>
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500">{formik.errors.password}</p>
              )}
            </div>

            {/* Keep me signed in */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="bg-transparent"
                  {...formik.getFieldProps("keepSignedIn")}
                />
                <label className="ml-2">Keep me signed in</label>
              </div>
              <button
                type="button"
                onClick={() => setShowForgotPassword(true)}
                className="text-blue-500 cursor-pointer"
              >
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <div className="relative flex items-center justify-center">
              <button className="bg-primary-secondaryColor text-lg text-white font-thin py-2 rounded-lg hover:scale-105 transition-transform w-full tracking-wide">
                Login
              </button>
              <span className="absolute px-2 ml-32 text-lg text-white">
                <CiLogin />
              </span>
            </div>

            {/* Continue with Google */}
            <div className="flex justify-center items-center space-x-2">
              <hr className="w-[90px]" />
              <p className="text-[10px]">or continue with</p>
              <hr className="w-[90px]" />
            </div>

            <button className="flex justify-center items-center text-center border-2 w-1/2 mx-auto p-2 rounded-lg bg-transparent text-white font-thin relative sm:w-full">
              <p>Google</p>
            </button>

            {/* Sign-up Link */}
            <div className="text-sm text-center ">
              <p>
                Don&apos;t have an account?{" "}
                <Link
                  href="/auth/SignUp"
                  className="text-blue-500 cursor-pointer"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-sm flex justify-center text-gray-200 items-center space-x-4">
            Copyright 2024, 5GS Inc.
          </div>
        </form>
      </div>

      {/* Modals */}
      {showForgotPassword && (
        <ForgotPassword onContinue={handleForgotPasswordContinue} />
      )}

      {showEmailVerification && (
        <EmailVerification
          onCloseEmailVerification={handleEmailVerificationContinue}
        />
      )}

      {showCreatePassword && (
        <CreateNewPasswordModal setShowCreatePassword={setShowCreatePassword} />
      )}
    </div>
  );
}
