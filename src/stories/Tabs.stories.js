import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { Tabs } from "../components/Tabs";

const stories = storiesOf("Tabs", module);

// let quantity = [
//   {
//     orders: "0",
//   },
//   {
//     fills: "0",
//   },
//   {
//     payments: "0",
//   },
// ];

stories.add("Tabs", () => {
  return (
    <>
      <Tabs type={"tabs"} />

      <Tabs type={"two-component-tabs"} />

      <Tabs type={"text-tabs"} />

      <Tabs type={"button-variant"} />
    </>
  );
});
