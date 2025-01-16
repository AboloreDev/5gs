import React from "react";
import AppointmentContent from "./AppointmentContent";
import CustomCalendar from "../components/Calendar";

const Appointment = () => {
  return (
    <div className="h-screen overflow-y-auto">
      {/* Header Section */}
      <div className="border-b-2 py-2 px-4 mt-10 bg-black">
        <h1 className=" font-bold text-white text-lg">Appointment</h1>
        <p className="text-gray-500 text-sm">Visit us at our office</p>
      </div>

      {/* Main Layout */}
      <div className="p-1 sm:p-4 flex flex-col xl:grid xl:grid-cols-[auto_400px] gap-4 h-[700px] md:h-screen overflow-y-auto">
        {/* Content Section */}
        <AppointmentContent />

        {/* Sidebar Section */}
        <div className="xl:border-l-2  px-4 py-4 flex flex-col space-y-8 xl:max-w-[400px]">
          {/* Map Section */}
          <div className="flex flex-col border-2 rounded-xl space-y-4 p-4 mt-8 w-full text-white">
            <div className="text-sm mt-4">
              <h3>Want to locate us?</h3>
              <p className="text-sm mt-2">
                Click on the map below to get directions
              </p>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83535.23209007343!2d-0.31158256078356616!3d5.643589616835005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9099050ee617%3A0xec1887b5b7a1893d!2sMovenpick%20Ambassador%20Hotel%20Accra!5e0!3m2!1sen!2sng!4v1735112274376!5m2!1sen!2sng"
                width="100%"
                height="200"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full border-0"
              ></iframe>
            </div>
          </div>

          {/* Notice Board Section */}
          <div className="flex flex-col space-y-4 bg-gradient-to-r from-[#FF3D00] text-white via-[#0369F0] to-[#FFFFFF80] border-2 rounded-lg px-4 py-2 h-[100px]">
            <h3 className="text-sm">
              <span>0</span> Important Notice
            </h3>
            <p className="text-[12px]">
              “Please be reminded we are open on Mondays to Saturdays only from
              8am to 5pm”
            </p>
          </div>

          {/* Calendar Section */}
          <div>
            <CustomCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
