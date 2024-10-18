// Define interfaces for each calculator's result data
interface ShareSellCalculatorResult {
  investor_type: string;
  total_amount: number;
  broker_commission_fee: number;
  sebon_fee: number;
  dp_charge: number;
  total_capital_gain_tax: number;
  total_receivable: number;
  profit_loss: number;
}

interface DividendCalculatorResult {
  total_cash_amount: number;
  cash_dividend_tax: number;
  bonus_dividend_tax: number;
  total_payable_tax: number;
  receivable_bonus: number;
}

interface ShareBuyCalculatorResult {
  total_amount: number;
  dp_charge: number;
  sebon_fee: number;
  broker_commission_fee: number;
  total_payable_amount: number;
  total_cost_per_share: number;
}

export type StockCalculatorKeys =
  | "share-sell-calculator"
  | "dividend-calculator"
  | "share-buy-calculator";

export interface StockResultData {
  [key: string]:
    | ShareSellCalculatorResult
    | DividendCalculatorResult
    | ShareBuyCalculatorResult;
}
