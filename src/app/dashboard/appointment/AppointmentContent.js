"use client";

import { useState } from "react";
import AppointmentForm from "./AppointmentForm";
import AppointmentTable from "./AppointmentTable";

export default function AppointmentContent() {
  const [activeTab, setActiveTab] = useState("appointment");

  return (
    <div className="flex flex-col items-center space-y-3 ">
      {/* Main Content Area */}
      {/* Appointment Form */}
      <AppointmentForm activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Appointment Table */}
      {activeTab === "appointment" ? <AppointmentTable /> : null}
    </div>
  );
}
