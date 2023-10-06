import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { Tabs } from "../components/Tabs";

const stories = storiesOf("Tabs", module);

// let quantity = [
//   {
//     orders: "0",
//   },
//   {
//     fills: "0",
//   },
//   {
//     payments: "0",
//   },
// ];

let data = [
  {
    title: 'your text',
    onClick: () => console.log('hi ')
  },
  {
    title: 'your tex2t',
    onClick: () => console.log('hi2')
  },
  {
    title: 'your tex3t',
    onClick: () => console.log('hi3'),
    tabSelect: [
        {
            title: 'your text',
            onClick: () => console.log('hi ')
        },
        {
            title: 'your tex2t',
            onClick: () => console.log('hi2')
        }
    ]
  },
];

stories.add("Tabs", () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeTabHandler = (index) => {
    setActiveTab(index)
  }
  return (
    <>
      <Tabs type={"tabs"} />

      <Tabs type={"two-component-tabs"} />

      <Tabs
          type={"text-tabs"}
          customStyles={{marginTop: '18px'}}
          tabsData={data}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onTabClick={activeTabHandler}
      />

      <Tabs type={"button-variant"} />

      <Tabs
        type={'simple'}
        tabsData={data}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onTabClick={activeTabHandler}
        customStyles={{width: '100%'}}
      />
    </>
  );
});
