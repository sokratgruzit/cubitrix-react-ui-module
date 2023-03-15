import React from "react";
import { NavLink } from "react-router-dom";

// svg
import {
  Notifications,
  MetaMask,
  Extensions,
  Dashboard,
  Trade,
  Loan,
  Staking,
  Warning,
  Referral,
} from "../../assets/svgs";

// components
import { Button } from "../Button";

export const NavbarHelper = ({
  type,
  sideBar,
  sideBarOpen,
  verified,
  account,
  handleClick,
  modules,
}) => {
  let element = null;

  if (type === "navbar") {
    element = (
      <>
        <NavLink
          className={`${location.pathname === "/" && "active"} link`}
          to="/"
        >
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
        {modules.referral === "true" && (
          <NavLink
            className={`${location.pathname === "/referral" && "active"} link`}
            to="/referral"
          >
            <Referral className="svg" />
            Referral
          </NavLink>
        )}
        {modules.staking === "true" && (
          <NavLink
            className={`${location.pathname === "/staking" && "active"} link`}
            to="/staking"
          >
            <Staking className="svg" />
            Staking
          </NavLink>
        )}
        <NavLink
          className={`${location.pathname === "/extensions" && "active"} link`}
          to="/extensions"
        >
          <Extensions className="svg" />
          Extensions
        </NavLink>
      </>
    );
  }

  if (type === "notification") {
    element = (
      <>
        {modules.notify === "true" && (
          <span
            onClick={handleClick}
            className={`${
              sideBar === "notifications" && sideBarOpen && "activeNotify"
            } notify`}
          >
            <Notifications className="notificationSvg" />
          </span>
        )}
      </>
    );
  }

  if (type === "connect") {
    element = (
      <div className={`connect`}>
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
            onClick={handleClick}
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
              onClick={handleClick}
              type="btn-primary"
              size="btn-sm"
            />
          </>
        )}
      </div>
    );
  }
  return element;
};
