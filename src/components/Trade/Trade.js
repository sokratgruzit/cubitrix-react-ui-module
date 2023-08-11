import React from "react";
import "./Trade.css";
import { useMobileWidth } from "../../hooks/useMobileWidth";

const accountsData = [
  {
    address: "0xc2e42a2338ad2ef5b247c4027b0b29ccfc672eb9",
    balance: 688,
    account_category: "spot",
    assets: {
      btc: 0,
      eth: 0,
      usdt: 0,
      gold: 0,
      platinum: 0,
    },
  },
  {
    address: "0xc2e42a2338ad2ef5b247c4027b0b29ccfc672eb9",
    balance: 688,
    account_category: "cross3x",
    assets: {
      btc: 0,
      eth: 0,
      usdt: 0,
      gold: 0,
      platinum: 0,
    },
  },
  {
    address: "0xc2e42a2338ad2ef5b247c4027b0b29ccfc672eb9",
    balance: 688,
    account_category: "cross10x",
    assets: {
      btc: 0,
      eth: 0,
      usdt: 0,
      gold: 0,
      platinum: 0,
    },
  },
];

const Trade = ({ prices = [] }) => {
  const { width } = useMobileWidth();

  return (
    <div className="trade-main-bg">
      <div className="trade-content-container">
        <div className="trade-top-info-row">
          <div className="trade-top-info-title">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9979 3.33496V15.657L30.4126 20.3108L19.9979 3.33496Z"
                fill="white"
                fill-opacity="0.6"
              />
              <path
                d="M19.9969 3.33496L9.58075 20.3108L19.9969 15.657V3.33496Z"
                fill="white"
              />
              <path
                d="M19.9982 28.2977V36.6703L30.4199 22.252L19.9982 28.2977Z"
                fill="white"
                fill-opacity="0.6"
              />
              <path
                d="M19.9969 36.6703V28.2963L9.58075 22.252L19.9969 36.6703Z"
                fill="white"
              />
              <path
                d="M19.9979 26.3583L30.4126 20.3111L19.9979 15.6602V26.3583Z"
                fill="white"
                fill-opacity="0.4"
              />
              <path
                d="M9.58075 20.3111L19.9969 26.3583V15.6602L9.58075 20.3111Z"
                fill="white"
                fill-opacity="0.6"
              />
            </svg>
            ETH-USDT
          </div>
          <div className="trade-top-info-prices">
            {prices.map(({ title, data, change }, index) => (
              <div className="trade-top-info-block" key={index}>
                <p className="font-12">{title}</p>
                <div className="trade-top-info-data">
                  {change === "up" ? (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.86334 8.4877L8.48717 7.11153L7.6469 6.26697C7.47569 6.09602 7.24363 6 7.00169 6C6.75974 6 6.52769 6.09602 6.35648 6.26697L4.13575 8.4877C3.84423 8.77922 4.0543 9.27652 4.46157 9.27652H9.53752C9.94908 9.27652 10.1549 8.77922 9.86334 8.4877Z"
                        fill="#67BE7A"
                      />
                    </svg>
                  ) : change === "down" ? (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.86334 5.5123L8.48717 6.88847L7.6469 7.73303C7.47569 7.90398 7.24363 8 7.00169 8C6.75974 8 6.52769 7.90398 6.35648 7.73303L4.13575 5.5123C3.84423 5.22078 4.0543 4.72348 4.46157 4.72348H9.53752C9.94908 4.72348 10.1549 5.22078 9.86334 5.5123Z"
                        fill="#E87450"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                  <span
                    className={`font-16 ${
                      change === "up"
                        ? "positive-change"
                        : change === "down"
                        ? "negative-change"
                        : ""
                    }`}
                  >
                    {data}
                  </span>
                </div>
              </div>
            ))}
            <button className="trade-type-change">
              ETH
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.66 7.33301L2 9.99967L4.66 12.6663V10.6663H9.33333V9.33301H4.66V7.33301ZM14 5.99967L11.34 3.33301V5.33301H6.66667V6.66634H11.34V8.66634L14 5.99967Z"
                  fill="#C38C5C"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="trade-left-side">
          <div className="card-slider-navigation">
            {accountsData?.map((item, index) => {
              const activeIndex = accountsData.findIndex(
                (acc) => "cross10x" === acc.account_category,
              );
              const isLeftOfActive = index === activeIndex - 1;
              const isRightOfActive = index === activeIndex + 1;
              const borderRadiusClass = isLeftOfActive
                ? "left-border-radius"
                : isRightOfActive
                ? "right-border-radius"
                : "";

              return (
                <div
                  className={`${
                    "cross10x" !== item?.account_category ? "trade-main-func-active" : ""
                  }`}
                  key={index}
                >
                  <div
                    className={`card-slider-navigation_item ${
                      "cross10x" === item?.account_category ? "active" : ""
                    } ${width >= 767 && borderRadiusClass}`}
                    onClick={() => setAccountType(item?.account_category)}
                  >
                    <p className="font-16">
                      {item?.account_category === "main"
                        ? "main"
                        : item?.account_category}{" "}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="trade-left-side-body"></div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
