import { useState } from "react";
import EditModal from "../components/EditModal";
import ConfirmDialog from "@/app/components/ConfirmDialog";

export function Table({ data, onEdit, onCancel }) {
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [confirmCancelId, setConfirmCancelId] = useState(null);

  const handleEdit = (appointmentId) => {
    const appointmentToEdit = data.find(
      (appointment) => appointment._id === appointmentId
    );
    setSelectedAppointment(appointmentToEdit);
    setIsOpenModal(true);
  };

  const handleCancelClick = (id) => {
    setConfirmCancelId(id);
  };

  const confirmCancel = () => {
    onCancel(confirmCancelId);
    setConfirmCancelId(null);
  };

  const cancelDialog = () => {
    setConfirmCancelId(null);
  };

  const handleSaveEdit = (newDate) => {
    const updatedData = {
      date: newDate,
    };
    onEdit(selectedAppointment._id, updatedData);
    setSelectedAppointment(null);
    setIsOpenModal(false);
  };

  const getStatusStyles = (status) => {
    const normalized = status?.toUpperCase();
    switch (normalized) {
      case "APPROVED":
        return "bg-green-100 text-green-700";
      case "PENDING":
        return "bg-yellow-100 text-yellow-700";
      case "CANCELLED":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const formatStatus = (status) => {
    const upper = status?.toUpperCase();
    if (upper === "CANCELLED") return "Cancelled";
    if (upper === "APPROVED") return "Approved";
    if (upper === "PENDING") return "Pending";
    return status;
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
          {data.map((appointment) => {
            const isCancelled =
              appointment.status?.toUpperCase() === "CANCELLED";

            return (
              <tr
                key={appointment._id}
                className={`${
                  appointment._id % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-100`}
              >
                <td className="p-2 border text-xs sm:text-sm">
                  {"5GS" + appointment._id.substring(0, 10)}
                </td>
                <td className="p-2 border text-xs sm:text-sm">
                  {appointment.date}
                </td>
                <td className="p-2 border">
                  <span
                    className={`px-2 py-1 rounded-full text-xs sm:text-sm ${getStatusStyles(
                      appointment.status
                    )}`}
                  >
                    {formatStatus(appointment.status)}
                  </span>
                </td>
                <td className="p-2 border flex flex-col gap-2 sm:flex-row space-x-2 text-xs sm:text-sm">
                  <button
                    onClick={() => handleEdit(appointment._id)}
                    disabled={isCancelled}
                    className={`px-2 py-1 rounded-lg ${
                      isCancelled
                        ? "bg-gray-300 text-gray-600"
                        : "bg-blue-500 text-white hover:bg-blue-600"
                    }`}
                  >
                    {isCancelled ? "Disabled" : "Edit"}
                  </button>

                  <button
                    onClick={() => handleCancelClick(appointment._id)}
                    disabled={isCancelled}
                    className={`px-2 py-1 rounded-lg ${
                      isCancelled
                        ? "bg-gray-300 text-gray-600"
                        : "bg-red-500 text-white hover:bg-red-600"
                    }`}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {isOpenModal && (
        <EditModal
          appointment={selectedAppointment}
          onSave={handleSaveEdit}
          onClose={() => setIsOpenModal(false)}
        />
      )}

      {confirmCancelId && (
        <ConfirmDialog
          message="Do you really want to cancel this appointment?"
          onConfirm={confirmCancel}
          onCancel={cancelDialog}
        />
      )}
    </div>
  );
}
