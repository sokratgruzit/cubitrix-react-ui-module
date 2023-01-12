import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { BiddingInfo } from "../components/BiddingInfo";

const stories = storiesOf("BiddingInfo", module);

stories.add("BiddingInfo", () => {
    return (
        <div style={{ background: '#0C1121', height: '200px'}}>
            <BiddingInfo />
        </div>
    );
});
