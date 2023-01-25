import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { TableElement } from "../components/TableElement";

const stories = storiesOf("TableElement", module);

stories.add("TableElement", () => {
  return (
    <div>
      <TableElement type={"pagination"} />
    </div>
  );
});
