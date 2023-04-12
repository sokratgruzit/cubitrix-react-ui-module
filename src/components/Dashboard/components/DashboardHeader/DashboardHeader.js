import React, { useState, useEffect } from "react";

// components
import { Button } from "../../../Button";

// images
// import { default as rocket } from "../../../../assets/img/dashboard/rocket.png";
// const rocket = require("../../../../assets/img/dashboard/rocket.png");

// Use the rocket variable in your code

// styles
import "./DashboardHeader.css";

export const DashboardHeader = ({
  handleConnect,
  handleGetStarted,
  dashboardHeaderImages,
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <header
      className={`dashboard-header-container ${animate ? "animate" : ""}`}
    >
      <img src={dashboardHeaderImages?.rocket} />
      <div className='dashboard-header'>
        <img
          src={dashboardHeaderImages?.dots}
          className={"dashboard-header-dots-img"}
        />
        <div className={"dashboard-header-top"}>
          <h1>Buy</h1>
          <h1>Sell & Trade</h1>
        </div>
        <div className={"dashboard-header-bottom"}>
          <h1>Crypto</h1>
          <p>Trade, buy, staking and loan cryptocurrency at Complend</p>
        </div>
        <img
          src={dashboardHeaderImages?.man}
          className={"dashboard-header-man-img"}
        />
        <img
          src={dashboardHeaderImages?.planet}
          className={"dashboard-header-planet-img"}
        />
      </div>
      <img
        src={dashboardHeaderImages?.dotsRight}
        className={"dashboard-header-dotsRight-img"}
      />
      <div className={"dashboard-buttons"}>
        <Button
          label={"Connect Wallet"}
          size={"btn-lg"}
          type={"btn-primary"}
          arrow={"arrow-none"}
          element={"button"}
          onClick={handleConnect}
          customStyles={{ margin: "0" }}
        />
        <Button
          label={"Get Started"}
          size={"btn-lg"}
          type={"btn-secondary"}
          arrow={"arrow-none"}
          element={"button"}
          onClick={handleGetStarted}
          customStyles={{ margin: "0" }}
        />
      </div>
      <img
        src={dashboardHeaderImages?.bottom}
        className={"dashboard-header-bottom-img"}
      />
    </header>
  );
};
