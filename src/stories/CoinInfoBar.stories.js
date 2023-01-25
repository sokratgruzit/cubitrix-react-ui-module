import { storiesOf } from "@storybook/react";
import { CoinInfoBar } from "../components/CoinInfoBar";

import '../assets/css/main-theme.css';

const stories = storiesOf("CoinInfoBar", module);

stories.add("CoinInfoBar", () => {
    const infoItemList = [
        {
          name: "Index Price", 
          value: "1,220.2",
          active: true,
        },
        {
          name: "Oracle Price", 
          value: "1,220.2",
          active: true,
        },
        {
          name: "24h Change", 
          value: "1,6 (0.18%)",
          active: true,
        },
        {
          name: "Open Interest", 
          value: "104,683.72",
          active: true,
        },
        {
          name: "1h Funding", 
          value: "0.00178%",
          active: true,
        },
        {
          name: "24h Volume", 
          value: "330,220,228",
          active: true,
        },
        {
          name: "24h Trade", 
          value: "45,452",
          active: true,
        },
        {
          name: "Next Funding", 
          value: "01:28",
          active: true,
        },
      ];
    return (
        <div>
            <CoinInfoBar itemList={infoItemList} />
        </div>
    );
});
