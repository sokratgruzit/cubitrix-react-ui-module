import { storiesOf } from "@storybook/react";
import { useState } from "react";
import { Header } from "../components/Header";

const stories = storiesOf("Header", module);

stories.add("Header", () => {
  return (
    <div>
      <Header NavLink={<a></a>} modules={[]} account={"shit"} />
      shit
    </div>
  );
});
