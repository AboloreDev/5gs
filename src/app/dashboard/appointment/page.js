import React from "react";
import AppointmentContent from "./AppointmentContent";
import CustomCalendar from "../components/Calendar";

const Appointment = () => {
  return (
    <div className=" md:p-4 flex gap-4 flex-col lg:flex-row min-h-screen">
      {/* Main Layout */}
      <div className="w-full lg:w-2/3 bg-black overflow-y-auto max-h-screen">
        <div className="border-b-2 px-2 py-2 text-white">
          <h1 className=" font-bold text-white text-lg">Appointment</h1>
          <p className="text-gray-500 text-sm">Visit us at our office</p>
        </div>
        {/* Content Section */}
        <AppointmentContent />
      </div>

      {/* Sidebar Section */}
      <div className="hidden lg:border-l-2 w-full  overflow-y-auto lg:flex flex-col items-center space-y-6 lg:w-[300px] text-black relative lg:sticky lg:top-0 lg:h-screen p-2 lg:p-4">
        {/* Map Section */}
        <div className="flex flex-col border-2 rounded-xl space-y-4 p-4 mt-8 w-full h-[250px] text-white">
          <div className="text-sm mt-4">
            <h3>Want to locate us?</h3>
            <p className="text-[10px] mt-1">
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
        <div className="flex flex-col w-full space-y-6 bg-gradient-to-r from-[#FF3D00] text-white via-[#0369F0] to-[#FFFFFF80] border-2 rounded-lg px-4 py-2">
          <h3 className="text-sm">
            <span></span> Important Notice
          </h3>
          <p className="text-[12px]">
            “Please be reminded we are open on Mondays to Saturdays only from
            8am to 5pm”
          </p>
        </div>
        <div>
          <CustomCalendar />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
