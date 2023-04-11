import React from "react";
import { Link } from "react-router-dom";
import "./Meditation.css";

export const InfoItem = ({ title, amount, link, linkTitle }) => {
  return (
    <div className="meditation-item">
      <h3 data-aos="fade-up" data-aos-delay="20">
        {title}
      </h3>
      <p data-aos="fade-up" data-aos-delay="20">
        {amount}
      </p>
      <Link to={`/${link}`} data-aos="fade-up" data-aos-delay="20">
        {linkTitle}
      </Link>
    </div>
  );
};
