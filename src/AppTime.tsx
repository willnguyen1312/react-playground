import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { setHours, setMinutes, intervalToDuration } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

export default function App() {
  const [startDate, setStartDate] = useState(new Date());

  console.log(startDate);
  console.log(startDate.toUTCString());
  console.log(startDate.toISOString());

  console.log(
    intervalToDuration({
      start: new Date(1929, 0, 15, 12, 0, 0),
      end: new Date(1968, 3, 4, 19, 5, 0),
    })
  );

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
