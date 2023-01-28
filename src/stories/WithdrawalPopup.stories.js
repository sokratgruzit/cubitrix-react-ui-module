import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { Popup } from "../components/Popup";
import { Visual } from "../components/Visual";
import { WithdrawalPopup } from "../components/WithdrawalPopup";

const stories = storiesOf("WithdrawalPopup", module);

let data = [
  {
    id: 0,
    name: "Request By",
    user: "mariam",
    sub: "mariamtalakhadze01@gmail.com",
  },
  {
    id: 1,
    name: "Request At",
    user: "14.10.2021",
    sub: "04:00 AM",
  },
  {
    id: 2,
    name: "Tokens",
    user: "1,250 CMCX",
  },
  {
    id: 3,
    name: "Details",
    user: "Tokens Withdraw",
  },
];

stories.add("WithdrawalPopup", () => {
  return (
    <div className="popup-wraper">
      <WithdrawalPopup
        head={"#6379325951635a33347837434e334e6b345a6e3052513d3d"}
        label={"Withdrawal"}
        wallet={"#Withdraw Wallet (BSC)"}
        code={"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
        title={"Withdraw Details"}
        type={"withdrawalPopup"}
        withdrawalData={data}
      />
    </div>
  );
});
