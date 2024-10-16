import React from "react";
import Form from "../UI/Form";
import { IFormField } from "@/interfaces/IFrom";

const DividendForm = () => {
  // form submit handler
  const formSubmitHandler = () => {};
  const formRestHandler = () => {};
  const DividendFields: IFormField[] = [
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
      placeholder: "Enter Return Amount ",
    },
    {
      name: "cash_dividend",
      label: "% of Cash Dividend",
      type: "number",
      placeholder: "Cash dividend % ",
    },
    {
      name: "bonus_share",
      label: "% of Bonus Share",
      type: "number",
      placeholder: "Enter Bonus Share %",
    },
    {
      name: "paid-value",
      label: "Paid-up Value per Share",
      type: "select",
      options: [
        { value: "100", label: "100" },
        { value: "50", label: "50" },
        { value: "10", label: "10" },
      ],
    },
  ];
  return (
    <Form
      fields={DividendFields}
      onSubmit={formSubmitHandler}
      onReset={formRestHandler}
    />
  );
};

export default DividendForm;
