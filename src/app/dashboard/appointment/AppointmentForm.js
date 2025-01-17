import { ClientContext } from "@/app/context/ClientContext";
import React, { useContext } from "react";

const AppointmentForm = ({ activeTab, setActiveTab }) => {
  const { submitAppointment } = useContext(ClientContext);

  return (
    <div className="px-4 py-4">
      <div className="flex flex-col items-center space-y-4">
        {/* Tabs */}
        <div className="bg-white text-black px-2 py-2 rounded-full flex space-x-4">
          <button
            className={`px-4 py-2 text-sm rounded-full shadow-md ${
              activeTab === "appointment"
                ? "bg-primary-secondaryColor text-white"
                : "hover:bg-primary-secondaryColor hover:text-white"
            }`}
            onClick={() => setActiveTab("appointment")}
          >
            Book an Appointment
          </button>
          <button
            className={`px-4 py-2 text-sm rounded-full shadow-md ${
              activeTab === "service"
                ? "bg-primary-secondaryColor text-white"
                : "hover:bg-primary-secondaryColor hover:text-white"
            }`}
            onClick={() => setActiveTab("service")}
          >
            Book Our Service
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "appointment" && (
          <div className="w-full max-w-md md:max-w-lg lg:max-w-xl flex flex-col items-center gap-4">
            <h2 className="text-sm font-light text-gray-600">
              Provide the information below to proceed
            </h2>
            <form
              onSubmit={submitAppointment}
              className="flex flex-col space-y-4 w-full"
            >
              {/* Date & Time Pickers */}
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <div className="flex-1">
                  <label htmlFor="date" className="block text-sm mb-1">
                    Select Date
                  </label>
                  <input
                    id="date"
                    className="w-full px-4 py-2 bg-white text-black rounded-lg outline-none focus:ring-2 focus:ring-primary-secondaryColor"
                    placeholder="DD/MM/YYYY"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="time" className="block text-sm mb-1">
                    Select Time
                  </label>
                  <input
                    id="time"
                    className="w-full px-4 py-2 bg-white text-black rounded-lg outline-none focus:ring-2 focus:ring-primary-secondaryColor"
                    placeholder="00:00"
                  />
                </div>
              </div>

              {/* Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm mb-1">
                  Short Description
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-2 bg-white text-black rounded-lg outline-none focus:ring-2 focus:ring-primary-secondaryColor h-32"
                  placeholder="Short description of what the appointment is about..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary-secondaryColor text-white py-2 rounded-lg shadow-md hover:bg-orange-600"
              >
                Submit
              </button>
            </form>
          </div>
        )}

        {activeTab === "service" && (
          <div className="w-full max-w-md p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-500">
              Book Our Service
            </h2>
            <p className="text-gray-500">This section is currently empty.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentForm;
