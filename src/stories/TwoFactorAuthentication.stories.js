import { useState } from "react";
import { TwoFactorAuthentication } from "../components/TwoFactorAuthentication";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("TwoFactorAuthentication", module);

stories.add("TwoFactorAuthentication", (props) => {
  const [active, setActive] = useState(false);

  let closeHandler = () => {
    setActive(true);
  };

  return (
    <div>
      <TwoFactorAuthentication
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
