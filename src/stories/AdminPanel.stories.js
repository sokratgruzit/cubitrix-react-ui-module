import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { AdminPanel } from "../components/AdminPanel";

const stories = storiesOf("AdminPanel", module);

stories.add("AdminPanel", () => {
    return (
        <div>
            <AdminPanel />
        </div>
    );
});
