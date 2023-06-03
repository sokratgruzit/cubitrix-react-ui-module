import React from "react";
import { Button } from "../../../Button";
import "./StartNow.css";

import { StartNowBlocks1, StartNowBlocks2 } from "../../../../assets/svgs";
import { useFade } from "../../../../hooks/useFade";

export const StartNow = ({ account, handleConnect, startNowImages }) => {
  useFade("up", [".fade-up"]);

  return (
    <section className="start-section">
      <div className="start-section_container">
        <span className="start-blocks-1-wrap fade-up">
          <StartNowBlocks1 className={"start-blocks-1"} />
        </span>
        <span className="start-blocks-2-wrap fade-up">
          <StartNowBlocks2 className={"start-blocks-2"} />
        </span>
        <div className="start-titles-wrapper">
          <h2 className="start-title fade-up">start now</h2>
          <h4 className="start-title-sm fade-up">
            Connect your crypto wallet to start using the app in seconds. No registration
            needed.
          </h4>
        </div>
        <span className="fade-up">
          {account ? null : (
            <Button
              label={"Connect Wallet"}
              size={"btn-lg"}
              type={"btn-darkBlue-secondary"}
              arrow={"arrow-none"}
              element={"button"}
              onClick={handleConnect}
            />
          )}
        </span>
      </div>

      <div className="corners-bg" />
    </section>
  );
};
