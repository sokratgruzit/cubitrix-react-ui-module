import React from "react";
import {
  DashboardHeader,
  Meditation,
  Overview,
  StartNow,
  TopCoins,
  WhyComplend,
} from "./components";
import { Footer } from "../Footer";

import "./Landing.css";

export const Landing = ({
  handleGetStarted,
  handleConnect,
  account,
  startTrade,
  allImages,
  info,
  whyComplendData,
  overviewProjectsData,
  animate,
  helpSupportClick,
}) => {
  return (
    <div style={{ paddingTop: "70px" }}>
      <div className="dashboard-overflow">
        <main className="dashboard-main">
          <DashboardHeader
            animate={animate}
            handleGetStarted={handleGetStarted}
            handleConnect={handleConnect}
            account={account}
            dashboardHeaderImages={allImages?.dashboardHeader}
          />
          <WhyComplend data={whyComplendData} images={allImages?.whyComplend} />
          <TopCoins
            startTrade={startTrade}
            topCoinsImages={allImages?.topcoins}
          />
          <Meditation meditationImages={allImages?.meditation} info={info} />
          <Overview data={overviewProjectsData} />
          <StartNow
            handleConnect={handleConnect}
            account={account}
            startNowImages={allImages?.startNow}
          />
          <Footer helpSupportClick={helpSupportClick} />
        </main>
      </div>
    </div>
  );
};
