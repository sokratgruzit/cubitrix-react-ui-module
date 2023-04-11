import React from "react";
import { Button } from "../../../Button";
import "./DashboardHeader.css";

import kacuna1 from "../../../../assets/img/dashboard/kacuna1.png";

export const DashboardHeader = () => {
  return (
    <header className="dashboard-header">
      <div>
        <h1>Buy</h1>
        <h1>Sell & Trade</h1>
      </div>
      <img src={kacuna1} alt="" />
      <h1>Crypto</h1>
    </header>
  );
};
