"use client";

import { AdminContext } from "@/app/context/AdminContext";
import React, { useContext, useEffect, useState } from "react";
import EditRequestModal from "./EditRequestModal";

const AdminRequestTable = () => {
  // context menu
  const { requests, updateRequestStatus, selectRequest, selectedRequest } =
    useContext(AdminContext);

  //   states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredRequests, setFilteredRequests] = useState(requests);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Handle row click to update the right sidebar
  const handleRowClick = (id) => {
    selectRequest(id);
  };

  // Handle edit button click
  const handleEditClick = (request) => {
    selectRequest(request.id);
    setIsModalOpen(true);
  };

  // Handle cancel button click
  const handleCancelClick = (request) => {
    if (confirm("Are you sure you want to cancel this request?")) {
      updateRequestStatus(request.id, "Canceled");
    }
  };

  // Filter requests by search term and date
  useEffect(() => {
    let updatedRequests = requests;

    // Search filter
    if (searchTerm) {
      updatedRequests = updatedRequests.filter(
        (req) =>
          req.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          req.item.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Date filter
    if (dateFilter) {
      updatedRequests = updatedRequests.filter(
        (req) => req.date === dateFilter
      );
    }

    setFilteredRequests(updatedRequests);
  }, [requests, searchTerm, dateFilter]);

  // Pagination logic
  const totalPages = Math.ceil(filteredRequests.length / itemsPerPage);
  const currentRequests = filteredRequests.slice(
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
            <th className="p-2 border">Date </th>
            <th className="p-2 border">Client Email</th>
            <th className="p-2 border">Item</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentRequests.map((request) => (
            <tr
              key={request.id}
              onClick={() => handleRowClick(request.id)}
              className="cursor-pointer hover:bg-gray-100"
            >
              <td className="p-2 border">{request.date}</td>
              <td className="p-2 border">{request.email}</td>
              <td className="p-2 border">{request.item}</td>
              <td className="p-2 border">
                <span
                  className={`py-1 px-3 rounded-full text-sm ${
                    request.status === "Approved"
                      ? "bg-green-100 text-green-600"
                      : request.status === "Pending"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {request.status}
                </span>
              </td>
              <td className="p-2 border space-x-2">
                <button
                  onClick={() => handleEditClick(request)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleCancelClick(request)}
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
      {isModalOpen && selectedRequest && (
        <EditRequestModal
          request={selectedRequest}
          isModalOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminRequestTable;
