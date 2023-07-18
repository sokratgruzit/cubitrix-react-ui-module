import { Popup } from "../Popup";
import "./TopUpDashboard.css";
import { useState } from "react";
import { Button } from "../Button";
import PaymentPopup from "../TopUp/PaymentPopup";
import ConfirmPaymentPopup from "../TopUp/ConfirmPaymentPopup";
import { Input } from "../Input";
import { HelpText } from "../HelpText";

export const TopUpDashboard = ({
  address,
  handlePaymentConfirm,
  receivePaymentAddress,
  methods = [],
  qrcode,
  handleCoindbasePayment,
  tranasctionFee,
  paymentAmount,
  paymentTypes,
  exchangeRate = 0,
  handlePurchaseEvent,
  coinbaseLoading,
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
    handlePurchaseEvent(
      selectedMethod,
      Number(tokenAmount) * Number(exchangeRate) + Number(tranasctionFee),
    );
    // setOpenPopup(true);
  };

  return (
    <div className="topupDashboard_main">
      <h1>Purchase</h1>
      <div className="topupDashboard_title-container">
        <p className="topupDashboard_title">
          1. Select the payment method and calculate ATR price
        </p>
        <div className="topupDashboard_methodContainer">
          {methods.map((method) => (
            <div
              key={method.id}
              className={`topupDashboard_methodBox ${
                selectedMethod === method.id ? "topupDashboard_selected" : ""
              }`}
              onClick={() => handleMethodSelect(method.id)}
            >
              <img src={method.logo} className="topupDashboard_method_logo" alt="" />
              {method.title}
            </div>
          ))}
        </div>
      </div>
      <div className="topupDashboard_title-bottomContainer">
        <div className="topupDashboard_bottom-left">
          <p className="topupDashboard_title">
            2. Set amount of ATR you would like to purchase
          </p>
          <p className="topupDashboard_info">
            Enter the amount you would like to contribute in order to calculate the amount
            of ATR you will receive. The calculator below helps to convert the required
            quantity of ATR into the amount of your selected currency.
          </p>
          <div className="topupDashboard_inputContainer">
            <Input
              type={"default"}
              value={tokenAmount}
              inputType={"text"}
              placeholder="Enter amount"
              onChange={handleTokenAmountChange}
              customStyles={{ width: "100%" }}
              editable={true}
              customInputStyles={{ border: "1px solid rgba(255, 255, 255, 0.1)" }}
            />
            <div className="topupDashboard_inputOverlay">
              <p className="topupDashboard_inputOverlay_text">ATR</p>
            </div>
          </div>

          <p className="topupDashboard_info-exchangeRate">1 ATR = {exchangeRate} USDC</p>
          {tokenError && (
            <HelpText status={"error"} title={tokenError} color={"#FF0C46"} />
          )}
        </div>
        <div className="topupDashboard_bottom-right">
          <h3>Purchase Information</h3>
          <div className="topupDashboard_bottom-row">
            <p>Amount:</p>
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
            label={coinbaseLoading ? "Loading..." : `Purchase`}
            type="btn-secondary"
            size="btn-lg"
            customStyles={{
              width: "100%",
              margin: "0",
            }}
            onClick={handlePurchase}
          />
        </div>
        {/* 
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
        )} */}
      </div>
    </div>
  );
};
