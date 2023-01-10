import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import {MarketCardHead} from "../components/MarketCardHead";

const stories = storiesOf("MarketCardHead", module);

stories.add("MarketCardHead", () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div>
            <MarketCardHead/>
        </div>
    );
});
