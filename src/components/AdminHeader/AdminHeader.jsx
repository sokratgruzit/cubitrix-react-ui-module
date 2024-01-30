import { useState } from "react";

import { Dropdown } from "../Dropdown";

import "./AdminHeader.css";

export const AdminHeader = (props) => {
  const [active, setActive] = useState(false);

  const activeHandler = () => {
    if (!active) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <div className={`admin-header`}>
      <div className={`admin-logo-container`}>
        <div className={`admin-logo animate-scale ${props.animate ? "animate" : ""}`}>
          {props.headSvg}
        </div>
        <h1 className={`admin-logo animate-translateX ${props.animate ? "animate" : ""}`}>
          {props?.title ?? "AONE"}
        </h1>
      </div>
      <div className={`user-input-container`}>
        <div onClick={activeHandler} className={`user-input`}>
          <img src={props.userImageUrl} />
          <p>{props.username}</p>
          <svg
            className={`${active ? "admin-arrow-rotate" : ""} ${"admin-arrow"}`}
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 10L10.5303 12.4697C10.2386 12.7614 9.76136 12.7614 9.4697 12.4697L7 10"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className={`${"admin-hidden"} ${active ? "admin-select" : ""}`}>
            <Dropdown
              data={props.authsDropdown}
              type={"dropdown"}
              dropdown={"dropdown"}
              active={active}
              customStyles={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
