"use client";

import { useState, useEffect } from "react";
import { ClientProvider } from "../context/ClientContext";
import Sidebar from "./components/Sidebar";

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Function to toggle sidebar open/close
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Handle resizing to determine if it's mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Layout for Desktop */}
      {!isMobile && (
        <div
          className={`min-h-screen lg:fixed w-full bg-black grid ${
            isOpen ? "grid-cols-[250px_auto]" : "grid-cols-[80px_auto]"
          } px-2 gap-3 overflow-hidden`}
        >
          <div className="border-r-2">
            <Sidebar
              isOpen={isOpen}
              toggleSidebar={toggleSidebar}
              isMobile={isMobile}
            />
          </div>
          <ClientProvider>{children}</ClientProvider>
        </div>
      )}

      {/* Mobile Sidebar */}
      {isMobile && (
        <div className="relative h-[100vh] overflow-y-auto bg-black">
          <div className="absolute">
            <Sidebar
              isOpen={isOpen}
              toggleSidebar={toggleSidebar}
              isMobile={isMobile}
            />
          </div>
          <main className="min-h-screen overflow-y-auto">
            <ClientProvider>{children}</ClientProvider>
          </main>
        </div>
      )}
    </>
  );
}
