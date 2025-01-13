"use client";

import Link from "next/link";
import Image from "next/image";
import { FaHome, FaCalendarAlt, FaBuilding } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FaBell, FaMessage, FaPen } from "react-icons/fa6";

export default function Sidebar() {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("");
  const pathname = usePathname();

  // Set active link based on the current path
  useEffect(() => {
    if (pathname) {
      setActiveLink(pathname);
    }
  }, [pathname]);

  // Handle logout
  function handleLogout() {
    const isConfirmed = window.confirm("Are you sure you want to log out?");
    if (isConfirmed) {
      router.push("/auth/SignIn");
    }
  }

  // Links array
  const links = [
    {
      href: "/dashboard/home",
      label: "Home",
      icon: <FaHome />,
    },
    {
      href: "/dashboard/appointment",
      label: "Appointment",
      icon: <FaCalendarAlt />,
    },
    {
      href: "/dashboard/rent",
      label: "Rent",
      icon: <FaBuilding />,
    },
    {
      href: "/dashboard/messages",
      label: "Messages",
      icon: <FaMessage />,
    },
    {
      href: "/dashboard/notifications",
      label: "Notifications",
      icon: <FaBell />,
    },
    {
      href: "/dashboard/feedback",
      label: "Feedback",
      icon: <FaPen />,
    },
  ];

  return (
    <nav className="text-white p-4 h-screen flex flex-col justify-between rounded-md shadow-md">
      <div className="flex flex-col space-y-8">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="mb-10"
        />

        {/* Links */}
        <ul className="space-y-6 mt-10">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`flex items-center space-x-3 py-3 px-3 rounded-full ${
                  activeLink === link.href
                    ? "bg-[#FF3D00] text-white"
                    : "hover:bg-gray-700"
                }`}
              >
                <span className="text-sm">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Logout Button */}
      <div
        onClick={handleLogout}
        className="flex cursor-pointer fixed bottom-0 mb-40 items-center gap-3 bg-primary-secondaryColor px-8 py-2 rounded-xl"
      >
        <button>Logout</button>
        <MdLogout />
      </div>
    </nav>
  );
}
