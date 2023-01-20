import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { SideBar } from "../components/SideBar";
import { Visual } from "../components/Visual";
import { Button } from "../components/Button";
import { SideBarConnect } from "../components/SideBarConnect";
import { SideBarWelcome } from "../components/SideBarWelcome/SideBarWelcome";
import { MetaMask } from "../assets/svg";
import { SideBarAccount } from "../components/SideBarAccount";
const stories = storiesOf("SideBar", module);

stories.add("SideBar", () => {
  const [toggle, setToggle] = useState(false);
  let image = `https://s3.cointelegraph.com/storage/uploads/view/45ac886ece164ffba711e9c73b59d7b8.png`;

  return (
    <div>
      <button onClick={() => setToggle((prev) => !prev)}>toggle</button>
      <SideBar open={toggle}>
        {/* <SideBarConnect
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
        <SideBarWelcome
          type={"Metamask"}
          warning={true}
          completeAccount={() => console.log("complete")}
          sideBarClose={() => setToggle((prev) => !prev)}
          disconnect={() => console.log("disconnect")}
          userAccount={() => console.log("userAccount")}
        />
        {/* <SideBarAccount
          sideBarClose={() => setToggle((prev) => !prev)}
          goBack={() => console.log("go back")}
          response={"response"}
          handlePersonalData={(formData) => console.log(formData)}
          handleSecurityData={(formData) => console.log(formData)}
        /> */}
      </SideBar>
    </div>
  );
});
