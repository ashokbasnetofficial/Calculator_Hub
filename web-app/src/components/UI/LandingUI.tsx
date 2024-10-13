"use client";
import React from "react";
import { HeroUI } from "./Hero/HeroUI";
import FinancialTools from "../FinancialTools/FinancialTools";
import StockTools from "../StockTools/StockTools";
import UnitConverterTools from "../Unit Converter/UnitConverterTools";
import UsefulTools from "../UsefulTools/UseFulTools";
const LandingUI = () => {
  return (
    <>
      <HeroUI />
      <div className="bg-gradient-to-t from-blue-50 via-indigo-50 to-indigo-100 pt-5 o">
        <FinancialTools />
        <StockTools />
        <UnitConverterTools />
        <UsefulTools />
      </div>
    </>
  );
};

export default LandingUI;
