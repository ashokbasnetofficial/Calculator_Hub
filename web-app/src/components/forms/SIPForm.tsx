import React from "react";
import Form from "../UI/Form";
import { IFormField } from "@/interfaces/IFrom";

const SIPForm = () => {
  // form submit handler
  const formSubmitHandler = () => {};
  const formRestHandler = () => {};
  const sipFields: IFormField[] = [
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
      placeholder: "Enter Interest Rate",
    },
    {
      name: "duration",
      label: "Duration (Months)",
      type: "number",
      placeholder: "Enter Duration",
    },
    {
      name: "investment_period",
      label: "Investment Period",
      type: "select",
      options: [
        { value: "monthly", label: "Monthly" },
        { value: "quarterly", label: "Quarterly" },
        { value: "yearly", label: "Yearly" },
      ],
    },
  ];
  return (
    <Form
      fields={sipFields}
      onSubmit={formSubmitHandler}
      onReset={formRestHandler}
    />
  );
};

export default SIPForm;
