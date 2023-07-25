import { Popup } from "../Popup";
import "./TopUp.css";
import { useState } from "react";
import { Button } from "../Button";
import PaymentPopup from "./PaymentPopup";
import ConfirmPaymentPopup from "./ConfirmPaymentPopup";
import { Input } from "../Input";
import { HelpText } from "../HelpText";

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
  const [x, setCurrencies] = useState(["ETH", "BTC", "LTC", "BCH", "USDC"]);
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
    if (!isNaN(value) && value >= 0) {
      if (value > 0) setTokenError(null);
      setTokenAmount(Number(value));
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
      <p className="topup_title">1. Select the payment method and calculate ATR price</p>
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
      <p className="topup_title">2. Set amount of ATR you would like to purchase</p>
      <p className="topup_info">
        Enter the amount you would like to contribute in order to calculate the amount of
        ATR you will receive. The calculator below helps to convert the required quantity
        of ATR into the amount of your selected currency.
      </p>
      <p>ATR Amount</p>
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
          <p className="topupDashboard_inputOverlay_text">ATR</p>
        </div>
      </div>
      <p className="topupDashboard_info-exchangeRate">1 ATR = {exchangeRate} USDC</p>
      {tokenError && <HelpText status={"error"} title={tokenError} color={"#FF0C46"} />}
      <div className="topupDashboard_bottom-row topup_bottom-padding">
        <p>Token Amount:</p>
        <p>
          {tokenAmount} ATR = {tokenAmount * exchangeRate} USDC
        </p>
      </div>
      <div className="topupDashboard_bottom-row">
        <p>Transaction Fee: </p>
        <p> {tranasctionFee} USDC</p>
      </div>
      <h3 className="topupDashboard_bottom-result">
        TOTAL: {Number(tokenAmount) * Number(exchangeRate) + Number(tranasctionFee)}
        USDC
      </h3>
      <Button
        element="button"
        label={`Purchase ATR`}
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
      {openConfirmPaymentPopup && (
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
