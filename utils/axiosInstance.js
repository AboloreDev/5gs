import axios from "axios";
import { BASE_URL } from "./store";
import { redirect } from "next/navigation";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request Interceptor (Attach Token)
axiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor (Handle Errors)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (typeof window !== "undefined") {
      if (error.response) {
        const { status } = error.response;

        // Handle Unauthorized (401)
        if (status === 401) {
          console.warn("Unauthorized request detected.");
          localStorage.removeItem("token");
          redirect("/login"); // Next.js redirect
        }

        // Handle Forbidden (403)
        if (status === 403) {
          console.warn("Forbidden request. You don't have permission.");
          redirect("/403"); // You can create a custom 403 page
        }
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
