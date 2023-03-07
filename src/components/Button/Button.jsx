import "./Button.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Button = (props) => {
  const [expand, setExpand] = useState(null);
  const openExpand = (id) => {
    if (id !== expand) {
      setExpand(id);
    } else {
      setExpand(null);
    }
  };
  let element = null;
  if (props.element === "button") {
    element = (
      <div
        className={`btn ${props.size} ${props.type} ${props.arrow} ${
          props.labelSetting
        } ${props.disabled === true ? "disabled" : ""}`}
        onClick={props.onClick}
        style={props.customStyles}
        disabled={props.disabled}
      >
        <svg
          width="6"
          height="12"
          viewBox="0 0 6 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="arrowL"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.7972 0.202772C6.06756 0.473135 6.06756 0.91148 5.7972 1.18184L1.55735 5.42169C1.327 5.65204 1.327 6.03306 1.55735 6.26341L5.7972 10.5033C6.06756 10.7736 6.06756 11.212 5.7972 11.4823C5.52683 11.7527 5.08849 11.7527 4.81813 11.4823L0.57828 7.24248C-0.192801 6.4714 -0.192801 5.2137 0.57828 4.44262L4.81813 0.202772C5.08849 -0.0675907 5.52683 -0.0675907 5.7972 0.202772Z"
            fill="white"
          />
        </svg>
        <span>{props.label}</span>
        <svg
          width="6"
          height="12"
          viewBox="0 0 6 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="arrowR"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.202772 0.202772C-0.0675907 0.473135 -0.0675907 0.91148 0.202772 1.18184L4.44262 5.42169C4.67297 5.65204 4.67297 6.03306 4.44262 6.26341L0.202772 10.5033C-0.0675907 10.7736 -0.0675907 11.212 0.202772 11.4823C0.473135 11.7527 0.91148 11.7527 1.18184 11.4823L5.42169 7.24248C6.19277 6.4714 6.19277 5.2137 5.42169 4.44262L1.18184 0.202772C0.91148 -0.0675907 0.473135 -0.0675907 0.202772 0.202772Z"
            fill="white"
          />
        </svg>
      </div>
    );
  }
  if (props.element === "image-button") {
    element = (
      <div className={`img-btn`} onClick={props.onClick} style={props.customStyles}>
        {props.image ? (
          <div className={`img`}>
            <img src={props.image} alt="button-image" />
          </div>
        ) : (
          <div className={`connect-svg`}>{props.svg}</div>
        )}
        <span>{props.label}</span>
        <svg
          className={`arrow-svg`}
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.33331 1.70095L5.16095 5.52859C5.61299 5.98063 5.61299 6.72032 5.16095 7.17236L1.33331 11"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }
  if (props.element === "side-button") {
    element = (
      <div className={`side-btn`} onClick={props.onClick} style={props.customStyles}>
        <div className={`side-btn-icon`}>
          <div className={`side-btn-icon`}>{props.svg}</div>
        </div>
        <span>{props.label}</span>
        <div className={`side-btn-note`}>
          {props.warning && (
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.19567 15.7842L8.4861 2.00206C8.63173 1.72683 8.84963 1.49651 9.11638 1.33586C9.38312 1.17522 9.68861 1.09033 10 1.09033C10.3114 1.09033 10.6169 1.17522 10.8836 1.33586C11.1504 1.49651 11.3683 1.72683 11.5139 2.00206L18.8043 15.7842C18.9412 16.0443 19.0083 16.3354 18.9992 16.6292C18.9901 16.9229 18.905 17.2093 18.7523 17.4604C18.5996 17.7115 18.3845 17.9188 18.1278 18.062C17.8712 18.2052 17.5819 18.2795 17.288 18.2777H2.70875C2.41514 18.279 2.1262 18.2042 1.87003 18.0608C1.61385 17.9173 1.39916 17.71 1.24684 17.459C1.09453 17.208 1.00976 16.9218 1.00079 16.6283C0.991827 16.3349 1.05896 16.0441 1.19567 15.7842V15.7842Z"
                stroke="#FFA726"
                strokeWidth="1.2"
                strokeMiterlimit="10"
                strokeLinecap="square"
              />
              <path
                d="M9.99854 6.82129V11.7312"
                stroke="#FFA726"
                strokeWidth="1.2"
                strokeMiterlimit="10"
                strokeLinecap="square"
              />
              <path
                d="M9.99848 15.8226C10.6764 15.8226 11.226 15.2731 11.226 14.5952C11.226 13.9172 10.6764 13.3677 9.99848 13.3677C9.32056 13.3677 8.771 13.9172 8.771 14.5952C8.771 15.2731 9.32056 15.8226 9.99848 15.8226Z"
                fill="#FFA726"
              />
            </svg>
          )}
        </div>
        {props?.subMenu?.length}
      </div>
    );
  }
  if (props.element === "side-admin-button" && props?.subMenu?.length > 0) {
    element = (
      <div className={`side-admin-button-container`}>
        <div
          onClick={() => {
            openExpand(props.id);
          }}
          className={`side-admin-button open ${props.id === expand ? "active" : ""}`}
          style={props.customStyles}
        >
          <div className={`side-btn-icon`}>{props.svg}</div>
          <span className="font-16">{props.label}</span>
          <svg
            className={`drop-arrow`}
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.83102 5.33102C9.60572 5.55633 9.24043 5.55633 9.01513 5.33102L5.48193 1.79782C5.28996 1.60586 4.97245 1.60586 4.78049 1.79782L1.24729 5.33102C1.02198 5.55633 0.656695 5.55633 0.431394 5.33102C0.206091 5.10572 0.206091 4.74043 0.431394 4.51513L3.9646 0.981926C4.60717 0.339358 5.65525 0.339358 6.29782 0.981926L9.83102 4.51513C10.0563 4.74043 10.0563 5.10572 9.83102 5.33102Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
        <div className={`side-admin-expand ${props.id === expand ? "active" : ""}`}>
          {props?.subMenu?.map((item, index) => {
            return (
              <Link
                to={props.route + item.route}
                key={index}
                className={`side-admin-button-expand font-14 ${
                  props.subMenuActive ? "subMenu-active" : ""
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
  if (props.element === "side-admin-button" && props?.subMenu?.length === 0) {
    element = (
      <Link
        to={props.route}
        className={`side-admin-button open ${props.open ? "open" : ""} ${
          props.active ? "active" : ""
        }`}
        style={props.customStyles}
      >
        <div className={`side-btn-icon`}>{props.svg}</div>
        <div className={`side-btn-text`}>
          <span className="font-16">{props.label}</span>
        </div>
      </Link>
    );
  }

  if (props.element === 'calculator-button') {
    element = (
      <div
        className={`calculator-button ${props.active && 'calculator-button-active'}`}
        style={props.customStyles}
        onClick={props.onClick}
      >
        <span>{props.label}</span>
      </div>
    );
  }

  if (props.element === 'staking-button') {
    element = (
      <div
        className={`staking-button ${props.active && 'staking-button-active'} ${props.disabled === true ? "disabled" : ""}`}
        style={props.customStyles}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props?.icon}
        <span>{props.label}</span>
      </div>
    );
  }
  
  if (props.element === 'referral-button') {
    element = (
      <div
        className={`referral-button ${props.active && 'referral-button-active'} ${props.disabled === true ? "disabled" : ""}`}
        style={props.customStyles}
        onClick={props.onClick}
        disabled={props.disabled}

      >
        {props?.icon}
        <span>{props.label}</span>
      </div>
    );
  }
  return element;
};
