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
  paymentAmount,
  paymentTypes,
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
      <p className="topup_title">
        1. Select the payment method and calculate token price
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
            <div
              className={`payment-list__check-icon ${
                selectedMethod === method.id ? "active-check" : ""
              }`}
            >
              <svg
                width="11"
                height="9"
                viewBox="0 0 11 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.800049 4.39999L3.80005 7.39999L9.80005 1.39999"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
      <p className="topup_title">
        2. Set amount of CMCX tokens you would like to purchase
      </p>
      <p className="topup_info">
        Enter the amount you would like to contribute in order to calculate the amount of
        tokens you will receive. The calculator below helps to convert the required
        quantity of tokens into the amount of your selected currency.
      </p>
      <p className="topup_info">Transaction Fee: {tranasctionFee}</p>
      <p className="topup_info">Payment Amount: {paymentAmount}</p>
      <Input
        type={"default"}
        value={tokenAmount}
        inputType={"text"}
        placeholder="Enter amount"
        onChange={handleTokenAmountChange}
        customStyles={{ width: "100%" }}
        editable={true}
      />
      {tokenError && <HelpText status={"error"} title={tokenError} color={"#EF5350"} />}
      <div className="topup_resultContainer">
        <div className="topup_resultLeft">
          <h3>Total CMCX</h3>
          <p>1000</p>
        </div>
        <div className="topup_resultRight">
          <h3>+ Sale Bonus 0%</h3>
          <p>0</p>
        </div>
      </div>
      <Button
        element="button"
        label={`Purchase token`}
        type="btn-primary"
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
            />
          }
          label={"Confirm Payment"}
          handlePopUpClose={() => setOpenConfirmPaymentPopup(false)}
        />
      )}
    </div>
  );
};
