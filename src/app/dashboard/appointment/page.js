import React from "react";
import AppointmentContent from "./AppointmentContent";
import CustomCalendar from "../components/Calendar";

const Appointment = () => {
  return (
    <div>
      <div className="border-b-2 py-2 px-2">
        <h1 className="text-lg font-bold"> Appointment</h1>
        <p className="text-gray-500">Visit us at our office</p>
      </div>

      <div className="grid grid-cols-[4fr_1fr] p-4 h-screen">
        {/* content */}
        <AppointmentContent />
        {/* sidebar */}
        <div className="border-l-2 border-t-2 px-4 py-2 flex flex-col space-y-8">
          {/* map */}
          <div className="flex flex-col border-2 rounded-xl space-y-4 px-4 py-2 mt-8">
            <div className="text-xl mt-4">
              {/* icon */}
              <h3> want to locate us ?</h3>
            </div>
            <p className="text-sm">Click on the map below to get directions</p>

            <div className="overflow-hidden rounded-lg shadow-lg ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83535.23209007343!2d-0.31158256078356616!3d5.643589616835005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9099050ee617%3A0xec1887b5b7a1893d!2sMovenpick%20Ambassador%20Hotel%20Accra!5e0!3m2!1sen!2sng!4v1735112274376!5m2!1sen!2sng"
                width="600"
                height="200"
                style={{ border: "0", marginRight: "1em" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full border-0"
              ></iframe>
            </div>
          </div>

          {/* notice board */}
          <div className="flex flex-col space-y-8 bg-gradient-to-r from-[#FF3D00] via-[#0369F0] to-[#FFFFFF80] border-2 rounded-lg px-4 py-2 h-[200px]">
            <h3 className="text-lg">
              <span>0</span>Important notice
            </h3>
            <p className="text-sm">
              “Please be reminded we are open on Mondays to Saturdays only from
              8am to 5pm”
            </p>
          </div>
          {/* calenddar */}
          <div>
            <CustomCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
