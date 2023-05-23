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

  const paymentTypes = [
    {
      id: 1,
      title: "Pay via Crypto",
      logo: "https://shopgeorgia.ge/assets/images/pay-manual.png",
    },
    {
      id: 2,
      title: "Pay with CoinBase",
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
        handleCoindbasePayment={(e) => console.log("coinbase payment send request", e)}
        tranasctionFee={`1 USDT`}
        paymentAmount={`2.192810859999999806 USDT`}
        paymentTypes={paymentTypes}
      />
    </div>
  );
});
