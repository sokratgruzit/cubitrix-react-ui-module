import React from "react";
import {
  Notifications,
  MetaMask,
  Extensions,
  Dashboard,
  Trade,
  Loan,
  Staking,
  Warning,
} from "../../assets/svgs";
import { Button } from "../Button";
import "./Header.css";

import { NavLink } from "react-router-dom";

export const Header = ({
  modules,
  account,
  sideBar,
  sideBarOpen,
  handleConnect,
  handleNotifications,
  title,
  logoSvg,
  verified,
}) => {
  return (
    <div className="header">
      <div className="modulesWrapper">
        <div className="logoWrapper">
          {logoSvg}
          <h3>{title}</h3>
        </div>
        <NavLink className={`${location.pathname === "/" && "active"} link`} to="/">
          <Dashboard className="svg" /> Dashboard
        </NavLink>
        {modules.trade === "true" && (
          <NavLink
            className={`${location.pathname === "/trade" && "active"} link
            `}
            to="/trade"
          >
            <Trade className="svg" /> Trade
          </NavLink>
        )}
        {modules.loan === "true" && (
          <NavLink
            className={`${location.pathname === "/loan" && "active"} link`}
            to="/loan"
          >
            <Loan className="svg" />
            Loan
          </NavLink>
        )}
        {modules.referal === "true" && (
          <NavLink
            className={`${location.pathname === "/referal" && "active"} link`}
            to="/referal"
          >
            referal
          </NavLink>
        )}
        {modules.staking === "true" && (
          <NavLink
            className={`${location.pathname === "/staking" && "active"} link`}
            to="/staking"
          >
            <Staking className="svg" />
            staking
          </NavLink>
        )}
        <NavLink
          className={`${location.pathname === "/extensions" && "active"} link`}
          to="/extensions"
        >
          <Extensions className="svg" />
          Extensions
        </NavLink>
      </div>
      <div className="right">
        {modules.notify === "true" && (
          <span
            onClick={handleNotifications}
            className={`${
              sideBar === "notifications" && sideBarOpen && "activeNotify"
            } notify`}
          >
            <Notifications className="notificationSvg" />
          </span>
        )}
        <div className="connect">
          {account ? (
            <Button
              label={
                <span className="addressWrapper">
                  {verified ? (
                    <MetaMask className="MetaMask" />
                  ) : (
                    <Warning className="Warning" />
                  )}
                  <p className="address">{account}</p>
                </span>
              }
              onClick={handleConnect}
              type="btn-secondary"
              element="button"
              size="btn-sm"
              arrow="arrow-right"
            />
          ) : (
            <>
              <Button
                element="button"
                label="Connect"
                onClick={handleConnect}
                type="btn-primary"
                size="btn-sm"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
