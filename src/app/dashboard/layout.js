import { ClientProvider } from "../context/ClientContext";
import Sidebar from "./components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="bg-gray-800">
      <div className="min-h-screen grid lg:grid-cols-[400px_auto] px-6 gap-6 bg-black ">
        <div className=" border-r-2 hidden lg:block">
          <Sidebar />
        </div>

        {/* <div className="lg:hidden text-white py-2">0000</div> */}

        <main className="text-white px-1 md:px-0">
          <ClientProvider>{children}</ClientProvider>
        </main>
      </div>
    </div>
  );
}
