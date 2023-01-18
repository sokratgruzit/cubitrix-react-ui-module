import "./Button.css";
import React from "react";

export const Button = (props) => {
  let element = null;
  if (props.element === "button") {
    element = (
      <div
        className={`btn ${props.size} ${props.type} ${props.arrow} ${props.labelSetting}`}
        onClick={props.onClick}
        style={props.customStyles}
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
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 6.59163V11.4C1.5 13.1666 1.5 13.1666 3.16667 14.2916L7.75 16.9416C8.44167 17.3416 9.56667 17.3416 10.25 16.9416L14.8333 14.2916C16.5 13.1666 16.5 13.1666 16.5 11.4083V6.59163C16.5 4.8333 16.5 4.8333 14.8333 3.7083L10.25 1.0583C9.56667 0.658301 8.44167 0.658301 7.75 1.0583L3.16667 3.7083C1.5 4.8333 1.5 4.8333 1.5 6.59163Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 11.5C9.66304 11.5 10.2989 11.2366 10.7678 10.7677C11.2366 10.2989 11.5 9.66301 11.5 8.99997C11.5 8.33693 11.2366 7.70104 10.7678 7.2322C10.2989 6.76336 9.66304 6.49997 9 6.49997C8.33696 6.49997 7.70107 6.76336 7.23223 7.2322C6.76339 7.70104 6.5 8.33693 6.5 8.99997C6.5 9.66301 6.76339 10.2989 7.23223 10.7677C7.70107 11.2366 8.33696 11.5 9 11.5Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span>{props.label}</span>
        <div className={`side-btn-note`}>
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
        </div>
      </div>
    );
  }
  return element;
};
