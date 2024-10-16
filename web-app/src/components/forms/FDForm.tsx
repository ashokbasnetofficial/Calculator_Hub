import React from "react";
import Form from "../UI/Form";
import { IFormField } from "@/interfaces/IFrom";

const FDForm = () => {
  // form submit handler
  const formSubmitHandler = () => {};
  const formRestHandler = () => {};
  const FDFields: IFormField[] = [
    {
      name: "investment_amount",
      label: "Investment Amount",
      type: "number",
      placeholder: "Enter Amount",
    },
    {
      name: "interest_rate",
      label: "Interest Rate (%)",
      type: "number",
      placeholder: "Enter Interest Rate (%)",
    },
    {
      name: "duration",
      label: "Time Period (in Years)",
      type: "number",
      placeholder: "Enter Duration",
    },
    {
      name: "compound_type",
      label: "Compound Type",
      type: "select",
      options: [
        { value: "monthly", label: "Monthly" },
        { value: "quarterly", label: "Quarterly" },
        { value: "semi-annually", label: "Semi Annually" },
        { value: "yearly", label: "Yearly" },
      ],
    },
  ];
  return (
    <Form
      fields={FDFields}
      onSubmit={formSubmitHandler}
      onReset={formRestHandler}
    />
  );
};

export default FDForm;
