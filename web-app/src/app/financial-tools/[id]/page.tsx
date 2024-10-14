"use client";
const FinancialToolsCalculator = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <>
      <p>{id}</p>
    </>
  );
};
export default FinancialToolsCalculator;
