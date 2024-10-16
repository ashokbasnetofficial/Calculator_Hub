import React, { useState } from "react";
import NepaliDate from "nepali-date-converter"; // Importing your installed NepaliDate class

const NepaliToEnglishDateConverter: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number | undefined>();
  const [selectedMonth, setSelectedMonth] = useState<number | undefined>();
  const [selectedYear, setSelectedYear] = useState<number | undefined>();
  const [convertedDate, setConvertedDate] = useState<Date>(new Date());

  // Arrays for Nepali days, months, and years
  const days: number[] = Array.from({ length: 32 }, (_, i) => i + 1);
  const nepaliMonths: { index: number; name: string }[] = [
    { index: 0, name: "बैशाख" },
    { index: 1, name: "जेठ" },
    { index: 2, name: "असार" },
    { index: 3, name: "श्रावण" },
    { index: 4, name: "भदौ" },
    { index: 5, name: "असोज" },
    { index: 6, name: "कार्तिक" },
    { index: 7, name: "मंसिर" },
    { index: 8, name: "पुष" },
    { index: 9, name: "माघ" },
    { index: 10, name: "फागुन" },
    { index: 11, name: "चैत" },
  ];
  const years: number[] = Array.from({ length: 100 }, (_, i) => 2000 + i); // Example year range (2070 - 2119)

  // Function to handle date conversion
  const convertToEnglishDate = (): void => {
    if (
      selectedDay !== undefined &&
      selectedMonth !== undefined &&
      selectedYear !== undefined
    ) {
      const nepaliDate = new NepaliDate(
        selectedYear,
        selectedMonth,
        selectedDay
      );
      console.log(nepaliDate.getBS());
      const englishDate = nepaliDate.toJsDate();
      setConvertedDate(englishDate);
    } else {
      alert("Please select all fields.");
    }
  };

  return (
    <div className="p-4 mx-auto mt-8 mb-64">
      <h2 className="text-primary text-3xl uppercase font-bold mb-24 text-center">
        Nepali to English Date Converter
      </h2>
      <div className="flex flex-row space-x-8">
        {/* Day Selector */}
        <select
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-darkText"
          value={selectedDay}
          onChange={(e) => setSelectedDay(Number(e.target.value))}
        >
          <option value="">Select Day</option>
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>

        {/* Nepali Month Selector */}
        <select
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-darkText"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(Number(e.target.value))}
        >
          <option value="">Select Month</option>
          {nepaliMonths.map((month) => (
            <option key={month.index} value={month.index}>
              {month.name}
            </option>
          ))}
        </select>

        {/* Year Selector */}
        <select
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-darkText"
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
        >
          <option value="">Select Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <button
          onClick={convertToEnglishDate}
          className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-primary transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-200 group"
        >
          <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full"></span>
          <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg
              className="w-5 h-5 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
            Convert
          </span>
        </button>
      </div>

      <hr className="my-4 border-t-2 border-primary" />

      {/* Display converted date */}
      <h4 className="text-primary opacity-80 text-center font-bold text-5xl">
        {convertedDate
          ? convertedDate.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : ""}
      </h4>
    </div>
  );
};

export default NepaliToEnglishDateConverter;
