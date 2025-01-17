"use client";

import { useState, useEffect } from "react";
import { ClientProvider } from "../context/ClientContext";
import Sidebar from "./components/Sidebar";

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Handle sidebar toggle
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Detect if the screen is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen flex">
      {/* Sidebar for large screens */}
      {!isMobile && (
        <aside
          className={`bg-black text-white transition-all duration-300 ${
            isOpen ? "w-64" : "w-20"
          } fixed h-full`}
        >
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </aside>
      )}

      {/* Content for large screens */}
      {!isMobile && (
        <div
          className={`flex-1 ml-${
            isOpen ? "64" : "20"
          } transition-all duration-300 h-full overflow-y-auto`}
        >
          <ClientProvider>{children}</ClientProvider>
        </div>
      )}

      {/* Mobile Sidebar */}
      {isMobile && (
        <div className="relative">
          {/* Sidebar with slide-in effect */}
          <div
            className={`fixed top-0 left-0 h-full bg-black text-white z-50 transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 w-64`}
          >
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
          </div>

          {/* Content */}
          <div className="flex-1 h-screen overflow-y-auto bg-white">
            <button
              onClick={toggleSidebar}
              className="fixed top-2 left-2 z-50 bg-blue-500 text-white px-3 py-2 rounded-md"
            >
              Menu
            </button>
            <ClientProvider>{children}</ClientProvider>
          </div>
        </div>
      )}
    </div>
  );
}
