import React, {createRef, useEffect, useState} from "react";
import {storiesOf} from "@storybook/react";
import {Staking} from "../components/Staking/Staking";
import {Button} from "../components/Button";
import {Header} from "../components/Header";

const stories = storiesOf("Staking", module);

import {EarnIcon, AddSquareIcon} from "../assets/svgs";
import {BrowserRouter} from "react-router-dom";
import {Popup} from "../components/Popup";
import {Calculator} from "../components/Calculator";
import {useMobileWidth} from "../hooks/useMobileWidth";
import {useOnScreen} from "../hooks/useOnScreen";
import translates from "../translates.json";

stories.add("Staking", () => {
  const [depositAmount, setDepositAmount] = useState("10");
  const [timeperiod, setTimeperiod] = useState(4);
  const [timeperiodDate, setTimeperiodDate] = useState(0);
  const [createStakingPopUpActive, setCreateStakingPopUpActive] =
    useState(false);

  const handlePopUpOpen = () => {
    setCreateStakingPopUpActive(true);
  };

  const {width} = useMobileWidth();

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
      width: 25,
      mobileWidth: width > 400 ? 45 : 100,
      id: 0,
    },
    {
      name: "Stake Date",
      width: 25,
      id: 1,
    },
    {
      name: "Unstake Date",
      width: 25,
      id: 2,
    },
    {
      name: "Harvest",
      width: 25,
      mobileWidth: width > 400 ? 45 : false,
      id: 4,
    },
    {
      name: "Unstake",
      width: 0,
      id: 5,
      className: "table-button-none",
      onClick: (index) => console.log(index),
    },
    {
      name: "",
      width: 0,
      id: 6,
      className: "table-button-none",
      onClick: (index) => console.log(index),
    },
  ];

  let stakersRecord = [
    {
      id: 12123,
      amount: "500",
      staketime: "14/02/2022 10:00 AM",
      unstaketime: "01/11/2023 3:12 PM",
      CML: "CML",
      realtimeRewardPerBlock: "1,132,000.1",
    },
    {
      id: 1213434,
      amount: "20,220,000.2",
      staketime: "11/02/2022 10:00 AM",
      unstaketime: "05/11/2023 3:12 PM",
      CML: "CML",
      realtimeRewardPerBlock: "1,132,000.1",
    },
  ];

  let account = false;

  const handleCalculatorSubmit = () => {
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

  const handleMaxClick = () => console.log("max!");

  const tableEmptyData = {
    label: "Stake to earn A1 reward",
    button: (
      <Button
        element={"referral-button"}
        label={"Create Staking"}
        icon={<AddSquareIcon />}
        onClick={handlePopUpOpen}
        customStyles={{height: "44px", flexDirection: "row"}}
      />
    ),
  };

  const infiniteScrollRef = createRef();
  const isLoadMoreButtonOnScreen = useOnScreen(infiniteScrollRef);

  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (isLoadMoreButtonOnScreen) {
      console.log("hi");
      setIsFetching(true);
    }
  }, [isLoadMoreButtonOnScreen]);

  const handleButtonClick = () => {
    toast.success("Success message");
    toast.error("Error message");
    toast.warning("Warning message");
  };

  const currencyStakesTableHead = [
    {
      name: "Staked Amount",
      width: 20,
      mobileWidth: width > 400 ? 25 : 100,
      id: 0,
    },
    {
      name: "Period",
      width: 20,
      mobileWidth: width > 400 ? 25 : 100,
      id: 0,
    },
    {
      name: "Percentage",
      width: 20,
      mobileWidth: width > 400 ? 25 : false,
      id: 4,
    },
    {
      name: "Reward",
      width: 20,
      mobileWidth: width > 400 ? 55 : false,
      id: 4,
    },
    {
      name: "Unstake Date",
      width: 20,
      id: 2,
    },
    {
      name: "",
      width: 10,
      id: 5,
      mobileWidth: 35,
      className: "table-button-none",
      onClick: (index) => {
        setUnstakeLoading(true);
        unstake(
          index,
          () => {
            setUnstakeLoading(false);
            axios
              .post("api/transactions/unstake_transaction", {
                address: account,
                index,
              })
              .then((res) => {
                refetchStakersRecord();
              })
              .catch((e) => {
                console.log(e);
              });
          },
          () => {
            setUnstakeLoading(false);
          }
        );
      },
    },
    {
      name: "",
      width: 7,
      id: 6,
      mobileWidth: 20,
      className: "table-button-none",
      onClick: (index) => {
        setHarvestLoading(true);
        harvest(
          index,
          () => {
            setHarvestLoading(false);
            refetchStakersRecord();
          },
          () => {
            setHarvestLoading(false);
          }
        );
      },
    },
  ];

  return (
    <BrowserRouter>
      <Header
        modules={[]}
        account={"0x0000000"}
        location={{pathName: ""}}
        title={"A1"}
        logoSvg={<>logo svg</>}
        verified={false}
      />
      <button onClick={handleButtonClick}>Show Toasts</button>
      <Staking
        account={true}
        translates={translates}
        durationOptions={durationOptions}
        stackContractInfo={stackContractInfo}
        loading={loading}
        isAllowance={isAllowance}
        handleCalculatorSubmit={handleCalculatorSubmit}
        timeperiod={timeperiod}
        handleTimePeriod={handleTimePeriod}
        depositAmount={depositAmount}
        handleDepositAmount={handleDepositAmount}
        handleTimeperiodDate={handleTimeperiodDate}
        timeperiodDate={timeperiodDate}
        handleMaxClick={() => console.log("max!!!")}
        accountSummaryData={accountSummaryData}
        stakersRecord={stakersRecord}
        tableHead={th}
        handlePopUpOpen={handlePopUpOpen}
        tableEmptyData={tableEmptyData}
        hasMoreData={false}
        infiniteScrollRef={infiniteScrollRef}
        isFetching={isFetching}
        currencyStakes={[
          {
            address: "0x30181562290698bb591c3bd58ed40e44eaa6d3d9",
            amount: 0.0999,
            createdAt: "2023-12-19T05:19:45.397Z",
            currency: "bnb",
            expected_reward: 0.02958702126294188,
            percentage: 1,
            stake_time: 1702959912000,
            status: "unpaid",
            unstake_time: 1734067185393,
            updatedAt: "2023-12-19T05:19:45.397Z",
            __v: 0,
            _id: "658127f1c26f05a1024b149d",
          },
        ]}
        currencyStakesLoading={false}
        currencyStakesTableHead={currencyStakesTableHead}
      />
      {createStakingPopUpActive && (
        <Popup
          popUpElement={
            <Calculator
              {...{
                durationOptions,
                handleCalculatorSubmit,
                handleMaxClick,
                loading,
                isAllowance,
                account,
                timeperiod,
                handleTimePeriod,
                depositAmount,
                handleDepositAmount,
                timeperiodDate,
                handleTimeperiodDate,
              }}
            />
          }
          label={"Staking Calculator"}
          handlePopUpClose={() => setCreateStakingPopUpActive(false)}
          description={"Stake A1 to earn A1 reward"}
        />
      )}
    </BrowserRouter>
  );
});
