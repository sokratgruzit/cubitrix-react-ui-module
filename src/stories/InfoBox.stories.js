import { storiesOf } from "@storybook/react";
import { title } from "process";
import { InfoBox } from '../components/InfoBox/index';
import img from "../assets/img/icon.png";
import icon2 from "../assets/img/icon2.png";
import icon3 from "../assets/img/icon3.png";
import icon4 from "../assets/img/icon4.png";
import { useState } from "react";


const stories = storiesOf('InfoBox', module);
const cardInfoHeader = {
    title: "Account",
    lables: {
        l1: "Withdraw",
        l2: "Deposit",
    }
}

const cardInfoBody = [
    {
        title: "Buying Power",
        value: "$0.00"
    },
    {
        title: "Equity",
        value: "$0.00"
    },
    {
        title: "Margin Usage",
        value: "$0.00"
    },
    {
        title: "Account Leverage",
        value: "-"
    }
];

const unavilableHeader = {
    title: "Details"
}

const unavilableCardBody = [
    {
        title: "Fee Percent",
        value: "-",
        taker: ""
    },
    {
        title: "Fee",
        value: "-",
        taker: "Taker"
    },
    {
        title: "Total",
        value: "-",
        taker: ""
    }
];

const connectWallet = {
    icon: img,
    p: "Connect your Ethereum wallet to deposit funds & start trading.",
    btn: "Connect Wallet",
}

const revardBox = [
    {
        title: "Current Stake",
        amount: "1,220.2 CML",
        icon: icon4
    },
    {
        title: "Earn",
        amount: "1,020 CML",
        icon: icon2
    },
    {
        title: "Claimed Reward",
        amount: "1,132.1 CML",
        icon: icon3
    }
]

stories.add('InfoBox', () => {
    const [show, setSow] = useState(false);
    return (
        <div>
            <InfoBox 
                bg='blue' 
                type='avilable' 
                anime={show ? "animation-one": ""}
                header={cardInfoHeader} 
                cardBody={cardInfoBody} 
                />
            <InfoBox 
                height='height'
                bg='darck' 
                type='unAvilable' 
                anime={show ? "animation-one": ""}
                header={unavilableHeader} 
                cardBody={unavilableCardBody} 
                padding='padding-bottom'
            />
            <button style={{backgroundColor: "red", height: "50px", width: "100px"}} onClick={() => {setSow(!show)}}>btn</button>
            <InfoBox 
                bg='darck' 
                type='connectWallet' 
                anime={show ? "animation-one": ""}
                content={connectWallet} 
                img={connectWallet.icon} 
                center="card-center" 
            />
            <InfoBox 
                type='complate'
                center="complete-account"
                anime={show ? "animation-one": ""}
            />
                <button style={{backgroundColor: "red", height: "50px", width: "100px"}} onClick={() => {setSow(!show)}}>btn</button>
            <InfoBox 
                cardBody={revardBox}
                revardbox="revardBox"
                anime={show ? "animation-one": ""}
                type="revardBox"
            />
        </div>
    )
})