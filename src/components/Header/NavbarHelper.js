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
  onClick,
  modules,
  initialRegister,
  setInitialRegister,
  loginWithEmail,
  loggedWithEmail,
}) => {
  let element = null;

  if (type === "navbar") {
    element = (
      <>
        {modules.dashboard === "true" && (
          <NavLink
            className={`${location.pathname === "/dashboard" && "active"} link`}
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        )}

        {modules.trade === "true" && (
          <NavLink
            className={`${location.pathname === "/trade" && "active"} link
            `}
            to="/trade"
          >
            Trade
          </NavLink>
        )}
        {modules.loan === "true" && (
          <NavLink
            className={`${location.pathname === "/loan" && "active"} link`}
            to="/loan"
          >
            Loan
          </NavLink>
        )}
        {modules.referral === "true" && (
          <NavLink
            className={`${location.pathname === "/referral" && "active"} link`}
            to="/referral"
          >
            Referral
          </NavLink>
        )}
        {modules.staking === "true" && (
          <NavLink
            className={`${location.pathname === "/staking" && "active"} link`}
            to="/staking"
          >
            Staking
          </NavLink>
        )}
        <NavLink
          className={`${location.pathname === "/extensions" && "active"} link`}
          to="/extensions"
        >
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
            onClick={onClick}
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
                  <MetaMask className="MetaMask" width="24" />
                ) : (
                  <Warning className="Warning" />
                )}
                <p className="address">{account}</p>
              </span>
            }
            onClick={initialRegister ? () => setInitialRegister(true) : onClick}
            type="btn-secondary"
            element="button"
            size="btn-sm"
            arrow="arrow-right"
          />
        ) : (
          <div className="withEmailContainer">
            {!loggedWithEmail && (
              <Button
                element="button"
                label="Login"
                onClick={() => loginWithEmail(true)}
                type="btn-secondary"
                size="btn-sm"
                customStyles={{ marginRight: "10px" }}
              />
            )}
            <Button
              element="button"
              label={loggedWithEmail ? "My Account" : "Connect"}
              onClick={
                initialRegister && !loggedWithEmail
                  ? () => setInitialRegister(true)
                  : onClick
              }
              type="btn-primary"
              size="btn-sm"
              customStyles={{ whiteSpace: "nowrap" }}
            />
          </div>
        )}
      </div>
    );
  }
  return element;
};
