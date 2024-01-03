import { storiesOf } from "@storybook/react";

import TradeHeaderExtension from "../components/tradeHeaderExtension/TradeHeaderExtension";

const data = [
  {
    id: 1,
    name: "balance",
    amount: 11000,
  },
  {
    id: 2,
    name: "profit",
    amount: 11000,
  },
  {
    id: 3,
    name: "under margin",
    amount: 3000,
  },
  {
    id: 4,
    name: "free margin",
    amount: 4500,
  },
  {
    id: 5,
    name: "equity",
    amount: 5500,
  },
];

storiesOf("TradeHeaderExtension", module).add("TradeHeaderExtension", () => (
  <TradeHeaderExtension data={data} />
));
