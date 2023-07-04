import React from "react";
import { Link } from "react-router-dom";
import { useFade } from "../../../../hooks/useFade";
import "./Meditation.css";

export const InfoItem = ({ title, color, boxShadow, className }) => {
  useFade("up", [".fade-up"]);
  return (
    <div
      className={`meditation-item ${className}`}
      style={{ border: `1px solid ${color}`, color, boxShadow }}
    >
      {title}
    </div>
  );
};
