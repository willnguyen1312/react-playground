import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { setHours, setMinutes } from "date-fns";

export default function App() {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date as Date)}
      showTimeSelect
    />
  );
}
