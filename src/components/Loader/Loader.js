import React from "react";
import "./Loader.css";

export const Loader = ({ loading }) => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <div style={{ color: "rgb(106, 109, 118)" }}>{loading}</div>
    </div>
  );
};
