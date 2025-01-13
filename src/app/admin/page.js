import AdminAppointment from "./appointment/page";
import AdminHome from "./home/page";
import AdminMessages from "./messages/page";
import AdminNotifications from "./notifications/page";
import AdminRent from "./rent/page";
import AdminDashboardLayout from "./layout";

export default function AdminDashboard() {
  return (
    <AdminDashboardLayout>
      {/* Admin dashboard content */}
      <AdminHome />
      <AdminAppointment />
      <AdminMessages />
      <AdminRent />
      <AdminNotifications />
    </AdminDashboardLayout>
  );
}
