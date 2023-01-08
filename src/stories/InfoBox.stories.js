import { storiesOf } from "@storybook/react";
import { title } from "process";
import { InfoBox } from '../components/InfoBox/index';
import img from "../assets/img/icon.png";


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
    },
    {
        title: "Margin Usage",
        value: "$0.00",
        taker: ""
    }
];

const connectWallet = {
    icon: img,
    p: "Connect your Ethereum wallet to deposit funds & start trading.",
    btn: "Connect Wallet",
}

stories.add('InfoBox', () => {
    return (
        <div>
            <InfoBox 
                bg='blue' 
                type='avilable' 
                header={cardInfoHeader} 
                cardBody={cardInfoBody} 
            />
            <br></br>
            <InfoBox 
                height='height'
                bg='darck' 
                type='unAvilable' 
                header={unavilableHeader} 
                cardBody={unavilableCardBody} 
                padding='padding-bottom'
            />
            <br></br>
            <InfoBox 
                bg='darck' 
                type='connectWallet' 
                content={connectWallet} 
                img={connectWallet.icon} 
                center="card-center" 
            />
            <br></br>
            <InfoBox center="complete-account"
            />
        </div>
    )
})