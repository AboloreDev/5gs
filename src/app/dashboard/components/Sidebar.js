"use client";

import Link from "next/link";
import Image from "next/image";
import { FaHome, FaCalendarAlt, FaBuilding } from "react-icons/fa";
import { MdLogout, MdKeyboardArrowLeft, MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FaBell, FaMessage, FaPen } from "react-icons/fa6";

export default function Sidebar({ isOpen, toggleSidebar, isMobile }) {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("");
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Set active link based on the current path
  useEffect(() => {
    if (pathname) {
      setActiveLink(pathname);
    }
  }, [pathname]);

  // Disable scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  // Handle logout
  function handleLogout() {
    const isConfirmed = window.confirm("Are you sure you want to log out?");
    if (isConfirmed) {
      router.push("/auth/SignIn");
    }
  }

  // Links array for desktop
  const desktopLinks = [
    { href: "/dashboard/home", label: "Home", icon: <FaHome /> },
    {
      href: "/dashboard/appointment",
      label: "Appointment",
      icon: <FaCalendarAlt />,
    },
    { href: "/dashboard/rent", label: "Rent", icon: <FaBuilding /> },
    { href: "/dashboard/messages", label: "Messages", icon: <FaMessage /> },
    {
      href: "/dashboard/notifications",
      label: "Notifications",
      icon: <FaBell />,
    },
    { href: "/dashboard/feedback", label: "Feedback", icon: <FaPen /> },
  ];

  // Links array for mobile
  const mobileLinks = [...desktopLinks];

  // Close mobile menu when a link is clicked
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Hamburger menu for mobile screens (below 768px) */}
      {isMobile && !isMobileMenuOpen && (
        <div
          className="top-4 left-4 text-white p-2 rounded-md z-50 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <GiHamburgerMenu size={30} />
        </div>
      )}

      {/* Mobile Sidebar */}
      {isMobile && (
        <nav
          className={`fixed inset-0 bg-black opacity-90 w-1/2 text-white z-50 p-4 transform transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <MdClose size={24} />
          </div>

          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="mb-10"
          />

          <ul className="mt-20 space-y-6">
            {mobileLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-3 ${
                    activeLink === link.href
                      ? "bg-[#FF3D00] text-white px-2 py-2 rounded-xl"
                      : "hover:bg-gray-700 px-2 py-1 rounded-xl"
                  }`}
                  onClick={handleMobileLinkClick}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Logout */}
          <div
            onClick={handleLogout}
            className="flex items-center gap-4 mt-20 bg-primary-secondaryColor px-4 py-2 rounded-xl"
          >
            <MdLogout size={20} />
            <p>Logout</p>
          </div>
        </nav>
      )}

      {/* Desktop Sidebar for screens above 768px */}
      <nav
        className={`hidden md:flex flex-col gap-10 text-white h-screen p-4 shadow-md transition-all duration-300 ease-in-out ${
          isOpen ? "w-[240px]" : "w-[80px]"
        }`}
      >
        {/* Toggle button */}
        <div
          className={`absolute top-9 ${
            isOpen ? "left-60" : "left-16"
          } bg-[#FF3D00] text-2xl py-1 text-white rounded-md cursor-pointer`}
          onClick={toggleSidebar}
        >
          <MdKeyboardArrowLeft
            className={`transform transition-transform duration-300 ${
              isOpen ? "rotate-0" : "rotate-180"
            }`}
          />
        </div>

        {/* Logo */}
        {isOpen && (
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="mb-10"
          />
        )}

        {/* Links */}
        <ul className="flex flex-col space-y-6 mt-20">
          {desktopLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`flex items-center space-x-3 py-3 px-3 rounded-full transition-all duration-300 ${
                  activeLink === link.href
                    ? "bg-[#FF3D00] text-white"
                    : "hover:bg-gray-700"
                } ${isOpen ? "justify-start" : "justify-center"}`}
              >
                {link.icon}
                {isOpen && <span>{link.label}</span>}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logout Button */}
        {isOpen ? (
          <div
            onClick={handleLogout}
            className={`mt-20 flex items-center gap-3 bg-[#FF3D00] text-white px-6 py-2 rounded-xl cursor-pointer ${
              isOpen ? "justify-start" : "justify-center"
            }`}
          >
            <MdLogout size={20} />
            {isOpen && <span>Logout</span>}
          </div>
        ) : (
          <div
            onClick={handleLogout}
            className="text-white bg-primary-secondaryColor mt-20 px-4 py-2 rounded-xl"
          >
            {" "}
            <MdLogout size={20} />
          </div>
        )}
      </nav>
    </>
  );
}
