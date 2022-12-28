import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import '../assets/css/main-theme.css';
import { HelpText } from "../components/HelpText";

const stories = storiesOf("Help Text", module);

stories.add("Help Text", (props) => {

    return (
        <div>
           <HelpText />
        </div>
    );
});
