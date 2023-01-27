import "./Tabs.css";
import { useState } from "react";

export const Tabs = (props) => {
  const [toggle, setToggle] = useState(1);

  let tabsHandler = (num) => {
    setToggle(num);
  };

  return (
    <>
      <div className={`${props.type}`} onClick={props.onClick}>
        <div
          onClick={() => {
            tabsHandler(1);
          }}
          className={`${"tab"}
              ${toggle === 1 ? "active-tab" : ""}`}
        >
          Position
        </div>
        <div
          onClick={() => {
            tabsHandler(2);
          }}
          className={`${"tab"}
              ${toggle === 2 ? "active-tab" : ""}`}
        >
          Orders <span>0</span>
        </div>
        <div
          onClick={() => {
            tabsHandler(3);
          }}
          className={`${"tab"}
              ${toggle === 3 ? "active-tab" : ""}`}
        >
          Fills <span>0</span>
        </div>
        <div
          onClick={() => {
            tabsHandler(4);
          }}
          className={`${"tab"}
              ${toggle === 4 ? "active-tab" : ""}`}
        >
          Payments <span>0</span>
        </div>
        <div className="expend-svg">
          <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 17.3333H15.5"
              stroke="#9C9DA3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M0.5 0.666626H15.5"
              stroke="#9C9DA3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 4V14"
              stroke="#9C9DA3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.3583 5.43328L7.99993 3.07495L5.6416 5.43328"
              stroke="#9C9DA3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.3583 12.2416L7.99993 14.5999L5.6416 12.2416"
              stroke="#9C9DA3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {/* <div className={`${props.type}`} onClick={props.onClick}>
        <div
          onClick={() => {
            tabsHandler(1);
          }}
          className={`${"two-component-tab"}
              ${toggle === 1 ? "active-two-component-tab" : ""}`}
        >
          Sell
        </div>
        <div
          onClick={() => {
            tabsHandler(2);
          }}
          className={`${"two-component-tab"}
              ${toggle === 2 ? "active-two-component-tab bg-color" : ""}`}
        >
          Buy
        </div>
      </div>
      <div className={`${props.type}`} onClick={props.onClick}>
        <div
          onClick={() => {
            tabsHandler(1);
          }}
          className={`${"text-tab"}
              ${toggle === 1 ? "active-text-tab" : ""}`}
        >
          Limit
        </div>
        <div
          onClick={() => {
            tabsHandler(2);
          }}
          className={`${"text-tab"}
              ${toggle === 2 ? "active-text-tab" : ""}`}
        >
          Market
        </div>
        <div
          onClick={() => {
            tabsHandler(3);
          }}
          className={`${"text-tab"}
              ${toggle === 3 ? "active-text-tab" : ""}`}
        >
          Stop
          <svg
            onClick={() => {
              tabsHandler(3);
            }}
            className={`${"expend-i"} ${toggle === 3 ? "expend" : ""}`}
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.299 1.33337L6.47141 5.16101C6.01937 5.61305 5.27968 5.61305 4.82764 5.16101L1 1.33337"
              stroke="#9C9DA3"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className={`${props.type}`} onClick={props.onClick}>
        <p className="variant-title">Account</p>
        <div
          onClick={() => {
            tabsHandler(1);
          }}
          className={`${"variants-btn"}
              ${toggle === 1 ? "active-variant-btn" : ""}`}
        >
          Withdraw
        </div>
        <div
          onClick={() => {
            tabsHandler(2);
          }}
          className={`${"variants-btn"}
              ${toggle === 2 ? "active-variant-btn" : ""}`}
        >
          Deposit
        </div>
      </div> */}
    </>
  );
};
