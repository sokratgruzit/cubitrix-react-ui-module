import React, {useState} from "react";
import {storiesOf} from "@storybook/react";
import "../assets/css/main-theme.css";
import {Tabs, TabTable} from "../components/TabTable";

const stories = storiesOf("TabTable", module);
let cryptoData = [
  {
    crypto: "",
  },
];
stories.add("TabTable", () => {
  return (
    <div style={{width: "200px"}}>
      <TabTable type={"tab-table"} />
      <TabTable type={"tab-table-filled"} />
      <TabTable
        type={"tab-table-trade"}
        text1={"texfsfsfsdfsdf sfasfast1"}
        text2={"text2"}
        value1={"45"}
        value2={"2.2"}
      />
    </div>
  );
});
