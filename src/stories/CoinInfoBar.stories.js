import { storiesOf } from "@storybook/react";
import { CoinInfoBar } from "../components/CoinInfoBar";

import '../assets/css/main-theme.css';

const stories = storiesOf("CoinInfoBar", module);

stories.add("CoinInfoBar", () => {
    return (
        <div>
            <CoinInfoBar />
        </div>
    );
});
