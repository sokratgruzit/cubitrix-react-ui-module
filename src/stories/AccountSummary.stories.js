import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { AccountSummary } from "../components/AccountSummary";

const stories = storiesOf("AccountSummary", module);

import { EarnIcon } from '../assets/svgs'

const data = [
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
];

stories.add("AccountSummary", () => {
    return (
        <div>
            <AccountSummary data={data} />
        </div>
    );
});
