import React, { useState, useEffect } from "react";

// components
import { Button } from "../../../Button";

// images
// import { default as rocket } from "../../../../assets/img/dashboard/rocket.png";
// const rocket = require("../../../../assets/img/dashboard/rocket.png");

// Use the rocket variable in your code

import { dirname } from "path";

// Get the directory name of the current module
// const __dirname = dirname(new URL(import.meta.url).pathname);
const currentPath = window.location.pathname;
const dirName = dirname(currentPath);
console.log(`${process.env.PUBLIC_URL}/public/rocket.png`);

// styles
import "./DashboardHeader.css";

export const DashboardHeader = ({ handleConnect, handleGetStarted }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <header className={`dashboard-header-container ${animate ? "animate" : ""}`}>
      <img
      // src={require("../../../../assets/img/dashboard/rocket.png")}
      // src={require(`${dirName}src/assets/img/dashboard/rocket.png`)}
      // src={`${process.env.PUBLIC_URL}/src/assets/img/dashboard/rocket.png`}
      />
      <div className="dashboard-header">
        {/* <img
          src={require("../../../../assets/img/dashboard/dots.png")}
          className={"dashboard-header-dots-img"}
        /> */}
        <div className={"dashboard-header-top"}>
          <h1>Buy</h1>
          <h1>Sell & Trade</h1>
        </div>
        <div className={"dashboard-header-bottom"}>
          <h1>Crypto</h1>
          <p>Trade, buy, staking and loan cryptocurrency at Complend</p>
        </div>
        {/* <img
          src={require("../../../../assets/img/dashboard/man.png")}
          className={"dashboard-header-man-img"}
        />
        <img
          src={require("../../../../assets/img/dashboard/planet.png")}
          className={"dashboard-header-planet-img"}
        /> */}
      </div>
      {/* <img
        src={require("../../../../assets/img/dashboard/dotsRight.png")}
        className={"dashboard-header-dotsRight-img"}
      /> */}
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
      {/* <img
        src={require("../../../../assets/img/dashboard/bottom.svg")}
        className={"dashboard-header-bottom-img"}
      /> */}
    </header>
  );
};
