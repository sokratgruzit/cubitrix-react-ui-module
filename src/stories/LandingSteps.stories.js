import { storiesOf } from "@storybook/react";
import React, { useState, useEffect } from "react";

import { Landing } from "../components/Landing";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";

import "../assets/css/main-theme.css";
import { BrowserRouter } from "react-router-dom";
import { LandingSteps } from "../components/LandingSteps";

const stories = storiesOf("LandingSteps", module);

const backgroundIMg = require("../assets/img/dashboard/startNowBG.png");

stories.add("LandingSteps", () => {
  const [toggle, setToggle] = useState(false);

  const [step, setStep] = useState(3);
  const [progressValue, setProgressValue] = useState(5000);
  const [loading, setLoading] = useState(true);

  // Simulate fetching data from the database
  // useEffect(() => {
  //   setTimeout(() => {
  //     setStep(1); // Set the initial step based on the database
  //     setLoading(false);
  //   }, 100);
  // }, []);
  const handleProgress = (e) => {
    console.log(e);
    setProgressValue(e.target.value);
  };

  const methods = [
    {
      id: "USDT",
      title: "USDT",
      svg: (
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.00012207 17.0001C0.00012207 7.61162 7.61174 0 17.0002 0C26.3897 0 34.0003 7.60958 34.0003 17.0001C34.0003 26.3906 26.3883 34.0002 17.0002 34.0002C7.61208 34.0002 0.00012207 26.3885 0.00012207 17.0001ZM14.9022 12.2063V14.7352L14.9008 14.7359C10.2088 14.9525 6.68161 15.8827 6.68161 16.9969C6.68161 18.1111 10.2088 19.0413 14.9008 19.2579V27.3591H19.0828V19.2586C23.7817 19.0413 27.3177 18.1104 27.3177 16.9952C27.3177 15.88 23.7833 14.9491 19.0828 14.7332V12.2063H24.8666V8.35303H9.11908V12.2063H14.9022ZM14.9008 18.5697V18.5718L14.9001 18.5701C10.7569 18.3855 7.66285 17.6613 7.66285 16.799C7.66285 15.9368 10.7555 15.2129 14.9001 15.0283V17.852C15.0191 17.8629 15.6675 17.9166 16.9571 17.9166C18.0309 17.9166 18.8088 17.8707 19.0808 17.852V15.0283C23.2332 15.2126 26.3334 15.9347 26.3334 16.8C26.3334 17.6653 23.2336 18.3885 19.0808 18.5725V18.5691C18.8132 18.583 18.054 18.6136 16.9748 18.6136C15.625 18.6136 15.0188 18.5772 14.9008 18.5697Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      id: "BNB",
      title: "BNB",
    },
    {
      id: "ETH",
      title: "ETH",
    },
  ];

  const paymentTypes = [
    {
      id: 1,
      title: "Pay via Crypto",
      logo: "https://shopgeorgia.ge/assets/images/pay-manual.png",
    },
    {
      id: 2,
      title: "Pay with CoinBase",
      logo: "https://shopgeorgia.ge/assets/images/contribute/eth.png",
    },
  ];

  // const [registerLoading, setRegisterLoading] = useState(false);
  const [registrationState, setRegistrationState] = useState({
    loading: false,
    fullnameError: "",
    emailError: "",
    referralError: "",
    emailSent: true,
  });

  async function handleRegistration({ fullName, email, referral }) {
    const errors = {};
    if (!fullName) {
      errors.fullNameError = "Full Name is required";
    }
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (email && !emailRegex.test(email)) {
      errors.emailError = "Invalid email";
    }
    if (!email) {
      errors.emailError = "Email is required";
    }
    if (!referral) {
      errors.referralError = "Referral code is required";
    }

    if (Object.keys(errors).length > 0) {
      setRegistrationState({
        ...registrationState,
        ...errors,
      });
      return;
    }

    setRegistrationState({
      ...registrationState,
      loading: true,
    });
    setTimeout(() => {}, 1000);
    setRegistrationState({
      ...registrationState,
      loading: false,
    });
    setStep(3);
  }

  async function handleCoindbasePayment() {
    console.log("coinbase payment send request");
  }

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    referral: "",
  });

  const [referralState, setReferralState] = useState({
    value: "",
    loading: false,
    message: "empty",
    status: "",
  });

  const [timeperiod, setTimeperiod] = useState(4);
  const [timeperiodDate, setTimeperiodDate] = useState(0);

  const handleTimeperiodDate = (period) => {
    setTimeperiodDate(period);
  };

  const handleTimePeriod = (period) => {
    setTimeperiod(period);
  };

  const durationOptions = [
    {
      title: "30 D",
      time: 0,
      period: 30,
    },
    {
      title: "60 D",
      time: 1,
      period: 60,
    },
    {
      title: "90 D",
      time: 2,
      period: 90,
    },
    {
      title: "180 D",
      time: 3,
      period: 180,
    },
    {
      title: "360 D",
      time: 4,
      period: 360,
    },
  ];

  const [currentObject, setCurrentObejct] = useState({
    amount: "",
  });

  const inputs = [
    {
      title: "Amount",
      name: "amount",
      type: "default",
      placeholder: "0",
      onChange: (e) => {
        setCurrentObejct((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      },
    },
  ];

  function checkReferralCode() {
    // setCheckReferralCodeState((prev) => ({ ...prev, loading: true }));
    setCheckReferralCodeState((prev) => ({
      ...prev,
      loading: false,
      status: "success",
      message: "This referral code is available.",
    }));
    setReferralCodeChecked(true);
  }

  const [referralCodeChecked, setReferralCodeChecked] = useState(false);
  const [checkReferralCodeState, setCheckReferralCodeState] = useState({
    loading: false,
    message: "Referral code is required, please check referral code before staking",
    status: "warning",
  });

  const [exchangeDetails, setExchangeDetails] = useState({});
  const [createChargeLoading, setCreateChargeLoading] = useState(false);
  async function handleCreateCharge(token, amount) {
    console.log(token, amount);

    setExchangeDetails({ exchangeId: "123", address: "0x123" });
  }

  return (
    <BrowserRouter>
      <div className="test-animation-w">
        <div
          style={{
            transform: toggle ? "translateX(-362px)" : "none",
            transition: "0.5s",
          }}
        >
          <Header
            modules={[]}
            account={"0x0000000"}
            location={{ pathName: "" }}
            title={"COMPLEND"}
            amount={10}
            logoSvg={
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_317_1822)">
                  <path
                    d="M20.0059 8.51846e-05C19.9982 -0.00230704 19.9901 -0.00230704 19.9825 8.51844e-05C13.9025 3.50807 8.8543 8.55624 5.34625 14.6362C1.83821 20.7161 -0.00578025 27.6131 1.36113e-05 34.6325V34.6325C6.07723 38.1412 12.971 39.9883 19.9883 39.9883C27.0057 39.9883 33.8994 38.1412 39.9766 34.6325V34.6325C39.9809 27.6148 38.1375 20.7196 34.6318 14.6403C31.1261 8.56095 26.0818 3.51167 20.0059 8.51844e-05V8.51846e-05ZM27.9988 27.8587C25.5687 29.264 22.8111 30.0039 20.0039 30.0039C17.1967 30.0039 14.4391 29.264 12.009 27.8587V27.8587C12.0081 25.0544 12.7456 22.2994 14.1473 19.8706C15.5491 17.4419 17.5656 15.425 19.9942 14.0229V14.0229C22.4244 15.4237 24.4434 17.4392 25.8485 19.8671C27.2535 22.2949 27.9951 25.0497 27.9988 27.8548V27.8587Z"
                    fill="#3D5AFE"
                  />
                  <path
                    d="M20.0059 0V13.9994C22.4366 15.4037 24.4548 17.423 25.8579 19.8544C27.2609 22.2858 27.9993 25.0436 27.9988 27.8508V27.8508L40 34.6402C40.0024 27.619 38.1558 20.7211 34.646 14.6402C31.1361 8.55925 26.0867 3.50989 20.0059 0V0Z"
                    fill="url(#paint0_linear_317_1822)"
                  />
                  <path
                    opacity="0.6"
                    d="M20.0059 0V13.9994C22.4366 15.4037 24.4548 17.423 25.8579 19.8544C27.2609 22.2858 27.9993 25.0436 27.9988 27.8508V27.8508L40 34.6402C40.0024 27.619 38.1558 20.7211 34.646 14.6402C31.1361 8.55925 26.0867 3.50989 20.0059 0V0Z"
                    fill="url(#paint1_linear_317_1822)"
                  />
                  <path
                    d="M19.9825 -4.88904e-05C13.9025 3.50793 8.8543 8.55611 5.34625 14.636C1.83821 20.716 -0.00578025 27.613 1.36113e-05 34.6323L12.0051 27.8547C12.0049 25.0511 12.7427 22.2968 14.1444 19.8688C15.5461 17.4408 17.5623 15.4245 19.9903 14.0227V14.0227V-4.88904e-05C19.9877 -0.000309224 19.9851 -0.000309224 19.9825 -4.88904e-05V-4.88904e-05Z"
                    fill="url(#paint2_linear_317_1822)"
                  />
                  <path
                    opacity="0.6"
                    d="M19.9825 -4.88904e-05C13.9025 3.50793 8.8543 8.55611 5.34625 14.636C1.83821 20.716 -0.00578025 27.613 1.36113e-05 34.6323L12.0051 27.8547C12.0049 25.0511 12.7427 22.2968 14.1444 19.8688C15.5461 17.4408 17.5623 15.4245 19.9903 14.0227V14.0227V-4.88904e-05C19.9877 -0.000309224 19.9851 -0.000309224 19.9825 -4.88904e-05V-4.88904e-05Z"
                    fill="url(#paint3_linear_317_1822)"
                  />
                  <path
                    d="M27.9988 27.8547C25.5687 29.2601 22.8111 30 20.0039 30C17.1967 30 14.4391 29.2601 12.009 27.8547L0 34.6324C6.07194 38.1487 12.9659 39.9965 19.9825 39.9883C27.0029 39.9975 33.9008 38.1497 39.9766 34.6324L27.9988 27.8547Z"
                    fill="url(#paint4_linear_317_1822)"
                  />
                  <path
                    opacity="0.6"
                    d="M27.9988 27.8547C25.5687 29.2601 22.8111 30 20.0039 30C17.1967 30 14.4391 29.2601 12.009 27.8547L0 34.6324C6.07194 38.1487 12.9659 39.9965 19.9825 39.9883C27.0029 39.9975 33.9008 38.1497 39.9766 34.6324L27.9988 27.8547Z"
                    fill="url(#paint5_linear_317_1822)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_317_1822"
                    x1="23.7141"
                    y1="21.0614"
                    x2="38.1069"
                    y2="12.5075"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#47C9F3" />
                    <stop offset="0.05" stopColor="#45B0F5" />
                    <stop offset="0.12" stopColor="#4295F8" />
                    <stop offset="0.2" stopColor="#407FFA" />
                    <stop offset="0.29" stopColor="#3F6EFC" />
                    <stop offset="0.4" stopColor="#3E63FD" />
                    <stop offset="0.56" stopColor="#3D5CFE" />
                    <stop offset="1" stopColor="#3D5AFE" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_317_1822"
                    x1="29.3037"
                    y1="17.7388"
                    x2="13.5826"
                    y2="27.0951"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#47C9F3" stopOpacity="0" />
                    <stop offset="1" stopColor="#47C9F3" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_317_1822"
                    x1="16.1846"
                    y1="20.9056"
                    x2="3.7589"
                    y2="13.6878"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#47C9F3" />
                    <stop offset="0.05" stopColor="#45B0F5" />
                    <stop offset="0.12" stopColor="#4295F8" />
                    <stop offset="0.2" stopColor="#407FFA" />
                    <stop offset="0.29" stopColor="#3F6EFC" />
                    <stop offset="0.4" stopColor="#3E63FD" />
                    <stop offset="0.56" stopColor="#3D5CFE" />
                    <stop offset="1" stopColor="#3D5AFE" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_317_1822"
                    x1="10.7859"
                    y1="17.766"
                    x2="26.3044"
                    y2="26.6471"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#47C9F3" stopOpacity="0" />
                    <stop offset="1" stopColor="#47C9F3" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_317_1822"
                    x1="19.9396"
                    y1="27.7496"
                    x2="20.0721"
                    y2="42.7656"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#47C9F3" />
                    <stop offset="0.05" stopColor="#45B0F5" />
                    <stop offset="0.12" stopColor="#4295F8" />
                    <stop offset="0.2" stopColor="#407FFA" />
                    <stop offset="0.29" stopColor="#3F6EFC" />
                    <stop offset="0.4" stopColor="#3E63FD" />
                    <stop offset="0.56" stopColor="#3D5CFE" />
                    <stop offset="1" stopColor="#3D5AFE" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_317_1822"
                    x1="20.0019"
                    y1="35.0843"
                    x2="20.0019"
                    y2="16.3483"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#47C9F3" stopOpacity="0" />
                    <stop offset="1" stopColor="#47C9F3" />
                  </linearGradient>
                  <clipPath id="clip0_317_1822">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            verified={false}
          />

          <LandingSteps
            validEmailProviders={["gmail.com", "company2.com", "examplecorp.com"]}
            referralCodeChecked={referralCodeChecked}
            checkReferralCodeState={checkReferralCodeState}
            amountProgressValue={progressValue}
            setAmountProgressValue={() => setProgressValue}
            amountProgressOnchange={handleProgress}
            receivePaymentAddress={"0x43f59F41518903A274c7897dfFB24DB86a0dd23a"}
            handleMetamaskConnect={() => {
              console.log("metamask");
              setStep(2);
            }}
            handleWalletConnect={() => {
              console.log("walletConnect");
              setStep(2);
            }}
            step={step}
            setStep={setStep}
            initialLoading={loading}
            methods={methods}
            paymentTypes={paymentTypes}
            handleRegistration={handleRegistration}
            registrationState={registrationState}
            setRegistrationState={setRegistrationState}
            handleCoindbasePayment={handleCoindbasePayment}
            handlePaymentConfirm={(userAddress, selectedMethod, amount, date) =>
              console.log("payment confirm", userAddress, selectedMethod, amount, date)
            }
            connectionLoading={false}
            formData={formData}
            setFormData={setFormData}
            resendEmail={() => console.log("resend email")}
            disconnect={() => console.log("ds")}
            exchangeRate={2}
            tranasctionFee={1}
            handlePurchaseEvent={(e, sd) => handleCreateCharge(e, sd)}
            timeperiod={timeperiod}
            timeperiodDate={timeperiodDate}
            handleTimePeriod={handleTimePeriod}
            handleTimeperiodDate={handleTimeperiodDate}
            durationOptions={durationOptions}
            buttonLabel={"Top Up"}
            handleSubmit={() => console.log(currentObject.amount, timeperiodDate)}
            inputs={inputs}
            currentObject={currentObject}
            isAllowance={false}
            referralState={referralState}
            setReferralState={setReferralState}
            exchangeDetails={exchangeDetails}
          />
        </div>
        <SideBar open={toggle}>
          <div
            style={{
              position: "absolute",
              zIndex: "1000",
            }}
          >
            shhd
          </div>
        </SideBar>
      </div>
    </BrowserRouter>
  );
});
