import "./Visual.css";
import React from "react";

export const Visual = (props) => {
  let element = null;
  if (props.element === "popup-header") {
    element = (
      <div className={`popup-header`} style={props.customStyles}>
        <p className={`font-16 goBackWrapper`}>
          {props.goBack && (
            <span onClick={props.goBack} className="goBackSvg">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.57 5.93018L3.5 12.0002L9.57 18.0702"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.4999 12H3.66992"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          )}
          {props.label}
        </p>
        <svg
          onClick={props.onClick}
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 29.1668C22.7916 29.1668 29.1666 22.7918 29.1666 15.0002C29.1666 7.2085 22.7916 0.833496 15 0.833496C7.20831 0.833496 0.833313 7.2085 0.833313 15.0002C0.833313 22.7918 7.20831 29.1668 15 29.1668Z"
            stroke="#6A6D76"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.9908 19.0095L19.0091 10.9912"
            stroke="#6A6D76"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.0091 19.0095L10.9908 10.9912"
            stroke="#6A6D76"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }
  if (props.element === "delimiter") {
    element = (
      <div className={`delimiter`} style={props.customStyles}>
        <div className={`line line1`}></div>
        <span className={`font-16`}>{props.label}</span>
        <div className={`line line2`}></div>
      </div>
    );
  }
  if (props.element === "copy-address") {
    element = (
      <div className={`copy-address`} style={props.customStyles} onClick={props.onClick}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3334 10.7498V14.2498C13.3334 17.1665 12.1667 18.3332 9.25008 18.3332H5.75008C2.83341 18.3332 1.66675 17.1665 1.66675 14.2498V10.7498C1.66675 7.83317 2.83341 6.6665 5.75008 6.6665H9.25008C12.1667 6.6665 13.3334 7.83317 13.3334 10.7498Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.3334 5.74984V9.24984C18.3334 12.1665 17.1667 13.3332 14.2501 13.3332H13.3334V10.7498C13.3334 7.83317 12.1667 6.6665 9.25008 6.6665H6.66675V5.74984C6.66675 2.83317 7.83341 1.6665 10.7501 1.6665H14.2501C17.1667 1.6665 18.3334 2.83317 18.3334 5.74984Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className={`copy-address-text`}>{props.label}</div>
      </div>
    );
  }
  if (props.element === 'table-header') {
    element = (
      <div style={props.customStyles} className="tb-head">
        <div className="left-panel">
          <h1 className={props.fontSize}>{props.label}</h1>
          {props.description && <p className="font-14">{props.description}</p>}
        </div>
        <div className="right-panel">
          {props.buttons}
        </div>
      </div>
    )
  }

  return element;
};
