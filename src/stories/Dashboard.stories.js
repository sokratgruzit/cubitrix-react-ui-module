import { storiesOf } from "@storybook/react";
import React, { useState, useEffect } from "react";

import { Dashboard } from "../components/Dashboard";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";

import "../assets/css/main-theme.css";
import { BrowserRouter } from "react-router-dom";

const stories = storiesOf("Dashboard", module);

const backgroundIMg = require("../assets/img/dashboard/startNowBG.png");

stories.add("Dashboard", () => {
  const [toggle, setToggle] = useState(false);

  const defaultCardsData = [
    {
      id: 1,
      title: "We Believe in Endless Possibilities ",
      description:
        "Access the world’s most popular instruments, ranging from forex pairs to CFDs on stocks, indices, commodities, and cryptocurrencies - all at the palm of your hand.",
      image: "/img/cardImgs/img1.png",
    },
    {
      id: 2,
      title: "Great Trading Conditions",
      description:
        "Hedging is allowed, without any restrictions on short selling and scalping. We provide fast and reliable order execution, as well as ultra-low spreads.",
      image: "/img/cardImgs/img2.png",
    },
    {
      id: 3,
      title: "We Believe You Deserve The Best ",
      description:
        "Take advantage of our Expert Advisors, Copy Trading platforms and 24/7 crypto trading. Try our unique risk management tool AvaProtectTM, or utilise the Trading Central automated analysis add-on.",
      image: "/img/cardImgs/img3.png",
    },
  ];

  return (
    <BrowserRouter>
      <div className="test-animation-w">
        <div
          style={{
            transform: toggle ? "translateX(-362px)" : "none",
            transition: "0.5s",
          }}
        >
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
          {/* <button
            onClick={() => setToggle((prev) => !prev)}
            style={{
              marginTop: "100px",
              position: "absolute",
              left: "400px",
              top: "100px",
              zIndex: "1000",
            }}
          >
            open
          </button> */}
          <Dashboard
            handleGetStarted={() => console.log("get started")}
            handleConnect={() => console.log("hi")}
            allImages={{
              dashboardHeader: {
                rocket: require("../assets/img/dashboard/rocket.png"),
                dots: require("../assets/img/dashboard/dots.png"),
                man: require("../assets/img/dashboard/man.png"),
                planet: require("../assets/img/dashboard/planet.png"),
                dotsRight: require("../assets/img/dashboard/dotsRight.png"),
                bottom: require("../assets/img/dashboard/bottom.svg"),
              },
              topcoins: {
                EthCard: require("../assets/img/dashboard/coinCards/EthCard.png"),
                BitcoinCard: require("../assets/img/dashboard/coinCards/BitcoinCard.png"),
                TetherCard: require("../assets/img/dashboard/coinCards/TetherCard.png"),
                TopCoinsIcon: require("../assets/img/dashboard/TopCoinsIcon.png"),
                ball: require("../assets/img/dashboard/ball.svg"),
                silverCoin: require("../assets/img/dashboard/silverCoin.png"),
              },
              meditation: {
                MeditationPerson: require("../assets/img/dashboard/MeditationPerson.png"),
                MeditationBG: require("../assets/img/dashboard/MeditationBG.png"),
              },
              whyComplend: {
                bottom: require("../assets/img/dashboard/whyComplend-bottom.svg"),
              },
              startNow: { startNowBG: backgroundIMg },
            }}
            info={[
              {
                title: "Dashboard",
                color: "#707EFD",
                boxShadow: "0px 10px 60px rgba(112, 126, 253, 0.12)",
                svg: (
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.0726 2.66913C13.5487 2.07842 14.3023 1.80349 15.1441 1.66248L19.1286 0.99507C19.9704 0.854063 20.7725 0.86841 21.4151 1.27172C22.0834 1.69111 22.3863 2.40474 22.5187 3.19526L23.2687 7.67288C23.401 8.46284 23.3477 9.23731 22.8511 9.85093C22.3737 10.4408 21.6189 10.7123 20.7768 10.8482L16.7945 11.5152C15.9553 11.6558 15.1531 11.645 14.5098 11.243C13.8399 10.8244 13.5374 10.1089 13.4044 9.31503L12.6561 4.84727C12.5237 4.05676 12.5775 3.28339 13.0726 2.66913ZM14.2404 3.61046C14.1332 3.74347 14.0349 3.99936 14.1355 4.59947L14.8838 9.06723C14.9854 9.67381 15.1621 9.88189 15.3047 9.97098C15.474 10.0768 15.8177 10.1579 16.5467 10.0358L20.5358 9.36764C21.2625 9.25061 21.5601 9.06168 21.6851 8.90732C21.7912 8.77614 21.8899 8.52134 21.7893 7.92068L21.0393 3.44306C20.9388 2.84295 20.7625 2.63305 20.6178 2.54223C20.4474 2.43533 20.1028 2.3528 19.3764 2.47446L15.3919 3.14187C14.6656 3.26354 14.3666 3.45389 14.2404 3.61046Z"
                      fill="#707EFD"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.9557 14.1031C15.4219 13.4494 16.1864 13.1483 17.0445 13.0045L21.029 12.3371C21.8872 12.1934 22.7081 12.2289 23.3618 12.6951C24.0155 13.1612 24.3166 13.9257 24.4604 14.7839L25.1278 18.7684C25.2715 19.6265 25.236 20.4474 24.7698 21.1011C24.3037 21.7548 23.5392 22.056 22.681 22.1997L18.6965 22.8671C17.8384 23.0109 17.0175 22.9753 16.3638 22.5092C15.71 22.043 15.4089 21.2785 15.2652 20.4204L14.5978 16.4359C14.454 15.5777 14.4896 14.7568 14.9557 14.1031ZM16.177 14.974C16.0541 15.1464 15.9582 15.4781 16.0772 16.1881L16.7446 20.1726C16.8635 20.8826 17.0622 21.1649 17.2346 21.2879C17.4071 21.4108 17.7387 21.5067 18.4487 21.3877L22.4332 20.7203C23.1432 20.6014 23.4255 20.4027 23.5485 20.2303C23.6715 20.0578 23.7673 19.7261 23.6484 19.0162L22.981 15.0317C22.8621 14.3217 22.6634 14.0394 22.4909 13.9164C22.3185 13.7934 21.9868 13.6976 21.2768 13.8165L17.2923 14.4839C16.5823 14.6028 16.3 14.8015 16.177 14.974Z"
                      fill="#707EFD"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.73077 4.56903C2.2069 3.97832 2.96051 3.70339 3.80234 3.56239L7.78683 2.89497C8.62865 2.75397 9.43072 2.76831 10.0733 3.17162C10.7416 3.59101 11.0445 4.30465 11.1769 5.09516L11.9269 9.57278C12.0592 10.3627 12.0059 11.1372 11.5093 11.7508C11.0319 12.3407 10.2771 12.6122 9.435 12.7481L5.4527 13.4151C4.61351 13.5557 3.8113 13.5449 3.16804 13.1429C2.49806 12.7243 2.19563 12.0088 2.06264 11.2149L1.31428 6.74718C1.18187 5.95666 1.23566 5.18329 1.73077 4.56903ZM2.89863 5.51036C2.79142 5.64337 2.69315 5.89926 2.79367 6.49937L3.54203 10.9671C3.64364 11.5737 3.82035 11.7818 3.96293 11.8709C4.13221 11.9767 4.47593 12.0578 5.2049 11.9357L9.19404 11.2675C9.92073 11.1505 10.2183 10.9616 10.3433 10.8072C10.4494 10.676 10.5481 10.4212 10.4475 9.82058L9.69749 5.34296C9.59697 4.74285 9.42068 4.53295 9.27598 4.44214C9.10565 4.33524 8.76096 4.2527 8.03463 4.37436L4.05014 5.04178C3.32381 5.16344 3.02483 5.35379 2.89863 5.51036Z"
                      fill="#707EFD"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.61296 16.003C4.0791 15.3493 4.84359 15.0482 5.70175 14.9044L9.68624 14.237C10.5444 14.0933 11.3653 14.1288 12.019 14.595C12.6727 15.0611 12.9738 15.8256 13.1176 16.6838L13.785 20.6683C13.9288 21.5264 13.8932 22.3473 13.427 23.001C12.9609 23.6547 12.1964 23.9559 11.3383 24.0996L7.35376 24.767C6.4956 24.9108 5.67472 24.8752 5.021 24.4091C4.36728 23.9429 4.06615 23.1784 3.92241 22.3203L3.255 18.3358C3.11125 17.4776 3.14682 16.6567 3.61296 16.003ZM4.83427 16.8739C4.7113 17.0463 4.61546 17.378 4.73439 18.088L5.4018 22.0725C5.52073 22.7825 5.71941 23.0648 5.89186 23.1878C6.06431 23.3107 6.39597 23.4066 7.10596 23.2876L11.0905 22.6202C11.8004 22.5013 12.0828 22.3026 12.2057 22.1302C12.3287 21.9577 12.4245 21.6261 12.3056 20.9161L11.6382 16.9316C11.5193 16.2216 11.3206 15.9393 11.1481 15.8163C10.9757 15.6933 10.644 15.5975 9.93404 15.7164L5.94955 16.3838C5.23956 16.5027 4.95724 16.7014 4.83427 16.8739Z"
                      fill="#707EFD"
                    />
                  </svg>
                ),
              },
              {
                title: "Staking",
                color: "#FA6161",
                boxShadow: "0px 10px 60px rgba(250, 97, 97, 0.12)",
              },
              {
                title: "Referral",
                color: "#70FDCA",
                boxShadow: "box-shadow: 0px 10px 60px rgba(112, 253, 202, 0.12)",
              },
              {
                title: "Loan",
                color: "#FD70B3",
                boxShadow: "0px 10px 60px rgba(253, 112, 179, 0.12)",
              },
              {
                title: "Trade",
                color: "#FDCD70",
                boxShadow: "0px 10px 60px rgba(253, 205, 112, 0.12)",
              },
            ]}
            whyComplendData={defaultCardsData}
          />
        </div>

        <SideBar open={toggle}>
          <div
            style={{
              position: "absolute",
              zIndex: "1000",
            }}
          >
            shhd
          </div>
        </SideBar>
      </div>
    </BrowserRouter>
  );
});
