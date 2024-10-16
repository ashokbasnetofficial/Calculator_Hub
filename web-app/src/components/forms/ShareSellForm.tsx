import React, { useState } from "react";
import Form from "../UI/Form";
import { IFormField } from "@/interfaces/IFrom";

const ShareSellForm = () => {
  const [investmentType, setInvestmentType] = useState("individual");

  // form submit handler
  const formSubmitHandler = () => {};
  const formResetHandler = () => {};

  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setInvestmentType(event.target.value);
  };

  const ShareSellFields: IFormField[] = [
    {
      name: "share_quantity",
      label: "Share Quantity (Kitta)",
      type: "number",
      placeholder: "Enter total kitta",
    },
    {
      name: "purchase_price",
      label: "Purchase Price",
      type: "number",
      placeholder: "Enter purchase price",
    },
    {
      name: "selling_price",
      label: "Selling Price",
      type: "number",
      placeholder: "Enter selling price",
    },
    {
      name: "investment_type",
      label: "Investment Type",
      type: "select",
      options: [
        { value: "individual", label: "Individual" },
        { value: "institutional", label: "Institutional" },
      ],
      onChange: handleChange,
    },
    {
      name: "capital_gain",
      label: "Capital Gain Tax (%)",
      type: "select",
      options:
        investmentType === "individual"
          ? [
              { value: "5", label: "5%" },
              { value: "7.5", label: "7.5%" },
            ]
          : [{ value: "10", label: "10%" }],
    },
  ];

  return (
    <Form
      fields={ShareSellFields}
      onSubmit={formSubmitHandler}
      onReset={formResetHandler}
    />
  );
};

export default ShareSellForm;
