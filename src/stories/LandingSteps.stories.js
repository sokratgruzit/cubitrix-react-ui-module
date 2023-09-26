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

  const [step, setStep] = useState(4);
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
        <svg viewBox="0 0 2000 2000" width="34px" height="34px">
          <path
            d="M1000,0c552.26,0,1000,447.74,1000,1000S1552.24,2000,1000,2000,0,1552.38,0,1000,447.68,0,1000,0"
            fill="#53ae94"
          />
          <path
            d="M1123.42,866.76V718H1463.6V491.34H537.28V718H877.5V866.64C601,879.34,393.1,934.1,393.1,999.7s208,120.36,484.4,133.14v476.5h246V1132.8c276-12.74,483.48-67.46,483.48-133s-207.48-120.26-483.48-133m0,225.64v-0.12c-6.94.44-42.6,2.58-122,2.58-63.48,0-108.14-1.8-123.88-2.62v0.2C633.34,1081.66,451,1039.12,451,988.22S633.36,894.84,877.62,884V1050.1c16,1.1,61.76,3.8,124.92,3.8,75.86,0,114-3.16,121-3.8V884c243.8,10.86,425.72,53.44,425.72,104.16s-182,93.32-425.72,104.18"
            fill="#fff"
          />
        </svg>
      ),
    },
    {
      id: "BNB",
      title: "BNB",
      svg: (
        <svg
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 2496 2496"
          width="34px"
          height="34px"
          style={{ enableBackground: "new 0 0 2496 2496" }}
        >
          <g>
            <path
              style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#F0B90B" }}
              d="M1248,0c689.3,0,1248,558.7,1248,1248s-558.7,1248-1248,1248   S0,1937.3,0,1248S558.7,0,1248,0L1248,0z"
            />
            <path
              style={{ fill: "#FFFFFF" }}
              d="M685.9,1248l0.9,330l280.4,165v193.2l-444.5-260.7v-524L685.9,1248L685.9,1248z M685.9,918v192.3   l-163.3-96.6V821.4l163.3-96.6l164.1,96.6L685.9,918L685.9,918z M1084.3,821.4l163.3-96.6l164.1,96.6L1247.6,918L1084.3,821.4   L1084.3,821.4z"
            />
            <path
              style={{ fill: "#FFFFFF" }}
              d="M803.9,1509.6v-193.2l163.3,96.6v192.3L803.9,1509.6L803.9,1509.6z M1084.3,1812.2l163.3,96.6   l164.1-96.6v192.3l-164.1,96.6l-163.3-96.6V1812.2L1084.3,1812.2z M1645.9,821.4l163.3-96.6l164.1,96.6v192.3l-164.1,96.6V918   L1645.9,821.4L1645.9,821.4L1645.9,821.4z M1809.2,1578l0.9-330l163.3-96.6v524l-444.5,260.7v-193.2L1809.2,1578L1809.2,1578   L1809.2,1578z"
            />
            <polygon
              style={{ fill: "#FFFFFF" }}
              points="1692.1,1509.6 1528.8,1605.3 1528.8,1413 1692.1,1316.4 1692.1,1509.6  "
            />
            <path
              style={{ fill: "#FFFFFF" }}
              d="M1692.1,986.4l0.9,193.2l-281.2,165v330.8l-163.3,95.7l-163.3-95.7v-330.8l-281.2-165V986.4   L968,889.8l279.5,165.8l281.2-165.8l164.1,96.6H1692.1L1692.1,986.4z M803.9,656.5l443.7-261.6l444.5,261.6l-163.3,96.6   l-281.2-165.8L967.2,753.1L803.9,656.5L803.9,656.5z"
            />
          </g>
        </svg>
      ),
    },
    {
      id: "ETH",
      title: "ETH",
      svg: (
        <svg
          width="34px"
          height="34px"
          version="1.1"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
          image-rendering="optimizeQuality"
          fill-rule="evenodd"
          clip-rule="evenodd"
          viewBox="0 0 784.37 1277.39"
        >
          <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer" />
            <g id="_1421394342400">
              <g>
                <polygon
                  fill="#343434"
                  fill-rule="nonzero"
                  points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 "
                />
                <polygon
                  fill="#8C8C8C"
                  fill-rule="nonzero"
                  points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 "
                />
                <polygon
                  fill="#3C3C3B"
                  fill-rule="nonzero"
                  points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 "
                />
                <polygon
                  fill="#8C8C8C"
                  fill-rule="nonzero"
                  points="392.07,1277.38 392.07,956.52 -0,724.89 "
                />
                <polygon
                  fill="#141414"
                  fill-rule="nonzero"
                  points="392.07,882.29 784.13,650.54 392.07,472.33 "
                />
                <polygon
                  fill="#393939"
                  fill-rule="nonzero"
                  points="0,650.54 392.07,882.29 392.07,472.33 "
                />
              </g>
            </g>
          </g>
        </svg>
      ),
    },
  ];

  const rpcs = [
    {
      id: "BSC",
      title: "BSC",
      svg: (
        <svg
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 2496 2496"
          width="34px"
          height="34px"
          style={{ enableBackground: "new 0 0 2496 2496" }}
        >
          <g>
            <path
              style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#F0B90B" }}
              d="M1248,0c689.3,0,1248,558.7,1248,1248s-558.7,1248-1248,1248   S0,1937.3,0,1248S558.7,0,1248,0L1248,0z"
            />
            <path
              style={{ fill: "#FFFFFF" }}
              d="M685.9,1248l0.9,330l280.4,165v193.2l-444.5-260.7v-524L685.9,1248L685.9,1248z M685.9,918v192.3   l-163.3-96.6V821.4l163.3-96.6l164.1,96.6L685.9,918L685.9,918z M1084.3,821.4l163.3-96.6l164.1,96.6L1247.6,918L1084.3,821.4   L1084.3,821.4z"
            />
            <path
              style={{ fill: "#FFFFFF" }}
              d="M803.9,1509.6v-193.2l163.3,96.6v192.3L803.9,1509.6L803.9,1509.6z M1084.3,1812.2l163.3,96.6   l164.1-96.6v192.3l-164.1,96.6l-163.3-96.6V1812.2L1084.3,1812.2z M1645.9,821.4l163.3-96.6l164.1,96.6v192.3l-164.1,96.6V918   L1645.9,821.4L1645.9,821.4L1645.9,821.4z M1809.2,1578l0.9-330l163.3-96.6v524l-444.5,260.7v-193.2L1809.2,1578L1809.2,1578   L1809.2,1578z"
            />
            <polygon
              style={{ fill: "#FFFFFF" }}
              points="1692.1,1509.6 1528.8,1605.3 1528.8,1413 1692.1,1316.4 1692.1,1509.6  "
            />
            <path
              style={{ fill: "#FFFFFF" }}
              d="M1692.1,986.4l0.9,193.2l-281.2,165v330.8l-163.3,95.7l-163.3-95.7v-330.8l-281.2-165V986.4   L968,889.8l279.5,165.8l281.2-165.8l164.1,96.6H1692.1L1692.1,986.4z M803.9,656.5l443.7-261.6l444.5,261.6l-163.3,96.6   l-281.2-165.8L967.2,753.1L803.9,656.5L803.9,656.5z"
            />
          </g>
        </svg>
      ),
      rpc1: "https://bsc-dataseed.binance.org",
      rpc2: "	https://binance.nodereal.io",
    },
    {
      id: "ETH",
      title: "ETH",
      svg: (
        <svg
          width="34px"
          height="34px"
          version="1.1"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
          image-rendering="optimizeQuality"
          fill-rule="evenodd"
          clip-rule="evenodd"
          viewBox="0 0 784.37 1277.39"
        >
          <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer" />
            <g id="_1421394342400">
              <g>
                <polygon
                  fill="#343434"
                  fill-rule="nonzero"
                  points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 "
                />
                <polygon
                  fill="#8C8C8C"
                  fill-rule="nonzero"
                  points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 "
                />
                <polygon
                  fill="#3C3C3B"
                  fill-rule="nonzero"
                  points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 "
                />
                <polygon
                  fill="#8C8C8C"
                  fill-rule="nonzero"
                  points="392.07,1277.38 392.07,956.52 -0,724.89 "
                />
                <polygon
                  fill="#141414"
                  fill-rule="nonzero"
                  points="392.07,882.29 784.13,650.54 392.07,472.33 "
                />
                <polygon
                  fill="#393939"
                  fill-rule="nonzero"
                  points="0,650.54 392.07,882.29 392.07,472.33 "
                />
              </g>
            </g>
          </g>
        </svg>
      ),
      rpc1: "https://eth.drpc.org",
      rpc2: "https://eth.meowrpc.com",
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
  async function handleCreateCharge(token, rpc, amount) {
    console.log(
      token,
      rpcs?.find((item) => item.id === rpc),
      amount,
    );

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
            rpcs={rpcs}
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
            exchangeRate={3}
            tranasctionFee={1}
            handlePurchaseEvent={(a, b, c) => handleCreateCharge(a, b, c)}
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
            createChargeLoading={createChargeLoading}
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
