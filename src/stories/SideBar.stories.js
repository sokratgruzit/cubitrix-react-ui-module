import React, { useEffect, useState } from "react";
import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { SideBar } from "../components/SideBar";
import { Visual } from "../components/Visual";
import { Button } from "../components/Button";

import { Connect } from "../components/Auth/Connect";
import { UserAccount } from "../components/Auth/UserAccount";
import { UserOptions } from "../components/Auth/UserOptions/UserOptions";
import { SignIn } from "../components/Auth/SignIn";
import { ResetPasswordForm } from "../components/Auth/ResetPasswordForm";
import ResetPassword from "../components/Auth/ResetPassword/ResetPassword";
import { Popup } from "../components/Popup/Popup";
import { ChangeNetwork } from "../components/Auth/ChangeNetwork";
import { NoMetaMask } from "../components/Auth/NoMetaMask";
import { Account, MetaMask } from "../assets/svgs";
import { TransferFromAcc } from "../components/TransferFromAcc";
import { Exchange } from "../components/Exchange";
import { Deposit } from "../components/Deposit";
import { StakeCurrency } from "../components/StakeCurrency";
import { LevelSystem } from "../components/LevelSystem";
import { ReferralCode } from "../components/ReferralCode";
import { useMobileWidth } from "../hooks/useMobileWidth";
import { FeeWarning } from "../components/Auth/FeeWarning";

const stories = storiesOf("SideBar", module);

