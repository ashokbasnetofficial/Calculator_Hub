"use client";
const UsefulCalculator = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <>
      <p>{id}</p>
    </>
  );
};
export default UsefulCalculator;
