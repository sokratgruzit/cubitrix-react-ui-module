import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import '../assets/css/main-theme.css';
import { Button } from "../components/Button";

const stories = storiesOf("Button", module);

stories.add("Button", () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <Button
                label={toggle ? "good button" : "bad button"}
                onClick={() => setToggle((prevState) => !prevState)}
            />
        </div>
    );
});
