"use client";

import { useState, useEffect } from "react";
import { ClientProvider } from "../context/ClientContext";
import Sidebar from "./components/Sidebar";

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {!isMobile && (
        <div
          className={`min-h-screen grid ${
            isOpen ? "grid-cols-[250px_auto]" : "grid-cols-[80px_auto]"
          }`}
        >
          <div className="border-r-2">
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
          </div>
          <div className="overflow-y-auto">
            <ClientProvider>{children}</ClientProvider>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="bg-black relative">
          <div className="z-40 absolute top-0">
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
          </div>
          <main className=" overflow-y-auto">
            <ClientProvider>{children}</ClientProvider>
          </main>
        </div>
      )}
    </div>
  );
}
