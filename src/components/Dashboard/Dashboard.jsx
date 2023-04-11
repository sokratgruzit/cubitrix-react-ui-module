import React, { useState, useEffect } from "react";

import { useMobileWidth } from "../../hooks/useMobileWidth";

import kacuna1 from "../../assets/img/dashboard/kacuna1.png";

import "./Dashboard.css";

import { Footer } from "../Footer";
import { DashboardHeader, Meditation, StartNow } from "./components";

export const Dashboard = ({ handleGetStarted }) => {
  const { width } = useMobileWidth();

  return (
    <main className="dashboard-main">
      <DashboardHeader />
      <Meditation />
      <StartNow />
      <Footer />
    </main>
  );
};
