import { useState } from "react";
import Navbar from "../Components/NavbarUtama";
import { format, addMonths, subMonths, startOfWeek, startOfMonth, endOfWeek, endOfMonth, isSameMonth, isSameDay, addDays } from "date-fns";

const ComplexCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null); // null berarti tidak ada tanggal yang dipilih
  const [markedDates, setMarkedDates] = useState([]); // Tambah state untuk menyimpan tanggal yang ditandai

  const next = () => {
    setCurrentDate((currentDate) => {
      return addMonths(currentDate, 1);
    });
  };

  const prev = () => {
    setCurrentDate((currentDate) => {
      return subMonths(currentDate, 1);
    });
  };

  const onDateClick = (day) => {
    setSelectedDate(day);
  };

  const toggleMarkedDate = () => {
    if (selectedDate) {
      if (markedDates.includes(selectedDate)) {
        setMarkedDates(markedDates.filter((date) => !isSameDay(date, selectedDate)));
      } else {
        setMarkedDates([...markedDates, selectedDate]);
      }
      setSelectedDate(null); // Hilangkan seleksi tanggal yang dipilih agar warna latar belakang dapat diubah
    }
  };

  const renderHeader = () => {
    return (
      <>
        <div className="flex justify-between items-center mb-8 px-6">
          <button onClick={prev}>&#8249;</button>
          <div>{format(currentDate, "MMMM yyyy")}</div>
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
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, "d");
        const cloneDay = day;
        const isCurrentMonth = isSameMonth(day, monthStart);
        const isDaySelected = isSameDay(day, selectedDate);
        days.push(
          <div key={day} className={`relative text-center p-2 cursor-pointer ${!isCurrentMonth ? "text-gray-300 rounded-lg" : ""} ${isDaySelected ? "bg-indigo-600 text-white rounded-lg" : ""}`} onClick={() => onDateClick(cloneDay)}>
            {formattedDate}
            {markedDates.includes(day) && <div className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full"></div>}
          </div>
        );
        day = addDays(day, 1);
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
          {" "}
          {/* Updated to use shadow-lg and text-neutral-500 */}
          {renderHeader()}
          {renderDays()}
          {renderCells()}
        </div>
        <div className="flex justify-start mt-10">
          <button onClick={toggleMarkedDate} className="px-3 py-1 text-neutral 400 font-medium rounded">
            Add Caption
          </button>{" "}
          {/* Tombol "Add Caption" */}
        </div>
      </div>
    </div>
  );
};

export default ComplexCalendar;
