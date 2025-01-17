"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaBell,
  FaBuilding,
  FaCalendarAlt,
  FaEnvelope,
  FaHome,
  FaPen,
} from "react-icons/fa";
import { usePathname } from "next/navigation";
import { MdLogout } from "react-icons/md";

const menuItems = [
  { href: "/dashboard/home", label: "Home", icon: <FaHome /> },
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

const logout = {
  href: "/auth/SignIn",
  label: "Logout",
  icon: <MdLogout />,
};

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("");
  const pathname = usePathname();
  // Set active link based on the current path
  useEffect(() => {
    if (pathname) {
      setActiveLink(pathname);
    }
  }, [pathname]);

  // // Handle logout
  // function handleLogout() {
  //   const isConfirmed = window.confirm("Are you sure you want to log out?");
  //   if (isConfirmed) {
  //     router.push("/auth/SignIn");
  //   }
  // }

  return (
    <ul className="mt-5 text-white flex flex-col md:gap-6 gap-8 lg:text-lg text-sm justify-center items-center lg:items-start lg:px-6">
      {menuItems.map((item) => (
        <li className="flex  gap-2" key={item.href}>
          <Link
            href={item.href}
            className={` lg:w-[150px] rounded-full flex items-center gap-3 ${
              activeLink === item.href
                ? "bg-[#FF3D00] text-white px-2 py-2 rounded-xl"
                : "hover:bg-gray-700 px-4 py-2 rounded-xl"
            }`}
          >
            <p>{item.icon}</p>
            <span className="hidden lg:block">{item.label}</span>
          </Link>
        </li>
      ))}
      <li className="mt-20 ">
        <Link
          href={logout.href}
          className="flex bg-[#FF3D00] items-center justify-center lg:justify-start px-2 lg:px-6 rounded-xl py-2 lg:w-[150px] gap-3"
        >
          <p>{logout.icon}</p>
          <span className="hidden lg:block">{logout.label}</span>
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
