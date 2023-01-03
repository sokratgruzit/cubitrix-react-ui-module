import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { Button } from "../components/Button";

const stories = storiesOf("Button", module);

stories.add("Button", () => {
  const [toggle, setToggle] = useState(false);

    return (
        <div>
            <Button
                label={'Button'}
                size={'btn-lg'}
                type={'btn-primary'}
                arrow={'arrow-right'}
                onClick={() => setToggle((prevState) => !prevState)}
            />
            <Button
                label={'Button'}
                size={'btn-lg'}
                type={'btn-secondary'}
                labelSetting={'no-label'}
                arrow={'arrow-right'}
                onClick={() => setToggle((prevState) => !prevState)}
            />
            <Button
                label={'Button'}
                size={'btn-lg'}
                type={'btn-tertiary'}
                arrow={'arrow-both'}
                onClick={() => setToggle((prevState) => !prevState)}
            />
        </div>
    );
});
