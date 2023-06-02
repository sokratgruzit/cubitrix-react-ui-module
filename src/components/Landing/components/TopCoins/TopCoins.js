import React, { useEffect, useRef } from "react";
import { Button } from "../../../Button";
import "./TopCoins.css";

import {
  DashboardCoinsLeverageCard,
  DashboardCoinsBuy,
  DashboardChart,
} from "../../../../assets/svgs";
import { useFade } from "../../../../hooks/useFade";

export const TopCoins = ({ startTrade, topCoinsImages }) => {
  useFade("up", [".fade-up"]);
  useFade("right", [".fade-right"]);
  useFade("left", [".fade-left"]);

  // useEffect(() => {
  //   window.addEventListener("mousemove", (e) => {
  //     const { clientX, clientY } = e;
  //     const x = clientX / window.innerWidth;
  //     const y = clientY / window.innerHeight;
  //     const anchor = document.getElementById("anchor");
  //     const rekt = anchor.getBoundingClientRect();
  //     const anchorX = rekt.left + rekt.width / 2;
  //     const anchorY = rekt.top + rekt.height / 2;

  //     const angleDeg = angle(anchorX, anchorY, clientX, clientY);

  //     anchor.style.transform = `rotate(${angleDeg}deg)`;
  //   });
  // }, []);

  // function angle(x1, y1, x2, y2) {
  //   return Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
  // }

  return (
    <section className="top-coins-section">
      <header className="top-coins-header">
        <h1 className="top-coins-title fade-up">
          Top
          <span className="top3-3">3</span>
          Coins
        </h1>
        <p className="top-coins-info fade-up">
          Trade, buy, staking and loan cryptocurrency at Complend
        </p>
      </header>
      <div className="top-coins-main fade-up">
        <img src={topCoinsImages?.EthCard} alt="" className="ethCard" />
        <img src={topCoinsImages?.BitcoinCard} alt="" className="BitcoinCard" />
        <img src={topCoinsImages?.TetherCard} alt="" className="TetherCard" />

        <DashboardCoinsLeverageCard className={"coins-leverage-card"} />
        <DashboardCoinsBuy className={"coins-buy-card"} />
        <DashboardChart className={"coins-chart"} />
      </div>
      <span className="btn-started-wrap fade-up">
        <Button
          label={"Start Trade"}
          size={"btn-lg"}
          type={"btn-secondary-white"}
          arrow={"arrow-none"}
          element={"button"}
          onClick={startTrade}
          className={"start-trade-btn"}
        />
      </span>
      <div className="bg-gradient"></div>
      <span className="top-coins-coin-wrap fade-right delay-50">
        <img src={topCoinsImages?.TopCoinsIcon} alt="" className="top-coins-coin" />
      </span>
      <span className={"dashboard-header-ball-img-wrap fade-left delay-1200"}>
        <img
          src={topCoinsImages?.ball}
          className={"dashboard-header-ball-img"}
          id="anchor"
        />
      </span>
      <span className={"silver-coin-wrap fade-left delay-200"}>
        <img src={topCoinsImages?.silverCoin} className={"silver-coin"} />
      </span>
    </section>
  );
};
