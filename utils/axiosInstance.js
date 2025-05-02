import axios from "axios";
import { BASE_URL } from "./store";

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

import { toast } from "react-toastify";

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (typeof window !== "undefined" && error.response) {
      const { status } = error.response;

      if (status === 401) {
        toast.info("Session expired, please log in again.", {
          position: "top-center",
          autoClose: 3000,
        });
        localStorage.removeItem("token");
        setTimeout(() => {
          window.location.href = "/auth/SignIn";
        }, 2000);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
