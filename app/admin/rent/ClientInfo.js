import { AdminContext } from "@/app/context/AdminContext";
import React, { useContext } from "react";

const ClientInfo = () => {
  const { selectedRequest } = useContext(AdminContext);

  return (
    <div className="flex flex-col">
      <div className="p-4 rounded shadow">
        {!selectedRequest ? (
          <p>Please click on a row to view the details.</p>
        ) : (
          <div className="border-2 px-4 py-3 rounded-xl">
            <h2 className="text-lg font-bold mb-2">Client Info</h2>
            <div className="flex flex-col space-y-2 mb-4">
              {" "}
              <p className="text-sm">Name:</p>
              <p>{selectedRequest.name}</p>
            </div>

            <div className="flex flex-col space-y-2">
              {" "}
              <p className="text-sm">Email:</p>
              <p>{selectedRequest.email}</p>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 rounded shadow">
        {selectedRequest ? (
          <div className="border-2 rounded-xl space-y-2 px-4 py-3">
            <h3 className="text-xl font-bold mt-4 mb-4">Item Requested</h3>
            <p>
              <strong>Item:</strong> {selectedRequest.item}
            </p>
            <p>
              <strong>Date:</strong> {selectedRequest.date}
            </p>

            <p>
              <strong>Days:</strong> {selectedRequest.days}
            </p>
          </div>
        ) : (
          <p>Select a request to see client request details.</p>
        )}
      </div>
    </div>
  );
};

export default ClientInfo;
