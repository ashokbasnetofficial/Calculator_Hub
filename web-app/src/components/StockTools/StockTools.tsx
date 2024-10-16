import { IToolsCardContent } from "@/interfaces/IToolsContent";
import React from "react";

import ToolsCardUI from "../UI/ToolsCardUI";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { FaBalanceScale } from "react-icons/fa";
const data: IToolsCardContent[] = [
  {
    key: 1,
    title: "Share Buy Calculator",
    description: "Calculate the cost of buying shares.",
    icon: <FaHandHoldingDollar />,
    href: "/stock-tools/share-buy-calculator",
    styles: "bg-blue-200 text-blue-600",
  },
  {
    key: 2,
    title: "Share Sell Calculator",
    description: "Estimate your returns from selling shares.",
    icon: <FaMoneyCheckAlt />,
    href: "/stock-tools/share-sell-calculator",
    styles: "bg-red-200 text-red-600",
  },
  {
    key: 3,
    title: "Dividend Calculator",
    description: "Determine your dividend income.",
    icon: <FaChartLine />,
    href: "/stock-tools/dividend-calculator",
    styles: "bg-green-200 text-green-600",
  },
  {
    key: 4,
    title: "WACC Calculator",
    description: "Calculate the Weighted Average Cost of Capital.",
    icon: <FaBalanceScale />,
    href: "/financial-tools/wacc-calculator",
    styles: "bg-yellow-200 text-yellow-600",
  },
];

const StockTools = () => {
  return (
    <>
      <ToolsCardUI tools_name="Stock Tools" toolsCard={data} />
    </>
  );
};

export default StockTools;
