import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { GrLineChart } from "react-icons/gr";
import { GoArrowSwitch } from "react-icons/go";
import { FaDollarSign } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import Card from "../Card";
interface tools {
  key: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  styles: string;
}
export const tools_data: tools[] = [
  {
    key: 1,
    title: "Financial Tools",
    description:
      "You can evaluate the EMI, SIP, SWP and other financial calculation from this tools.",
    icon: <FaDollarSign strokeWidth={10} />,
    href: "/financial-tools",
    styles: "bg-primary/10 text-primary px-2 font-medium",
  },
  {
    key: 2,
    title: "Stock Market Tools",
    description:
      "You can evaluate the EMI, SIP, SWP and other financial calculation from this tools.",
    icon: <GrLineChart />,
    href: "/stock-tools",
    styles: "bg-accent/10 text-accent px-2 font-medium",
  },
  {
    key: 3,
    title: "Unit Converter",
    description:
      "You can evaluate the EMI, SIP, SWP and other financial calculation from this tools.",
    icon: <GoArrowSwitch />,
    href: "/unit-converters",
    styles: "bg-secondary/10 text-secondary px-2 font-medium",
  },
  {
    key: 4,
    title: "Useful Tools",
    description:
      "You can evaluate the EMI, SIP, SWP and other financial calculation from this tools.",
    icon: <FaTools />,
    href: "/useful-tools",
    styles: "bg-highlight/10 text-highlight px-2 font-medium",
  },
];

export const HeroUI = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-auto flex-col p-6 mt-10 ">
        <h1 className="text-4xl lg:text-6xl font-bold text-primary text-center mb-4">
          Efficiency at Your Fingertips
        </h1>
        <p className="text-base lg:text-xl text-darkText opacity-80 text-center mb-6 px-4 lg:px-0 max-w-2xl mt-10">
          Your all-in-one solution for financial tools, stock calculators, unit
          converters, and more, designed to simplify your daily calculations
          with ease and accuracy.
        </p>
        <div className="relative w-full max-w-lg mb-6 h-12 mt-5">
          {/* Search Icon */}
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-darkText h-12 text-xl opacity-35">
            <IoMdSearch />
          </span>
          {/* Input Field */}
          <input
            type="text"
            placeholder="Search calculator ..."
            className="w-full py-2 pl-10 pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-primary text-darkText text-lg h-12"
          />
          {/* Pointer Icon */}
          <span className="absolute inset-y-0 rounded-br-full rounded-tr-full right-0 flex items-center pr-3 bg-primary px-4 text-white h-12">
            <FaArrowRightLong />
          </span>
        </div>
        <div className="flex flex-wrap gap-4">
          <button className="py-1 px-3 bg-primary/10 text-primary rounded-full text-xs hover:bg-primary/20 transition-all">
            Financial Tools
          </button>
          <button className="py-1 px-3 bg-accent/10 text-accent rounded-full text-xs hover:bg-accent/20 transition-all">
            Stock Tools
          </button>
          <button className="py-1 px-3 bg-secondary/10 text-secondary rounded-full text-xs hover:bg-secondary/30 transition-all">
            Unit Converter
          </button>
          <button className="py-1 px-3 bg-highlight/10 text-highlight rounded-full text-xs hover:bg-highlight/30 transition-all">
            Useful Tools
          </button>
        </div>
        <div className="flex flex-wrap flex-row gap-6 mt-5 justify-between items-center">
          {tools_data.map((item) => (
            <Card href={item.href} key={item.key}>
              <div className="flex justify-between mb-2 items-center">
                <span
                  className={` w-14 h-14 ${item.styles} flex font-bold items-center justify-center rounded-full`}
                >
                  {item.icon}
                </span>
                <button
                  className={`px-1 h-6  ${item.styles} rounded-full text-xs hover:bg-primary/20 transition-all`}
                >
                  {item.title}
                </button>
              </div>
              <h5 className="font-bold mt-4 text-primary">{item.title}</h5>
              <p className="text-primary text-xs mt-2">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
