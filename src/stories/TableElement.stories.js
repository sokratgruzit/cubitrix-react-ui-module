import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { TableElement } from "../components/TableElement";

const stories = storiesOf("TableElement", module);

stories.add("TableElement", () => {
  return (
    <div>
      <TableElement
        type={"search"}
        placeholder={"Quick Search"}
        customStyles={{ width: "568px", height: "52px" }}
      />
      <TableElement type={"pagination"} />
    </div>
  );
});
