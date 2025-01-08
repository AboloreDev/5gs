"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  FaHome,
  FaCalendarAlt,
  FaBuilding,
  FaEnvelope,
  FaBell,
  FaPen,
} from "react-icons/fa";

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState("/dashboard"); // Default active link is "Home"

  // Function to handle link click
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const links = [
    { href: "/dashboard", label: "Home", icon: <FaHome /> },
    {
      href: "/dashboard/appointment",
      label: "Appointment",
      icon: <FaCalendarAlt />,
    },
    { href: "/dashboard/rent", label: "Rent", icon: <FaBuilding /> },
    { href: "/dashboard/messages", label: "Messages", icon: <FaEnvelope /> },
    {
      href: "/dashboard/notifications",
      label: "Notifications",
      icon: <FaBell />,
    },
    { href: "/dashboard/feedback", label: "Feedback", icon: <FaPen /> },
  ];

  return (
    <nav className="text-white p-4 lg:flex flex-col space-y-12 justify-center items-center rounded-md shadow-md hidden">
      <Image
        src="/logo.png"
        alt="Logo"
        width={200}
        height={200}
        className="mb-10"
      />
      <ul className="space-y-6 justify-center items-center">
        {links.map((link) => (
          <li
            key={link.href}
            className="tracking-widest text-xl flex justify-center items-center"
          >
            <Link
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`flex items-center space-x-3 justify-start  py-3 px-3 rounded-full w-full ${
                activeLink === link.href
                  ? "bg-[#FF3D00] text-white"
                  : "hover:bg-gray-700"
              }`}
            >
              <span className="text-lg">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
