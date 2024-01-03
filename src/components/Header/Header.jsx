import React, { useState, useEffect, useRef } from "react";

import { useMobileWidth } from "../../hooks/useMobileWidth";

import { NavbarHelper } from "./NavbarHelper";
import { Button } from "../Button";
import { TradeBar } from "./TradeBar";

import { Menu } from "../../assets/svgs";

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
  onLogoClick,
  initialRegister,
  setInitialRegister,
  loginWithEmail,
  loggedWithEmail,
  showSignIn,
  A1Price,
  tradePriceData,
  handleShowBalance,
  showBalance,
  setShowBalance,
  location,
}) => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [animate, setAnimate] = useState(false);
  const { width } = useMobileWidth();

  const headerRef = useRef(null);

  useEffect(() => {
    setAnimate(true);

    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setShowBalance(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowBalance]);

  let mobile = width <= 970;

  return (
    <div
      ref={headerRef}
      className={`header ${mobile && navbarActive ? "header-active" : ""} ${
        animate ? "animate" : ""
      }`}
    >
      <div className="modulesWrapper">
        <div className="logoWrapper" onClick={onLogoClick}>
          {logoSvg}
          <h3>{title}</h3>
        </div>
        {!mobile && <NavbarHelper type={"navbar"} modules={modules} />}
        {location.pathname === "/trade" && !mobile ? (
          <>
            <TradeBar
              tradePriceData={tradePriceData}
              showBalance={showBalance}
              setShowBalance={setShowBalance}
            />
            <div
              onClick={() => handleShowBalance()}
              className="tabBarIcon"
            ></div>
          </>
        ) : null}
        <div className="a1-price">
          <svg
            width="61"
            height="62"
            viewBox="0 0 61 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M46.0358 6.91431L0.497925 53.3785H7.84852H14.7808H26.4939L29.3027 43.488H24.1633L48.8744 17.3426L38.8346 53.3785H49.3226L60.4979 6.91431H46.0358Z"
              fill="white"
            ></path>
          </svg>
          A1 Price - {A1Price} $
        </div>
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
          {mobile && (
            <NavbarHelper
              type={"connect"}
              onClick={handleConnect}
              account={account}
              verified={verified}
              initialRegister={initialRegister}
              setInitialRegister={setInitialRegister}
              loginWithEmail={loginWithEmail}
              loggedWithEmail={loggedWithEmail}
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
            initialRegister={initialRegister}
            setInitialRegister={setInitialRegister}
            loginWithEmail={loginWithEmail}
            loggedWithEmail={loggedWithEmail}
          />
        )}
        {mobile && <NavbarHelper type={"navbar"} modules={modules} />}
        {mobile && (
          <Button
            label={"Become Elite Member"}
            status={"warning"}
            element={"help-button"}
            icon={false}
            onClick={() => console.log()}
            customStyles={{ width: "100%" }}
          />
        )}
      </div>
    </div>
  );
};
