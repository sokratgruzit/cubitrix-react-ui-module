import { storiesOf } from "@storybook/react";
import { useState } from "react";
import { Popup } from "../components/Popup";
const stories = storiesOf("AddTransactionPopUp", module);

stories.add("AddTransactionPopUp", () => {
  const [active, setActive] = useState(true);
  const [edit, setEdit] = useState(false);
  const [popUpData, setPopUpData] = useState({
    tx_type: "",
    from: "",
    to: "",
    amount: "",
    tx_currency: "",
  });

  const addTransactionSelects = [
    {
      name: "Tranx Type",
      value: "tx_type",
      infoText: "It must be nice text",
      options: [
        {
          name: "Option1",
          value: "option1",
        },
        {
          name: "Option2",
          value: "option2",
        },
      ],
    },
    {
      name: "Tranx Currency",
      value: "tx_currency",
      options: [
        {
          name: "ETH",
          value: "ETH",
        },
        {
          name: "Option2",
          value: "option2",
        },
      ],
    },
  ];
  const handleAddTransaction = () => {
    console.log("hhiii");
    console.log(popUpData);
  };

  return (
    <div>
      {active && (
        <Popup
          type={"addTransaction"}
          label={`${edit ? "Edit" : "Add"} Transaction`}
          addTransactionSelects={addTransactionSelects}
          handleAddTransaction={handleAddTransaction}
          // addTransactionError={"cant add transaction"}
          handlePopUpClose={() => setActive(false)}
          popUpData={popUpData}
          setPopUpData={setPopUpData}
        />
      )}
    </div>
  );
});
