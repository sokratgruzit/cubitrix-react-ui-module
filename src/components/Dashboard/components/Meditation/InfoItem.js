import React from "react";
import { Link } from "react-router-dom";
import { useFade } from "../../../../hooks/useFade";
import "./Meditation.css";

export const InfoItem = ({ title, amount, action, linkTitle }) => {
  useFade("up", [".fade-up"]);
  return (
    <div className="meditation-item">
      <h3 className="fade-up">{title}</h3>
      <p className="fade-up">{amount}</p>
      <span className="fade-up">
        <span onClick={() => action(linkTitle)}>{linkTitle}</span>
      </span>
    </div>
  );
};
