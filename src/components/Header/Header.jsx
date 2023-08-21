import React, { useState, useEffect } from 'react';

// hooks
import { useMobileWidth } from '../../hooks/useMobileWidth';

// helpers
import { NavbarHelper } from './NavbarHelper';
import { SignIn } from '../Auth/SignIn/SignIn';

// svg
import { Menu } from '../../assets/svgs';

// styles
import './Header.css';

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
      {showSignIn && <div className='signInContainer'>
        <SignIn
          onClick={(e) => console.log(e)}
          sideBarClose={() => loginWithEmail(false)}
          // goBack={() => console.log("go back")}
          signInState={{ loading: true, error: false }}
          otpEnabled={false}
          otpState={{ loading: false, error: "" }}
          handleTFA={(e) => console.log(e)}
          resetPasswordState={{
            loading: false,
            error: "wrong ",
            success: "success",
          }}
          handleResetPassword={(e) => console.log(e)}
        />
      </div>}
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
          {mobile && !(width <= 440) && (
            <NavbarHelper
              type={'connect'}
              onClick={handleConnect}
              account={account}
              verified={verified}
              initialRegister={initialRegister}
              setInitialRegister={setInitialRegister}
              loginWithEmail={loginWithEmail}
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
          />
        )}
        {mobile && <NavbarHelper type={'navbar'} modules={modules} />}
        {width <= 440 && (
          <NavbarHelper
            type={'connect'}
            onClick={handleConnect}
            account={account}
            verified={verified}
            initialRegister={initialRegister}
            setInitialRegister={setInitialRegister}
            loginWithEmail={loginWithEmail}
          />
        )}
      </div>
    </div>
  )
}
