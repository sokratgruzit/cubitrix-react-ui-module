import React from "react";
import "./LoadingScreen.css"; // Assuming you have a CSS file for styles
import LogoSvg from "../../assets/svgs/LogoSvg";

export const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <div className="top-content">
        <LogoSvg />
        <h1 className="complend_title">AONE</h1>
      </div>
      <div className="loading-screen-wrap">
        <div className="loading-screen-container" />
      </div>
    </div>
  );
};
