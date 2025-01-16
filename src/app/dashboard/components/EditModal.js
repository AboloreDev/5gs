"use client";

import React, { useState } from "react";

const EditModal = ({ appointment, onSave, onClose }) => {
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");
  const [reason, setReason] = useState("");

  const handleSave = () => {
    if (newDate && newTime && reason) {
      onSave(newDate, newTime, reason);
    } else {
      alert("Please fill in all fields.");
    }

    onClose();
  };

  return (
    <div className="fixed w-full inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl space-y-4">
        <h2 className="text-lg font-semibold">Edit Appointment</h2>
        <p>Editing Appointment: {appointment?.id}</p>
        <div>
          <label className="block">New Date:</label>
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block">New Time:</label>
          <input
            type="time"
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block">Reason for Editing:</label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full p-2 border rounded"
          ></textarea>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
