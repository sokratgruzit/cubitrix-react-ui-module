import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Staking } from "../components/Staking/Staking";

const stories = storiesOf("Staking", module);

import { EarnIcon } from '../assets/svgs'

stories.add("Staking", () => {
  const [stakeData, setStakeData] = useState({
    amount: '',
    duration: '30'
  });
  // console.log(stakeData);
  const durationOptions = [
    {
      title: "30",
      value: '15 % APY On 30 Days. Locked Until 02/02/2023 2:33 PM'
    },
    {
      title: "60",
      value: '20 % APY On 60 Days. Locked Until 02/02/2023 2:33 PM'
    },
    {
      title: "90",
      value: '25 % APY On 90 Days. Locked Until 02/02/2023 2:33 PM'
    },
    {
      title: "180",
      value: '30 % APY On 180 Days. Locked Until 02/02/2023 2:33 PM'
    },
    {
      title: "360",
      value: '40 % APY On 360 Days. Locked Until 02/02/2023 2:33 PM'
    },
  ];

  const AccountSummaryData = [
    [
      {
        icon: <EarnIcon />,
        title: 'Current Stake',
        value: '1,220/2'
      },
      {
        icon: <EarnIcon />,
        title: 'Current Stake',
        value: '1,220/2'
      },
      {
        icon: <EarnIcon />,
        title: 'Current Stake',
        value: '1,220/2'
      } 
    ],
    [
      {
        icon: <EarnIcon />,
        title: 'Current Stake',
        value: '1,220/2'
      },
      {
        icon: <EarnIcon />,
        title: 'Current Stake',
        value: '1,220/2'
      },
      {
        icon: <EarnIcon />,
        title: 'Current Stake',
        value: '1,220/2'
      } 
    ]
  ];
  return (
    <>
      <Staking
        durationOptions={durationOptions}
        biddingInfoData={{
          stakers: '1',
          balance: '0'
        }}
        handleStake={() => console.log(stakeData)}
        stakeData={stakeData}
        setStakeData={setStakeData}
        handleMaxClick={() => console.log('max!!!')}
        AccountSummaryData={AccountSummaryData}
      />
    </>
  );
});
