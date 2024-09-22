"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type DateInputProps = {
    placeholder?:string
};

const DateInput = ({placeholder="Select Date"}: DateInputProps) => {
  // Set initial state to null so no date is selected initially
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <DatePicker
      className="text-sm placeholder:text-[#4D4D4D] p-4 w-full border focus:outline-[#b4b1b1] border-[#b4b1b1] bg-white"
      selected={startDate} // selected date or no date initially
      onChange={(date) => setStartDate(date)} 
      placeholderText={placeholder} // Placeholder text before selecting a date
      isClearable // Optional: Allows users to clear the date selection
    />
  );
};

export default DateInput;
