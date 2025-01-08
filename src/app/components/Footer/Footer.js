import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#002853] 100% ,to-[#040C18] 0% text-white py-10">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        {/* Newsletter Subscription Section */}

        {/* Logo Section */}
        <div className="mt-10 absolute -translate-y- -translate-x-96">
          <Image
            src="/footer.png"
            alt="5GS Media Logo"
            className=""
            width={400}
            height={200}
          />
        </div>
        <div className="flex flex-col space-y-32 gap-4">
          <div className="bg-[#112D57] rounded-lg px-3 py-10 w-full shadow-lg relative">
            <h2 className="text-3xl tracking-wider font-bold text-primary-secondaryColor mb-4">
              Subscribe To Our Newsletter
            </h2>
            <p className="text-gray-300 mb-4">
              and never miss our latest update
            </p>
            <form className="flex flex-col md:flex-row justify-center items-center gap-3">
              <input
                type="email"
                placeholder="johndoe@example.com"
                className="w-2/3  px-4 py-4 text-black rounded focus:ring-2 focus:ring-orange-500 outline-none"
                required
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-4 rounded-lg transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col space-y-8">
            <p className="text-xl">
              Follow us on all our social media platform
            </p>
            <div className="flex justify-center text-2xl space-x-8 mt-6">
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
              <FaInstagram />
            </div>
          </div>

          {/* Copyright Section */}
          <p className="mt-6 text-gray-400 text-sm">
            Copyright © 2024. 5GS Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
