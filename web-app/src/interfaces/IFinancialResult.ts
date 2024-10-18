interface SIPCalculatorResult {
    total_investment: number;
    estimated_return: number;
    estimated_total_return: number;
  }
  
  interface LoanCalculatorResult {
    total_loan_amount: number;
    monthly_emi: number;
    total_interest: number;
  }
  
  interface FDCalculatorResult {
    total_interest: number;
    total_return_amount: number;
  }
  
  interface ROICalculatorResult {
    total_gain_on_investment: number;
    return_on_investment: number;
    simple_annual_roi: number;
    cagr: number;
  }
  
  interface RDCalculatorResult {
    invested_amount: number;
    estimated_returns: number;
    total_value: number;
  }
  
  interface SWPCalculatorResult {
    total_investment: number;
    total_withdrawal: number;
    final_value: number;
  }
  
  // Define a type that combines all these interfaces
 export  type CalculatorResultData = {
    "sip-calculator": SIPCalculatorResult;
    "loan-calculator": LoanCalculatorResult;
    "fd-calculator": FDCalculatorResult;
    "roi-calculator": ROICalculatorResult;
    "rd-calculator": RDCalculatorResult;
    "swp-calculator": SWPCalculatorResult;
  };
  