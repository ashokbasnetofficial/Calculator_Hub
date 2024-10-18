// Define the keys for resultLabels
type CalculatorKeys =
  | "sip-calculator"
  | "loan-calculator"
  | "fd-calculator"
  | "swp-calculator"
  | "roi-calculator"
  | "rd-calculator";

export type CalculatorLabels = string[];

export const resultLabels: Record<CalculatorKeys, CalculatorLabels> = {
  "sip-calculator": [
    "Total Investment",
    "Estimated Return",
    "Estimated Total Return",
  ],
  "loan-calculator": [
    "Total Loan Amount",
    "EMI per Month",
    "Total Interest Payable",
  ],
  "fd-calculator": ["Total Interest Amount", "Total Return Amount"],
  "swp-calculator": ["Total Investment", "Total Withdrawal", "Final Value"],
  "roi-calculator": [
    "Total Gain on Investment",
    "Return on Investment (ROI)",
    "Simple Annual (ROI)",
    "Compound Annual Growth Rate (CAGR)",
  ],
  "rd-calculator": ["Invested Amount", "Estimated Returns", "Total Value"],
};
