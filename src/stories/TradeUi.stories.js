import { storiesOf } from "@storybook/react";

import { BrowserRouter } from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import { Header } from "../components/Header";

import "../assets/css/main-theme.css";
import { useMobileWidth } from "../hooks/useMobileWidth";
import {TradeUi} from "../components/TradeUi/TradeUi";
import {useState} from "react";

const stories = storiesOf("TradeUi", module);

stories.add("TradeUi", () => {
  const [tradeTypeForm, setTradeTypeForm] = useState('limit');
  const [buyActiveTab, setBuyActiveTab] = useState('order_entry');
  const { width } = useMobileWidth();
  const buyTabs = [
    {
      title: 'Order Entry',
      name: 'order_entry',
      onClick: (name) => setBuyActiveTab(name)
    },
    {
      title: 'Instrument Details',
      name: 'instrument_details',
      onClick: (name) => setBuyActiveTab(name)
    }
  ];
  const links = [
    {
      to: "/dashboard",
      label: "Overview",
      svg: (
          <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`dashboard-svg`}
          >
            <path
                d="M9.02 2.83992L3.63 7.03992C2.73 7.73992 2 9.22992 2 10.3599V17.7699C2 20.0899 3.89 21.9899 6.21 21.9899H17.79C20.11 21.9899 22 20.0899 22 17.7799V10.4999C22 9.28992 21.19 7.73992 20.2 7.04992L14.02 2.71992C12.62 1.73992 10.37 1.78992 9.02 2.83992Z"
                stroke={location.pathname === "/dashboard" ? "#141726" : "white"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 17.99V14.99"
                stroke={location.pathname === "/dashboard" ? "#141726" : "white"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
          </svg>
      ),
    },
    {
      to: "/transactions",
      label: "Transaction History",
      svg: (
          <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`dashboard-svg`}
          >
            <path
                d="M11.9995 22.75C11.2195 22.75 10.4595 22.35 9.93953 21.65L8.92953 20.3C8.71953 20.02 8.43953 19.86 8.13953 19.84C7.83953 19.83 7.53953 19.96 7.29953 20.21C5.85953 21.75 4.74953 21.63 4.21953 21.42C3.67953 21.21 2.76953 20.52 2.76953 18.3V7.04C2.76953 2.6 4.04953 1.25 8.23953 1.25H15.7995C19.9895 1.25 21.2695 2.6 21.2695 7.04V18.3C21.2695 20.51 20.3595 21.2 19.8195 21.42C19.2895 21.63 18.1895 21.75 16.7395 20.21C16.4995 19.95 16.1995 19.82 15.8895 19.84C15.5895 19.86 15.2995 20.02 15.0895 20.3L14.0795 21.65C13.5395 22.35 12.7795 22.75 11.9995 22.75ZM8.07953 18.33H8.20953C8.94953 18.37 9.64953 18.76 10.1195 19.39L11.1295 20.74C11.6195 21.39 12.3695 21.39 12.8595 20.74L13.8695 19.39C14.3495 18.76 15.0395 18.37 15.7895 18.33C16.5395 18.29 17.2695 18.6 17.8095 19.18C18.5695 19.99 19.0595 20.09 19.2395 20.02C19.4795 19.92 19.7395 19.34 19.7395 18.3V7.04C19.7395 3.43 19.1095 2.75 15.7695 2.75H8.20953C4.86953 2.75 4.23953 3.43 4.23953 7.04V18.3C4.23953 19.35 4.49953 19.93 4.73953 20.02C4.90953 20.09 5.40953 19.99 6.16953 19.18C6.71953 18.63 7.38953 18.33 8.07953 18.33Z"
                fill={`${location.pathname === "#" ? "#141726" : "white"}`}
            />
            <path
                d="M14.75 10.75H9.25C8.84 10.75 8.5 10.41 8.5 10C8.5 9.59 8.84 9.25 9.25 9.25H14.75C15.16 9.25 15.5 9.59 15.5 10C15.5 10.41 15.16 10.75 14.75 10.75Z"
                fill={`${location.pathname === "#" ? "#141726" : "white"}`}
            />
          </svg>
      ),
    },
  ];
  const currencies = [
    {
      name: 'USDT'
    },
    {
      name: 'FDUSD'
    },
    {
      name: 'TUSD'
    },
    {
      name: 'BUSD'
    },
    {
      name: 'BNB'
    },
    {
      name: 'ETH'
    },
    {
      name: 'GOLD'
    }
  ];
  const currenciesPrices = [
    {
      name: 'USDT'
    },
    {
      name: 'FDUSD'
    },
    {
      name: 'TUSD'
    },
    {
      name: 'BUSD'
    },
    {
      name: 'BNB'
    },
    {
      name: 'ETH'
    },
    {
      name: 'GOLD'
    }
  ]
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
      onClick: (name) => setTradeTypeForm(name),
    },
    {
      title: 'Market',
      name: 'market',
      onClick: (name) => setTradeTypeForm(name),
    },
    {
      name: 'stop-limit',
      onClick: false,
      tabSelect: [
        {
          title: 'Stop-limit',
          name: 'stop-limit',
          onClick: () => setTradeTypeForm('stop-limit')
        },
        {
          title: 'Trailing-stop',
          name: 'trailing-stop',
          onClick: (name) => setTradeTypeForm('trailing-stop')
        },
        {
          title: 'OCO',
          name: 'oco',
          onClick: (name) => setTradeTypeForm('oco')
        }
      ]
    },
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
      <TradeUi
          prices={prices}
          currencies={currencies}
          rightSideRedElements={rightSideRedElements}
          rightSideGreenElements={rightSideRedElements}
          mainCurrency={'ETH'}
          subCurrency={'USDT'}
          tradeTypeFormTabs={tradeTypeFormTabs}
          tradeTypeFormActive={tradeTypeForm}
          bottomSideElements={bottomSideElements}
          links={links}
          eliteMemberBtnLabel={'Become Elite Member'}
          buyTabs={buyTabs}
          buyActiveTab={buyActiveTab}
      />
    </BrowserRouter>
  );
});
