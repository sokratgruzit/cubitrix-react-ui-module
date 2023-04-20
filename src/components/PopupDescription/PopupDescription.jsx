import React from "react";

// styles
import "./PopupDescription.css";

export const PopupDescription = ({ data }) => {
  return (
    <div className={"popup-description-wrapper"}>
      {data.map((item, index) => (
        <div className={"popup-description-item"} key={index}>
          <div className={"popup-description-item__title"}>{item.title}</div>
          <div className={"popup-description-item__description"}>
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
};
