"use client";
const StockCalculator = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <>
      <p>{id}</p>
    </>
  );
};
export default StockCalculator;
