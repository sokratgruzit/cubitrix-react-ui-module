import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import '../assets/css/main-theme.css';
import { Input } from "../components/Input";

const stories = storiesOf("Input", module);

stories.add("Input", (props) => {

    return (
        <div>
            <Input icon={true} />
            <Input icon={false} /> 
            {/* <Input type={'default'} /> */}
            {/* <Input type={'icon'} /> */}
        </div>
    );
});
