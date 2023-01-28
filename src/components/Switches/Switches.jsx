import "./Switches.css";

export const Switches = ({ size, type, value, onChange }) => {
  return (
    <div className={`form-switch ${size} ${type}`}>
      <input type="checkbox" checked={value} onChange={onChange} />
      <div className="check">
        <i></i>
      </div>
    </div>
  );
};
