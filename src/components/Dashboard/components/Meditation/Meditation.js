import React from "react";
import { Button } from "../../../Button";
import "./Meditation.css";

import { InfoItem } from "./InfoItem";
import { DashboardMeditationBG } from "../../../../assets/svgs";

export const Meditation = () => {
  return (
    <div className="meditation-container">
      <div className="corner-box top-left">
        <InfoItem title="USERS" amount="1.3 B" link="/sit" linkTitle="Become a Member" />
      </div>
      <div className="corner-box top-right">
        <InfoItem title="TRADE" amount="8 M" link="/trade" linkTitle="Trade Now" />
      </div>
      <div className="corner-box bottom-left">
        <InfoItem title="STAKED" amount="4 B" link="/staking" linkTitle="Make Staking" />
      </div>
      <div className="corner-box bottom-right">
        <InfoItem title="LOAN" amount="1 B" link="/loan" linkTitle="Make Loan" />
      </div>
      <div className="center-box">
        <DashboardMeditationBG className={"person-background"} />
        <span data-aos="fade-up" data-aos-delay="20" className="person-wrapper">
          <img
            src={require("../../../../assets/img/dashboard/MeditationPerson.png")}
            alt=""
            className="meditation-person"
          />
        </span>
      </div>
      <img
        src={require("../../../../assets/img/dashboard/MeditationBG.png")}
        alt=""
        className="meditation-bg"
      />
    </div>
  );
};
