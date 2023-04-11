import React from "react";
import { Button } from "../../../Button";
import "./Meditation.css";

import MeditationBG from "../../../../assets/img/dashboard/MeditationBG.png";
import { InfoItem } from "./InfoItem";

export const Meditation = () => {
  return (
    // <section className="start-section">
    //   <div className="start-titles-wrapper"></div>
    //   <div>
    //   </div>
    // </section>
    <div className="container">
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
      <div className="center-box"></div>
      <img src={MeditationBG} alt="" className="meditation-bg" />
    </div>
  );
};
