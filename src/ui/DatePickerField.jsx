import React from "react";
import DatePicker from "react-multi-date-picker";


function DatePickerField({ label, data, setDate }) {
  return (
    <div className="border border-secondery-400 p-2 rounded-sm w-full">
      <DatePicker
        placeholder="Perfect Time"
        containerClassName="w-full "
        inputClass="textfield__input"
        calendarPosition="bottom-center"
        value={data}
        onChange={(date) => setDate(date)}
        format="YYYY-MM-DD"
      />
    </div>
  );
}

export default DatePickerField;
