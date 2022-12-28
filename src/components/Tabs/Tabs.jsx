import "./Tabs.css";

export const Tabs = (props) => {
  return (
    <div className={`two-component-tabs ${props.type}`} onClick={props.onClick}>
      {props.label}
    </div>
  );
};
