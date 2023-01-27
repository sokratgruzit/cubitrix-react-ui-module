import { storiesOf } from "@storybook/react";
import { Staking } from "../components/Staking/Staking";

const stories = storiesOf("Staking", module);

stories.add("Staking", () => {
    return (
      <>
        <Staking />
      </>
    );
});
