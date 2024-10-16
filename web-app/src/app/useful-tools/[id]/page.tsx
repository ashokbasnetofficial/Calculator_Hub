"use client";

import NepaliToEnglishDateConverter from "@/components/forms/NepaliDateConverterForm";

const UsefulCalculator = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <>
      <NepaliToEnglishDateConverter />
    </>
  );
};
export default UsefulCalculator;
