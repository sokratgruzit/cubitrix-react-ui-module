import { storiesOf } from "@storybook/react";
import { InfoBox } from '../components/InfoBox/index';
import img from "../assets/img/icon.png";
import icon2 from "../assets/img/icon2.png";
import icon3 from "../assets/img/icon3.png";
import icon4 from "../assets/img/icon4.png";
import icon5 from "../assets/img/icon5.png";


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
const unavilableBtn = {
    btn: "Unavailable"
}
const connectWallet = {
    icon: img,
    p: "Connect your Ethereum wallet to deposit funds & start trading.",
    btn: "Connect Wallet",
}
const complete = {
    p: "Complete the onboarding flow to start trading on COMPLEND",
    btn: "Complete Account"
}

const rewardBox = [
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
const verification = {
    img: icon5,
    p: "Please verification your Mail"
}

const question = {
    quiestion: "Do you really want to perform this operation?",
    yes: "Yes",
    no: "Cancel"
}

stories.add('InfoBox', () => {
    return (
        <>
            <InfoBox
                type='available'
                active={true}
                header={cardInfoHeader}
                cardBody={cardInfoBody}
            />
            <InfoBox
                type='unavailable'
                active={true}
                header={unavilableHeader}
                cardBody={unavilableCardBody}
                cardBtn={unavilableBtn}
            />
            <InfoBox
                type='connect-wallet'
                active={true}
                cardBody={connectWallet}
                img={connectWallet.icon}
            />
            <InfoBox
                type='complete'
                active={true}
                cardBody={complete}
            />
            <InfoBox
                type="reward-box"
                active={true}
                cardBody={rewardBox}
            />
            <InfoBox
                type='verification'
                active={true}
                cardBody={verification}
            />
            <InfoBox
                type='question'
                active={true}
                cardBody={question}
            />
        </>
    )
})
