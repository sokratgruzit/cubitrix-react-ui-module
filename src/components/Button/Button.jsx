export const Button = props => {
    return <div className={`button`} onClick={props.onClick}>{props.label}</div>;
};
