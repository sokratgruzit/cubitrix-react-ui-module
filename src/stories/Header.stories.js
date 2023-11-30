import { storiesOf } from "@storybook/react";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../components/Header";
import { Logo } from "../assets/svgs";

const stories = storiesOf("Header", module);

stories.add("Header", () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const loginWithEmail = (show) => {
    setShowSignIn(show);
  };

  let account = "0x044e2fF75C6B759g3f86e21609DF770e02e8D3d8"

  return (
    <BrowserRouter>
      <Header
        modules={{
          staking: "true",
          referral: "true",
          trade: "true",
          loan: "true",
          extensions: "true",
          notify: "true",
        }}
        account={account}
        location={{ pathName: "" }}
        title={"COMPLEND"}
        A1Price={2}
        logoSvg={<Logo />}
        verified={true}
        loginWithEmail={loginWithEmail}
        showSignIn={showSignIn}
      />
    </BrowserRouter>
  );
});
