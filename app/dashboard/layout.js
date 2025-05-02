import Image from "next/image";
import { AuthProvider } from "../context/AuthContext";
import { ClientProvider } from "../context/ClientContext";
import Sidebar from "./components/Sidebar";
import { ToastContainer } from "react-toastify";

export default function DashboardLayout({ children }) {
  return (
    <AuthProvider>
      <ClientProvider>
        <div className="h-screen bg-black flex">
          {/* Left */}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
          />
          <div className="w-[10%] border-r-2 md:w-[8%] lg:w-[20%] xl:w-[14%] flex flex-col gap-14 sticky h-screen">
            {/* Logo */}
            <div className="w-60px md:w-100px p-2 flex justify-start md:justify-center">
              <Image src="/logo.png" alt="Logo" width={100} height={100} />
            </div>
            <Sidebar />
          </div>
          {/* right */}
          <div className="w-[90%] md:w-[92%] lg:w-[80%] xl:w-[86%] overflow-scroll">
            {children}
          </div>
        </div>
      </ClientProvider>
    </AuthProvider>
  );
}
