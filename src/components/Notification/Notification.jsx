import "./Notification.css";
import { MoreButton } from "../MoreButton/MoreButton";

export const Notification = (props) => {

  return (
    <div>
      <div className="notification-container">
        <div className="notification-head">
          <div>Your Notification</div>
          <MoreButton  dropdownData={props.dropdownData} />
        </div>
        {props.data.map((item) => {
          return (
            <div className="notification-item" key={item.id}>
              <div className={`${"notification-inner"} ${"new-notification"}`}>
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
