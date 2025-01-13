"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CustomCalendar = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div className="flex justify-center items-center ">
      <div className="bg-white rounded-lg shadow-lg  ">
        <Calendar
          onChange={setValue}
          value={value}
          className="custom-calendar"
        />
        <p className="text-center mt-4 text-sm text-gray-700">
          Selected Date:{" "}
          <span className="font-bold">{value.toDateString()}</span>
        </p>
      </div>
    </div>
  );
};

export default CustomCalendar;
