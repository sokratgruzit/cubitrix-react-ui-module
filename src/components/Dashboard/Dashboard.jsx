import React, { useEffect } from "react";

import "./Dashboard.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { Footer } from "../Footer";
import { DashboardHeader, Meditation, StartNow, TopCoins } from "./components";

export const Dashboard = ({
  handleGetStarted,
  handleConnect,
  account,
  startTrade,
  allImages,
  info,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="dashboard-main">
      <DashboardHeader
        handleGetStarted={handleGetStarted}
        handleConnect={handleConnect}
        account={account}
        dashboardHeaderImages={allImages?.dashboardHeader}
      />
      <TopCoins startTrade={startTrade} topCoinsImages={allImages?.topcoins} />
      <Meditation meditationImages={allImages?.meditation} info={info} />
      <StartNow
        handleConnect={handleConnect}
        account={account}
        startNowImages={allImages?.startNow}
      />
      <Footer />
    </main>
  );
};
