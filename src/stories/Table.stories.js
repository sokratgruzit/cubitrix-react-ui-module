import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { Table } from "../components/Table";

const stories = storiesOf("Table", module);

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

stories.add("Table", () => {
  return (
    <div>
      <Table type={"table-version"} tableHead={th} tableData={td} />
    </div>
  );
});
