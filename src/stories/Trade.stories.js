import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { MarketCard } from "../components/MarketCard";
import "../components/TestCss/Trade.css";
import { InfoBox } from "../components/InfoBox";
import img from "../assets/img/icon.png";
import { Tabs } from "../components/Tabs";
import { Input } from "../components/Input";

const stories = storiesOf("Trade", module);
const connectWallet = {
  icon: img,
  p: "Connect your Ethereum wallet to deposit funds & start trading.",
  btn: "Connect Wallet",
};
stories.add("Trade", () => {
  const [toggle, setToggle] = useState(1);

  let tabsHandler = (num) => {
    setToggle(num);
  };

  return (
    <div className={`main`}>
      <div className={`main-sidebar`}>
        <div className={`main-sidebar-content`}>
          <MarketCard active={true} />
          <div className={`trade-sidebar-components`}>
            <InfoBox
              bg="darck"
              type="connectWallet"
              anime={true ? "animation-one" : ""}
              content={connectWallet}
              img={connectWallet.icon}
              center="card-center"
            />
            <Tabs
              type={"text-tabs"}
              customStyles={{
                marginTop: "20px",
              }}
              label={
                <>
                  <div
                    onClick={() => {
                      tabsHandler(1);
                    }}
                    className={`${"text-tab"} ${
                      toggle === 1 ? "active-text-tab" : ""
                    }`}
                  >
                    Limit
                  </div>
                  <div
                    onClick={() => {
                      tabsHandler(2);
                    }}
                    className={`${"text-tab"} ${
                      toggle === 2 ? "active-text-tab" : ""
                    }`}
                  >
                    Market
                  </div>
                  <div
                    onClick={() => {
                      tabsHandler(3);
                    }}
                    className={`${"text-tab"} ${
                      toggle === 3 ? "active-text-tab" : ""
                    }`}
                  >
                    Stop
                    <svg
                      onClick={() => {
                        tabsHandler(3);
                      }}
                      className={`${"expend-i"} ${
                        toggle === 3 ? "expend" : ""
                      }`}
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
                </>
              }
            />
            <Tabs
              type={"two-component-tabs"}
              customStyles={{
                marginTop: "30px",
              }}
              label={
                <>
                  <div
                    onClick={() => {
                      tabsHandler(1);
                    }}
                    className={`${"two-component-tab"} ${
                      toggle === 1 ? "active-two-component-tab" : ""
                    }`}
                  >
                    Sell
                  </div>
                  <div
                    onClick={() => {
                      tabsHandler(2);
                    }}
                    className={`${"two-component-tab"} ${
                      toggle === 2 ? "active-two-component-tab bg-color" : ""
                    }`}
                  >
                    Buy
                  </div>
                </>
              }
            />
            <Input
              type={"lable-input-type1"}
              icon={false}
              // status={'success'}
              // statusTitle={'ching chong'}
              // statusColor={'#9CCC65'}
              customStyles={{ width: "100%", marginTop: "20px" }}
            />
            <Input
              type={"lable-input-type2"}
              icon={false}
              status={"error"}
              color={"#EF5350"}
              customStyles={{ width: "100%", marginTop: "20px" }}
            />
          </div>
        </div>
      </div>
      <div className={`main-content`}>hui</div>
    </div>
  );
});
