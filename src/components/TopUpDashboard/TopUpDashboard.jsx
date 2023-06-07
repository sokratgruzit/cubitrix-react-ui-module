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
    <div className="topupDashboard_main">
      <div className="topupDashboard_title-container">
        <p className="topupDashboard_title">
          1. Select the payment method and calculate token price
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
              {method.title}
              <img src={method.logo} className="topupDashboard_method_logo" alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="topupDashboard_title-bottomContainer">
        <div className="topupDashboard_bottom-left">
          <p className="topupDashboard_title">
            2. Set amount of CPL tokens you would like to purchase
          </p>
          <p className="topupDashboard_info">
            Enter the amount you would like to contribute in order to calculate the amount
            of tokens you will receive. The calculator below helps to convert the required
            quantity of tokens into the amount of your selected currency.
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
            />
            <div className="topupDashboard_inputOverlay">
              <p className="topupDashboard_inputOverlay_text">CPL</p>
            </div>
          </div>

          <p className="topupDashboard_info-exchangeRate">1 CPL = {exchangeRate} USDT</p>
          {tokenError && (
            <HelpText status={"error"} title={tokenError} color={"#EF5350"} />
          )}
        </div>
        <div className="topupDashboard_bottom-right">
          <h3>Purchase Information</h3>
          <div className="topupDashboard_bottom-row">
            <p>Token Amount:</p>
            <p>
              {tokenAmount} CPL = {tokenAmount * exchangeRate} USDT
            </p>
          </div>
          <div className="topupDashboard_bottom-row">
            <p>Transaction Fee: </p>
            <p> {tranasctionFee} USDT</p>
          </div>
          <h3 className="topupDashboard_bottom-result">
            TOTAL: {Number(tokenAmount) * Number(exchangeRate) + Number(tranasctionFee)}
            USDT
          </h3>
          <Button
            element="button"
            label={`Purchase token`}
            type="btn-secondary"
            size="btn-lg"
            customStyles={{
              width: "100%",
              margin: "0",
            }}
            onClick={handlePurchase}
          />
        </div>

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
    </div>
  );
};
