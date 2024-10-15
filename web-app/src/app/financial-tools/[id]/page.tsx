"use client";

import EMIForm from "@/components/forms/EMIForm";
import { IEMI } from "@/interfaces/IEMI";

const FinancialToolsCalculator = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const title = id.replace(/-/gi, " ");
  const formHandler = (data: IEMI) => {
    console.log(data);
  };
  return (
    <>
      <h4 className="bg-gradient-to-r from-primary to-primary/80 my-5 text-2xl font-bold text-white rounded w-full h-auto uppercase text-left py-5 pl-5">
        Calculator
      </h4>
      <div className="bg-gray-200 p-4 sm:p-6 md:p-8 rounded mb-4">
        <p className="sm:text-xl text-primary uppercase md:text-lg font-medium mb-4">
          {title}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EMIForm onSubmit={formHandler} />
          <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-4 rounded-lg">
            hello
          </div>
        </div>
      </div>
    </>
  );
};
export default FinancialToolsCalculator;
