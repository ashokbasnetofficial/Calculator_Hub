import React from "react";
import Form from "../UI/Form";
import { IFormField } from "@/interfaces/IFrom";
const SWPForm = () => {
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
      name: "withdrawal_per_month",
      label: "Withdrawal Per Month",
      type: "number",
      placeholder: "Enter withdrawal amount",
    },
    {
      name: "expected_return rate",
      label: "Expected Return Rate",
      type: "number",
      placeholder: "%",
    },
    {
      name: "time_period",
      label: "Time Period (Years)",
      type: "number",
      placeholder: "Enter time period",
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

export default SWPForm;
