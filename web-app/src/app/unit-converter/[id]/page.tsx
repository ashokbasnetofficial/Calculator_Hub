"use client";
const UnitConverterCalculator = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <>
      <p>{id}</p>
    </>
  );
};
export default UnitConverterCalculator;
