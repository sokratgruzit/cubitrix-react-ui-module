import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import AddTokenPopUp from '../components/AddTokenPopUp';


const stories = storiesOf("AddTokenPopUp", module);

stories.add("AddTokenPopUp", (props) => {

  return (
    <div>
        <AddTokenPopUp
            customStyles={{}}
        />
    </div>
  );
});
