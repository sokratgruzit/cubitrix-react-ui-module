import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
// import {MarketCard} from "../components/MarketCard";
import { BiddingInfo } from "../components/BiddingInfo";
import { Calculator } from "../components/Calculator";
import { Table } from '../components/Table';
import { StakeInfo } from "../components/StakeInfo";

const stories = storiesOf("Staking", module);

let th = [
    {
      stakedAmountTitle: "Staked Amount",
      stakedDateTitle: "Stake Date",
      unstakedDateTitle: "Unstake Date",
      earnRewardTitle: "Earn Reward",
      harvestTitle: "Harvest",
    },
  ];
  
  let td = [
    {
      stakedAmount: "1,220,000.2",
      stakedDate: "01.02.2023 10:00AM",
      unstakedDate: "01.02.2023 08:15PM",
      earnReward: "CML",
      harvest: "1,132,000.1",
      id: 0,
    },
    {
      stakedAmount: "1,220,000.2",
      stakedDate: "01.02.2023 10:00AM",
      unstakedDate: "01.02.2023 08:15PM",
      earnReward: "CML",
      harvest: "1,132,000.1",
      id: 1,
    },
    {
      stakedAmount: "1,220,000.2",
      stakedDate: "01.02.2023 10:00AM",
      unstakedDate: "01.02.2023 08:15PM",
      earnReward: "CML",
      harvest: "1,132,000.1",
      id: 2,
    },
  ];

stories.add("Staking", () => {
    return (
        <div className={`main`}>
            <div className={`staking-main-sidebar`}>
                <div className={`main-sidebar-content`}>
                    {/* <MarketCard
                        active={true}
                    /> */}
                    <BiddingInfo />
                    <Calculator />
                </div>
            </div>
            <div className={`main-content`}>
                {/* <div> */}
                <StakeInfo />      
                <Table type={"table-version"} tableHead={th} tableData={td} />
                {/* </div> */}
            </div>
        </div>
    );
});
