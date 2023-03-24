import React, { useState } from "react";

import "./TopCoinCard.css";

export const TopCoinCard = ({ item }) => {
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
        chart
      </div>
      <div className="top-coin-financial">
        <p>${item.current_price}</p>
        <p>- 0.18%</p>
      </div>
    </div>
  );
};
