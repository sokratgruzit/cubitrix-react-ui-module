import React from "react";
import { Link } from "react-router-dom";
import "./Meditation.css";

export const InfoItem = ({ title, amount, link, linkTitle }) => {
  return (
    <div className="meditation-item">
      <h3>{title}</h3>
      <p>{amount}</p>
      <Link to={`/${link}`}>{linkTitle}</Link>
    </div>
  );
};
