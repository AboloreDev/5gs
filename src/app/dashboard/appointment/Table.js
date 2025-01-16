"use client";

import { useState } from "react";
import EditModal from "../components/EditModal";

export function Table({ data, onEdit, onCancel }) {
  // context menu

  //use state
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  // modal edit
  const handleEdit = (id) => {
    const appointment = data.find((appointment) => appointment.id === id);
    setIsOpenModal(true);
    setSelectedAppointment(appointment);
    if (appointment.status === "Canceled") {
      alert("You cannot edit a canceled appointment.");
      return;
    }
  };

  const handleSaveEdit = (newDate, newTime, reason) => {
    onEdit(selectedAppointment.id, newDate, newTime, reason);
    setSelectedAppointment(null);
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full text-left table-auto border-collapse text-sm sm:text-base">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-2 border">Appointment ID</th>
            <th className="p-2 border">Date Booked For</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((appointment, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-100`}
            >
              <td className="p-2 border text-xs sm:text-sm">
                {appointment.id}
              </td>
              <td className="p-2 border text-xs sm:text-sm">
                {appointment.date}
              </td>
              <td className="p-2 border">
                <span
                  className={`px-2 py-1 rounded-full text-xs sm:text-sm ${
                    appointment.status === "Approved"
                      ? "bg-green-100 text-green-700"
                      : appointment.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {appointment.status}
                </span>
              </td>
              <td className="p-2 border flex flex-col gap-2 sm:flex-row space-x-2 text-xs sm:text-sm">
                <button
                  onClick={() => handleEdit(appointment.id)}
                  disabled={appointment.status === "Canceled"}
                  className="px-2 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => onCancel(appointment.id)}
                  disabled={appointment.status === "Canceled"}
                  className="px-2 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isOpenModal && (
        <EditModal
          appointment={selectedAppointment}
          onSave={handleSaveEdit}
          onClose={() => setIsOpenModal(false)}
        />
      )}
    </div>
  );
}
