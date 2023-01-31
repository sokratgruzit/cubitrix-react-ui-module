import "./Popup.css";
import { Visual } from "../Visual";

export const Popup = (props) => {
  return (
    <div className="popup-bg">
      <div className="popup-wraper">
        <Visual
          label={props.label}
          element={"popup-header"}
          customStyles={{
            width: "100%",
          }}
        />
        {props.body}
      </div>
    </div>
  );
};
