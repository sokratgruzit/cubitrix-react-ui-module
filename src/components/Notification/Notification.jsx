import "./Notification.css";
import { useState } from "react";
import { Dropdown } from "../Dropdown";

export const Notification = (props) => {
  let [readed, setReaded] = useState(false);

  return (
    <div>
      <div className="notification-container">
        <div className="notification-head">
          <div>Your Notification</div>
          <div className="notification-options">
            <Dropdown
            // data={data}
            // type={"dropdown"}
            // dropdown={"dropdown"}
            // onClick={hendlerClick}
            // active={active}
            />
            <svg
              width="4"
              height="18"
              viewBox="0 0 4 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-8.74228e-08 16C-3.93402e-08 17.1 0.9 18 2 18C3.1 18 4 17.1 4 16C4 14.9 3.1 14 2 14C0.9 14 -1.35505e-07 14.9 -8.74228e-08 16Z"
                fill="#3D5AFE"
              />
              <path
                d="M-8.74228e-08 2C-3.93402e-08 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 -1.35505e-07 2 -8.74228e-08C0.9 -3.93402e-08 -1.35505e-07 0.9 -8.74228e-08 2Z"
                fill="#3D5AFE"
              />
              <path
                d="M-8.74228e-08 9C-3.93402e-08 10.1 0.9 11 2 11C3.1 11 4 10.1 4 9C4 7.9 3.1 7 2 7C0.9 7 -1.35505e-07 7.9 -8.74228e-08 9Z"
                fill="#3D5AFE"
              />
            </svg>
          </div>
        </div>
        {props.data.map((item) => {
          return (
            <div className="notification-item" key={item.id}>
              <div
                onClick={props.onClick}
                className={`${"notification-inner"} ${"new-notification"}`}
              >
                <svg
                  className="new-notification-informat"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#3D5AFE" />
                </svg>
                <div className="notification-wraper">
                  <div className={`${"notification"} ${"readed"}`}>
                    {item.notification}
                  </div>
                  <div className="notification-time font-12">
                    Nov 23, 2022 at 09:21 AM
                  </div>
                </div>
              </div>
              <span className="separator"></span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
