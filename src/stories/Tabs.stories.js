import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { Tabs } from "../components/Tabs";

const stories = storiesOf("Tabs", module);

stories.add("Tabs", () => {
  const [toggle, setToggle] = useState(1);

  let tabsHandler = (num) => {
    setToggle(num);
  };

  return (
    <div>
      {/* TWO COMPONENT TABS */}
      <Tabs
        type={"two-component-tabs"}
        label={
          <>
            <div
              onClick={() => {
                tabsHandler(1);
              }}
              className={`${"two-component-tab"}
              ${toggle === 1 ? "active-two-component-tab" : ""}`}
            >
              Buy
            </div>
            <div
              onClick={() => {
                tabsHandler(2);
              }}
              className={`${"two-component-tab"}
              ${toggle === 2 ? "active-two-component-tab" : ""}`}
            >
              Sell
            </div>
          </>
        }
      />
      {/* TABS */}
      <Tabs
        type={"tabs"}
        label={
          <>
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
          </>
        }
      />
    </div>
  );
});
