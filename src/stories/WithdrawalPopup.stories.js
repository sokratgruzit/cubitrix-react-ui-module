import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { WithdrawalPopup } from "../components/WithdrawalPopup";

const stories = storiesOf("WithdrawalPopup", module);

stories.add("WithdrawalPopup", () => {
  return (
    <div>
      <WithdrawalPopup type={"withdrawalPopup"} />
    </div>
  );
});
