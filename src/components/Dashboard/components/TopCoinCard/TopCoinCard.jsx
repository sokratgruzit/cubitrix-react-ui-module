import React, { useState } from "react";
import { TriangleArrow } from "../../../../assets/svgs";
import { MiniChart } from "../MiniChart/MiniChart";

import "./TopCoinCard.css";

export const TopCoinCard = ({ item }) => {
  const chartData24H = item.sparkline_in_7d.price.slice(-24);
  return (
    <div className="top-coin-card">
      <div className="top-coin-card-header">
        <div className="top-coin-side">
          <div className="top-coin-image-wrapper">
            <img src={item.image} className="top-coin-image" />
          </div>
          <div className="top-coin-info">
            <h3>{item.name}</h3>
            <p>{item.symbol}</p>
          </div>
        </div>
        <MiniChart
          chartData={chartData24H}
          isPositive={item.price_change_percentage_24h > 0}
        />
      </div>
      <div className="top-coin-financial">
        <p>${item.current_price}</p>
        <span className="top-coins-card-price-change-wrap">
          <TriangleArrow
            className={
              item.price_change_percentage_24h > 0
                ? "arrow-positive-change"
                : "arrow-negative-change"
            }
          />
          <p
            className={
              item.price_change_percentage_24h > 0 ? "positive-change" : "negative-change"
            }
          >
            {item.price_change_24h.toFixed(4)}%
          </p>
        </span>
      </div>
    </div>
  );
};
