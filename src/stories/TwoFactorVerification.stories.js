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
        onClick={closeHandler}
        confirmAuth={(e) => console.log("next", e)}
        active={active}
        qrcode={"ahahahah new qr codess"}
        accountName={"Complend"}
        accountKey={"2INU5M0UXZ"}
      />
    </div>
  );
});
