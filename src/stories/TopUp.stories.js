import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { TopUp } from "../components/TopUp";

const stories = storiesOf("TopUp", module);

stories.add("ToolTip", () => {
  const methods = [
    {
      id: "USDT",
      title: "USDT",
      logo: "https://shopgeorgia.ge/assets/images/contribute/usdt.png",
    },
    {
      id: "Coinbase",
      title: "Coinbase",
      logo: "https://shopgeorgia.ge/assets/images/contribute/eth.png",
    },
  ];
  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <TopUp
        receivePaymentAddress={"0x420"}
        handlePaymentConfirm={(userAddress, selectedMethod, amount) =>
          console.log("payment confirm", userAddress, selectedMethod, amount)
        }
        methods={methods}
        handleCoindbasePayment={() => console.log("coinbase payment send request")}
      />
    </div>
  );
});
