import "./Tabs.css";

export const Tabs = (props) => {
  return (
    <div className={`${props.type}`} onClick={props.onClick}>
      {props.label}
    </div>
  );
};
