import { storiesOf } from "@storybook/react";
import { useState } from "react";
import { Loan } from "../components/Loan";

const stories = storiesOf("Loan", module);

stories.add("Loan", (props) => {
  return (
    <div>
      <Loan />
    </div>
  );
});
