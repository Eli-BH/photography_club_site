import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = ({ startDate, setStartDate }) => {
  return (
    <DatePicker
      selected={startDate}
      showTimeSelect
      onChange={(date) => setStartDate(date)}
      dateFormat="MM/dd/yyyy h:mm aa"
    />
  );
};

export default DatePickerComponent;
