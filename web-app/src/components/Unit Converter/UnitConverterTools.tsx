import { IToolsCardContent } from "@/interfaces/IToolsContent";
import React from "react";

import ToolsCardUI from "../UI/ToolsCardUI";
import { 
  FaWeightHanging, 
  FaRuler, 
  FaThermometerHalf, 
  FaTachometerAlt, 
  FaClock, 
  FaLightbulb, 
  FaBatteryFull, 
  FaTint, 
  FaCube, 
  FaMicrochip 
} from "react-icons/fa"; // Icons for each unit converter

const data: IToolsCardContent[] = [
  {
    key: 1,
    title: "Weight Converter",
    description: "Convert between different weight units like kg, lb, etc.",
    icon: <FaWeightHanging />,
    href: "/unit-converter/weight-converter",
    styles: "bg-blue-100 text-blue-700",
  },
  {
    key: 2,
    title: "Length Converter",
    description: "Convert between meters, feet, inches, and other length units.",
    icon: <FaRuler />,
    href: "/unit-converter/length-converter",
    styles: "bg-purple-100 text-purple-700",
  },
  {
    key: 3,
    title: "Temperature Converter",
    description: "Convert between Celsius, Fahrenheit, and Kelvin.",
    icon: <FaThermometerHalf />,
    href: "/unit-converter/temperature-converter",
    styles: "bg-red-100 text-red-700",
  },
  {
    key: 4,
    title: "Speed Converter",
    description: "Convert between km/h, mph, m/s, and other speed units.",
    icon: <FaTachometerAlt />,
    href: "/unit-converter/speed-converter",
    styles: "bg-green-100 text-green-700",
  },
  {
    key: 5,
    title: "Time Converter",
    description: "Convert between different units of time like seconds, minutes, and hours.",
    icon: <FaClock />,
    href: "/unit-converter/time-converter",
    styles: "bg-yellow-100 text-yellow-700",
  },
  {
    key: 6,
    title: "Power Converter",
    description: "Convert between watts, kilowatts, horsepower, and other power units.",
    icon: <FaLightbulb />,
    href: "/unit-converter/power-converter",
    styles: "bg-orange-100 text-orange-700",
  },
  {
    key: 7,
    title: "Energy Converter",
    description: "Convert between joules, calories, kilowatt-hours, and other energy units.",
    icon: <FaBatteryFull />,
    href: "/unit-converter/energy-converter",
    styles: "bg-teal-100 text-teal-700",
  },
  {
    key: 8,
    title: "Volume Converter",
    description: "Convert between liters, milliliters, gallons, and other volume units.",
    icon: <FaTint />,
    href: "/unit-converter/volume-converter",
    styles: "bg-pink-100 text-pink-700",
  },
  {
    key: 9,
    title: "Area Converter",
    description: "Convert between square meters, acres, square feet, and other area units.",
    icon: <FaCube />,
    href: "/unit-converter/area-converter",
    styles: "bg-indigo-100 text-indigo-700",
  },
  {
    key: 10,
    title: "Data Storage Converter",
    description: "Convert between bytes, kilobytes, megabytes, gigabytes, and other data units.",
    icon: <FaMicrochip />,
    href: "/unit-converter/data-storage-converter",
    styles: "bg-gray-100 text-gray-700",
  },
];

const UnitConverterTools = () => {
  return (
    <>
      <ToolsCardUI tools_name="Unit Converter Tools" toolsCard={data} />
    </>
  );
};

export default UnitConverterTools;
