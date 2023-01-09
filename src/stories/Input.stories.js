import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import '../assets/css/main-theme.css';
import { Input } from "../components/Input";

const stories = storiesOf("Input", module);

stories.add("Input", (props) => {

    return (
        <div style={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px',
                    marginTop: '30px'
                }
            }>
            <Input 
                type={'default'} 
                icon={true}
                placeholder={'default input'}
            />
            <Input 
                type={'default'} 
                icon={false} 
                placeholder={'default input'}
            />
            <Input 
                type={'lable-input'}
                icon={false} 
                status={'success'}
                statusTitle={'ching chong'}
                statusColor={'#9CCC65'}
                // disabled={true}
            />
            {/* <Input 
                type={'lable-input'}
                icon={false} 
                status={'error'}
                color={'#EF5350'}
            /> */}
            {/* <Input 
                type={'lable-input'}
                icon={false} 
                status={'warning'}
                color={'#FFA726'}
            /> */}
            {/* <Input 
                type={'lable-input'}
                icon={false} 
                status={'info'}
                color={'#6A6D76'}
            /> */}
        </div>
    );
});
