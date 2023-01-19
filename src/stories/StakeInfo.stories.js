import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { StakeInfo } from "../components/StakeInfo";

const stories = storiesOf("StakeInfo", module);

stories.add("StakeInfo", () => {
    return (
        <div>
            <StakeInfo />
        </div>
    );
});
