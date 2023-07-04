import React from "react";
import { Button } from "../../../Button";
import "./Meditation.css";

import { InfoItem } from "./InfoItem";
import { DashboardMeditationBG } from "../../../../assets/svgs";
import { useFade } from "../../../../hooks/useFade";

export const Meditation = ({ info, meditationImages }) => {
  useFade("up", [".fade-up"]);
  return (
    <div className="meditation-container">
      <div className="center-box">
        <InfoItem className="info-item" {...info[0]} />
        <InfoItem className="info-item" {...info[1]} />
        <InfoItem className="info-item" {...info[2]} />
        <InfoItem className="info-item" {...info[3]} />
        <InfoItem className="info-item" {...info[4]} />
        <DashboardMeditationBG className={"person-background"} />
        <span className="person-wrapper fade-up">
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
