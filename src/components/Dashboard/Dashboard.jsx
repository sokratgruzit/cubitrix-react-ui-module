import React, { useEffect } from "react";

import "./Dashboard.css";

import { Footer } from "../Footer";
import {
  DashboardHeader,
  Meditation,
  StartNow,
  TopCoins,
  WhyComplend,
} from "./components";

export const Dashboard = ({
  handleGetStarted,
  handleConnect,
  account,
  startTrade,
  allImages,
  info,
  whyComplendData,
}) => {
  return (
    <div style={{ paddingTop: "70px" }}>
      <div className="dashboard-overflow">
        <main className="dashboard-main">
          <DashboardHeader
            handleGetStarted={handleGetStarted}
            handleConnect={handleConnect}
            account={account}
            dashboardHeaderImages={allImages?.dashboardHeader}
          />
          <WhyComplend data={whyComplendData} images={allImages?.whyComplend} />
          <TopCoins startTrade={startTrade} topCoinsImages={allImages?.topcoins} />
          <Meditation meditationImages={allImages?.meditation} info={info} />
          <StartNow
            handleConnect={handleConnect}
            account={account}
            startNowImages={allImages?.startNow}
          />
          <Footer />
        </main>
      </div>
    </div>
  );
};
