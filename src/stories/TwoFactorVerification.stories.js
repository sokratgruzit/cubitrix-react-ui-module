import { useState } from "react";
import { TwoFactorVerification } from "../components/TwoFactorVerification";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("TwoFactorVerification", module);

stories.add("TwoFactorVerification", (props) => {
  const [active, setActive] = useState(false);

  let closeHandler = () => {
    setActive(true);
  };

  return (
    <div>
      <TwoFactorVerification
        mainContainer={"mainContainer"}
        onClick={closeHandler}
        active={active}
      />
    </div>
  );
});
