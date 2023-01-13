import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import {MarketCard} from "../components/MarketCard";

const stories = storiesOf("Trade", module);

stories.add("Trade", () => {
    return (
        <div className={`main`}>
            <div className={`main-sidebar`}>
                <div className={`main-sidebar-content`}>
                    <MarketCard
                        active={true}
                    />
                </div>
            </div>
            <div className={`main-content`}>
                hui
            </div>
        </div>
    );
});
