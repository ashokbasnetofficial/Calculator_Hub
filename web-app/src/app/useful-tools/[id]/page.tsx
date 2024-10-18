"use client";

import NepaliToEnglishDateConverter from "@/components/forms/NepaliDateConverterForm";
import UnicodeToPreeti from "@/components/forms/UnicodeToPreeti";

const UsefulCalculator = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const renderComponents: { [key: string]: JSX.Element } = {
    "nepali-to-english-date-converter": (
      <NepaliToEnglishDateConverter selectType="ad" />
    ),
    "english-to-nepali-date-converter": (
      <NepaliToEnglishDateConverter selectType="bs" />
    ),
    "unicode-to-preeti": <UnicodeToPreeti />,
  };

  const RenderComponent = renderComponents[id as keyof typeof renderComponents];

  if (!RenderComponent) {
    return <p>Invalid Calculator ID</p>;
  }

  return <>{RenderComponent}</>;
};

export default UsefulCalculator;
