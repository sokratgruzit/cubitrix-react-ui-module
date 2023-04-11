import React from "react";
import { Button } from "../../../Button";
import "./DashboardHeader.css";

import man from "../../../../assets/img/dashboard/man.png";
import dots from "../../../../assets/img/dashboard/dots.png";
import planet from "../../../../assets/img/dashboard/planet.png";
import dotsRight from "../../../../assets/img/dashboard/dotsRight.png";

export const DashboardHeader = () => {
  return (
    <header className='dashboard-header-container'>
      <div className='dashboard-header'>
        <img src={dots} className={"dashboard-header-dots-img"} />
        <div className={"dashboard-header-top"}>
          <h1>Buy</h1>
          <h1>Sell & Trade</h1>
        </div>
        <div className={"dashboard-header-bottom"}>
          <h1>Crypto</h1>
          <p>Trade, buy, staking and loan cryptocurrency at Complend</p>
        </div>
        <img src={man} className={"dashboard-header-man-img"} />
        <img src={planet} className={"dashboard-header-planet-img"} />
      </div>
      <img src={dotsRight} className={"dashboard-header-dotsRight-img"} />
      <div className={"dashboard-buttons"}>
        <Button
          label={"Connect Wallet"}
          size={"btn-lg"}
          type={"btn-primary"}
          arrow={"arrow-none"}
          element={"button"}
          onClick={() => console.log('hi')}
          customStyles={{ margin: '0'}}

        />
        <Button
          label={"Get Started"}
          size={"btn-lg"}
          type={"btn-secondary"}
          arrow={"arrow-none"}
          element={"button"}
          onClick={() => console.log('hi')}
          customStyles={{ margin: '0'}}
        />
      </div>
    </header>
  );
};
