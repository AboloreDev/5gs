import { ClientProvider } from "../context/ClientContext";
import Sidebar from "./components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen fixed w-full bg-black grid grid-cols-[250px_auto] px-2 gap-3 ">
      <div className=" border-r-2">
        <Sidebar />
      </div>
      <ClientProvider>{children}</ClientProvider>;
    </div>
  );
}
