"use client";

import { useState } from "react";
import EditModal from "../components/EditModal";

export function Table({ data, onEdit, onCancel }) {
  // context menu

  //use state
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // modal edit
  const handleEdit = (id) => {
    const appointment = data.find((appointment) => appointment.id === id);
    setSelectedAppointment(appointment);
  };

  const handleSaveEdit = (newDate, newTime, reason) => {
    onEdit(selectedAppointment.id, newDate, newTime, reason);
    setSelectedAppointment(null); // Close modal
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left table-auto border-collapse">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-4 border">Appointment ID</th>
            <th className="p-4 border">Date Booked For</th>
            <th className="p-4 border">Status</th>
            <th className="p-4 border">Actions</th>
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
              <td className="p-4 border">{appointment.id}</td>
              <td className="p-4 border">{appointment.date}</td>
              <td className="p-4 border">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
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
              <td className="p-4 border space-x-2">
                <button
                  onClick={() => handleEdit(appointment.id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => onCancel(appointment.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Render Edit Modal */}
      {selectedAppointment && (
        <EditModal
          appointment={selectedAppointment}
          onSave={handleSaveEdit}
          onClose={() => setSelectedAppointment(null)}
        />
      )}
    </div>
  );
}
