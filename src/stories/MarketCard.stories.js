import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { MarketCard } from "../components/MarketCard";

const stories = storiesOf("MarketCard", module);

stories.add("MarketCard", () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <MarketCard active={true} />
    </div>
  );
});
