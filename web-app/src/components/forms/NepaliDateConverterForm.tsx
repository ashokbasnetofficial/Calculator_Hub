import React, { useState, useEffect } from "react";
import NepaliDate from "nepali-date-converter"; // Importing NepaliDate class
interface NepaliToEnglishDateConverterProps {
  selectType: string;
}
import RadioButton from "../UI/RadioButton";

const NepaliToEnglishDateConverter: React.FC<
  NepaliToEnglishDateConverterProps
> = (props) => {
  const [selectedDay, setSelectedDay] = useState<number | undefined>();
  const [selectedMonth, setSelectedMonth] = useState<number | undefined>();
  const [selectedYear, setSelectedYear] = useState<number | undefined>();
  const [convertedDate, setConvertedDate] = useState<string | Date | null>(
    null
  );
  const [conversionType, setConversionType] = useState<string>(
    props.selectType
  );

  // Arrays for days, months, and years
  const days: number[] = Array.from({ length: 32 }, (_, i) => i + 1);
  const nepaliMonths = [
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

  const englishMonths = [
    { index: 0, name: "January" },
    { index: 1, name: "February" },
    { index: 2, name: "March" },
    { index: 3, name: "April" },
    { index: 4, name: "May" },
    { index: 5, name: "June" },
    { index: 6, name: "July" },
    { index: 7, name: "August" },
    { index: 8, name: "September" },
    { index: 9, name: "October" },
    { index: 10, name: "November" },
    { index: 11, name: "December" },
  ];
  const years: number[] = Array.from({ length: 100 }, (_, i) => 2000 + i);
  const englishYears: number[] = Array.from(
    { length: 100 },
    (_, i) => 1960 + i
  );

  // Handle radio button changes
  const radioButtonActionHandler = (type: string) => {
    setConversionType(type);
  };

  useEffect(() => {
    if (conversionType === "ad") {
      const currentNepaliDate = new NepaliDate();
      setSelectedDay(currentNepaliDate.getDate());
      setSelectedMonth(currentNepaliDate.getMonth());
      setSelectedYear(currentNepaliDate.getYear());
      const englishDate = currentNepaliDate.toJsDate();
      setConvertedDate(englishDate);
    } else {
      const currentEnglishDate = new Date();
      setSelectedDay(currentEnglishDate.getDate());
      setSelectedMonth(currentEnglishDate.getMonth());
      setSelectedYear(currentEnglishDate.getFullYear());
      const currentNepaliDate = new NepaliDate(currentEnglishDate);
      setConvertedDate(currentNepaliDate.format("DD MMMM, YYYY"));
    }
  }, [conversionType]);

  const dateConvertHandler = (): void => {
    if (
      selectedDay !== undefined &&
      selectedMonth !== undefined &&
      selectedYear !== undefined
    ) {
      if (conversionType === "ad") {
        // Nepali to English (AD)
        const nepaliDate = new NepaliDate(
          selectedYear,
          selectedMonth,
          selectedDay
        );
        const englishDate = nepaliDate.toJsDate();
        setConvertedDate(englishDate);
      } else {
        // English to Nepali (BS)
        const englishDate = new Date(selectedYear, selectedMonth, selectedDay);
        const nepaliDate = new NepaliDate(englishDate);
        setConvertedDate(nepaliDate.format("DD MMMM, YYYY")); // Formatting for Nepali date
      }
    } else {
      alert("Please select all fields.");
    }
  };

  // Format the selected date as a readable string
  const formatSelectedDate = (): string | null => {
    if (
      selectedDay !== undefined &&
      selectedMonth !== undefined &&
      selectedYear !== undefined
    ) {
      const monthNames = conversionType === "ad" ? nepaliMonths : englishMonths;
      return `${selectedDay} ${monthNames[selectedMonth].name}, ${selectedYear}`;
    }
    return null;
  };

  return (
    <div className="p-4 mx-auto mt-8 mb-64 max-w-lg sm:max-w-2xl">
      <h2 className="text-primary text-3xl sm:text-4xl uppercase font-bold mb-8 text-center">
        Date Converter
      </h2>
      <RadioButton
        selectedType={conversionType}
        onSubmit={radioButtonActionHandler}
      />

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
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

        <select
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-darkText"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(Number(e.target.value))}
        >
          <option value="">Select Month</option>
          {(conversionType === "ad" ? nepaliMonths : englishMonths).map(
            (month) => (
              <option key={month.index} value={month.index}>
                {month.name}
              </option>
            )
          )}
        </select>

        <select
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-darkText"
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
        >
          <option value="">Select Year</option>
          {(conversionType === "ad" ? years : englishYears).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="text-center mt-6">
        <button
          className="bg-primary text-white py-2 px-8 rounded-md hover:bg-opacity-90 transition-colors"
          onClick={dateConvertHandler}
        >
          Convert
        </button>
      </div>

      <hr className="my-4 border-t-2 border-primary" />

      <p className="text-primary opacity text-center text-2xl mb-2">
        {formatSelectedDate() ? `${formatSelectedDate()}` : ""}
      </p>

      <h4 className="text-primary opacity-70 text-center font-bold text-3xl sm:text-5xl">
        {convertedDate &&
          (typeof convertedDate === "string"
            ? convertedDate
            : convertedDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }))}
      </h4>
    </div>
  );
};

export default NepaliToEnglishDateConverter;
