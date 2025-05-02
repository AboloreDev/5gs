"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/store";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Check if user is authenticated (on app load)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUserProfile(token);
    } else {
      router.push("/auth/SignIn");
      setLoading(false);
    }
  }, []);

  const fetchUserProfile = async (token) => {
    try {
      const response = await axiosInstance.get(API_PATHS.USER.GET_USER, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Error fetching profile:", error);
      setIsAuthenticated(false);
      router.push("/auth/SignIn");
    } finally {
      setLoading(false);
    }
  };

  // Login function
  const login = (token, userData) => {
    localStorage.setItem("token", token);
    axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
    setUser(userData);
    setIsAuthenticated(true);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsAuthenticated(false);
    router.push("/auth/SignIn");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        login,
        logout,
        token:
          typeof window !== "undefined" ? localStorage.getItem("token") : null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
