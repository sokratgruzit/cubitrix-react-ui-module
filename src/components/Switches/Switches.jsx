import "./Switches.css";

export const Switches = ({ size, type, value, onChange, customStyles }) => {
  return (
    <div className={`form-switch ${size} ${type}`} style={customStyles}>
      <input type="checkbox" checked={value} onChange={onChange} />
      <div className="check">
        <i></i>
      </div>
    </div>
  );
};
