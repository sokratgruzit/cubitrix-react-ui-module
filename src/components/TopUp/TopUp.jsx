import { Popup } from "../Popup";
import { useState } from "react";
import { Button } from "../Button";
import PaymentPopup from "./PaymentPopup";
import ConfirmPaymentPopup from "./ConfirmPaymentPopup";
import { Input } from "../Input";
import { HelpText } from "../HelpText";
import translates from "../../translates.json";

import "./TopUp.css";

export const TopUp = ({
  address,
  handlePaymentConfirm,
  receivePaymentAddress,
  methods = [],
  qrcode,
  handleCoindbasePayment,
  tranasctionFee,
  exchangeRate,
  paymentAmount,
  paymentTypes,
  handlePurchaseEvent,
}) => {
  const [x, setCurrencies] = useState([
    "ETH",
    "BTC",
    "LTC",
    "BNB",
    "BCH",
    "USDT",
  ]);
  const [purchaseLimit, setPurchaseLimit] = useState(500000);
  const [selectedMethod, setSelectedMethod] = useState("Coinbase");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState();
  const [tokenAmount, setTokenAmount] = useState(0);
  const [tokenError, setTokenError] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [openConfirmPaymentPopup, setOpenConfirmPaymentPopup] = useState(false);

  const [selectedMethodPopup, setSelectedMethodPopup] = useState(null);
  const [agreed, setAgreed] = useState(false);

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
  };

  const handleTokenAmountChange = (event) => {
    const value = event.target.value;
    console.log(value);
    if (!isNaN(value) && value >= 0) {
      if (value > 0) setTokenError(null);
      setTokenAmount(Number(value));
      console.log(tokenAmount);
    }
  };

  const handlePurchase = () => {
    if (tokenAmount <= 0) {
      setTokenError("Amount has to be greater than 0");
      return;
    }
    setTokenError(null);
    setOpenPopup(true);
  };

  return (
    <div className="topup_main">
      <p className="topup_title">
        1. Select the payment method and calculate AONE price
      </p>
      <div className="topup_methodContainer">
        {methods.map((method) => (
          <div
            key={method.id}
            className={`topup_methodBox ${
              selectedMethod === method.id ? "topup_selected" : ""
            }`}
            onClick={() => handleMethodSelect(method.id)}
          >
            {method.title}
            <img src={method.logo} className="topup_method_logo" alt="" />
          </div>
        ))}
      </div>
      <p className="topup_title">
        2. Set amount of AONE you would like to purchase
      </p>
      <p className="topup_info">
        Use the calculator provided below to easily convert your chosen quantity
        of AONE into its equivalent value in USD.
      </p>
      <p>AONE Amount</p>
      <div className="topupDashboard_inputContainer">
        <Input
          type={"default"}
          value={tokenAmount}
          inputType={"text"}
          placeholder="Enter amount"
          onChange={handleTokenAmountChange}
          customStyles={{ width: "100%" }}
          inputClassName={"topupDashboard_input"}
          editable={true}
        />
        <div className="topupDashboard_inputOverlay">
          <p className="topupDashboard_inputOverlay_text">AONE</p>
        </div>
      </div>
      <p className="topupDashboard_info-exchangeRate">
        1 AONE = {exchangeRate} USDT
      </p>
      {tokenError && (
        <HelpText status={"error"} title={tokenError} color={"#FF0C46"} />
      )}
      <div className="topupDashboard_bottom-row topup_bottom-padding">
        <p>{translates.token_amount.en}</p>
        <p>
          {tokenAmount} AONE = {tokenAmount * exchangeRate} USDT
        </p>
      </div>
      <div className="topupDashboard_bottom-row">
        <p>{translates.transaction_fee.en}</p>
        <p> {tranasctionFee} USDT</p>
      </div>
      <h3 className="topupDashboard_bottom-result">
        TOTAL:{" "}
        {Number(tokenAmount) * Number(exchangeRate) + Number(tranasctionFee)}
        USDT
      </h3>
      <Button
        element="button"
        label={`Purchase AONE`}
        type="btn-secondary"
        size="btn-lg"
        customStyles={{
          width: "100%",
          margin: "0",
        }}
        onClick={handlePurchase}
      />
      {openPopup && (
        <Popup
          popUpElement={
            <PaymentPopup
              setOpenConfirmPaymentPopup={setOpenConfirmPaymentPopup}
              setOpenPopup={setOpenPopup}
              selectedMethod={selectedMethod}
              selectedPaymentMethod={selectedPaymentMethod}
              setSelectedPaymentMethod={setSelectedPaymentMethod}
              handleCoindbasePayment={handleCoindbasePayment}
              tokenAmount={tokenAmount}
              paymentTypes={paymentTypes}
            />
          }
          label={"Payment Process"}
          handlePopUpClose={() => setOpenPopup(false)}
        />
      )}
      {!openConfirmPaymentPopup && (
        <Popup
          popUpElement={
            <ConfirmPaymentPopup
              walletAddress={"0x123"}
              receivePaymentAddress={receivePaymentAddress}
              handlePaymentConfirm={handlePaymentConfirm}
              qrcode={qrcode}
              selectedMethod={selectedMethod}
              handlePopUpClose={() => setOpenConfirmPaymentPopup(false)}
              tokenAmount={tokenAmount}
              setOpenConfirmPaymentPopup={setOpenConfirmPaymentPopup}
            />
          }
          label={"Confirm Payment"}
          handlePopUpClose={() => setOpenConfirmPaymentPopup(false)}
        />
      )}
    </div>
  );
};
