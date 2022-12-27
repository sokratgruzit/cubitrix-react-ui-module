import './Button.css';

export const Button = ({ label, onClick }) => {
    return <div className={`button`} onClick={onClick}>{label}</div>;
};
