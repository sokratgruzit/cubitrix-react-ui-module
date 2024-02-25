import {storiesOf} from "@storybook/react";
import React, {useState, useEffect} from "react";

import {Header} from "../components/Header";
import {SideBar} from "../components/SideBar";

import "../assets/css/main-theme.css";
import translates from "../translates.json";
import {BrowserRouter} from "react-router-dom";
import {LandingSteps} from "../components/LandingSteps";
import LogoSvg from "../assets/svgs/LogoSvg";

const stories = storiesOf("LandingSteps", module);

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
          style={{enableBackground: "new 0 0 2496 2496"}}
        >
          <g>
            <path
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                fill: "#F0B90B",
              }}
              d="M1248,0c689.3,0,1248,558.7,1248,1248s-558.7,1248-1248,1248   S0,1937.3,0,1248S558.7,0,1248,0L1248,0z"
            />
            <path
              style={{fill: "#FFFFFF"}}
              d="M685.9,1248l0.9,330l280.4,165v193.2l-444.5-260.7v-524L685.9,1248L685.9,1248z M685.9,918v192.3   l-163.3-96.6V821.4l163.3-96.6l164.1,96.6L685.9,918L685.9,918z M1084.3,821.4l163.3-96.6l164.1,96.6L1247.6,918L1084.3,821.4   L1084.3,821.4z"
            />
            <path
              style={{fill: "#FFFFFF"}}
              d="M803.9,1509.6v-193.2l163.3,96.6v192.3L803.9,1509.6L803.9,1509.6z M1084.3,1812.2l163.3,96.6   l164.1-96.6v192.3l-164.1,96.6l-163.3-96.6V1812.2L1084.3,1812.2z M1645.9,821.4l163.3-96.6l164.1,96.6v192.3l-164.1,96.6V918   L1645.9,821.4L1645.9,821.4L1645.9,821.4z M1809.2,1578l0.9-330l163.3-96.6v524l-444.5,260.7v-193.2L1809.2,1578L1809.2,1578   L1809.2,1578z"
            />
            <polygon
              style={{fill: "#FFFFFF"}}
              points="1692.1,1509.6 1528.8,1605.3 1528.8,1413 1692.1,1316.4 1692.1,1509.6  "
            />
            <path
              style={{fill: "#FFFFFF"}}
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
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          imageRendering="optimizeQuality"
          fillRule="evenodd"
          clipRule="evenodd"
          viewBox="0 0 784.37 1277.39"
        >
          <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer" />
            <g id="_1421394342400">
              <g>
                <polygon
                  fill="#343434"
                  fillRule="nonzero"
                  points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 "
                />
                <polygon
                  fill="#8C8C8C"
                  fillRule="nonzero"
                  points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 "
                />
                <polygon
                  fill="#3C3C3B"
                  fillRule="nonzero"
                  points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 "
                />
                <polygon
                  fill="#8C8C8C"
                  fillRule="nonzero"
                  points="392.07,1277.38 392.07,956.52 -0,724.89 "
                />
                <polygon
                  fill="#141414"
                  fillRule="nonzero"
                  points="392.07,882.29 784.13,650.54 392.07,472.33 "
                />
                <polygon
                  fill="#393939"
                  fillRule="nonzero"
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
          style={{enableBackground: "new 0 0 2496 2496"}}
        >
          <g>
            <path
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                fill: "#F0B90B",
              }}
              d="M1248,0c689.3,0,1248,558.7,1248,1248s-558.7,1248-1248,1248   S0,1937.3,0,1248S558.7,0,1248,0L1248,0z"
            />
            <path
              style={{fill: "#FFFFFF"}}
              d="M685.9,1248l0.9,330l280.4,165v193.2l-444.5-260.7v-524L685.9,1248L685.9,1248z M685.9,918v192.3   l-163.3-96.6V821.4l163.3-96.6l164.1,96.6L685.9,918L685.9,918z M1084.3,821.4l163.3-96.6l164.1,96.6L1247.6,918L1084.3,821.4   L1084.3,821.4z"
            />
            <path
              style={{fill: "#FFFFFF"}}
              d="M803.9,1509.6v-193.2l163.3,96.6v192.3L803.9,1509.6L803.9,1509.6z M1084.3,1812.2l163.3,96.6   l164.1-96.6v192.3l-164.1,96.6l-163.3-96.6V1812.2L1084.3,1812.2z M1645.9,821.4l163.3-96.6l164.1,96.6v192.3l-164.1,96.6V918   L1645.9,821.4L1645.9,821.4L1645.9,821.4z M1809.2,1578l0.9-330l163.3-96.6v524l-444.5,260.7v-193.2L1809.2,1578L1809.2,1578   L1809.2,1578z"
            />
            <polygon
              style={{fill: "#FFFFFF"}}
              points="1692.1,1509.6 1528.8,1605.3 1528.8,1413 1692.1,1316.4 1692.1,1509.6  "
            />
            <path
              style={{fill: "#FFFFFF"}}
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
          textRendering="geometricPrecision"
          imageRendering="optimizeQuality"
          fillRule="evenodd"
          clipRule="evenodd"
          viewBox="0 0 784.37 1277.39"
        >
          <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer" />
            <g id="_1421394342400">
              <g>
                <polygon
                  fill="#343434"
                  fillRule="nonzero"
                  points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 "
                />
                <polygon
                  fill="#8C8C8C"
                  fillRule="nonzero"
                  points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 "
                />
                <polygon
                  fill="#3C3C3B"
                  fillRule="nonzero"
                  points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 "
                />
                <polygon
                  fill="#8C8C8C"
                  fillRule="nonzero"
                  points="392.07,1277.38 392.07,956.52 -0,724.89 "
                />
                <polygon
                  fill="#141414"
                  fillRule="nonzero"
                  points="392.07,882.29 784.13,650.54 392.07,472.33 "
                />
                <polygon
                  fill="#393939"
                  fillRule="nonzero"
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

  async function handleRegistration({fullName, email, referral}) {
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
    message:
      "Referral code is required, please check referral code before staking",
    status: "warning",
  });

  const [exchangeDetails, setExchangeDetails] = useState({});
  const [createChargeLoading, setCreateChargeLoading] = useState(false);
  async function handleCreateCharge(token, rpc, amount, tokenAmount) {
    console.log(
      token,
      rpcs?.find((item) => item.id === rpc),
      amount,
      tokenAmount
    );

    setExchangeDetails({exchangeId: "123", address: "0x123"});
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
            location={{pathName: ""}}
            title={"A1"}
            amount={10}
            logoSvg={<LogoSvg />}
            verified={false}
          />

          <LandingSteps
            translates={translates}
            validEmailProviders={[
              "gmail.com",
              "company2.com",
              "examplecorp.com",
            ]}
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
              console.log(
                "payment confirm",
                userAddress,
                selectedMethod,
                amount,
                date
              )
            }
            connectionLoading={false}
            formData={formData}
            setFormData={setFormData}
            resendEmail={() => console.log("resend email")}
            disconnect={() => console.log("ds")}
            exchangeRate={3}
            tranasctionFee={1}
            handlePurchaseEvent={handleCreateCharge}
            timeperiod={timeperiod}
            timeperiodDate={timeperiodDate}
            handleTimePeriod={handleTimePeriod}
            handleTimeperiodDate={handleTimeperiodDate}
            durationOptions={durationOptions}
            buttonLabel={"Top Up"}
            handleSubmit={() =>
              console.log(currentObject.amount, timeperiodDate)
            }
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
