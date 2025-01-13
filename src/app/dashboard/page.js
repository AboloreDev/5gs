import Appointment from "./appointment/page";
import Sidebar from "./components/Sidebar";
import Feedback from "./feedback/page";
import HomePage from "./home/page";
import DashboardLayout from "./layout";
import Meessages from "./messages/page";
import Notification from "./notification/page";
import Rent from "./rent/page";

export default function ClientDashboard() {
  return (
    <DashboardLayout>
      <main className="text-white px-1">
        {/* Home */}
        <HomePage />
        {/* Appointment */}
        <Appointment />
        {/* Rent */}
        <Rent />
        {/* Messages */}
        <Meessages />
        {/* Notifications */}
        <Notification />
        {/* Feedback */}
        <Feedback />
      </main>
    </DashboardLayout>
  );
}
