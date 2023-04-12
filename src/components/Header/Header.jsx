import React, { useState, useEffect } from "react";

// hooks
import { useMobileWidth } from "../../hooks/useMobileWidth";

// helpers
import { NavbarHelper } from "./NavbarHelper";

// svg
import { Menu } from "../../assets/svgs";

// styles
import "./Header.css";

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
  amount,
}) => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [animate, setAnimate] = useState(false);
  const { width } = useMobileWidth();

  useEffect(() => {
    setAnimate(true);
  }, []);

  let mobile = width <= 970;

  return (
    <div
      className={`header ${mobile && navbarActive ? "header-active" : ""} ${
        animate ? "animate" : ""
      }`}
    >
      <div className='modulesWrapper'>
        <div className='logoWrapper'>
          {logoSvg}
          <h3>{title}</h3>
        </div>
        {!mobile && <NavbarHelper type={"navbar"} modules={modules} />}
        <div style={{ display: "flex", alignItems: "center" }}>
          {mobile && (
            <NavbarHelper
              type={"notification"}
              onClick={handleNotifications}
              sideBar={sideBar}
              sideBarOpen={sideBarOpen}
              modules={modules}
            />
          )}
          {mobile && !(width <= 440) && (
            <NavbarHelper
              type={"connect"}
              onClick={handleConnect}
              account={account}
              verified={verified}
            />
          )}
          {mobile && (
            <div
              className={`navbar-menu`}
              onClick={() => setNavbarActive((prev) => !prev)}
            >
              <p className={`${navbarActive ? "active" : ""} font-12`}>Close</p>
              <Menu active={navbarActive} />
            </div>
          )}
        </div>
      </div>
      <p className='util-token-amount'>{amount}</p>
      <div className={`right ${navbarActive ? "right-active" : ""}`}>
        {!mobile && (
          <NavbarHelper
            type={"notification"}
            onClick={handleNotifications}
            sideBar={sideBar}
            sideBarOpen={sideBarOpen}
            modules={modules}
          />
        )}
        {!mobile && (
          <NavbarHelper
            type={"connect"}
            onClick={handleConnect}
            account={account}
            verified={verified}
          />
        )}
        {mobile && <NavbarHelper type={"navbar"} modules={modules} />}
        {width <= 440 && (
          <NavbarHelper
            type={"connect"}
            onClick={handleConnect}
            account={account}
            verified={verified}
          />
        )}
      </div>
    </div>
  );
};
