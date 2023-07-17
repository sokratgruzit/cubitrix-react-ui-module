import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { Input } from "../components/Input";
import { HelpText } from "../components/HelpText";
import { AddSquareIcon } from "../assets/svgs/index";

const stories = storiesOf("Input", module);

let btnArr = [
  {
    id: 0,
    value: "2x",
  },
  {
    id: 1,
    value: "5x",
  },
  {
    id: 2,
    value: "10x",
  },
];

let selectData = [
  {
    id: 1,
    title: "option 1",
    list: [],
  },
  {
    id: 2,
    title: "option 2",
    list: [],
  },
  {
    id: 3,
    title: "option 3",
    list: [],
  },
];

let defaultData = [
  {
    name: "Transaction",
    value: "hi",
  },
  {
    name: "Hash",
    value: "hi2",
  },
];
let multiplyData = [
  "admin@gmail.com",
  "ad2@gmail.com",
  "admin2@il.com",
  "a@g.com",
  "admin2@gil.com",
  "adm@gmail.com",
  "admin2@gmil.com",
  "ad2@mail.com",
];

stories.add("Input", (props) => {
  const [value, setValue] = useState("");
  const [cover, setCover] = useState(false);
  const [active, setActive] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputRange, setInputRange] = useState({
      min: 100,
      max: 500000,
      value: 100,
      step: 400
  });

  function handlerClick(i) {
    setInputValue(i);
  }
  const changeHandler = (i, e) => {
    console.log(i.target.value);
  };
    const changeRangeHandler = (i, e) => {
        let newObj = {...inputRange};
        newObj.value = i.target.value
        console.log(i.target.value);
        setInputRange(newObj)
    };
  const changeCountry = (data) => {
    console.log(data);
  };
  const btnHandler = (e) => {
    console.log("click me, click me mf");
    let value = e.target.value;
    console.log(value, "hi");
  };
  const coverhandler = () => {
    console.log("coverHandler");
    setCover(true);
  };
  const selectHandler = (value) => {
    console.log("selecthandler");
    console.log(value);
  };
  const multiItemClick = (value) => {
    console.log("multiItemClick");
    console.log(value);
  };
  const onChangeDropdown = (e) => {
    console.log("onChangeDropdown");
    console.log(e.target.value);
  };

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
            type={"range"}
            customStyles={{ width: "520px" }}
            min={inputRange.min}
            max={inputRange.max}
            step={inputRange.step}
            value={inputRange.value}
            onChange={changeRangeHandler}
        />
      <Input
        type={"lable-input-multi-select"}
        icon={false}
        multiplyData={multiplyData}
        multiItemClick={multiItemClick}
        emptyFieldErr={false}
        defaultData={defaultData}
        label={"yourText"}
        selectHandler={selectHandler}
        selectLabel={"select"}
        active={active}
        status={false}
        onChangeDropdown={(e) => {
          onChangeDropdown(e);
        }}
        statusCard={
          <HelpText
            status={"error"}
            title={"your text"}
            fontSize={"font-12"}
            icon={true}
          />
        }
        title={"your text"}
        color={"#FFA726"}
        customStyles={{ width: "520px" }}
      />
      <Input
        type={"lable-input-select"}
        selectData={selectData}
        emptyFieldErr={true}
        defaultData={defaultData}
        label={"yourText"}
        selectHandler={selectHandler}
        selectLabel={"select"}
        active={active}
        status={"warning"}
        statusCard={
          <HelpText
            status={"error"}
            title={"your text"}
            fontSize={"font-12"}
            icon={true}
          />
        }
        title={"your text"}
        color={"#FFA726"}
        customStyles={{ width: "320px" }}
        disabled={true}
      />
      <Input
        type={"default"}
        // value={value}
        icon={true}
        emptyFieldErr={true}
        inputType={"text"}
        placeholder={"default input"}
        label={"23123sads"}
        subLabel={""}
        onChange={changeHandler}
        statusCard={
          <HelpText
            status={"error"}
            title={"your text"}
            fontSize={"font-12"}
            icon={true}
          />
        }
        customStyles={{ width: "500px" }}
      />
      <Input
        type={"default"}
        icon={true}
        inputType={"password"}
        coverHandler={coverhandler}
        placeholder={"password input"}
        label={"Enter Password"}
        subLabel={""}
        onChange={changeHandler}
        statusCard={
          <HelpText
            status={"error"}
            title={"your text"}
            fontSize={"font-12"}
            icon={true}
          />
        }
        customStyles={{ width: "500px" }}
      />
      <Input
        type={"default"}
        icon={false}
        label={"Eneter e-mail"}
        editable={true}
        value={"@emal.com"}
        subLabel={""}
        placeholder={"default input"}
        onChange={changeHandler}
        statusCard={
          <HelpText
            status={"error"}
            title={"your text"}
            fontSize={"font-12"}
            icon={true}
          />
        }
        customStyles={{ width: "500px" }}
      />
      <Input
        type={"default"}
        icon={false}
        label={"Eneter e-mail"}
        subLabel={""}
        placeholder={"default input"}
        value={"xle@gmail.com"} // value
        onChange={changeHandler}
        statusCard={
          <HelpText
            status={"error"}
            title={"your text"}
            fontSize={"font-12"}
            icon={true}
          />
        }
        customStyles={{ width: "500px" }}
      />
      <Input
        type={"lable-input-type1"}
        label={"Label"}
        subLabel={"sub label"}
        toggleTitle={"slider"}
        toggle={true}
        placeholder={"0.0000"}
        btns={btnArr}
        onChange={changeHandler}
        onClick={btnHandler}
        inputFrame={"none"}
        statusCard={
          <HelpText
            status={"error"}
            title={"your text"}
            fontSize={"font-12"}
            icon={true}
          />
        }
        icon={true}
        customStyles={{ width: "420px" }}
      />
      <Input
        type={"lable-input-type1"}
        label={"Label"}
        subLabel={"sub label"}
        placeholder={"0.0000"}
        onChange={changeHandler}
        btns={false}
        icon={true}
        onClick={btnHandler}
        statusCard={
          <HelpText
            status={"error"}
            title={"your text"}
            fontSize={"font-12"}
            icon={true}
          />
        }
        inputFrame={"eth"}
        customStyles={{ width: "420px" }}
      />
      <Input
        type={"lable-input-type2"}
        label={"Label"}
        subLabel={"sub label"}
        placeholder={"0.0000"}
        icon={false}
        statusCard={
          <HelpText
            status={"error"}
            title={"your text"}
            fontSize={"font-12"}
            icon={true}
          />
        }
        customStyles={{ width: "320px" }}
        onChange={changeHandler}
      />
      <Input
        type={"label-input-phone-number"}
        label={"your text"}
        onChange={changeCountry}
        statusCard={
          <HelpText
            status={"error"}
            title={"your text"}
            fontSize={"font-12"}
            icon={true}
          />
        }
        customStyles={{ width: "400px" }}
      />
      <Input
        type={"label-input-upload"}
        onChange={changeHandler}
        emptyFieldErr={true}
        statusCard={
          <HelpText
            status={"error"}
            title={"your text"}
            fontSize={"font-12"}
            icon={true}
          />
        }
        customStyles={{ width: "fit-content" }}
      />

      <Input
        type={"lable-input-select"}
        icon={false}
        selectType={"country"}
        selectData={selectData}
        defaultData={defaultData}
        selectHandler={selectHandler}
        selectLabel={"your text ttt"}
        active={active}
        statusCard={
          <HelpText
            status={"error"}
            title={"your text"}
            fontSize={"font-12"}
            icon={true}
          />
        }
        status={"warning"}
        title={"your text"}
        color={"#FFA726"}
        customStyles={{ width: "320px" }}
      />
      <Input
        type={"textarea"}
        label={"textarea bitch"}
        icon={<AddSquareIcon />}
        // onChange={(e) => console.log(e.target.value)}
        // value={'sad'}
        // readOnly={true}
        name={"textarea input"}
        rows={10}
        cols={20}
        // disabled={true}
        placeholder={"nice textarea ?"}
        // autoFocus={true}
        // emptyFieldErr={true}
        resize={"both"}
        // maxLength={2}
        statusCard={
          <HelpText
            status={"error"}
            title={"your text"}
            fontSize={"font-12"}
            icon={true}
          />
        }
      />

      <Input
        type={"date-picker-input"}
        onChange={changeHandler}
        label={"your text"}
        statusCard={
          <HelpText
            status={"error"}
            title={"your text"}
            fontSize={"font-12"}
            icon={true}
          />
        }
        active={active}
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
        color={"#FF0C46"}
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
        type={"search-input"}
        onChange={changeHandler}
        defaultData={defaultData}
        selectHandler={selectHandler}
        selectLabel={"select"}
        placeholder={"search"}
        statusCard={
          <HelpText
            status={"error"}
            title={"your text"}
            fontSize={"font-12"}
            icon={true}
          />
        }
        label={"your text"}
        customStyles={{ width: "100%" }}
      />
    </div>
  );
});
