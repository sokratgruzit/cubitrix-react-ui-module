import { useState } from "react";
import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { InputTest } from "../components/InputTest/InputTest";
import { HelpText } from "../components/HelpText";

const stories = storiesOf("InputTest", module);

stories.add("InputTest", (props) => {
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        marginTop: "30px",
      }}
    >
      <InputTest 
        type={'default'}
        label={'your-label'}
        subLabel={'sm-label'}
        placeholder={'your text'}
        parent={'your-class-name'}
        password={true}
        customStyles={{width: '320px'}}
        statusCard= {
          <HelpText
            status={'success'}
            title={'your text'}
            color={'#9CCC65'}
            fontSize={'font-12'}
            icon={true}
          />
        }
      />
       <InputTest 
        type={'default'}
        label={'your-label'}
        subLabel={'sm-label'}
        placeholder={'your text'}
        parent={'your-class-name'}
        password={false}
        customStyles={{width: '320px'}}
        statusCard= {
          <HelpText
            status={'success'}
            title={'your text'}
            color={'#9CCC65'}
            fontSize={'font-12'}
            icon={true}
          />
        }
      />

    </div>
  );
});
