import { AdminContext } from "@/app/context/AdminContext";
import React, { useContext, useState } from "react";

const EditAppointmentModal = ({ onClose, appointment }) => {
  const { updateAppointment } = useContext(AdminContext);

  // Initial form data from the appointment prop
  const [formData, setFormData] = useState({
    id: appointment.id,
    date: appointment.date,
    status: appointment.status,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    updateAppointment(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Edit Appointment</h2>
        <form onSubmit={handleSubmit}>
          {/* Date Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="date">
              Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 w-full"
              required
            />
          </div>

          {/* Status Select */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="status">
              Status:
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 w-full"
              required
            >
              <option value="Approved">Approved</option>
              <option value="Pending">Pending</option>
              <option value="Canceled">Canceled</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAppointmentModal;
