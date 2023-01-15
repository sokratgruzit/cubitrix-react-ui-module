import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { Tabs, TabTable } from "../components/TabTable";

const stories = storiesOf("TabTable", module);

stories.add("TabTable", () => {
  return (
    <div>
      <TabTable type={"tab-table"} />
    </div>
  );
});