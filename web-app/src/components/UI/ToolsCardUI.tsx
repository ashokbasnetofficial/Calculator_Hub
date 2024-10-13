import React from "react";
import style from "@/components/UI/ToolCardUI.module.css";
import Card from "./Card";

import { IToolsCardContent } from "@/interfaces/IToolsContent";
interface ToolsProps {
  tools_name: string;
  toolsCard: IToolsCardContent[];
}

const ToolsCardUI: React.FC<ToolsProps> = (props) => {
  return (
    <>
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center relative">
          <h2 className="text-4xl md:text-4xl font-extrabold tracking-tight relative inline-block">
            <span className="text-indigo-800 dark:text-indigo-600">
              {" "}
              <a className="no-underline" href="https://neptools.com/nepali-tools">
               {props.tools_name}
              </a>
            </span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="4"
              viewBox="0 0 200 4"
              preserveAspectRatio="none"
            >
              <path
                d="M0 2 Q50 4 100 2 T200 2"
                stroke="currentColor"
                stroke-width="4"
                fill="none"
                className="text-indigo-800 dark:text-indigo-600 transition-all duration-300 ease-in-out"
              />
            </svg>
          </h2>
          <p className="text-primary/80 mt-4">
            Explore Nepali tools crafted to make your everyday tasks easier and
            more efficient.
          </p>
          <div className="mt-8 flex justify-center space-x-2">
            <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
            <span className="w-2 h-2 bg-blue-400 dark:bg-blue-200 rounded-full"></span>
            <span className="w-2 h-2 bg-blue-200 dark:bg-blue-600 rounded-full"></span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap flex-row mt-5 justify-center gap-4 items-center">
        {props.toolsCard.map((item) => (
          <Card href={item.href} key={item.key} styles="h-52">
            <div className="flex justify-between  mb-2 items-center">
              <span
                className={` w-16 h-16 ${item.styles} flex font-semibold items-center justify-center rounded-lg`}
              >
                {item.icon}
              </span>
            </div>
            <h5 className=" text-xl font-bold mt-4 text-darkText">
              {item.title}
            </h5>
            <p className="text-primary text-sm mt-2 pb-4">{item.description}</p>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ToolsCardUI;
