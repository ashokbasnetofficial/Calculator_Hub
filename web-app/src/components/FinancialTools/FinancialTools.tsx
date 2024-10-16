import { IToolsCardContent } from "@/interfaces/IToolsContent";
import React from "react";
import {
  FaHandHoldingUsd,
  FaPiggyBank,
  FaChartLine,
  FaCoins,
  FaPercentage,
} from "react-icons/fa"; // Different icons
import ToolsCardUI from "../UI/ToolsCardUI";
import { FiDollarSign } from "react-icons/fi";
import { FaFileInvoiceDollar } from "react-icons/fa";

const data: IToolsCardContent[] = [
  {
    key: 1,
    title: "EMI Calculator",
    description: "Calculate EMI Amount",
    icon: <FaHandHoldingUsd size={30} />, // Icon for EMI Calculator
    href: "/financial-tools/loan-calculator",
    styles: "bg-blue-200 text-blue-600", // Unique style for EMI Calculator
  },
  {
    key: 2,
    title: "SWP Calculator",
    description: "Calculate SWP Amount",
    icon: <FaPiggyBank />, // Icon for SWP Calculator
    href: "/financial-tools/swp-calculator",
    styles: "bg-green-200 text-green-600", // Unique style for SWP Calculator
  },
  {
    key: 3,
    title: "SIP Calculator",
    description: "Calculate SIP Amount",
    icon: <FaChartLine />, // Icon for SIP Calculator
    href: "/financial-tools/sip-calculator",
    styles: "bg-purple-200 text-purple-600", // Unique style for SIP Calculator
  },
  {
    key: 4,
    title: "FD Calculator",
    description: "Calculate Fixed Deposit Interest",
    icon: <FaCoins />, // Icon for FD Calculator
    href: "/financial-tools/fd-calculator",
    styles: "bg-yellow-200 text-yellow-600", // Unique style for FD Calculator
  },
  {
    key: 5,
    title: "ROI Calculator",
    description: "Calculate Return on Investment",
    icon: <FaPercentage />, // Icon for ROI Calculator
    href: "/financial-tools/roi-calculator",
    styles: "bg-red-200 text-red-600", // Unique style for ROI Calculator
  },
  {
    key: 6,
    title: "InCome Tax Calculator",
    description: "Calculate InCome Tax",
    icon: <FaFileInvoiceDollar />, // Icon for ROI Calculator
    href: "/financial-tools/income-tax-calculator",
    styles: "bg-pink-200 text-pink-600", // Unique style for ROI Calculator
  },
  {
    key: 7,
    title: "RD Calculator",
    description: "Calculate Recurring Deposit",
    icon: <FiDollarSign />, // Icon for ROI Calculator
    href: "/financial-tools/rd-calculator",
    styles: "bg-cyan-200 text-cyan-600", // Unique style for ROI Calculator
  },
];

const FinancialTools = () => {
  return (
    <>
      <ToolsCardUI tools_name="Financial Tools" toolsCard={data} />
    </>
  );
};

export default FinancialTools;
