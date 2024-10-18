"use client";

import DividendForm from "@/components/forms/DividendForm";
import ShareBuyForm from "@/components/forms/ShareBuyForm";
import ShareSellForm from "@/components/forms/ShareSellForm";
import {
  StockResultData,
  StockCalculatorKeys,
} from "@/interfaces/IStockResult"; // Make sure to import your keys
import { stockresultLabels } from "@/utils/stockResultLabel";

const StockToolsCalculator = ({
  params,
}: {
  params: { id: StockCalculatorKeys };
}) => {
  // Type 'id' for strictness
  const { id } = params;
  const title = id.replace(/-/gi, " ");

  const forms: { [key in StockCalculatorKeys]: React.FC } = {
    // Type forms correctly
    "share-buy-calculator": ShareBuyForm,
    "share-sell-calculator": ShareSellForm,
    "dividend-calculator": DividendForm,
  };

  const stockresultData: StockResultData = {
    "share-sell-calculator": {
      investor_type: "",
      total_amount: 0,
      broker_commission_fee: 0,
      sebon_fee: 0,
      dp_charge: 0,
      total_capital_gain_tax: 0,
      total_receivable: 0,
      profit_loss: 0,
    },
    "dividend-calculator": {
      total_cash_amount: 0,
      cash_dividend_tax: 0,
      bonus_dividend_tax: 0,
      total_payable_tax: 0,
      receivable_bonus: 0,
    },
    "share-buy-calculator": {
      total_amount: 0,
      dp_charge: 0,
      sebon_fee: 0,
      broker_commission_fee: 0,
      total_payable_amount: 0,
      total_cost_per_share: 0,
    },
  };

  const FormComponent = forms[id];
  const results = stockresultData[id];
  const labels = stockresultLabels[id];

  return (
    <>
      <h4 className="bg-gradient-to-r from-primary to-primary/80 my-5 text-2xl font-bold text-white rounded w-full h-auto uppercase text-left py-5 pl-5">
        Calculator
      </h4>
      <div className="bg-gray-200 p-4 sm:p-6 md:p-8 rounded mb-4 shadow-md">
        <p className="sm:text-xl text-primary uppercase md:text-lg font-semibold mb-4">
          {title}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {<FormComponent />}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-4 rounded-lg">
            {Object.keys(results).map((key, index) => (
              <div key={index}>
                <p className="md:text-xl track">{labels[index]}</p>
                <p className="lg:text-3xl md:text-2xl sm:text-xl font-bold mb-2">
                  {typeof results[key as keyof typeof results] !== "string" &&
                  results[key as keyof typeof results] !== undefined &&
                  labels[index].toLowerCase() !== "receiveable bonus"
                    ? `Rs. ${results[key as keyof typeof results]}`
                    : `${results[key as keyof typeof results]}`}
                </p>

                {index < Object.keys(results).length - 1 && (
                  <hr className="mb-2 border-4 border-white" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StockToolsCalculator;
