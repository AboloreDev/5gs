"use client";

import React, { useContext } from "react";
import AdminAppointmentTable from "./AdminAppointmentTable";
import { AdminContext } from "@/app/context/AdminContext";

const AdminAppointment = () => {
  const { appointment } = useContext(AdminContext);
  return (
    <div className="flex flex-col space-y-6 gap-4">
      {/* header */}
      <div className="border-b-2 border-gray-600 py-2">
        <h1 className="text-sm font-bold">Appointment</h1>
        <p className="text-gray-500 text-[12px]">Explore our products</p>
      </div>

      <div className="grid grid-cols-[auto_400px]">
        {/* appointment stats */}
        <div className="px-6 py-3 flex flex-col space-y-6">
          <div className="flex items-center justify-between gap-6">
            <div className="bg-white w-[400px] h-[200px] text-black px-6 py-6 flex flex-col justify-center items-center rounded-xl space-y-3">
              <p className="font-bold text-2xl">{appointment.length}</p>
              <p>Total Appointment Booked</p>
            </div>
            <div className="bg-white rounded-xl w-[400px] h-[200px] text-black px-6 py-6 flex flex-col justify-center items-center space-y-3">
              <p className="font-bold text-2xl">{appointment.length}</p>
              <p>Total Services Requested</p>
            </div>
          </div>

          {/* appointment Table */}
          <div className="">
            <AdminAppointmentTable />
          </div>
        </div>

        {/* right side bar */}
        <div className=" px-6 py-3 ">
          {/* appointment stats */}
          <div className="flex flex-col space-y-6">
            <div className="bg-white w-[350px] h-[400px] text-black px-6 py-6 flex flex-col items-start rounded-xl space-y-3">
              <p className="font-bold text-2xl">Statistics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAppointment;
