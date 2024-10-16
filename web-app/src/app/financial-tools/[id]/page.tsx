"use client";
import EMIForm from "@/components/forms/EMIForm";
import FDForm from "@/components/forms/FDForm";
import RDForm from "@/components/forms/RDForm";
import ROIForm from "@/components/forms/ROIForm";
import SIPForm from "@/components/forms/SIPForm";
import SWPForm from "@/components/forms/SWPForm";
import { resultLabels } from "@/utils/financialResultLabels";
const FinancialToolsCalculator = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const title = id.replace(/-/gi, " ");
  const formComponents: any = {
    "sip-calculator": SIPForm,
    "fd-calculator": FDForm,
    "swp-calculator": SWPForm,
    "loan-calculator": EMIForm,
    "roi-calculator": ROIForm,
    "rd-calculator": RDForm,
  };
  //store results
  const resultData: any = {
    "sip-calculator": {
      total_investment: 0,
      estimated_return: 0,
      estimated_total_return: 0,
    },
    "loan-calculator": {
      total_loan_amount: 0,
      monthly_emi: 0,
      total_interest: 0,
    },
    "fd-calculator": {
      total_interest: 0,
      total_return_amount: 0,
    },
    "roi-calculator": {
      total_gain_on_investment: 0,
      return_on_investment: 0,
      simple_annual_roi: 0,
      cagr: 0,
    },
    "rd-calculator": {
      invested_amount: 0,
      estimated_returns: 0,
      total_value: 0,
    },
    "swp-calculator": {
      total_investment: 0,
      total_withdrawal: 0,
      final_value: 0,
    },
  };
  const labels = resultLabels[id];
  const results = resultData[id];
  const FormComponent = formComponents[id];
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
          <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-4 rounded-lg">
            {Object.keys(results).map((key, index) => (
              <div key={index}>
                <p className="md:text-xl track">{labels[index]}</p>
                <p className="lg:text-3xl md:text-2xl sm:text-xl font-bold mb-2">
                  {typeof results[key] !== "string" &&
                  results[key] !== undefined &&
                  labels[index].toLowerCase() !== "receiveable bonus"
                    ? `Rs. ${results[key]}`
                    : `${results[key]}`}
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
export default FinancialToolsCalculator;
