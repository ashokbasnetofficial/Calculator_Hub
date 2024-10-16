import React from "react";
import Form from "../UI/Form";
import { IFormField } from "@/interfaces/IFrom";

const ShareBuyForm = () => {
  // form submit handler
  const formSubmitHandler = () => {};
  const formRestHandler = () => {};
  const ShareBuyFields: IFormField[] = [
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
    }
  ];
  return (
    <Form
      fields={ShareBuyFields}
      onSubmit={formSubmitHandler}
      onReset={formRestHandler}
    />
  );
};

export default ShareBuyForm;
