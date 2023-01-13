import { Switches } from "../components/Switches";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Switches", module);

stories.add("Switches", () => {
  return (
    <div>
      <Switches type={"sm-switches"} />
      <Switches type={"lg-switches"} size={"size"} />
    </div>
  );
});
