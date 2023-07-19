import React, { useState, useEffect, useMemo } from "react";
import "./LandingSteps.css";
import { MetaMask, WalletConnect, WalletMoneyIcon } from "../../assets/svgs";
import { Button } from "../Button";
import { Input } from "../Input";
import { Popup } from "../Popup";
import PaymentPopup from "../TopUp/PaymentPopup";
import { HelpText } from "../HelpText";
import ConfirmPaymentPopup from "../TopUp/ConfirmPaymentPopup";
import { HelpCard } from "../HelpCard";
import { useValidation } from "../../hooks/useValidation";

export const LandingSteps = ({
  handleMetamaskConnect,
  handleWalletConnect,
  step,
  setStep,
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
  formData,
  setFormData,
  resendEmail,
  disconnect,
  closeLandingSteps,
  exchangeRate,
  tranasctionFee,
  handlePurchaseEvent,
  inputs,
  durationOptions,
  handleTimePeriod,
  handleTimeperiodDate,
  timeperiod,
  timeperiodDate,
  buttonLabel,
  handleSubmit,
  currentObject,
  stakingLoading,
  isAllowance,
  approveResonse,
  tokenBalance,
  depositAmount,
  coinbaseLoading,
  referralState,
  setReferralState,
  amountProgressValue,
  amountProgressOnchange,
  handleFinish,
}) => {
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

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function handleReferralChange(event) {
    let value = event.target.value;
    let spread = {};
    if (referralState.message === "empty" && value.length > 0) {
      spread = {
        message: "",
      };
    }
    setReferralState((prev) => ({ ...prev, value: value, ...spread }));
  }

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
  };
  let helpTexts = {
    amount: {
      validationType: "between100and500",
      success: "amount is valid",
      failure: "must be at least 100",
    },
  };

  const validationErrors = useMemo(() => {
    return useValidation(
      {
        amount: currentObject["amount"] || "",
      },
      currentObject["amount"] <= 500
        ? helpTexts
        : {
            amount: {
              validationType: "multipleOf5000",
              success: "amount is valid",
              failure: "amount above 500 must be of multiple 5000",
            },
          },
    );
  }, [currentObject["amount"]]);

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

  const [emailResend, setEmailResend] = useState(false);

  useEffect(() => {
    setEmailResend(registrationState.emailSent);
  }, [registrationState.emailSent]);

  return (
    <div className="LandingSteps__container">
      <div className="LandingSteps_main-body">
        <span onClick={closeLandingSteps} className="closeButton">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "flex" }}
          >
            <path
              d="M14.9999 29.1663C22.7916 29.1663 29.1666 22.7913 29.1666 14.9997C29.1666 7.20801 22.7916 0.833008 14.9999 0.833008C7.20825 0.833008 0.833252 7.20801 0.833252 14.9997C0.833252 22.7913 7.20825 29.1663 14.9999 29.1663Z"
              stroke="#c38c5c"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.9907 19.0086L19.0091 10.9902"
              stroke="#c38c5c"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.0091 19.0086L10.9907 10.9902"
              stroke="#c38c5c"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        {/* <div className="LandingSteps_progress-bar-wrapper">
          <div className="LandingSteps__progress-bar">
            <div
              className="LandingSteps__progress-bar__fill"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>
          <span>{step}/4</span>
        </div> */}

        <div className="LandingSteps_progress-bar-wrapper">
          <div className="LandingSteps__progress-bar">
            <span className={`step-number ${step >= 1 ? "colored-step" : ""}`}>
              <num>1</num>
            </span>
            <span className={`step-number ${step >= 2 ? "colored-step" : ""}`}>
              <num>2</num>
            </span>
            <span className={`step-number ${step >= 3 ? "colored-step" : ""}`}>
              <num>3</num>
            </span>
            <span className={`step-number ${step >= 4 ? "colored-step" : ""}`}>
              <num>4</num>
            </span>
            <span className={`step-number ${step >= 5 ? "colored-step" : ""}`}>
              <num>5</num>
            </span>
          </div>
        </div>

        {step === 1 && (
          <div className="LandingSteps__step">
            <div className="LandingSteps__step__title">Connect Wallet</div>
            <div className="LandingSteps__step__content LandingSteps__step__content--wallet">
              <div
                className="LandingSteps__wallet-option"
                onClick={handleMetamaskConnect}
              >
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
              <div className={`email_sent ${emailResend ? "email_active" : ""}`}>
                <HelpCard
                  status={"warning"}
                  color={"#FFA726"}
                  body={"long"}
                  active={emailResend}
                  title={"Help Text"}
                  onClick={resendEmail}
                  handleClose={() => setEmailResend(false)}
                  className={"LandingSteps__emailSent"}
                />
              </div>

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
                  color={"#FF0C46"}
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
                  color={"#FF0C46"}
                />
              )}
            </div>
            {registrationState?.error && (
              <HelpText
                status={"error"}
                title={registrationState?.error}
                color={"#FF0C46"}
              />
            )}
            <div className="LandingSteps__buttonsWrap">
              <Button
                label={"Disconnect"}
                size={"btn-lg"}
                type={"btn-primary"}
                arrow={"arrow-none"}
                element={"button"}
                onClick={disconnect}
                customStyles={{ margin: "0" }}
              />
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
                  !!registrationState?.fullNameError
                }
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="LandingSteps__step">
            <div className="LandingSteps__step__title">Top Up</div>
            <div className="LandingSteps__topUp-box">
              <p>Select the payment method and calculate ATR price</p>
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
                  </div>
                ))}
              </div>
              <HelpText
                status={"error"}
                title={`Your currently possess ${tokenBalance} ATR. To stake you need to possess minimum of 100 ATR. Maximu you cans take during registration is 500,000 ATR.`}
                color={"#6A6D76"}
                icon={true}
                customStyles={{ marginBottom: "5px" }}
              />
              <p>Set amount of ATR you would like to purchase</p>

              <p className="LandingSteps__topUpLabel">Payment Amount</p>
              <div className="topupDashboard_inputContainer">
                <Input
                  type={"default"}
                  icon={false}
                  inputType={"default"}
                  placeholder={"Enter"}
                  value={tokenAmount}
                  onChange={handleTokenAmountChange}
                  customStyles={{ width: "100%" }}
                />
                <div className="topupDashboard_inputOverlay">
                  <p className="topupDashboard_inputOverlay_text">ATR</p>
                </div>
              </div>

              <div></div>
              <p className="topupDashboard_info-exchangeRate">
                1 ATR = {exchangeRate} USDC
              </p>

              {tokenError && (
                <HelpText status={"error"} title={tokenError} color={"#FF0C46"} />
              )}
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
                TOTAL:{" "}
                {Number(tokenAmount) * Number(exchangeRate) + Number(tranasctionFee)}
                USDC
              </h3>
              <Button
                element="button"
                label={coinbaseLoading ? "Loading..." : `Purchase ATR`}
                type="btn-primary"
                size="btn-lg"
                customStyles={{
                  width: "100%",
                  margin: "0",
                }}
                onClick={handlePurchase}
                disabled={coinbaseLoading}
              />
              <Button
                label={"Disconnect"}
                size={"btn-lg"}
                type={"btn-secondary"}
                arrow={"arrow-none"}
                element={"button"}
                onClick={disconnect}
                customStyles={{ margin: "0", width: "100%", marginTop: "20px" }}
              />
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="LandingSteps__step">
            <div className="LandingSteps__step__title">Stake your investment</div>
            <div className="LandingSteps__topUp-box">
              <div className="deposit-container">
                <div className="deposit-inputs-wrapper">
                  {isAllowance && depositAmount === "" ? (
                    <></>
                  ) : (
                    <>
                      <div className="deposit-inputs">
                        <div>
                          <p className="onlyReadInputTitle font-12">Amount</p>
                          <div className="onlyReadInput">{amountProgressValue ?? 0}</div>
                        </div>
                      </div>
                      <div className="deposit-amount-inputs">
                        <div className="deposit-amount-input">
                          <Input
                            type={"range"}
                            customStyles={{ width: "100%" }}
                            min={100}
                            max={500}
                            step={1}
                            disabled={amountProgressValue > 500}
                            value={amountProgressValue}
                            onChange={amountProgressOnchange}
                          />
                        </div>
                        <div className="deposit-amount-input">
                          <Input
                            type={"range"}
                            customStyles={{ width: "100%" }}
                            min={5000}
                            max={500000}
                            step={5000}
                            disabled={amountProgressValue < 5000}
                            value={amountProgressValue}
                            onChange={amountProgressOnchange}
                          />
                        </div>
                      </div>
                      <div className="deposit__buttons">
                        {durationOptions.map((item, index) => (
                          <Button
                            key={index}
                            label={item.title}
                            element={"calculator-button"}
                            onClick={() => {
                              handleTimePeriod(item.time);
                              handleTimeperiodDate(item.period);
                            }}
                            customStyles={{
                              width: "100%",
                            }}
                            active={item.time === timeperiod}
                          />
                        ))}
                      </div>
                      <HelpText
                        title={
                          timeperiod === 0
                            ? "15 % APY On 30 Days. Locked until " + timeperiodDate
                            : timeperiod === 1
                            ? "22.5% APY On 60 Days. Locked until " + timeperiodDate
                            : timeperiod === 2
                            ? "29% APY On 90 Days. Locked until " + timeperiodDate
                            : timeperiod === 3
                            ? "36.3% APY On 180 Days. Locked until " + timeperiodDate
                            : "50.0% APY On 360 Days. Locked until " + timeperiodDate
                        }
                        status="info"
                        color="#6A6D76"
                        icon={true}
                      />
                    </>
                  )}
                  {isAllowance && (
                    <HelpText
                      title={
                        "Staking ATR is unapproved, please approve the ATR before staking"
                      }
                      status="error"
                      icon={true}
                    />
                  )}
                  {amountProgressValue > 500 && !isAllowance && (
                    <div>
                      <Input
                        type={"default"}
                        icon={false}
                        inputType={"default"}
                        placeholder={"Enter"}
                        label={"Refferal Code"}
                        value={referralState.value}
                        onChange={(e) => handleReferralChange(e)}
                        customStyles={{ width: "100%", marginTop: "5px" }}
                        name={"referral"}
                        emptyFieldErr={referralState.message === "empty" ? true : false}
                      />
                      {referralState?.status && (
                        <HelpText
                          status={referralState?.status}
                          title={referralState?.message}
                          color={"#FF0C46"}
                        />
                      )}
                    </div>
                  )}
                  {approveResonse && (
                    <HelpText
                      status={approveResonse?.status}
                      title={approveResonse?.message}
                      fontSize={"font-12"}
                      icon={true}
                    />
                  )}
                </div>
                <Button
                  label={buttonLabel}
                  size={"btn-lg"}
                  type={"btn-primary"}
                  element={"button"}
                  customStyles={{
                    margin: "0",
                    width: "100%",
                  }}
                  onClick={handleSubmit}
                  disabled={
                    validationErrors?.amount?.failure ? true : stakingLoading ?? false
                  }
                />
                <Button
                  label={"Disconnect"}
                  size={"btn-lg"}
                  type={"btn-secondary"}
                  arrow={"arrow-none"}
                  element={"button"}
                  onClick={disconnect}
                  customStyles={{ margin: "0", width: "100%" }}
                />
              </div>
            </div>
          </div>
        )}
        {step === 5 && (
          <div className="LandingSteps__step">
            <div className="LandingSteps__step__title">Successfully registered!</div>
            <div className="LandingSteps__topUp-box">
              <p>
                Congratulations on successfully purchasing and staking your tokens! You're
                just one step away from completing your registration and gaining access to
                our crypto banking services.
              </p>
            </div>
            <div className="LandingSteps__topUp-box">
              <Button
                label={"Finish"}
                size={"btn-lg"}
                type={"btn-primary"}
                element={"button"}
                customStyles={{
                  margin: "0",
                  width: "100%",
                }}
                onClick={handleFinish}
              />
            </div>
          </div>
        )}
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
  );
};
