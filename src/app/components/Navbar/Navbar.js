"use client";

import { useState } from "react";
import Logo from "./Logo";
import Modes from "./Modes";
import NavLinks from "./NavLinks";
import UsersLinks from "./UsersLinks";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="max-w-[1200px] mx-auto p-4">
      {/* components */}
      <div className="lg:flex justify-between items-center hidden">
        <Logo />
        <NavLinks />
        <Modes />
        <UsersLinks />
      </div>

      {/* mobile menu */}
      <div className="relative lg:hidden flex justify-between items-center text-white text-2xl">
        <Logo />
        <Modes />
        <button onClick={() => setMobileMenuOpen(true)}>
          <FiMenu />
        </button>
      </div>
      <div
        className={`absolute overflow-hidden bg-gray-500 transition-all duration-700 right-0 top-0 z-40 ${
          isMobileMenuOpen ? "w-1/2 min-h-screen opacity-90" : "w-0"
        }`}
      >
        <div className="flex flex-col space-y-8">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-4xl px-4 py-4 font-bold flex justify-end"
          >
            <FiX />
          </button>

          <div className="flex flex-col space-y-4 text-lg items-center text-black border-b-2">
            <div>Home</div>
            <div>About Us</div>
            <div>Services</div>
            <div>Works</div>
            <div>Get in touch</div>
          </div>

          <div className="flex flex-col space-y-4 text-sm items-center text-black">
            <Link href="/auth/SignIn" onClick={() => setMobileMenuOpen(false)}>
              <button>Sign In</button>
            </Link>
            <Link href="/auth/SignUp" onClick={() => setMobileMenuOpen(false)}>
              <button className="bg-primary-secondaryColor px-6 py-2 rounded-lg hover:bg-primary-secondaryColor">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
