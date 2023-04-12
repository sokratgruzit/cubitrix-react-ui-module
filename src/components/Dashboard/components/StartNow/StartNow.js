import React from "react";
import { Button } from "../../../Button";
import "./StartNow.css";

import { StartNowBlocks1, StartNowBlocks2 } from "../../../../assets/svgs";

export const StartNow = ({ account, handleConnect, startNowImages }) => {
  return (
    <section className="start-section">
      <img src={startNowImages?.startNowBG} className="startNowBG" alt="" />
      <span data-aos="fade-up" data-aos-delay="20" className="start-blocks-1-wrap">
        <StartNowBlocks1 className={"start-blocks-1"} />
      </span>
      <span data-aos="fade-up" data-aos-delay="20" className="start-blocks-2-wrap">
        <StartNowBlocks2 className={"start-blocks-2"} />
      </span>
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
        {account ? null : (
          <Button
            label={"Connect Wallet"}
            size={"btn-lg"}
            type={"btn-secondary"}
            arrow={"arrow-none"}
            element={"button"}
            onClick={handleConnect}
          />
        )}
      </span>
      <div className="corners-bg" />
    </section>
  );
};
