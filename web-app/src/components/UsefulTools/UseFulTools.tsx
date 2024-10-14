import { IToolsCardContent } from "@/interfaces/IToolsContent";
import React from "react";

import ToolsCardUI from "../UI/ToolsCardUI";
import { 
  FaFont, 
  FaMapMarkedAlt, 
  FaCalendarAlt, 
  FaBirthdayCake, 
  FaMoneyBillWave 
} from "react-icons/fa"; // Icons for each Nepali tool

const data: IToolsCardContent[] = [
  {
    key: 1,
    title: "Preeti to Unicode",
    description: "Convert text from Preeti font to Unicode format.",
    icon: <FaFont />,
    href: "/tools/preeti-to-unicode",
    styles: "bg-blue-100 text-blue-700",
  },
  {
    key: 2,
    title: "Unicode to Preeti",
    description: "Convert text from Unicode format to Preeti font.",
    icon: <FaFont />,
    href: "/tools/unicode-to-preeti",
    styles: "bg-purple-100 text-purple-700",
  },
  {
    key: 3,
    title: "Jagga Napi",
    description: "Nepal's land measurement tool for converting between different land units.",
    icon: <FaMapMarkedAlt />,
    href: "/tools/jagga-napi",
    styles: "bg-green-100 text-green-700",
  },
  {
    key: 4,
    title: "Nepali to English Date Converter",
    description: "Convert Nepali date (B.S.) to English date (A.D.).",
    icon: <FaCalendarAlt />,
    href: "/tools/nepali-to-english-date-converter",
    styles: "bg-red-100 text-red-700",
  },
  {
    key: 5,
    title: "English to Nepali Date Converter",
    description: "Convert English date (A.D.) to Nepali date (B.S.).",
    icon: <FaCalendarAlt />,
    href: "/tools/english-to-nepali-date-converter",
    styles: "bg-yellow-100 text-yellow-700",
  },
  {
    key: 6,
    title: "Age Calculator",
    description: "Calculate your age based on your birthdate.",
    icon: <FaBirthdayCake />,
    href: "/tools/age-calculator",
    styles: "bg-teal-100 text-teal-700",
  },
  {
    key: 7,
    title: "Currency Converter",
    description: "Convert between NPR and other currencies.",
    icon: <FaMoneyBillWave />,
    href: "/tools/currency-converter",
    styles: "bg-orange-100 text-orange-700",
  }
];

const UsefulTools = () => {
  return (
    <>
      <ToolsCardUI tools_name="Useful Tools" toolsCard={data} />
    </>
  );
};

export default UsefulTools;
