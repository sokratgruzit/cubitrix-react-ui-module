import "./Button.css";

export const Button = (props) => {
  return (
    <div
      className={`btn ${props.size} ${props.type} ${props.arrow} ${props.labelSetting}`}
      onClick={props.onClick}
      style={props.customStyles}
    >
      <svg
        width="6"
        height="12"
        viewBox="0 0 6 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="arrowL"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.7972 0.202772C6.06756 0.473135 6.06756 0.91148 5.7972 1.18184L1.55735 5.42169C1.327 5.65204 1.327 6.03306 1.55735 6.26341L5.7972 10.5033C6.06756 10.7736 6.06756 11.212 5.7972 11.4823C5.52683 11.7527 5.08849 11.7527 4.81813 11.4823L0.57828 7.24248C-0.192801 6.4714 -0.192801 5.2137 0.57828 4.44262L4.81813 0.202772C5.08849 -0.0675907 5.52683 -0.0675907 5.7972 0.202772Z"
          fill="white"
        />
      </svg>
      <span>{props.label}</span>
      <svg
        width="6"
        height="12"
        viewBox="0 0 6 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="arrowR"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.202772 0.202772C-0.0675907 0.473135 -0.0675907 0.91148 0.202772 1.18184L4.44262 5.42169C4.67297 5.65204 4.67297 6.03306 4.44262 6.26341L0.202772 10.5033C-0.0675907 10.7736 -0.0675907 11.212 0.202772 11.4823C0.473135 11.7527 0.91148 11.7527 1.18184 11.4823L5.42169 7.24248C6.19277 6.4714 6.19277 5.2137 5.42169 4.44262L1.18184 0.202772C0.91148 -0.0675907 0.473135 -0.0675907 0.202772 0.202772Z"
          fill="white"
        />
      </svg>
    </div>
  );
};
