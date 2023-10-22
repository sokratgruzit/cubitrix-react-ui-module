import React, { useState, useEffect } from 'react';

// hooks
import { useMobileWidth } from '../../hooks/useMobileWidth';

// helpers
import { NavbarHelper } from './NavbarHelper';

// svg
import { Menu } from '../../assets/svgs';

// styles
import './Header.css';
import {Button} from "../Button";

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
  showSignIn
}) => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [animate, setAnimate] = useState(false);
  const { width } = useMobileWidth();

  useEffect(() => {
    setAnimate(true);
  }, []);

  let mobile = width <= 970;

  return (
    <div className={`header ${mobile && navbarActive ? 'header-active' : ''} ${animate ? 'animate' : ''}`}>
      <div className='modulesWrapper'>
        <div className='logoWrapper' onClick={onLogoClick}>
          {logoSvg}
          <h3>{title}</h3>
        </div>
        {!mobile && <NavbarHelper type={'navbar'} modules={modules} />}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {mobile && (
            <NavbarHelper
              type={'notification'}
              onClick={handleNotifications}
              sideBar={sideBar}
              sideBarOpen={sideBarOpen}
              modules={modules}
            />
          )}
          {mobile && (
            <NavbarHelper
              type={'connect'}
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
            <div className={`navbar-menu`} onClick={() => setNavbarActive(prev => !prev)}>
              <p className={`${navbarActive ? 'active' : ''} font-12`}>Close</p>
              <Menu active={navbarActive} />
            </div>
          )}
        </div>
      </div>
      <div className={`right ${navbarActive ? 'right-active' : ''}`}>
        {!mobile && (
          <NavbarHelper
            type={'notification'}
            onClick={handleNotifications}
            sideBar={sideBar}
            sideBarOpen={sideBarOpen}
            modules={modules}
          />
        )}
        {!mobile && (
          <NavbarHelper
            type={'connect'}
            onClick={handleConnect}
            account={account}
            verified={verified}
            initialRegister={initialRegister}
            setInitialRegister={setInitialRegister}
            loginWithEmail={loginWithEmail}
            loggedWithEmail={loggedWithEmail}
          />
        )}
        {mobile && <NavbarHelper type={'navbar'} modules={modules} />}
        {mobile && (
            <Button
                label={"Become Elite Member"}
                status={"warning"}
                element={"help-button"}
                icon={false}
                onClick={() => console.log()}
                customStyles={{width: '100%'}}
            />
        )}
      </div>
    </div>
  )
}
