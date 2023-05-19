import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { Popup } from "../components/Popup";

import { useState } from "react";

const stories = storiesOf("WithdrawPopup", module);

let withdrawData = [
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

stories.add("WithdrawPopup", () => {
  const [payMethod, setPayMethod] = useState("");
  const [currencies, setCurrencies] = useState([]);
  const [tokenPrices, setTokenPrices] = useState([]);

  const handlePayMethodChange = (event) => {
    setPayMethod(event.target.value);
  };
  return (
    // <Popup
    //   type={"withdraw"}
    //   label={"Withdraw"}
    //   withdrawHead={"#6379325951635a33347837434e334e6b345a6e3052513d3d"}
    //   withdrawWallet={"#Withdraw Wallet (BSC)"}
    //   withdrawCode={"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
    //   withdrawTitle={"Withdraw Details"}
    //   withdrawData={withdrawData}
    //   // customStyles={{ width: '100px' }}
    //   // withdrawCustomStyles={{ width: '100px'}}
    // />
    <Popup
      // type={"withdraw"}
      label={"Top up"}
      popUpElement={
        <div>
          <form className="token-purchase">
            <div className="card-head">
              <h4 className="payment__title">
                1.Select the payment method and calculate token price
              </h4>
            </div>
            <div className="token-currency-choose payment-list">
              <div className="payment-list__container">
                {currencies.map((currency, index) => (
                  <div className="payment-list__item" key={index}>
                    <div className="payment-item pay-option">
                      <input
                        className="pay-option-check pay-method"
                        type="radio"
                        id={`pay${currency}`}
                        name="paymethod"
                        value={currency}
                        checked={payMethod === currency}
                        onChange={handlePayMethodChange}
                      />
                      <label className="pay-option-label" htmlFor={`pay${currency}`}>
                        <div className="payment-list__check-icon">
                          {/* SVG goes here */}
                        </div>
                        <span className="pay-title">
                          <img
                            className="pay-check-img"
                            src={`/assets/images/contribute/${currency}.png`}
                            alt="Manual"
                          />
                          <span className="pay-cur">{currency}</span>
                        </span>
                        {tokenPrices[currency] && (
                          <span className="pay-amount">
                            {tokenPrices[currency]} {currency.toUpperCase()}
                          </span>
                        )}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
              <div className="payment-list__sub-container">
                <span>You can use these currencies to pay —</span>
                {/* SVG goes here */}
              </div>
            </div>
          </form>
        </div>
      }
      // withdrawHead={"#6379325951635a33347837434e334e6b345a6e3052513d3d"}
      // withdrawWallet={"#Withdraw Wallet (BSC)"}
      // withdrawCode={"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
      // withdrawTitle={"Withdraw Details"}
      // withdrawData={withdrawData}
      // customStyles={{ width: '100px' }}
      // withdrawCustomStyles={{ width: '100px'}}
    />
  );
});
