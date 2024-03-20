import { useState } from "react";
import Navbar from "../Components/NavbarUtama";
import moment from "moment";

const ComplexCalendar = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedDate, setSelectedDate] = useState(null); 
  const [markedDates, setMarkedDates] = useState([]);

  const next = () => {
    setCurrentDate(currentDate.clone().add(1, 'month'));
  };

  const prev = () => {
    setCurrentDate(currentDate.clone().subtract(1, 'month'));
  };

  const onDateClick = (day) => {
    setSelectedDate(day);
  };

  const toggleMarkedDate = () => {
    if (selectedDate) {
      if (markedDates.includes(selectedDate)) {
        setMarkedDates(markedDates.filter((date) => date !== selectedDate));
      } else {
        setMarkedDates([...markedDates, selectedDate]);
      }
      setSelectedDate(null); 
    }
  };

  const renderHeader = () => {
    return (
      <>
        <div className="flex justify-between items-center mb-8 px-6">
          <button onClick={prev}>&#8249;</button>
          <div>{currentDate.format("MMMM yyyy")}</div>
          <button onClick={next}>&#8250;</button>
        </div>
      </>
    );
  };

  const renderDays = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <div key={index} className="text-center font-medium text-base text-gray-300 mb-3">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = currentDate.clone().startOf('month');
    const monthEnd = currentDate.clone().endOf('month');
    const startDate = monthStart.clone().startOf('week');
    const endDate = monthEnd.clone().endOf('week');

    const rows = [];
    let days = [];
    let day = startDate.clone();

    while (day.isSameOrBefore(endDate)) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = day.format('D');
        const isCurrentMonth = day.isSame(monthStart, 'month');
        const isDaySelected = selectedDate && day.isSame(selectedDate, 'day');
        days.push(
          <div key={day} className={`relative text-center p-2 cursor-pointer ${!isCurrentMonth ? "text-gray-300 rounded-lg" : ""} ${isDaySelected ? "bg-indigo-600 text-white rounded-lg" : ""}`} onClick={() => onDateClick(day.clone())}>
            {formattedDate}
            {markedDates.includes(day.format('YYYY-MM-DD')) && <div className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full"></div>}
          </div>
        );
        day.add(1, 'day');
      }
      rows.push(
        <div key={day} className="grid grid-cols-7 gap-1">
          {days}
        </div>
      );
      days = [];
    }

    return rows;
  };

  return (
    <div className="font-Jakarta">
      <Navbar />
      <h1 className="text-xl font-semibold ml-7 mt-10 mb-5">
        Exam Schedule - <span className="text-indigo-600">Semester Final</span>
      </h1>
      <div className="px-7">
        <select className="mt-5 mb-5 w-full p-2 border-solid border-2 border-neutral-300 text-neutral-500" onChange={(e) => console.log(e.target.value)}>
          <option value="option1">All Class</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="mx-auto max-w-xl p-7">
        <div className="bg-white shadow-lg shadow-neutral-200 p-4">
          {renderHeader()}
          {renderDays()}
          {renderCells()}
        </div>
        <div className="flex justify-start mt-10">
          <button onClick={toggleMarkedDate} className="px-3 py-1 text-neutral 400 font-medium rounded">
            Add Caption
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComplexCalendar;
