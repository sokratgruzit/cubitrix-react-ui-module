import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { TabTableV1 } from "../components/TabTableV1";

const stories = storiesOf("TabTableV1", module);

let navData = [
  {
    name: "Status",
    coin: false,
    id: 0,
  },
  {
    name: "Side",
    coin: false,
    id: 1,
  },
  {
    name: "Amount/Filled",
    coin: "ETH",
    id: 2,
  },
  {
    name: "Price",
    coin: false,
    id: 3,
  },
  {
    name: "Trigger",
    coin: false,
    id: 4,
  },
  {
    name: "Good Till",
    coin: false,
    id: 5,
  },
];

stories.add("TabTableV1", () => {
  return (
    <div>
      <TabTableV1 type={"tab-table-v1"} nameData={navData} />
    </div>
  );
});
