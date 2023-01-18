import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { Input } from "../components/Input";

const stories = storiesOf("Input", module);

let btnArr = [
    {
        id: 0,
        value: '2x'
    },
    {
        id: 1,
        value: '5x'
    },
    {
        id: 2,
        value: '10x'
    }
];

stories.add("Input", (props) => {

  const changeHandler = (e) => {
    console.log(e.target.value, 'change handler')
  }
  const btnHandler = (e) => {
    console.log('click me, click me mf')
    let value = e.target.value
    console.log(value, 'hi')
    // console.log(item.value)

  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        marginTop: "30px",
      }}
    >
      <Input
        type={"default"}
        icon={true}
        placeholder={"default input"}
        label={''}
        subLabel={''}
        onChange={changeHandler}
        value={'123'}
        customStyles={{ width: "500px" }}
      />
      <Input
        type={"default"}
        icon={false}
        label={'your label'}
        subLabel={'subLab'}
        placeholder={"default input"}
        onChange={changeHandler}
        customStyles={{ width: "500px" }}
      />
      <Input
        type={"lable-input-type1"}
        label={'Label'}
        subLabel={'sub label'}
        toggleTitle={'slider'}
        toggle={true}
        placeholder={'0.0000'}
        btns={btnArr}
        onChange={changeHandler}
        onClick={btnHandler}
        // toggle={true}
        // value={'921301923'}
        // toggleTitle={'Slider'}
        inputFrame={'none'}
        customStyles={{ width: '420px'}}
      /> 
      <Input
        type={"lable-input-type1"}
        label={'Label'}
        subLabel={'sub label'}
        placeholder={'0.0000'}
        onChange={changeHandler}
        btns={false}
        onClick={btnHandler}
        inputFrame={'eth'}
        customStyles={{ width: '420px'}}
      /> 
      {/* <Input
        type={"lable-input-type2"}
        label={'Label'}
        subLabel={'sub label'}
        placeholder={'0.0000'}
        customStyles={{ width: '320px'}}
        onChange={changeHandler}
      />  */}
      {/* <Input
        type={"default"}
        icon={true}
        placeholder={"default input"}
        customStyles={{ width: "500px" }}
      />
      <Input
        type={"default"}
        icon={false}
        placeholder={"default input"}
        customStyles={{ width: "500px" }}
      />
      <Input
        type={"lable-input-type1"}
        icon={false}
        customStyles={{ width: "320px" }}
      /> */}
      {/* <Input
        onChange={changeHandler}
        type={"lable-input-type2"}
        version={'v1'}
        btns={btnArr}
        icon={false}
        status={"error"}
        color={"#EF5350"}
        customStyles={{ width: "320px" }}
      /> */}
      {/* <Input
        type={"lable-input-select"}
        icon={false}
        status={"warning"}
        color={"#FFA726"}
        customStyles={{ width: "320px" }}
      />
      <Input
        type={'label-input-phone-number'}
        customStyles={{width: '550px'}}
        select={'phone-number'}
       />
       <Input
        type={'label-input-phone-number'}
        customStyles={{width: '520px'}}
        select={'nationality'}
       />
       <Input
        type={'label-input-upload'}
        customStyles={{width: 'fit-content'}}
       /> */}
    </div>
  );
});
