import { ClientProvider } from "../context/ClientContext";
import Sidebar from "./components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="bg-gray-800">
      <div className="min-h-screen w-full grid grid-cols-[250px_auto] px-2 gap-3 bg-black ">
        <div className=" border-r-2 hidden lg:block">
          <Sidebar />
        </div>

        {/* <div className="lg:hidden text-white py-2">0000</div> */}

        <main className="text-white px-1">
          <ClientProvider>{children}</ClientProvider>
        </main>
      </div>
    </div>
  );
}
