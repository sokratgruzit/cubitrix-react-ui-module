import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { Visual } from "../components/Visual";

const stories = storiesOf("Visual", module);

stories.add("Visual", () => {
  return (
    <div style={{ marginLeft: "100px" }}>
      <Visual
        label={"User Account"}
        element={"popup-header"}
        customStyles={{ width: "340px" }}
      />
      <Visual label={"or"} element={"delimiter"} customStyles={{ width: "340px" }} />
      <Visual
        label={"0xb81G555828610c156eF3408DE21A3eC9b9B29V81"}
        element={"copy-address"}
        customStyles={{ width: "340px" }}
      />
    </div>
  );
});
