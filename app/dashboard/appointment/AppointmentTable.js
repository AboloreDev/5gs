"use client";

import { useState, useEffect } from "react";
import { Pagination } from "./Pagination";
import { SearchAppointment } from "./SearchAppointment";
import { Table } from "./Table";
import { useAppointments } from "@/app/context/AppointmentContext";

const AppointmentTable = () => {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const {
    appointments,
    loading,
    pagination,
    fetchAppointments,
    cancelAppointment,
    updateAppointment,
  } = useAppointments();

  useEffect(() => {
    fetchAppointments(currentPage);
  }, [currentPage]);

  const totalPages = pagination.totalPages;

  const handleSearch = (query) => {
    setQuery(query);
  };

  const filteredAppointments = appointments.filter((appointment) =>
    appointment._id.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="px-4 py-2 text-black w-full ">
      {loading ? (
        <p className="flex text-gray-500 justify-center items-center">
          Loading appointments...
        </p>
      ) : appointments.length === 0 ? (
        <p className="flex text-gray-500 justify-center items-center">
          Please create an appointment to continue
        </p>
      ) : (
        <div className="bg-white rounded-xl">
          <SearchAppointment onSearch={handleSearch} />
          <Table
            data={filteredAppointments}
            onEdit={updateAppointment}
            onCancel={cancelAppointment}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default AppointmentTable;
