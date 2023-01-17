import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { Button } from "../components/Button";

const stories = storiesOf("Button", module);

stories.add("Button", () => {
  const [toggle, setToggle] = useState(false);
<<<<<<< HEAD
  let image = `https://s3.cointelegraph.com/storage/uploads/view/45ac886ece164ffba711e9c73b59d7b8.png`;
    return (
        <div style={{marginLeft: '100px'}}>
            <Button
                label={'User Account'}
                element={'side-button'}
                customStyles={{width: '340px'}}
                onClick={() => setToggle((prevState) => !prevState)}
            />
            <Button
                label={'Metamask'}
                element={'image-button'}
                image={image}
                customStyles={{width: '340px'}}
                onClick={() => setToggle((prevState) => !prevState)}
            />
            <Button
                label={'Button'}
                size={'btn-lg'}
                type={'btn-primary'}
                arrow={'arrow-right'}
                element={'button'}
                onClick={() => setToggle((prevState) => !prevState)}
            />
            <Button
                label={'Button'}
                size={'btn-lg'}
                type={'btn-secondary'}
                labelSetting={'no-label'}
                arrow={'arrow-right'}
                element={'button'}
                onClick={() => setToggle((prevState) => !prevState)}
            />
            <Button
                label={'Button'}
                size={'btn-lg'}
                type={'btn-tertiary'}
                arrow={'arrow-both'}
                element={'button'}
                onClick={() => setToggle((prevState) => !prevState)}
            />
        </div>
    );
=======
  return (
    <div>
      <Button
        label={"Button"}
        size={"btn-lg"}
        type={"btn-primary"}
        arrow={"arrow-right"}
        onClick={() => setToggle((prevState) => !prevState)}
      />
      <Button
        label={"Button"}
        size={"btn-lg"}
        type={"btn-secondary"}
        labelSetting={"no-label"}
        arrow={"arrow-right"}
        onClick={() => setToggle((prevState) => !prevState)}
      />
      <Button
        label={"Button"}
        size={"btn-lg"}
        type={"btn-tertiary"}
        arrow={"arrow-both"}
        onClick={() => setToggle((prevState) => !prevState)}
      />
    </div>
  );
>>>>>>> 59ef65387a9394008d9befa4a56e547cb9fd027b
});
