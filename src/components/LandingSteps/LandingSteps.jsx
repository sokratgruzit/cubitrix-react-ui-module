import React, { useState, useEffect } from "react";
import "./LandingSteps.css";
import { MetaMask, WalletConnect, WalletMoneyIcon } from "../../assets/svgs";
import { Button } from "../Button";
import { Input } from "../Input";
import { Popup } from "../Popup";
import PaymentPopup from "../TopUp/PaymentPopup";
import { HelpText } from "../HelpText";
import ConfirmPaymentPopup from "../TopUp/ConfirmPaymentPopup";

export const LandingSteps = ({
  handleMetamaskConnect,
  handleWalletConnect,
  step,
  setStep,
  initialLoading,
  methods = [],
  paymentTypes,
  handleRegistration,
  handleCoindbasePayment,
  receivePaymentAddress,
  handlePaymentConfirm,
  qrcode,
  registrationState,
  setRegistrationState,
  connectionLoading,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    referral: "",
  });
  const [selectedMethod, setSelectedMethod] = useState("Coinbase");
  const [openPopup, setOpenPopup] = useState(false);
  const [openConfirmPaymentPopup, setOpenConfirmPaymentPopup] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState();

  const [tokenAmount, setTokenAmount] = useState(0);
  const [tokenError, setTokenError] = useState(null);

  const handleInputChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    if (name === "email") {
      let error = "";
      if (!value) {
        error = "Email is required";
      }
      const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (value && !emailRegex.test(value)) {
        error = "Invalid email";
      }
      setRegistrationState({
        ...registrationState,
        emailError: error,
      });
    }
    if (name === "fullName") {
      let error = "";
      if (!value) {
        error = "Full Name is required";
      }
      setRegistrationState({
        ...registrationState,
        fullNameError: error,
      });
    }

    if (name === "referral") {
      let error = "";
      if (!value) {
        error = "Referral code is required";
      }
      setRegistrationState({
        ...registrationState,
        referralError: error,
      });
    }

    setFormData({
      ...formData,
      [name]: value,
    });
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

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
  };

  const handleNextStep = () => {
    if (step === 2) {
      return handleRegistration(formData);
    }
    if (step === 3) {
      return handlePurchase();
    }

    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  if (initialLoading) {
    return <div>Loading...</div>;
  }

  console.log(
    registrationState?.loading ||
      registrationState?.emailError ||
      registrationState?.fullNameError ||
      registrationState?.referralError,
  );

  return (
    <div className="LandingSteps__container">
      <div className="LandingSteps__progress-bar">
        <div
          className="LandingSteps__progress-bar__fill"
          style={{ width: `${(step / 4) * 100}%` }}
        />
      </div>

      {step === 1 && (
        <div className="LandingSteps__step">
          <div className="LandingSteps__step__title">Connect Wallet</div>
          <div className="LandingSteps__step__content LandingSteps__step__content--wallet">
            <div className="LandingSteps__wallet-option" onClick={handleMetamaskConnect}>
              {connectionLoading ? (
                <p>Loading...</p>
              ) : (
                <MetaMask className="LandingSteps__walletmetamaskIcon" />
              )}
              MetaMask
            </div>
            <div className="LandingSteps__wallet-option" onClick={handleWalletConnect}>
              <WalletConnect />
              Wallet Connect
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="LandingSteps__step">
          <div className="LandingSteps__step__title">Registration</div>
          <div className="LandingSteps__step__content LandingSteps__step__content--register">
            {/* <Input
              type={"default"}
              // value={userData.name}
              inputType={"text"}
              placeholder="Enter Full Name"
              label={"Full Name"}
              // onChange={(e) => handleUserUpdate(e.target.value, "name")}
              customStyles={{ width: "100%" }}
              editable={true}
            /> */}
            <Input
              type={"default"}
              icon={false}
              inputType={"text"}
              placeholder={"Enter"}
              label={"Full Name"}
              value={formData.fullName}
              onChange={handleInputChange}
              customStyles={{ width: "100%" }}
              name={"fullName"}
            />
            {registrationState?.fullNameError && (
              <HelpText
                status={"error"}
                title={registrationState?.fullNameError}
                color={"#EF5350"}
              />
            )}
            <Input
              type={"default"}
              icon={false}
              inputType={"Email"}
              placeholder={"Enter"}
              label={"Email"}
              value={formData.email}
              onChange={handleInputChange}
              customStyles={{ width: "100%" }}
              name={"email"}
            />
            {registrationState?.emailError && (
              <HelpText
                status={"error"}
                title={registrationState?.emailError}
                color={"#EF5350"}
              />
            )}
            <Input
              type={"default"}
              icon={false}
              inputType={"default"}
              placeholder={"Enter"}
              label={"Refferal Code"}
              value={formData.referral}
              onChange={handleInputChange}
              customStyles={{ width: "100%" }}
              name={"referral"}
            />
            {registrationState?.referralError && (
              <HelpText
                status={"error"}
                title={registrationState?.referralError}
                color={"#EF5350"}
              />
            )}
          </div>
          {registrationState?.error && (
            <HelpText
              status={"error"}
              title={registrationState?.error}
              color={"#EF5350"}
            />
          )}
          <div className="LandingSteps__buttonsWrap">
            <Button
              label={registrationState?.loading ? "Loading..." : "Continue"}
              size={"btn-lg"}
              type={"btn-secondary"}
              arrow={"arrow-none"}
              element={"button"}
              onClick={handleNextStep}
              customStyles={{ margin: "0" }}
              disabled={
                !!registrationState?.loading ||
                !!registrationState?.emailError ||
                !!registrationState?.fullNameError ||
                !!registrationState?.referralError
              }
            />

            <Button
              label={"Back"}
              size={"btn-lg"}
              type={"btn-primary"}
              arrow={"arrow-none"}
              element={"button"}
              onClick={handlePreviousStep}
              customStyles={{ margin: "0" }}
            />
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="LandingSteps__step">
          <div className="LandingSteps__step__title">Top Up</div>
          <div className="LandingSteps__topUp-box">
            <p>Select the payment method and calculate token price</p>

            <div className="LandingSteps__topUpOptions">
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

              {/* <div
                  className="LandingSteps__wallet-option"
                  onClick={() => handleTopUpMethod("metamask")}
                >
                  USDT
                </div>
                <div
                  className="LandingSteps__wallet-option"
                  onClick={() => handleTopUpMethod("metamask")}
                >
                  Coin Base
                </div> */}
            </div>

            <p>Set amount of CMCX tokens you would like to purchase</p>

            <Input
              type={"default"}
              icon={false}
              inputType={"default"}
              placeholder={"Enter"}
              label={"Payment Amount"}
              value={tokenAmount}
              onChange={handleTokenAmountChange}
              customStyles={{ width: "100%" }}
              name={"referral"}
            />

            {tokenError && (
              <HelpText status={"error"} title={tokenError} color={"#EF5350"} />
            )}
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
            <Button
              label={"Back"}
              size={"btn-lg"}
              type={"btn-primary"}
              arrow={"arrow-none"}
              element={"button"}
              onClick={handlePreviousStep}
              customStyles={{ margin: "0" }}
            />
          </div>
        </div>
      )}
      {/* <button onClick={handlePreviousStep}>Previous</button>
          <button onClick={handleNextStep}>Next</button>
          <Button /> */}

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
