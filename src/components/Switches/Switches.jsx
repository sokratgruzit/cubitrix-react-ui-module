import "./Switches.css";

export const Switches = (props) => {
    return (
        <div className={`form-switch ${props.size} ${props.type}`}>
            <input type="checkbox" value="false" />
            <div className="check">
                <i></i>
            </div>
        </div>
    )
};
