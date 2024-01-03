import React, { useState } from "react";

import ArrowRightSvg from "../../assets/svgs/ArrowRight";

import "./TradeHeaderExtension.css";
import { is } from "dom7";

const TradeHeaderExtension = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const expandFunction = () => {
    setIsExpanded(!isExpanded);
  };

  console.log(isExpanded, "isExpanded");

  return (
    <div
      className="treade-extension-main-wrapper"
      style={{ maxWidth: !isExpanded ? "1000px" : "300px" }}
    >
      <div
        onClick={expandFunction}
        className="arrowSvgWrapper"
        style={{
          transform: isExpanded ? "rotateY(180deg)" : "rotateY(0)",
        }}
      >
        <ArrowRightSvg />
      </div>
      <div className="trade-header-extension">
        {data.map((item) => (
          <div key={item.id} className="trade-header-extension__item">
            <div className="trade-header-extension__item-name">{item.name}</div>
            <div className="trade-header-extension__item-username">
              {item.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradeHeaderExtension;
