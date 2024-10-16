import React from "react";
import Form from "../UI/Form";
import { IFormField } from "@/interfaces/IFrom";

const ROIForm = () => {
  // form submit handler
  const formSubmitHandler = () => {};
  const formRestHandler = () => {};
  const ROIFields: IFormField[] = [
    {
      name: "amount_invested",
      label: "Amount Invested",
      type: "number",
      placeholder: "Enter Amount",
    },
    {
      name: "amount_returned",
      label: "Amount Returned",
      type: "number",
      placeholder: "Enter Return Amount ",
    },
    {
      name: "investment_period",
      label: "Investment Period (in Years)",
      type: "number",
      placeholder: "Enter Investment Period",
    },
  ];
  return (
    <Form
      fields={ROIFields}
      onSubmit={formSubmitHandler}
      onReset={formRestHandler}
    />
  );
};

export default ROIForm;
