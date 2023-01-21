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

let countryData = [
  {
    id: 1,
    title: "The United Kingdom ",
    image: "kingdom.png",
    numbering: "(+78)",
  },
  {
    id: 2,
    title: "Brazil",
    image: "brazil.png",
    numbering: "(+76)",
  },
  {
    id: 3,
    title: "Australia",
    image: "australia.png",
    numbering: "(+46)",
  },
  {
    id: 4,
    title: "Canada",
    image: "canada.png",
    numbering: "(+918)",
  },
  {
    id: 5,
    title: "Italy",
    image: "italy.png",
    numbering: "(+178)",
  },
  {
    id: 6,
    title: "Mexico",
    image: "kingdom.png",
    numbering: "(+78)",
  },
  {
    id: 7,
    title: "The United Kingdom ",
    image: "germany.png",
    numbering: "(+78)",
  },
  {
    id: 8,
    title: "The United Kingdom ",
    image: "brazil.png",
    numbering: "(+78)",
  },
  {
    id: 9,
    title: "The United Kingdom ",
    image: "canada.png",
    numbering: "(+78)",
  },
];
let selectData = [
  {
    id: 1,
    title: "option 1",
    list: []
  },
  {
    id: 1,
    title: "option 2",
    list: []
  },
];

stories.add("Input", (props) => {
  const [value, setValue] = useState('')
  const [cover, setCover] = useState(false)

  const changeHandler = (e) => {
    // console.log(e.target.value, 'change handler')
  }
  const btnHandler = (e) => {
    console.log('click me, click me mf')
    let value = e.target.value
    console.log(value, 'hi')
  }
  const coverhandler = () => {
    console.log('coverHandler')
    setCover(true);
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
        // value={value}
        icon={true}
        inputType={'text'}
        placeholder={"default input"}
        label={''}
        subLabel={''}
        onChange={changeHandler}
        customStyles={{ width: "500px" }}
      />
      <Input
        type={"default"}
        icon={true}
        inputType={'password'}
        coverHandler={coverhandler}
        placeholder={"default input"}
        label={''}
        subLabel={'dasd'}
        onChange={changeHandler}
        customStyles={{ width: "500px" }}
      />
      <Input
        type={"default"}
        icon={false}
        label={'label'}
        subLabel={'sub lab'}
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
        inputFrame={'none'}
        icon={true}
        customStyles={{ width: '420px'}}
      /> 
      <Input
        type={"lable-input-type1"}
        label={'Label'}
        subLabel={'sub label'}
        placeholder={'0.0000'}
        onChange={changeHandler}
        btns={false}
        icon={true}
        onClick={btnHandler}
        inputFrame={'eth'}
        customStyles={{ width: '420px'}}
      /> 
      <Input
        type={"lable-input-type2"}
        label={'Label'}
        subLabel={'sub label'}
        placeholder={'0.0000'}
        icon={false}
        customStyles={{ width: '320px'}}
        onChange={changeHandler}
      />
      <Input 
        type={'label-input-phone-number'}
        label={'your text'}
        countryData={countryData}
        // img={img}
        onChange={changeHandler}
        customStyles={{width: '400px'}}
      />
      <Input
        type={'label-input-upload'}
        customStyles={{width: 'fit-content'}}
       /> 
      
      <Input
        type={"lable-input-select"}
        icon={false}
        status={"warning"}
        color={"#FFA726"}
        customStyles={{ width: "320px" }}
      />
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
       {/* <Input
        type={'label-input-upload'}
        customStyles={{width: 'fit-content'}}
       /> */}
      <Input
        type={'search-input'}
        onChange={changeHandler}
        selectData={selectData}
        placeholder={'search'}
        customStyles={{width: '100%'}}
      />
    </div>
  );
});
