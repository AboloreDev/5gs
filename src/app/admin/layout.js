import { AdminProvider } from "../context/AdminContext";
import AdminSidebar from "./components/AdminSidebar";

export default function AdminDashboardLayout({ children }) {
  return (
    <div className="bg-gray-800">
      <div className="min-h-screen fixed w-full grid grid-cols-[250px_auto] px-2 gap-3 bg-black ">
        <div className=" border-r-2 ">
          <AdminSidebar />
        </div>

        <main className="text-white px-1">
          <AdminProvider>{children}</AdminProvider>
        </main>
      </div>
    </div>
  );
}
