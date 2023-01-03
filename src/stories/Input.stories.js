import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import '../assets/css/main-theme.css';
import { Input } from "../components/Input";

const stories = storiesOf("Input", module);

stories.add("Input", (props) => {

    return (
        <div>
            <Input 
                type={'default'} 
                icon={true} 
            />
            <Input 
                type={'default'} 
                icon={false} 
            /> 
            <Input 
                type={'lable-input'} 
                icon={false} 
            />
        </div>
    );
});
