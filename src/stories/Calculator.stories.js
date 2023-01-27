import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { Calculator } from "../components/Calculator";

const stories = storiesOf("Calculator", module);

stories.add("Calculator", () => {
    return (
        <div style={{ background: '#0C1121', height: '500px'}}>
            <Calculator />
        </div>
    );
});
