import React from "react";
import Form from "../UI/Form";
import { IFormField } from "@/interfaces/IFrom";

const RDForm = () => {
  // form submit handler
  const formSubmitHandler = () => {};
  const formRestHandler = () => {};
  const RDFields: IFormField[] = [
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
      name: "investment_period",
      label: "Investment Period",
      type: "select",
      options: [
        { value: "monthly", label: "Monthly" },
        { value: "yearly", label: "Yearly" },
      ],
    },
  ];
  return (
    <Form
      fields={RDFields}
      onSubmit={formSubmitHandler}
      onReset={formRestHandler}
    />
  );
};

export default RDForm;
