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
            border: "2px solid #202431",
            borderBottom: "none",
            width: "100%",
            background: "#141726",
            borderBottomLeftRadius: "0",
            borderBottomRightRadius: "0",
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
          }}
        />
        {props.body}
      </div>
    </div>
  );
};
