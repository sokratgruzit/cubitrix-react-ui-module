import React, { useState } from "react";

import { useMobileWidth } from "../../hooks/useMobileWidth";

import "./Dashboard.css";

export const Header = ({
  modules,
  account,
  sideBar,
  sideBarOpen,
  handleConnect,
  handleNotifications,
  title,
  logoSvg,
  verified,
  amount,
}) => {
  const { width } = useMobileWidth();

  return (
    <main>
      <header>
        <div className="dashboard-main-card"></div>
      </header>
    </main>
  );
};
