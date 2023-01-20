import "./SideBar.css";
import React from "react";

export const SideBar = ({ open, children }) => {
  return <div className={`wrapper ${open ? "side-open" : ""}`}>{children}</div>;
};
