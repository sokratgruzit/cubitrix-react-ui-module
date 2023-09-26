import { Popup } from "../Popup";
import "./TopUpDashboard.css";
import { useState } from "react";
import { Button } from "../Button";
import PaymentPopup from "../TopUp/PaymentPopup";
import ConfirmPaymentPopup from "../TopUp/ConfirmPaymentPopup";
import { Input } from "../Input";
import { HelpText } from "../HelpText";

export const TopUpDashboard = ({
  handlePaymentConfirm,
  receivePaymentAddress,
  methods = [],
  qrcode,
  tranasctionFee,
  exchangeRate = 0,
  handlePurchaseEvent,
  rpcs,
  rates,
  exchangeDetails,
  createChargeLoading,
}) => {
  const [selectedMethod, setSelectedMethod] = useState("USDT");
  const [selectedChain, setSelectedChain] = useState("ETH");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState();
  const [tokenAmount, setTokenAmount] = useState(0);
  const [tokenError, setTokenError] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [openConfirmPaymentPopup, setOpenConfirmPaymentPopup] = useState(false);

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
      selectedChain,
      (Number(tokenAmount) * Number(exchangeRate) + Number(tranasctionFee)) /
        rates?.[selectedMethod?.toLowerCase()]?.usd,
      Number(tokenAmount) * Number(exchangeRate),
    );
    // setOpenPopup(true);
  };

  return (
    <div className="topupDashboard_main">
      <h1>Purchase</h1>
      <p>Please choose the payment currency in which you intend to purchase A1 tokens.</p>
      <div className="LandingSteps__topUpOptions">
        {methods.map((method) => (
          <div
            key={method.id}
            className={`topup_steps_methodBox ${
              selectedMethod === method.id ? "topup_steps_selected" : ""
            }`}
            onClick={() => {
              if (method.id === "ETH" || method.id === "USDT") {
                setSelectedChain("ETH");
              }
              handleMethodSelect(method.id);
            }}
          >
            {method.title}
            <img src={method.logo} className="topup_method_logo" alt="" />
            {method.svg}
          </div>
        ))}
      </div>
      <p>
        Please choose a network chain through which you will transfer the selected
        currency.
      </p>
      <div className="LandingSteps__topUpOptions">
        {rpcs.map((chain) => (
          <div
            key={chain.id}
            className={`topup_steps_methodBox ${
              selectedChain === chain.id ? "topup_steps_selected" : ""
            } ${
              selectedMethod === "ETH" && chain.id !== "ETH" ? "topup_steps_disabled" : ""
            } ${
              selectedMethod === "USDT" && chain.id !== "ETH"
                ? "topup_steps_disabled"
                : ""
            }`}
            onClick={() => {
              if (selectedMethod === "ETH" || selectedMethod === "USDT") {
                return;
              }
              handleChainSelect(chain.id);
            }}
          >
            {chain.title}
            <img src={chain.logo} className="topup_method_logo" alt="" />
            {chain.svg}
          </div>
        ))}
      </div>
      <div className="topupDashboard_title-bottomContainer">
        <div className="topupDashboard_bottom-left">
          <p className="topupDashboard_title">
            2. Set amount of A1 you would like to purchase
          </p>
          <p className="topupDashboard_info">
            Enter the amount you would like to contribute in order to calculate the amount
            of A1 you will receive. The calculator below helps to convert the required
            quantity of A1 into the amount of your selected currency.
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
              <p className="topupDashboard_inputOverlay_text">A1</p>
            </div>
          </div>

          <p className="topupDashboard_info-exchangeRate">1 A1 = {exchangeRate} USD</p>
          {tokenError && (
            <HelpText status={"error"} title={tokenError} color={"#FF0C46"} />
          )}
        </div>
        <div className="topupDashboard_bottom-right">
          <h3>Purchase Information</h3>
          <div className="topupDashboard_bottom-row">
            <p>Amount:</p>
            <p>
              {tokenAmount} A1 = {tokenAmount * exchangeRate} USD
            </p>
          </div>
          <div className="topupDashboard_bottom-row">
            <p>Transaction Fee: </p>
            <p> {tranasctionFee} USD</p>
          </div>
          <h3 className="topupDashboard_bottom-result">
            TOTAL: {Number(tokenAmount) * Number(exchangeRate) + Number(tranasctionFee)}
            USD
          </h3>
          <Button
            element="button"
            label={createChargeLoading ? "Loading..." : `Purchase`}
            type="btn-secondary"
            size="btn-lg"
            customStyles={{
              width: "100%",
              margin: "0",
            }}
            onClick={handlePurchase}
            disabled={createChargeLoading}
          />
        </div>

        {/* {openPopup && (
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
              />
            }
            label={"Payment Process"}
            handlePopUpClose={() => setOpenPopup(false)}
          />
        )} */}
        {openConfirmPaymentPopup && (
          <Popup
            popUpElement={
              <ConfirmPaymentPopup
                exchangeRate={exchangeRate}
                tranasctionFee={tranasctionFee}
                rates={rates}
                receivePaymentAddress={receivePaymentAddress}
                handlePaymentConfirm={handlePaymentConfirm}
                qrcode={qrcode}
                selectedMethod={selectedMethod}
                handlePopUpClose={() => setOpenConfirmPaymentPopup(false)}
                tokenAmount={tokenAmount}
                setOpenConfirmPaymentPopup={setOpenConfirmPaymentPopup}
                exchangeDetails={exchangeDetails}
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
