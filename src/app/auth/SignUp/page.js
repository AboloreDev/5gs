"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
} from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
      terms: Yup.boolean().oneOf(
        [true],
        "You must accept the terms and conditions"
      ),
    }),
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      router.push("/dashboard"); // Navigate to dashboard
    },
  });

  return (
    <div className=" bg-bgImage bg-no-repeat bg-cover bg-center">
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col mx-auto bg-gradient-to-r from-[#FFFFFF80] 50%, to-[#99999933] 20% justify-center items-start px-6 py-2 space-y-2 w-[350px] sm:w-[500px] h-[650px] sm:h-[800px] backdrop-blur-sm text-xl font-thin text-white rounded-xl">
          <h2 className="text-xl font-semibold text-center mb-4">Register</h2>

          <form
            onSubmit={formik.handleSubmit}
            className="w-full flex text-sm sm:text-lg lg:text-xl flex-col space-y-2"
          >
            {/* Name Field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <div className="relative mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className={`w-full p-2 pr-3 border rounded-md bg-transparent text-white ${
                    formik.touched.name && formik.errors.name
                      ? "border-red-500"
                      : "border-[#E2E8F0]"
                  }`}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-sm">{formik.errors.name}</p>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="email">Email</label>
              <div className="relative mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="johndoe@mail.com"
                  className={`w-full p-2 pr-3 border rounded-md bg-transparent text-white ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : "border-[#E2E8F0]"
                  }`}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FaEnvelope className="absolute right-3 top-1/2 transform -translate-y-5 text-white" />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm">{formik.errors.email}</p>
                )}
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="password">Password</label>
              <div className="relative mb-4">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Password"
                  className={`w-full p-2 pr-10 border rounded-md bg-transparent text-white ${
                    formik.touched.password && formik.errors.password
                      ? "border-red-500"
                      : "border-[#E2E8F0]"
                  }`}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div
                  className="absolute right-3 top-1/2 transform -translate-y-5 cursor-pointer text-white"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.password}
                  </p>
                )}
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="relative mb-4">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className={`w-full p-2 pr-10 border rounded-md bg-transparent text-white ${
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                      ? "border-red-500"
                      : "border-[#E2E8F0]"
                  }`}
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div
                  className="absolute right-3 top-1/2 transform -translate-y-5 cursor-pointer text-white"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword && (
                    <p className="text-red-500 text-sm">
                      {formik.errors.confirmPassword}
                    </p>
                  )}
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formik.values.terms}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mr-2"
              />
              <label htmlFor="terms" className="text-white text-sm">
                Agree to our{" "}
                <span className="text-blue-600 cursor-pointer">
                  terms and conditions
                </span>{" "}
                to proceed
              </label>
              {formik.touched.terms && formik.errors.terms && (
                <p className="text-red-500 text-sm">{formik.errors.terms}</p>
              )}
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="bg-orange-600 text-sm text-white font-thin py-2 rounded-lg hover:scale-105 transition-transform w-full tracking-wide"
            >
              Register
            </button>

            {/* Continue with Google */}
            <div className="flex text-sm sm:text-lg justify-center items-center space-x-4">
              <hr className="w-[90px]" />
              <p className="text-[12px]">or continue with</p>
              <hr className="w-[90px]" />
            </div>

            <div className="flex items-center justify-center mb-4">
              <button className="w-1/2 py-2 px-6 bg-transparent border text-sm rounded-md flex items-center justify-center hover:bg-red-700">
                <FaGoogle className="mr-2" /> Google
              </button>
            </div>

            {/* Already have an account */}
            <p className="text-center text-sm mb-8">
              Already have an account?{" "}
              <Link href="/auth/SignIn" className="text-blue-600">
                Sign In
              </Link>
            </p>

            {/* Footer */}
            <div className="text-gray-300 text-[12px] text-center">
              Copyright 2024, 5GS Inc.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
