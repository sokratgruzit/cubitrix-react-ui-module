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
                customStyles={{ width: '500px' }}
            />
            <Input 
                type={'default'} 
                icon={false} 
                placeholder={'default input'}
                customStyles={{ width: '500px' }}
            />
            <Input 
                type={'lable-input-type1'}
                icon={false} 
                status={'success'}
                statusTitle={'ching chong'}
                statusColor={'#9CCC65'}
                customStyles={{width: '320px'}}
            />
            <Input 
                type={'lable-input-type2'}
                icon={false} 
                status={'error'}
                color={'#EF5350'}
                customStyles={{width: '320px'}}
            />
            <Input 
                type={'lable-input-type3'}
                icon={false} 
                status={'warning'}
                color={'#FFA726'}
                customStyles={{width: '320px'}}
            />
            {/* <Input 
                type={'lable-input'}
                icon={false}
                status={'info'}
                color={'#6A6D76'}
            /> */}
        </div>
    );
});
