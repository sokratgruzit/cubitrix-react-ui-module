import React, { useState, useEffect } from "react";

import { useMobileWidth } from "../../hooks/useMobileWidth";

import "./Dashboard.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { Footer } from "../Footer";
import { DashboardHeader, Meditation, StartNow, TopCoins } from "./components";

export const Dashboard = ({ handleGetStarted, handleConnect }) => {
  const { width } = useMobileWidth();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="dashboard-main">
      <DashboardHeader
        handleGetStarted={handleGetStarted}
        handleConnect={handleConnect}
      />
      <TopCoins />
      <Meditation />
      <StartNow />
      <Footer />
    </main>
  );
};
