import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { setHours, setMinutes } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

export default function App() {
  const [startDate, setStartDate] = useState(
    new Date("2018-01-04T01:10:54.673Z")
  );

  console.log(startDate);
  console.log(startDate.toUTCString());
  console.log(startDate.toISOString());

  return (
    <div
      style={{
        margin: 100,
      }}
    >
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date as Date)}
        showTimeSelect
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    </div>
  );
}
