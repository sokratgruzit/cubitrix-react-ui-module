import "./Tabs.css";

export const Tabs = (props) => {
  return (
    <div className={`${props.type}`} onClick={props.onClick} style={props.customStyles}>
      {props.label}
    </div>
  );
};
