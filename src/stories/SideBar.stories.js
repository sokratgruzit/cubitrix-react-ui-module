import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { SideBar } from "../components/SideBar";
import { Visual } from "../components/Visual";
import { Button } from "../components/Button";

import { Connect } from "../components/Auth/Connect";
import { UserAccount } from "../components/Auth/UserAccount";
import { UserOptions } from "../components/Auth/UserOptions/UserOptions";
import { SignIn } from "../components/Auth/SignIn";

const stories = storiesOf("SideBar", module);

stories.add("SideBar", () => {
  const [toggle, setToggle] = useState(false);

  const completeHandler = (i) => {
    console.log(i);
  };

  let image = `https://s3.cointelegraph.com/storage/uploads/view/45ac886ece164ffba711e9c73b59d7b8.png`;

  return (
    <div>
      <button onClick={() => setToggle((prev) => !prev)}>toggle</button>
      <SideBar open={toggle}>
        {/* <Connect
          ConnectOptions={[
            {
              label: "Metamask",
              svg: <MetaMask />,
              connect: () => {
                console.log("connect");
              },
            },
            {
              label: "ConnectWallet",
              image,
              connect: () => {
                console.log("connect");
              },
            },
          ]}
          address={"0xb81G555828610c156eF3408DE21A3eC9b9B29V81"}
          signIn={() => {
            console.log("sign in");
          }}
          sideBarClose={() => setToggle((prev) => !prev)}
        /> */}
        <UserAccount
          type={"Metamask"}
          warning={true}
          completeAccount={() => console.log("complete")}
          sideBarClose={() => setToggle((prev) => !prev)}
          disconnect={() => console.log("disconnect")}
          userAccount={() => console.log("userAccount")}
          handlePersonalData={(e) => console.log(e)}
          handleSecurityData={(e) => console.log(e)}
          personalDataState={{ loading: false, saved: false }}
          securityDataState={{ loading: false, saved: false }}
          emailVerified={true}
          userDataError={"error while saving"}
          securityError={"password is incorrect"}
          hasPasswordSet={true}
          imgValue={
            "http://localhost:4000/images/0xecE0E468da93f632F1594F93d05289d465429137.png"
          }
        />
        {/* <UserOptions
          type={"Metamask"}
          warning={true}
          completeAccount={() => console.log("complete")}
          sideBarClose={() => setToggle((prev) => !prev)}
          disconnect={() => console.log("disconnect")}
          userAccount={() => console.log("userAccount")}
        /> */}
        {/* <SignIn
          onClick={completeHandler}
          sideBarClose={() => setToggle((prev) => !prev)}
          goBack={() => console.log("go back")}
          signInState={{ loading: true, error: false }}
        /> */}
      </SideBar>
    </div>
  );
});
