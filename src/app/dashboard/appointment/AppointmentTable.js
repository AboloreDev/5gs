"use client";

import { useContext, useState, useEffect } from "react";
import { Pagination } from "./Pagination";
import { SearchAppointment } from "./SearchAppointment";
import { Table } from "./Table";
import { ClientContext } from "@/app/context/ClientContext";

const AppointmentTable = () => {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // context menu
  const { appointments, editAppointment, cancelAppointment } =
    useContext(ClientContext);

  // Calculate total pages after appointments are fetched or context is updated
  const totalPages = Math.ceil(appointments.length / 10);

  const handleSearch = (query) => {
    setQuery(query);
    // Add search filtering logic here
  };

  const filteredAppointments = appointments.filter((appointment) =>
    appointment.id.toLowerCase().includes(query.toLowerCase())
  );

  const paginatedAppointments = filteredAppointments.slice(
    (currentPage - 1) * 10,
    currentPage * 10
  );

  return (
    <div className="px-6 py-4 text-black w-full overflow-y-auto">
      {appointments.length === 0 ? (
        <p className="flex text-gray-500 justify-center items-center">
          Please create an appointment to continue
        </p>
      ) : (
        <div className="bg-white">
          <div className="sticky top-0 z-10 bg-white p-4">
            <SearchAppointment onSearch={handleSearch} />
          </div>
          <div className="overflow-y-auto max-h-[500px]">
            <Table
              data={paginatedAppointments}
              onEdit={editAppointment}
              onCancel={cancelAppointment}
            />
          </div>
          <div className="sticky bottom-0 z-10 p-4">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentTable;
