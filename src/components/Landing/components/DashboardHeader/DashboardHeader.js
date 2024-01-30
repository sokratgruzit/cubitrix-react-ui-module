import React, { useState,useEffect,useRef, useLayoutEffect } from "react";
// components
import { Button } from "../../../Button";

// styles
import "./DashboardHeader.css";

export const DashboardHeader = ({
  handleConnect,
  handleGetStarted,
  dashboardHeaderImages,
  account,
  animate,
}) => {
  return (
          <header className={`h-screen dashboard-header-container ${animate ? "animate" : ""}`}>
              <img
                  src={dashboardHeaderImages?.rocket}
                  className={"dashboard-header-rocket-img"}
              />
              <div className="dashboard-header">
                  <img src={dashboardHeaderImages?.dots} className={"dashboard-header-dots-img"} />
                  <div className={"dashboard-header-top"}>
                      <h1>Buy</h1>
                      <h1>Sell & Trade</h1>
                  </div>
                  <div className={"dashboard-header-bottom"}>
                      <h1>Crypto</h1>
                      <p>Trade, buy, staking and loan cryptocurrency at AONE</p>
                  </div>
                  <img src={dashboardHeaderImages?.man} className={"dashboard-header-man-img"} />
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
                  {!account && (
                      <Button
                          label={"Connect Wallet"}
                          size={"btn-lg"}
                          type={"btn-primary"}
                          arrow={"arrow-none"}
                          element={"button"}
                          onClick={handleConnect}
                          customStyles={{ margin: "0" }}
                      />
                  )}
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
