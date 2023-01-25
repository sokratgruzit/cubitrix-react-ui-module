import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { WithdrawalPopup } from "../components/WithdrawalPopup";
import { Visual } from "../components/Visual";

const stories = storiesOf("WithdrawalPopup", module);

let data = [
  {
    id: 0,
  },
];

stories.add("WithdrawalPopup", () => {
  return (
    <div>
      <Visual
        label={"Withdrawal"}
        element={"popup-header"}
        customStyles={{
          border: "2px solid #202431",
          width: "596px",
          background: "#141726",
          borderBottomLeftRadius: "0",
          borderBottomRightRadius: "0",
          borderTopRightRadius: "8px",
          borderTopLeftRadius: "8px",
        }}
      />
      <WithdrawalPopup
        type={"withdrawalPopup"}
        customStyles={{ width: "596px" }}
        withdrawalData={data}
      />
    </div>
  );
});
