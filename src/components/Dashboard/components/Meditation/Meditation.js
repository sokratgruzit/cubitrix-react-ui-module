import React from "react";
import { Button } from "../../../Button";
import "./Meditation.css";

import { InfoItem } from "./InfoItem";
import { DashboardMeditationBG } from "../../../../assets/svgs";

export const Meditation = ({ info, meditationImages }) => {
  return (
    <div className="meditation-container">
      <div className="corner-box top-left">
        <InfoItem {...info[0]} />
      </div>
      <div className="corner-box top-right">
        <InfoItem {...info[1]} />
      </div>
      <div className="corner-box bottom-left">
        <InfoItem {...info[2]} />
      </div>
      <div className="corner-box bottom-right">
        <InfoItem {...info[3]} />
      </div>
      <div className="center-box">
        <DashboardMeditationBG className={"person-background"} />
        <span data-aos="fade-up" data-aos-delay="20" className="person-wrapper">
          <img
            src={meditationImages?.MeditationPerson}
            alt=""
            className="meditation-person"
          />
        </span>
      </div>
      <img src={meditationImages?.MeditationBG} alt="" className="meditation-bg" />
    </div>
  );
};
