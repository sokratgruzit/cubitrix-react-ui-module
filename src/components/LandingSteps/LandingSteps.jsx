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
  stakingLoading,
  isAllowance,
  approveResonse,
  tokenBalance,
  depositAmount,
  coinbaseLoading,
  referralState,
  setReferralState,
  amountProgressValue,
  setAmountProgressValue,
  amountProgressOnchange,
  handleFinish,
  referralCodeChecked,
  checkReferralCodeState,
  amountError,
  finishLoading,
  validEmailProviders,
  exchangeDetails,
  handleCancelPayment,
  rpcs,
  createChargeLoading,
  rates,
}) => {
  const [selectedMethod, setSelectedMethod] = useState("USDT");
  const [selectedChain, setSelectedChain] = useState("ETH");
  const [openPopup, setOpenPopup] = useState(false);
  const [openConfirmPaymentPopup, setOpenConfirmPaymentPopup] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState();

  const [tokenAmount, setTokenAmount] = useState(0);
  const [tokenError, setTokenError] = useState(null);
  const [copyButtonText, setCopyButtonText] = useState("Copy"); // New state variable

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
      selectedChain,
      Number(tokenAmount) * Number(exchangeRate) +
        Number(tranasctionFee) / rates?.[selectedMethod?.toLowerCase()]?.usd,
    );
  };
  let helpTexts = {
    amount: {
      validationType: "between100and500",
      success: "amount is valid",
      failure: "must be at least 100",
    },
  };

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
  };

  function handleChainSelect(chain) {
    setSelectedChain(chain);
  }

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

  const [accpetedTerms, setAcceptedTerms] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(exchangeDetails?.address);
    setCopyButtonText("Copied!");

    setTimeout(() => {
      setCopyButtonText("Copy");
    }, 3000);
  };

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
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.9907 19.0086L19.0091 10.9902"
              stroke="#c38c5c"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.0091 19.0086L10.9907 10.9902"
              stroke="#c38c5c"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
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
              <span>1</span>
            </span>
            <span className={`step-number ${step >= 2 ? "colored-step" : ""}`}>
              <span>2</span>
            </span>
            <span className={`step-number ${step >= 3 ? "colored-step" : ""}`}>
              <span>3</span>
            </span>
            <span className={`step-number ${step >= 4 ? "colored-step" : ""}`}>
              <span>4</span>
            </span>
            <span className={`step-number ${step >= 5 ? "colored-step" : ""}`}>
              <span>5</span>
            </span>
          </div>
        </div>

        {step === 1 && (
          <div className="LandingSteps__step">
            <div className="LandingSteps__step__title main_ttl">Connect Wallet</div>
            <div className="LandingSteps__step__content LandingSteps__step__content--wallet">
              <div
                className={`${
                  connectionLoading ? "LandingSteps__wallet-option-disabled" : ""
                } LandingSteps__wallet-option`}
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
            <div className="LandingSteps__step__title main_ttl">Registration</div>
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
              {validEmailProviders?.length > 0 && (
                <HelpText
                  status={"warning"}
                  title={`Please use one of the following email providers: ${validEmailProviders.join(
                    ", ",
                  )}`}
                  color={"#FFA726"}
                  icon={true}
                  customStyles={{ marginTop: "2px" }}
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
            <div className="LandingSteps__step__title main_ttl">Top Up</div>
            {createChargeLoading ? (
              <div>
                <div className="table-loading-container">
                  <div className="table-loading" />
                </div>
              </div>
            ) : exchangeDetails?.exchangeId ? (
              <div className="confirm_payment_popup_container">
                <div className="confirm_payment_popup_body">
                  <p>Your transaction has been placed successfully.</p>
                  <p>
                    Please send{" "}
                    {Number(tokenAmount) * Number(exchangeRate) +
                      Number(tranasctionFee) /
                        rates?.[selectedMethod?.toLowerCase()]?.usd}{" "}
                    {selectedMethod} to the address below. The A1 balance will appear in
                    your account after system approves it. This might take up to 1 minute.
                  </p>
                  <div className="confirm_payment_popup_content">
                    <div className="confirm_payment_popup_qr">
                      <div className="payment_qrcode">
                        <img src={qrcode} alt=" " />
                      </div>
                    </div>
                    <div className="confirm_payment_popup_info">
                      <h3 className="confitm_payment_title">
                        Payment to the following Wallet Address
                      </h3>
                      <p className="confirm_payment_popup_grayText">
                        Transaction Fee: 1 USD
                      </p>
                      <p className="confirm_payment_popup_grayText">
                        Send Amount:{" "}
                        {Number(tokenAmount) * Number(exchangeRate) +
                          Number(tranasctionFee) /
                            rates?.[selectedMethod?.toLowerCase()]?.usd}{" "}
                        {selectedMethod}
                      </p>
                      <div className="confirm_payment_popup_address">
                        <p>{exchangeDetails?.address}</p>
                        <button onClick={handleCopy} className="confirm_payment_copy">
                          {copyButtonText}
                        </button>
                      </div>
                      {/* <p className="confirm_payment_timer">
                          {Math.floor(timeLeft / 60)}:{timeLeft % 60}
                        </p> */}
                    </div>
                  </div>
                  <HelpText
                    status={"warning"}
                    title={
                      "Please send inputed amount to the address above. Once system detects A1 in your wallet you will be on the next step."
                    }
                    icon={true}
                    customStyles={{ marginTop: "15px" }}
                  />
                  <Button
                    element="button"
                    label={`Cancel`}
                    type="btn-gray"
                    size="btn-lg"
                    customStyles={{
                      width: "100%",
                      margin: "0",
                      marginTop: "15px",
                    }}
                    onClick={() => handleCancelPayment()}
                  />
                </div>
              </div>
            ) : (
              <div className="LandingSteps__topUp-box">
                <p>
                  Please choose the payment currency in which you intend to purchase A1
                  tokens.
                </p>
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
                  Please choose a network chain through which you will transfer the
                  selected currency.
                </p>
                <div className="LandingSteps__topUpOptions">
                  {rpcs.map((chain) => (
                    <div
                      key={chain.id}
                      className={`topup_steps_methodBox ${
                        selectedChain === chain.id ? "topup_steps_selected" : ""
                      }
                      ${
                        selectedMethod === "ETH" && chain.id !== "ETH"
                          ? "topup_steps_disabled"
                          : ""
                      } ${
                        selectedMethod === "USDT" && chain.id !== "ETH"
                          ? "topup_steps_disabled"
                          : ""
                      }
                      `}
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
                <HelpText
                  status={"error"}
                  title={`Your currently possess ${tokenBalance} A1. To stake you need to possess minimum of 100 A1. Maximu you cans take during registration is 500,000 A1.`}
                  color={"#6A6D76"}
                  icon={true}
                  customStyles={{ marginBottom: "5px" }}
                />
                <p>Set amount of A1 you would like to purchase</p>

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
                    <p className="topupDashboard_inputOverlay_text">A1</p>
                  </div>
                </div>

                <div></div>
                <p className="topupDashboard_info-exchangeRate">
                  1 A1 = {exchangeRate} USD
                </p>

                {tokenError && (
                  <HelpText status={"error"} title={tokenError} color={"#FF0C46"} />
                )}
                <div className="topupDashboard_bottom-row topup_bottom-padding">
                  <p>Token Amount:</p>
                  <p>
                    {tokenAmount} A1 = {tokenAmount * exchangeRate} USD
                  </p>
                </div>
                <div className="topupDashboard_bottom-row">
                  <p>Transaction Fee: </p>
                  <p> {tranasctionFee} USD</p>
                </div>
                <h3 className="topupDashboard_bottom-result">
                  TOTAL:{" "}
                  {Number(tokenAmount) * Number(exchangeRate) + Number(tranasctionFee)}
                  USD
                </h3>
                <Button
                  element="button"
                  label={coinbaseLoading ? "Loading..." : `Purchase A1`}
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
            )}
          </div>
        )}
        {step === 4 && (
          <div className="LandingSteps__step">
            <div className="LandingSteps__step__title main_ttl">
              Stake your investment
            </div>
            <div className="LandingSteps__topUp-box">
              <div className="deposit-container">
                <div className="deposit-inputs-wrapper">
                  {isAllowance && depositAmount === "" ? (
                    <></>
                  ) : (
                    <>
                      <HelpText
                        status={"warning"}
                        title={`Your currently possess ${tokenBalance} A1.`}
                        color={"#6A6D76"}
                        icon={true}
                        customStyles={{ marginBottom: "5px" }}
                      />
                      <Input
                        type={"staking_amount"}
                        customStyles={{
                          width: "100%",
                          padding: "11.5px 16px 11.5px 16px",
                          backgroundColor: "transparent",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          borderRadius: "6px",
                          color: "rgb(106, 109, 118)",
                          transition: "0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99)",
                          height: "44px",
                        }}
                        min={5000}
                        max={500000}
                        step={5000}
                        label={"Amount"}
                        value={amountProgressValue}
                        onChange={amountProgressOnchange}
                        incriment={() =>
                          setAmountProgressValue(amountProgressValue - 5000)
                        }
                        decriment={() =>
                          setAmountProgressValue(amountProgressValue + 5000)
                        }
                      />
                      {amountError && (
                        <HelpText
                          status={"error"}
                          title={amountError}
                          color={"#FF0C46"}
                        />
                      )}
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
                        "Staking A1 is unapproved, please approve the A1 before staking"
                      }
                      status="error"
                      icon={true}
                    />
                  )}
                  {tokenBalance < amountProgressValue && (
                    <HelpText
                      status={"error"}
                      title={`You can not enable more than ${tokenBalance} A1.`}
                      color={"#6A6D76"}
                      icon={true}
                      customStyles={{ marginBottom: "5px" }}
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
                      {checkReferralCodeState?.status && (
                        <HelpText
                          status={checkReferralCodeState?.status}
                          title={checkReferralCodeState?.message}
                          color={"#FF0C46"}
                          icon={true}
                          customStyles={{ marginBottom: "5px" }}
                        />
                      )}
                      <Input
                        type={"checkbox"}
                        label={"I agree to the terms and conditions"}
                        onChange={(e) =>
                          e.target.checked ? setShowTerms(true) : setAcceptedTerms(false)
                        }
                        value={accpetedTerms}
                        name={"checkbox"}
                      />
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
                    amountError !== "" ||
                    stakingLoading ||
                    (amountProgressValue > 500 &&
                      !isAllowance &&
                      (!accpetedTerms ||
                        !referralCodeChecked ||
                        checkReferralCodeState?.loading)) ||
                    tokenBalance < amountProgressValue
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
            <div className="LandingSteps__step__title main_ttl">
              Successfully registered!
            </div>
            <div className="LandingSteps__topUp-box">
              <p style={{ textAlign: "center" }}>
                Congratulations on successfully purchasing and staking your tokens! You're
                just one step away from completing your registration and gaining access to
                our crypto banking services.
              </p>
            </div>
            <div className="LandingSteps__topUp-box">
              <Button
                label={finishLoading ? "Loading..." : "Finish"}
                size={"btn-lg"}
                type={"btn-primary"}
                element={"button"}
                customStyles={{
                  margin: "0",
                  width: "100%",
                }}
                onClick={handleFinish}
                disabled={finishLoading}
              />
            </div>
          </div>
        )}
      </div>

      {showTerms && (
        <Popup
          popUpElement={
            <div className="change-network-body">
              By using this website, you agree to the following terms and conditions.
              <br />
              Binary referral position can not be changed once selected.
              <Button
                label={"Accept"}
                size={"btn-lg"}
                type={"btn-primary"}
                arrow={"arrow-none"}
                element={"button"}
                onClick={() => {
                  setAcceptedTerms(true);
                  setShowTerms(false);
                }}
                customStyles={{ margin: "0", width: "100%" }}
              />
            </div>
          }
          label={"Terms and Conditions"}
          handlePopUpClose={() => {
            setShowTerms(false);
          }}
        />
      )}

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