stories.add("SideBar", () => {
  const [toggle, setToggle] = useState(false);
  let image = `https://s3.cointelegraph.com/storage/uploads/view/45ac886ece164ffba711e9c73b59d7b8.png`;
  const completeHandler = (i) => {
    console.log(i);
  };
  const [twoFactorAuth, setTwoFactorAuth] = useState(true);
  const [currentObject, setCurrentObject] = useState({
    amount: "",
    transfer: "",
  });
  const [levelSystemTableOptions, setLevelSystemTableOptions] = useState([]);

  const { width } = useMobileWidth();

  const getOptions = async () => {
    const response = await fetch(
      `http://localhost:4000/api/referral/get_referral_options`,
    );

    const data = await response.json();

    setLevelSystemTableOptions(data);
  };

  useEffect(() => {
    getOptions();
  }, []);

  const inputs = [
    {
      title: "Select Transfer type",
      name: "transfer",
      type: "lable-input-select",
      options: [
        {
          name: "Transfer to another user",
          value: "external",
          svg: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#C38C5C"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_40_6461)">
                <path
                  d="M5 19.3787C8.38821 22.7669 16.3689 22.7669 19.7571 19.3787L17.3057 18.7658"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path d="M5.57491 9.02673H5.40473C4.70373 9.00557 4.03887 8.71087 3.55241 8.2057C3.06595 7.70053 2.79654 7.02502 2.80183 6.32373C2.80183 4.83207 4.01318 3.62073 5.50484 3.62073C6.2119 3.62416 6.8895 3.9044 7.39242 4.40142C7.89534 4.89843 8.18357 5.57267 8.19536 6.27964C8.20714 6.98661 7.94153 7.67008 7.45545 8.18358C6.96937 8.69707 6.3015 8.99975 5.59494 9.02673H5.57491ZM5.50484 5.1224C4.8441 5.1224 4.3035 5.663 4.3035 6.32373C4.3035 6.97445 4.81407 7.50504 5.45478 7.52507C5.45478 7.51505 5.51485 7.51505 5.58493 7.52507C6.21563 7.48502 6.70617 6.96444 6.70617 6.32373C6.70617 5.663 6.16557 5.1224 5.50484 5.1224Z" />
                <path d="M5.50501 16.0344C4.36374 16.0344 3.22247 15.734 2.33148 15.1434C1.49055 14.5827 1 13.7718 1 12.9109C1 12.0499 1.48053 11.229 2.33148 10.6684C4.11346 9.48708 6.89655 9.48708 8.66852 10.6684C9.50945 11.229 10 12.0499 10 12.9009C10 13.7618 9.51947 14.5727 8.66852 15.1434C7.78754 15.744 6.64627 16.0344 5.50501 16.0344ZM3.1624 11.9198C2.73192 12.2101 2.50167 12.5605 2.50167 12.9109C2.50167 13.2613 2.74194 13.6117 3.1624 13.902C4.43382 14.7529 6.56618 14.7529 7.8376 13.902C8.26808 13.6117 8.50834 13.2613 8.49833 12.9109C8.49833 12.5605 8.25806 12.2101 7.8376 11.9198C6.5762 11.0688 4.43382 11.0688 3.1624 11.9198Z" />
                <path d="M18.0842 8.00667H17.8951C17.1162 7.98315 16.3775 7.65571 15.837 7.09441C15.2965 6.53311 14.9971 5.78255 15.003 5.00334C15.003 3.34594 16.349 2 18.0064 2C18.792 2.00381 19.5449 2.3152 20.1037 2.86743C20.6625 3.41967 20.9827 4.16882 20.9958 4.95435C21.0089 5.73987 20.7138 6.49928 20.1737 7.06983C19.6336 7.64038 18.8915 7.97669 18.1065 8.00667H18.0842ZM18.0064 3.66852C17.2722 3.66852 16.6715 4.26919 16.6715 5.00334C16.6715 5.72636 17.2388 6.31591 17.9507 6.33815C17.9507 6.32703 18.0175 6.32703 18.0953 6.33815C18.7961 6.29366 19.3412 5.71524 19.3412 5.00334C19.3412 4.26919 18.7405 3.66852 18.0064 3.66852Z" />
                <path d="M18.0056 15.7932C16.7375 15.7932 15.4694 15.4595 14.4794 14.8032C13.5451 14.1803 13 13.2793 13 12.3227C13 11.3661 13.5339 10.454 14.4794 9.83105C16.4594 8.51848 19.5517 8.51848 21.5206 9.83105C22.455 10.454 23 11.3661 23 12.3116C23 13.2682 22.4661 14.1692 21.5206 14.8032C20.5417 15.4706 19.2736 15.7932 18.0056 15.7932ZM15.4027 11.2215C14.9244 11.5441 14.6685 11.9334 14.6685 12.3227C14.6685 12.712 14.9355 13.1013 15.4027 13.4239C16.8154 14.3694 19.1846 14.3694 20.5973 13.4239C21.0756 13.1013 21.3426 12.712 21.3315 12.3227C21.3315 11.9334 21.0645 11.5441 20.5973 11.2215C19.1958 10.276 16.8154 10.276 15.4027 11.2215Z" />
              </g>
              <defs>
                <clipPath id="clip0_40_6461">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ),
        },
        {
          name: "Transfer to own account",
          value: "internal",
          svg: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 15C2 18.87 5.13 22 9 22L7.95 20.25"
                stroke="#C38C5C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.4229 11.2258H12.2584C11.5808 11.2053 10.9381 10.9205 10.4678 10.4321C9.99758 9.94379 9.73715 9.29081 9.74226 8.61289C9.74226 7.17096 10.9132 6 12.3552 6C13.0386 6.00331 13.6937 6.27422 14.1798 6.75466C14.666 7.23511 14.9446 7.88687 14.956 8.57027C14.9674 9.25368 14.7106 9.91436 14.2407 10.4107C13.7709 10.9071 13.1253 11.1997 12.4423 11.2258H12.4229ZM12.3552 7.45161C11.7164 7.45161 11.1939 7.97419 11.1939 8.61289C11.1939 9.24192 11.6874 9.75483 12.3068 9.77418C12.3068 9.7645 12.3648 9.7645 12.4326 9.77418C13.0422 9.73547 13.5164 9.23225 13.5164 8.61289C13.5164 7.97419 12.9939 7.45161 12.3552 7.45161Z"
                fill="#C38C5C"
              />
              <path
                d="M12.3548 18.0001C11.2516 18.0001 10.1484 17.7097 9.28709 17.1388C8.47419 16.5968 8 15.813 8 14.9807C8 14.1485 8.46451 13.3549 9.28709 12.813C11.0097 11.6711 13.7 11.6711 15.4129 12.813C16.2258 13.3549 16.7 14.1485 16.7 14.971C16.7 15.8033 16.2355 16.5872 15.4129 17.1388C14.5613 17.7194 13.458 18.0001 12.3548 18.0001ZM10.0903 14.0227C9.67419 14.3033 9.45161 14.642 9.45161 14.9807C9.45161 15.3194 9.68387 15.6581 10.0903 15.9388C11.3193 16.7614 13.3806 16.7614 14.6097 15.9388C15.0258 15.6581 15.258 15.3194 15.2484 14.9807C15.2484 14.642 15.0161 14.3033 14.6097 14.0227C13.3903 13.2001 11.3193 13.2001 10.0903 14.0227Z"
                fill="#C38C5C"
              />
              <path
                d="M22 9C22 5.13 18.87 2 15 2L16.05 3.75"
                stroke="#C38C5C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
      ],
      defaultAny: "Select",
      onChange: (e) =>
        setCurrentObject((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        })),
    },
  ];

  const accounts = [
    {
      svg: <Account type={"btc"} />,
      title: "BTC",
      value: "0.000000 BTC",
      price: "$0.00",
    },
    {
      svg: <Account type={"usdc"} />,
      title: "USDT",
      value: "0.000000 USDT",
      price: "$0.00",
    },
    {
      svg: <Account type={"eth"} />,
      title: "ETH",
      value: "0.000000 ETH",
      price: "$0.00",
    },
    {
      svg: <Account type={"gold"} />,
      title: "GOLD",
      value: "0.000000 G",
      price: "$0.00",
    },
    {
      svg: <Account type={"platinum"} />,
      title: "PLATINUM",
      value: "0.000000 P",
      price: "$0.00",
    },
  ];

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

  let popUpTh = [
    {
      name: "Level",
      width: 30,
      id: 0,
    },
    {
      name: "Holding (USD)",
      width: 40,
      id: 1,
    },
    {
      name: "Rebate Rate",
      width: 30,
      id: 2,
    },
  ];

  let popUpTd = [
    {
      level: "UNI LVL",
      complandHolding: "-",
      rebaseRate: "-",
    },
    {
      level: "VIP 1",
      complandHolding: levelSystemTableOptions?.referral_binary_max_amount_lvl_1,
      rebaseRate: levelSystemTableOptions?.referral_binary_percentage_lvl_1,
    },
    {
      level: "VIP 2",
      complandHolding: levelSystemTableOptions?.referral_binary_max_amount_lvl_2,
      rebaseRate: levelSystemTableOptions?.referral_binary_percentage_lvl_2,
    },
    {
      level: "VIP 3",
      complandHolding: levelSystemTableOptions?.referral_binary_max_amount_lvl_3,
      rebaseRate: levelSystemTableOptions?.referral_binary_percentage_lvl_3,
    },
    {
      level: "VIP 4",
      complandHolding: levelSystemTableOptions?.referral_binary_max_amount_lvl_4,
      rebaseRate: levelSystemTableOptions?.referral_binary_percentage_lvl_4,
    },
    {
      level: "VIP 5",
      complandHolding: levelSystemTableOptions?.referral_binary_max_amount_lvl_5,
      rebaseRate: levelSystemTableOptions?.referral_binary_percentage_lvl_5,
    },
    {
      level: "VIP 6",
      complandHolding: levelSystemTableOptions?.referral_binary_max_amount_lvl_6,
      rebaseRate: levelSystemTableOptions?.referral_binary_percentage_lvl_6,
    },
    {
      level: "VIP 7",
      complandHolding: levelSystemTableOptions?.referral_binary_max_amount_lvl_7,
      rebaseRate: levelSystemTableOptions?.referral_binary_percentage_lvl_7,
    },
    {
      level: "VIP 8",
      complandHolding: levelSystemTableOptions?.referral_binary_max_amount_lvl_8,
      rebaseRate: levelSystemTableOptions?.referral_binary_percentage_lvl_8,
    },
    {
      level: "VIP 9",
      complandHolding: levelSystemTableOptions?.referral_binary_max_amount_lvl_9,
      rebaseRate: levelSystemTableOptions?.referral_binary_percentage_lvl_9,
    },
    {
      level: "VIP 10",
      complandHolding: levelSystemTableOptions?.referral_binary_max_amount_lvl_10,
      rebaseRate: levelSystemTableOptions?.referral_binary_percentage_lvl_10,
    },
    {
      level: "VIP 11",
      complandHolding: levelSystemTableOptions?.referral_binary_max_amount_lvl_11,
      rebaseRate: levelSystemTableOptions?.referral_binary_percentage_lvl_11,
    },
  ];

  return (
    <div>
      <button onClick={() => setToggle((prev) => !prev)}>toggle</button>
      {/* {twoFactorAuth && (
        <Popup
          popUpElement={<NoMetaMask />}
          label={"Check Your Network"}
          handlePopUpClose={() => setTwoFactorAuth(false)}
        />
      )} */}

      {/* <div style={{ width: "400px" }}>
        <ResetPasswordForm
          passwordSetUpState={{ loading: false, error: "shit", success: "haha" }}
          handleNewPassword={(e) => console.log(e)}
        />
      </div> */}
      {/* <Popup
        popUpElement={
          <ChangeNetwork
            disconnect={() => console.log("disconnect")}
            handleNetworkChange={() => console.log("handle network change")}
          />
        }
        label={"Check Your Network"}
      /> */}

      {/* <Popup
        popUpElement={
          <FeeWarning />
          // <ChangeNetwork
          //   disconnect={() => console.log("disconnect")}
          //   handleNetworkChange={() => console.log("handle network change")}
          // />
        }
        label={"Opening account fee"}
      /> */}

      <SideBar open={toggle}>
        {/* <TransferFromAcc
          sideBarClose={() => setToggle((prev) => !prev)}
          inputs={inputs}
          currentObject={currentObject}
          cardImg={"sada"}
          handleSubmit={() => console.log("hi")}
          buttonLabel={"Transfer"}
          success={true}
          helpText={"hi"}
          showHelpText={true}
          accountType={"CPL"}
          accountBalance={"1,400.00"}
          accountBalanceSecond={"$2,034.04"}
          label={"hi"}
          info={"info"}
        />{" "} */}
        {/* <Connect
          ConnectOptions={[
            {
              label: "Metamask",
              svg: <MetaMask width="26" />,
              connect: () => {
                console.log("connect");
              },
            },
            {
              label: "ConnectWallet",
              image,
              connect: () => {
                console.log("connect");
              },
            },
          ]}
          address={"0xb81G555828610c156eF3408DE21A3eC9b9B29V81"}
          signIn={() => {
            console.log("sign in");
          }}
          sideBarClose={() => setToggle((prev) => !prev)}
        /> */}
        {/* <UserAccount
          type={"Metamask"}
          personalData={{
            name: "",
            email: "",
            mobile: {
              code: "+1",
              flag: "🇺🇸",
              number: "",
            },
            date_of_birth: new Date(),
            nationality: "canada",
          }}
          completeAccount={() => console.log("complete")}
          sideBarClose={() => setToggle((prev) => !prev)}
          disconnect={() => console.log("disconnect")}
          userAccount={() => console.log("userAccount")}
          handlePersonalData={(e) => console.log(e)}
          handleSecurityData={(e) => console.log(e)}
          personalDataState={{ loading: false, saved: false, emailSent: false }}
          securityDataState={{ loading: false, saved: false }}
          emailVerified={true}
          userDataError={"error while saving"}
          securityError={"password is incorrect"}
          resendEmail={() => console.log("aahah")}
          hasPasswordSet={true}
          imgValue={
            "http://localhost:4000/images/0xecE0E468da93f632F1594F93d05289d465429137.png"
          }
          twoFactorAuth={twoFactorAuth}
          handleTwoFactorAuth={(val) => {
            setTwoFactorAuth(val);
          }}
          handleForgetPassword={() => console.log("forget password")}
        /> */}
        {/* <ResetPassword
          sideBarClose={() => setToggle((prev) => !prev)}
          goBack={() => console.log("go back")}
          resetPasswordState={{
            loading: false,
            error: "wrong ",
            success: "success",
          }}
          handleResetPassword={(e) => console.log(e)}
        /> */}
        {/* <UserOptions
          type={"Metamask"}
          warning={true}
          completeAccount={() => console.log("complete")}
          sideBarClose={() => setToggle((prev) => !prev)}
          disconnect={() => console.log("disconnect")}
          userAccount={() => console.log("userAccount")}
          account={"ahaha"}
          mainAccount={"ahaha2"}
        /> */}
        {/* <StakeCurrency /> */}
        {/* <SignIn
          onClick={completeHandler}
          sideBarClose={() => setToggle((prev) => !prev)}
          goBack={() => console.log("go back")}
          signInState={{ loading: true, error: false }}
          otpEnabled={false}
          otpState={{ loading: false, error: "" }}
          handleTFA={(e) => console.log(e)}
          resetPasswordState={{
            loading: false,
            error: "wrong ",
            success: "success",
          }}
          handleResetPassword={(e) => console.log(e)}
        /> */}
      </SideBar>
    </div>
  );
});
