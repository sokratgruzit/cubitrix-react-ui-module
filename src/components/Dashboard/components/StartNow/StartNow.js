import React from "react";
import { Button } from "../../../Button";
import "./StartNow.css";

import startNowBG from "../../../../assets/img/dashboard/startNowBG.png";
import { StartNowBlocks1, StartNowBlocks2 } from "../../../../assets/svgs";

export const StartNow = () => {
  return (
    <section className="start-section">
      <img src={startNowBG} className="startNowBG" alt="" />
      <StartNowBlocks1
        className={"start-blocks-1"}
        data-aos="fade-up"
        data-aos-delay="20"
      />
      <StartNowBlocks2
        className={"start-blocks-2"}
        data-aos="fade-up"
        data-aos-delay="20"
      />
      <div className="start-titles-wrapper">
        <h2 className="start-title" data-aos="fade-up" data-aos-delay="20">
          start now
        </h2>
        <h4 className="start-title-sm" data-aos="fade-up" data-aos-delay="20">
          Connect your crypto wallet to start using the app in seconds. No registration
          needed.
        </h4>
      </div>
      <span data-aos="fade-up" data-aos-delay="20">
        <Button
          label={"Connect Wallet"}
          size={"btn-lg"}
          type={"btn-phospore"}
          arrow={"arrow-none"}
          element={"button"}
          onClick={() => console.log("connect wallet")}
        />
      </span>
    </section>
  );
};
