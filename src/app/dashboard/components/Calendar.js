"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CustomCalendar = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div className="flex justify-center items-center p-2">
      <div className=" rounded-lg shadow-lg w-[280px] h-[200px] ">
        <Calendar
          onChange={setValue}
          value={value}
          className="custom-calendar"
        />
        <p className="text-center mt-4 text-sm text-white">
          Selected Date:{" "}
          <span className="font-bold">{value.toDateString()}</span>
        </p>
      </div>
    </div>
  );
};

export default CustomCalendar;
