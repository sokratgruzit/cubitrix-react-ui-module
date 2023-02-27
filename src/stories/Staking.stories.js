import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Staking } from "../components/Staking/Staking";
import { Button } from "../components/Button";
import { Header } from "../components/Header";

const stories = storiesOf("Staking", module);

import { EarnIcon } from "../assets/svgs";
import { useMobileWidth } from "../hooks/useMobileWidth";
import { BrowserRouter } from "react-router-dom";

stories.add("Staking", () => {
  const [depositAmount, setDepositAmount] = useState("10");
  const [timeperiod, setTimeperiod] = useState(4);
  const [timeperiodDate, setTimeperiodDate] = useState(0);

  const [stackContractInfo, setStackContractInfo] = useState({
    totalStakers: 0,
    totalStakedToken: 0,
  });

  const [stakersInfo, setStakersInfo] = useState({
    currentStake: 0,
    earn: 0,
    claimedReward: 0,
    walletBalance: 0,
    totalStaked: 0,
    totalUnstaked: 0,
  });

  const [isAllowance, setIsAllowance] = useState(false);
  const [loading, setLoading] = useState(false);

  const [mobileExpand, setMobileExpand] = useState(null);

  let mobileExpandFunc = (id) => {
    if (width <= 1300) {
      if (id !== mobileExpand) {
        setMobileExpand(id);
      } else {
        setMobileExpand(null);
      }
    }
  };

  const { width } = useMobileWidth();

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

  const accountSummaryData = [
    [
      {
        icon: <EarnIcon />,
        title: "Current Stake",
        value: stakersInfo?.currentStake,
      },
      {
        icon: <EarnIcon />,
        title: "Earn",
        value: stakersInfo?.earn,
      },
      {
        icon: <EarnIcon />,
        title: "Claimed Reward",
        value: stakersInfo?.claimedReward,
      },
    ],
    [
      {
        icon: <EarnIcon />,
        title: "Your Wallet Balance",
        value: stakersInfo?.walletBalance,
      },
      {
        icon: <EarnIcon />,
        title: "Total Staked",
        value: stakersInfo?.totalStaked,
      },
      {
        icon: <EarnIcon />,
        title: "Total Unstaked",
        value: stakersInfo?.totalUnstaked,
      },
    ],
  ];

  let th = [
    {
      name: "Staked Amount",
      width: 15,
      mobileWidth: 45,
      id: 0,
    },
    {
      name: "Stake Date ",
      width: 15,
      id: 1,
    },
    {
      name: "Unstake Date",
      width: 15,
      id: 2,
    },
    {
      name: "Earn Reward",
      width: 15,
      id: 3,
    },
    {
      name: "Harvest",
      width: 15,
      mobileWidth: 45,
      id: 4,
    },
    {
      name: "",
      width: 10,
      id: 5,
      mobileWidth: 35,
      position: "right",
      className: "buttons-th",
      onClick: () => console.log("unstake"),
    },
    {
      name: "",
      width: 10,
      id: 6,
      mobileWidth: 35,
      position: "right",
      className: "buttons-th",
      onClick: () => console.log("harvest"),
    },
  ];

  let td = [
    {
      id: 12123,
      staked_amount: "1,220,000.2",
      stake_date: "01.02.2023 10:00AM",
      unstake_date: "01.02.2023 08:15PM",
      earn_reward: "CML",
      harvest: "1,132,000.1",
    },
    {
      id: 121223323,
      staked_amount: "1,220,000.2",
      stake_date: "01.02.2023 10:00AM",
      unstake_date: "01.02.2023 08:15PM",
      earn_reward: "CML",
      harvest: "1,132,000.1",
    },
    {
      id: 1212323,
      staked_amount: "1,220,000.2",
      stake_date: "01.02.2023 10:00AM",
      unstake_date: "01.02.2023 08:15PM",
      earn_reward: "CML",
      harvest: "1,132,000.1",
    },
  ];

  let mobile = width < 1300;

  let tableData;
  tableData = td.map((item, index) => {
    return (
      <div
        className={`table-parent ${mobileExpand == item.id ? "active" : ""}`}
        key={index}
        onClick={() => {
          mobileExpandFunc(item.id);
        }}
      >
        <div className={"table"}>
          {th?.slice(0, 5).map((i, index) => (
            <div
              key={index}
              className={`td col ${i.mobileWidth ? true : false}`}
              style={{ width: `${mobile ? i.mobileWidth : i.width}%` }}
            >
              <span>
                {
                  [
                    item.staked_amount,
                    item.stake_date,
                    item.unstake_date,
                    item.earn_reward,
                    item.harvest,
                  ][index]
                }
              </span>
            </div>
          ))}
          {width > 550 &&
            th.slice(5, 7).map((i, index) => (
              <div
                key={index}
                className={`td col ${i.position} ${
                  i.mobileWidth ? true : false
                }`}
                style={{
                  width: `${mobile ? i.mobileWidth : i.width}%`,
                  marginRight: `${width < 1450 ? "10px" : "0"}`,
                }}
              >
                <Button
                  element={"staking-button"}
                  label={index === 0 ? "Unstake" : "Harvest"}
                  active={index === 0}
                  customStyles={{ borderRadius: "32px" }}
                  onClick={i.onClick}
                />
              </div>
            ))}
        </div>
        <div className="table-more" />
        <div className="icon-place">
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.299 1.33325L6.47141 5.16089C6.01937 5.61293 5.27968 5.61293 4.82764 5.16089L1 1.33325"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="table-mobile">
          <div className="table-mobile-content">
            {[1, 2, 3].map((index) => (
              <div className="td" key={index}>
                <div className="mobile-ttl">{th[index].name}</div>
                <span>
                  {
                    item[
                      index === 1
                        ? "stake_date"
                        : index === 2
                        ? "unstake_date"
                        : "earn_reward"
                    ]
                  }
                </span>
              </div>
            ))}
            {width <= 550 && (
              <div className="table-buttons">
                {[5, 6].map((index) => (
                  <div className="td" key={index}>
                    <Button
                      element="staking-button"
                      label={index === 5 ? "Unstake" : "Harvest"}
                      active={index === 5}
                      customStyles={{ borderRadius: "32px" }}
                      onClick={th[index].onClick}
                      // disabled={true}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  });

  let account = false;

  const handleSubmit = () => {
    if (!account) {
      console.log("connect");
    }
    if (account && isAllowance) {
      console.log("enable");
    }
    if (account && !isAllowance) {
      console.log("hihi");
      console.log(depositAmount);
      console.log(timeperiod);
    }
  };

  const handleTimeperiodDate = (period) => {
    setTimeperiodDate(period);
  };

  const handleDepositAmount = (amount) => {
    setDepositAmount(amount);
  };

  const handleTimePeriod = (period) => {
    setTimeperiod(period);
  };

  return (
    <BrowserRouter>
      <Header
        modules={[]}
        account={"shit"}
        location={{ pathName: "" }}
        title={"COMPLEND"}
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
      <Staking
        account={true}
        durationOptions={durationOptions}
        stackContractInfo={stackContractInfo}
        loading={loading}
        isAllowance={isAllowance}
        handleCalculatorSubmit={handleSubmit}
        timeperiod={timeperiod}
        handleTimePeriod={handleTimePeriod}
        depositAmount={depositAmount}
        handleDepositAmount={handleDepositAmount}
        handleTimeperiodDate={handleTimeperiodDate}
        timeperiodDate={timeperiodDate}
        handleMaxClick={() => console.log("max!!!")}
        accountSummaryData={accountSummaryData}
        tableData={tableData}
        tableHead={th}
      />
    </BrowserRouter>
  );
});
