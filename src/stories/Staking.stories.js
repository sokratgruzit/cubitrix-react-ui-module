import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Staking } from "../components/Staking/Staking";

const stories = storiesOf("Staking", module);

stories.add("Staking", () => {
  const [stakeData, setStakeData] = useState({
    amount: '',
    duration: '30'
  });
  // console.log(stakeData);
  const durationOptions = [
    {
      title: "30",
    },
    {
      title: "60",
    },
    {
      title: "90",
    },
    {
      title: "180",
    },
    {
      title: "360",
    },
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
      />
    </>
  );
});
