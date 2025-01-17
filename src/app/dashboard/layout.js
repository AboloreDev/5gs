import Image from "next/image";

import { ClientProvider } from "../context/ClientContext";
import Sidebar from "./components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="h-screen bg-black flex">
      {/* Left */}
      <div className="w-[10%] border-r-2 md:w-[8%] lg:w-[20%] xl:w-[14%] flex flex-col gap-14">
        {/* Logo */}
        <div className="w-60px md:w-100px p-2 flex justify-start md:justify-center">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </div>
        {/* menu */}
        <Sidebar />
      </div>
      {/* right */}
      <div className="w-[90%] md:w-[92%] lg:w-[80%] xl:w-[86%] overflow-scroll">
        <ClientProvider>{children}</ClientProvider>
      </div>
    </div>
  );
}
