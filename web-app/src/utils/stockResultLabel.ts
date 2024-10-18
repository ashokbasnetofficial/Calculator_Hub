type StockCalculatorKeys = 
  | "share-sell-calculator"
  | "dividend-calculator"
  | "share-buy-calculator";

export type StockCalculatorLabels = string[];

export const stockresultLabels: Record<StockCalculatorKeys, StockCalculatorLabels> = {
  "share-sell-calculator": [
    "Investor Type",
    "Total Amount",
    "Broker Commission Fee",
    "SEBON Fee",
    "DP Charge",
    "Total Capital Gain Tax",
    "Total Receivable",
    "Profit/Loss",
  ],
  "dividend-calculator": [
    "Total Cash Amount",
    "Cash Dividend Tax (5%)",
    "Bonus Dividend Tax (5%)",
    "Total Payable Tax",
    "Receivable Bonus",
  ],
  "share-buy-calculator": [
    "Total Amount",
    "DP Charge",
    "SEBON Fee",
    "Broker Commission Fee",
    "Total Payable Amount",
    "Total Cost Per Share",
  ],
};
