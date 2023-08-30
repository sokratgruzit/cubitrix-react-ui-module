import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { Signin } from "../components/Signin";

const stories = storiesOf("Signin", module);

stories.add("Signin", () => {
    return <Signin />;
});
