"use client";

import { AdminContext } from "@/app/context/AdminContext";
import React, { useContext, useEffect, useState } from "react";
import EditAppointmentModal from "./EditAppointmentModal";

const AdminAppointmentTable = () => {
  // Context
  const { appointment, updateAppointmentStatus } = useContext(AdminContext);

  // States
  const [filteredAppointment, setFilteredAppointment] = useState(appointment);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const itemsPerPage = 10;

  // Handle cancel button click
  const handleCancelClick = (appointment) => {
    if (confirm("Are you sure you want to cancel this appointment?")) {
      updateAppointmentStatus(appointment.id, "Canceled");
    }
  };

  // Handle edit button click
  const handleEditClick = (appointment) => {
    setSelectedAppointment(appointment);
    setIsModalOpen(true);
  };

  // Filter requests by search term and date
  useEffect(() => {
    let updatedAppontment = appointment;

    // Search filter
    if (searchTerm) {
      updatedAppontment = updatedAppontment.filter((req) =>
        req.id.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Date filter
    if (dateFilter) {
      updatedAppontment = updatedAppontment.filter(
        (req) => req.date === dateFilter
      );
    }

    setFilteredAppointment(updatedAppontment);
  }, [appointment, searchTerm, dateFilter]);

  // Pagination logic
  const totalPages = Math.ceil(filteredAppointment.length / itemsPerPage);
  const currentAppointment = filteredAppointment.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-white text-black rounded-lg shadow overflow-x-auto">
      {/* Search and Date Filter */}
      <div className="flex justify-between items-center p-2 bg-gray-100">
        <input
          type="text"
          placeholder="Search by email or item..."
          className="border px-4 py-2 rounded w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="date"
          className="border px-4 py-2 rounded"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        />
      </div>

      {/* Table */}
      <table className="table-auto w-full text-center border-collapse border border-gray-200">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Appointment ID </th>
            <th className="p-2 border">Date Booked</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentAppointment.map((appointment) => (
            <tr
              key={appointment.id}
              className="cursor-pointer hover:bg-gray-100"
            >
              <td className="p-2 border">{appointment.id}</td>
              <td className="p-2 border">{appointment.date}</td>
              <td className="p-2 border">
                <span
                  className={`py-1 px-3 rounded-full text-sm ${
                    appointment.status === "Approved"
                      ? "bg-green-100 text-green-600"
                      : appointment.status === "Pending"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {appointment.status}
                </span>
              </td>
              <td className="p-2 border space-x-2">
                <button
                  onClick={() => handleEditClick(appointment)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleCancelClick(appointment)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center p-4 bg-gray-100">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Edit Modal */}
      {isModalOpen && selectedAppointment && (
        <EditAppointmentModal
          appointment={selectedAppointment}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminAppointmentTable;
