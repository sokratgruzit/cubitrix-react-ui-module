import { storiesOf } from "@storybook/react";

import { BrowserRouter } from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import { Header } from "../components/Header";

import "../assets/css/main-theme.css";
import { useMobileWidth } from "../hooks/useMobileWidth";
import Trade from "../components/Trade/Trade";
import {useState} from "react";

const stories = storiesOf("Trade", module);

stories.add("Trade", () => {
  const [tradeTypeForm, setTradeTypeForm] = useState(0);
  const [myTradeType, setMyTradeType] = useState(0);
  const { width } = useMobileWidth();
  const bottomSideElements = [
    {
      price: 12345.04,
      amount: 0.03821,
      time: '13:23:10',
      rise: true
    },
    {
      price: 123232345.04,
      amount: 0.03821,
      time: '13:23:10',
      rise: false
    },
    {
      price: 12345.04,
      amount: 0.03821,
      time: '13:23:10',
      rise: true
    },
    {
      price: 12345.04,
      amount: 0.03821,
      time: '13:23:10',
      rise: true
    },
    {
      price: 123232345.04,
      amount: 0.03821,
      time: '13:23:10',
      rise: false
    },
    {
      price: 12345.04,
      amount: 0.03821,
      time: '13:23:10',
      rise: true
    },
    {
      price: 12345.04,
      amount: 0.03821,
      time: '13:23:10',
      rise: true
    },
    {
      price: 123232345.04,
      amount: 0.03821,
      time: '13:23:10',
      rise: false
    },
    {
      price: 12345.04,
      amount: 0.03821,
      time: '13:23:10',
      rise: true
    },
    {
      price: 12345.04,
      amount: 0.03821,
      time: '13:23:10',
      rise: false
    },
    {
      price: 12345.04,
      amount: 0.03821,
      time: '13:23:10',
      rise: false
    },
    {
      price: 12345.04,
      amount: 0.03821,
      time: '13:23:10',
      rise: false
    },
    {
      price: 12345.04,
      amount: 0.03821,
      time: '13:23:10',
      rise: true
    },
    {
      price: 992345.04,
      amount: 0.03821,
      time: '13:23:10',
      rise: true
    }
  ]
  const rightSideRedElements = [
    {
      price: 12345.04,
      amount: 0.03821,
      total: 1.1111,
      percent: 10
    },
    {
      price: 23456.04,
      amount: 0.03821,
      total: 2.33333,
      percent: 20
    },
    {
      price: 33456.04,
      amount: 4.03821,
      total: 3.33333,
      percent: 30
    },
    {
      price: 43456.04,
      amount: 5.03821,
      total: 4.33333,
      percent: 10
    },
    {
      price: 53456.04,
      amount: 6.03821,
      total: 6.33333,
      percent: 90
    },
    {
      price: 63456.04,
      amount: 7.03821,
      total: 8.33333,
      percent: 60
    },
    {
      price: 73456.04,
      amount: 8.03821,
      total: 9.33333,
      percent: 30
    },
    {
      price: 83456.04,
      amount: 9.03821,
      total: 10.33333,
      percent: 100
    },
    {
      price: 93456.04,
      amount: 10.03821,
      total: 12.33333,
      percent: 46
    },
    {
      price: 103456.04,
      amount: 11.03821,
      total: 13.33333,
      percent: 10
    },
    {
      price: 113456.04,
      amount: 14.03821,
      total: 16.33333,
      percent: 100
    },
    {
      price: 123456.04,
      amount: 15.03821,
      total: 17.33333,
      percent: 90
    }
  ];
  const prices = [
    {
      title: "price",
      data: "0.000001",
      change: "up",
    },
    {
      title: "24h Change",
      data: "0.000001",
      change: "down",
    },
    {
      title: "24h High",
      data: "0.000001 / 0.000001",
    },
  ];

  let tradeTypeFormTabs = [
    {
      title: 'Limit',
      name:'limit',
      onClick: () => setTradeTypeForm(0),
    },
    {
      title: 'Market',
      name: 'market',
      onClick: () => setTradeTypeForm(1),
    },
    {
      title: 'Stop-limit',
      name: 'stop-limit',
      onClick: () => setTradeTypeForm(2),
      tabSelect: [
        {
          title: 'Stop-limit',
          onClick: () => console.log('hi ')
        },
        {
          title: 'Trailing-stop',
          onClick: () => console.log('hi2')
        },
        {
          title: 'OCO',
          onClick: () => console.log('hi2')
        }
      ]
    },
  ];
  let myTradeTypeTabs = [
    {
      title: 'Market Trade',
      name:'market-trade',
      onClick: () => setMyTradeType(0)
    },
    {
      title: 'My Trade',
      name: 'my-trade',
      onClick: () => setMyTradeType(1)
    }
  ];

  return (
    <BrowserRouter>
      <Header
        modules={[]}
        account={"0x0000000"}
        location={{ pathName: "" }}
        title={"COMPLEND"}
        amount={10}
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
      <Trade
          prices={prices}
          rightSideRedElements={rightSideRedElements}
          rightSideGreenElements={rightSideRedElements}
          mainCurrency={'ETH'}
          subCurrency={'USDT'}
          tradeTypeFormTabs={tradeTypeFormTabs}
          tradeTypeFormActive={tradeTypeForm}
          myTradeTypeTabs={myTradeTypeTabs}
          myTradeType={myTradeType}
          bottomSideElements={bottomSideElements}
      />
    </BrowserRouter>
  );
});
