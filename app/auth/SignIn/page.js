"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { FaRegEnvelope, FaRegEye } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import { API_PATHS } from "../../../../utils/store";
import axiosInstance from "../../../../utils/axiosInstance";
import { useAuth } from "@/app/context/AuthContext";

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
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      keepSignedIn: false,
    },
    validationSchema: signInSchema,

    onSubmit: async (values) => {
      setIsLoading(true);
      axiosInstance.defaults.withCredentials = true;

      try {
        const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
          email: values.email,
          password: values.password,
        });

        if (response.data.success) {
          const { token, user } = response.data.data;

          login(token, user);

          toast.success("Login successful!");

          // Redirect based on role
          if (user.role === "admin") {
            router.push("/admin");
          } else {
            router.push("/dashboard");
          }
        } else {
          toast.error(response?.data?.message || "Login failed.");
        }
      } catch (error) {
        console.error("❌ Login error:", error);
        toast.error(error?.response?.data?.message || "Something went wrong.");
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div className="bg-bgImage bg-no-repeat bg-cover sticky">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <div className="flex justify-center items-center h-screen ">
        <form
          className="flex flex-col space-y-12 w-[300px] md:w-[500px]  px-4 py-2 h-auto  mx-auto bg-gradient-to-r from-[#2f272780] 50%,  to-[#99999933] 20% rounded-lg shadow-lg bg-opacity-10 text-white backdrop-blur-sm text-xl"
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
                  className="p-2 rounded-lg bg-transparent border-2 border-white outline-none w-full font-bold"
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
                  className="p-2 rounded-lg bg-transparent border-2 border-white outline-none w-full font-bold"
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
              <Link
                href="/auth/forgot-password"
                type="button"
                className="text-blue-500 cursor-pointer"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <div className="relative flex items-center justify-center">
              <button
                className="bg-primary-secondaryColor text-lg text-white font-thin py-2 rounded-lg hover:scale-105 transition-transform w-full tracking-wide"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex justify-center items-center gap-4 font-bold">
                    <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
                    Logging in...
                  </div>
                ) : (
                  "Login"
                )}
              </button>
              {isLoading && (
                <span className="absolute px-2 ml-32 text-lg text-white">
                  <CiLogin />
                </span>
              )}
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
    </div>
  );
}
