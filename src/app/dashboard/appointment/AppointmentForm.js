import { ClientContext } from "@/app/context/ClientContext";
import React, { useContext } from "react";

const AppointmentForm = ({ activeTab, setActiveTab }) => {
  // context menu
  const { submitAppointment } = useContext(ClientContext);

  return (
    <div>
      <div className=" flex justify-center flex-col items-center space-y-8 py-4">
        {/* Tabs */}
        <div className=" bg-white text-black px-3 py-3 rounded-full flex space-x-4">
          <button
            className={`px-4 py-2 rounded-full shadow-md ${
              activeTab === "appointment"
                ? "bg-primary-secondaryColor text-white "
                : " hover:bg-primary-secondaryColor"
            }`}
            onClick={() => setActiveTab("appointment")}
          >
            Book an Appointment
          </button>
          <button
            className={`px-4 py-2 rounded-full shadow-md ${
              activeTab === "service"
                ? "bg-primary-secondaryColor text-white "
                : " hover:bg-primary-secondaryColor"
            }`}
            onClick={() => setActiveTab("service")}
          >
            Book Our Service
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "appointment" && (
          <div className="flex items-center flex-col w-full justify-center gap-2">
            <h2 className="text-sm font-thin mb-4">
              Provide the information below to proceed
            </h2>
            <form
              onSubmit={submitAppointment}
              className="flex flex-col space-y-8 items-center justify-center"
            >
              <div className="flex space-x-2 ">
                {/* Date Picker */}
                <div className="">
                  <label htmlFor="date" className="block text-sm mb-1">
                    Select Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-[300px] px-8 py-4  bg-white text-black rounded-lg outline-none focus:ring-2 focus:ring-primary-secondaryColor"
                    placeholder="DD/MM/YYYY"
                  />
                </div>
                {/* Time Picker */}
                <div className="">
                  <label htmlFor="time" className="block text-sm mb-1">
                    Select Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    className="w-[300px] px-8 py-4  bg-white text-black p-2 rounded-lg outline-none focus:ring-2 focus:ring-primary-secondaryColor"
                    placeholder="00:00"
                  />
                </div>
              </div>

              {/* textarea */}
              <div className="w-full">
                <textarea
                  id="message"
                  name="message"
                  className="w-[600px] px-8 py-4  bg-white text-black rounded-lg outline-none focus:ring-2 focus:ring-primary-secondaryColor h-[150px]"
                  placeholder="Short description of what the appointment is about..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-1/2   bg-primary-secondaryColor text-white py-2 rounded-lg shadow-md hover:bg-orange-600"
              >
                Submit
              </button>
            </form>
          </div>
        )}

        {activeTab === "service" && (
          <div className=" p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-400">
              Book Our Service
            </h2>
            <p className="text-gray-400">This section is currently empty.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentForm;
