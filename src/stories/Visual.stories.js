import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { Visual } from "../components/Visual";
import { Button } from "../components/Button";

const stories = storiesOf("Visual", module);

stories.add("Visual", () => {
  const [buttonToggle, setButtonToggle] = useState(false);

  let buttonImage0 = (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 6.625H1C0.658333 6.625 0.375 6.34167 0.375 6C0.375 5.65833 0.658333 5.375 1 5.375H11C11.3417 5.375 11.625 5.65833 11.625 6C11.625 6.34167 11.3417 6.625 11 6.625Z" fill="white"/>
      <path d="M6 11.625C5.65833 11.625 5.375 11.3417 5.375 11V1C5.375 0.658333 5.65833 0.375 6 0.375C6.34167 0.375 6.625 0.658333 6.625 1V11C6.625 11.3417 6.34167 11.625 6 11.625Z" fill="white"/>
    </svg>
  )
  let buttonImage1 = (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.51529 1.66892L12.9448 3.63594C14.2212 4.19902 14.2212 5.12998 12.9448 5.69306L8.51529 7.66008C8.01228 7.88531 7.18643 7.88531 6.68341 7.66008L2.25386 5.69306C0.977553 5.12998 0.977553 4.19902 2.25386 3.63594L6.68341 1.66892C7.18643 1.44369 8.01228 1.44369 8.51529 1.66892Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M1 7.73486C1 8.36551 1.47299 9.09376 2.05108 9.34902L7.14881 11.6163C7.53921 11.789 7.98217 11.789 8.36506 11.6163L13.4628 9.34902C14.0409 9.09376 14.5139 8.36551 14.5139 7.73486" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 11.4893C1 12.1875 1.41292 12.8181 2.05108 13.1034L7.14881 15.3707C7.53921 15.5434 7.98217 15.5434 8.36506 15.3707L13.4628 13.1034C14.101 12.8181 14.5139 12.1875 14.5139 11.4893" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  )
  return (
    <div style={{ marginLeft: "100px", display: 'flex', flexDirection: 'column', gap: '90px' }}>
      <Visual
        label={"User Account"}
        element={"popup-header"}
        customStyles={{ width: "340px" }}
      />
      <Visual label={"or"} element={"delimiter"} customStyles={{ width: "340px" }} />
      <Visual
        label={"0xb81G555828610c156eF3408DE21A3eC9b9B29V81"}
        element={"copy-address"}
        customStyles={{ width: "340px" }}
      />
      <Visual
        element={'table-header'}
        label={'Transactions'}
        fontSize={'font-20'}
        customStyles={{}}
        leftBtn={
          <Button
            label={'Add Transaction'}
            size={'btn-lg'}
            type={'btn-primary'}
            arrow={''}
            element={'button'}
            onClick={() => console.log((prevState) => (!prevState))}
          />
        }
        rightBtn={
          <Button
            label={'Add Transaction'}
            size={'btn-lg'}
            type={'btn-primary'}
            arrow={''}
            element={'button'}
            onClick={() => console.log((prevState) => (!prevState))}
          />
        }
      />
    </div>
  );
});

// test