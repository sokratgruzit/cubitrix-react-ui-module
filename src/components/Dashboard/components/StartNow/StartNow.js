import React from "react";
import { Button } from "../../../Button";
import "./StartNow.css";

import startNowBG from "../../../../assets/img/dashboard/startNowBG.png";
import { StartNowBlocks1, StartNowBlocks2 } from "../../../../assets/svgs";

export const StartNow = () => {
  return (
    <div className="relative-test">
      <section className="start-section">
        <img src={startNowBG} className="startNowBG" alt="" />
        <StartNowBlocks1 className={"start-blocks-1"} />
        <StartNowBlocks2 className={"start-blocks-2"} />
        <div className="start-titles-wrapper">
          <h2 className="start-title">start now</h2>
          <h4 className="start-title-sm">
            Connect your crypto wallet to start using the app in seconds. No registration
            needed.
          </h4>
        </div>
        <Button
          label={"Connect Wallet"}
          size={"btn-lg"}
          type={"btn-phospore"}
          arrow={"arrow-none"}
          element={"button"}
          onClick={() => console.log("connect wallet")}
        />
      </section>
    </div>
  );
};
