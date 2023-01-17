import { Switches } from "../Switches";
import "./Dropdown.css";
import { Input } from "../Input";
export const Dropdown = (props) => {
  let element = "";
  if (props.type === "country") {
    element = (
      <div className={props.dropdownCountry}>
        <h1 className="dropdown-toggle">Select Country</h1>
        {props.countryData.map((item, index) => {
          return (
            <div key={index} className="dropdown-menu-country">
              <div className="dropdown-item-country">
                <img src={`${item.image}`} alt="country" />
                <p>{item.title}</p>
                <p>{item.numbering}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  if (props.type === "dropdown") {
    element = (
      <div className={props.dropdown}>
        {props.data.map((item, index) => {
          return (
            <div key={index}>
              <h1 className="dropdown-toggle">{item.title}</h1>
              {item.list.map((item, index) => {
                return (
                  <div key={index} className="dropdown-item">
                    {/* <p className={props.active === `${item.id}` ? "border" : ""}></p> */}
                    <span className={item.id < 3 ? "filter" : ""}>
                      {item.svg}
                    </span>
                    <div>
                      <p
                        id={item.id}
                        onClick={props.hendlerClick}
                        className={`${
                          props.active === `${item.id}` ? "rightLine" : ""
                        }`}
                      >
                        {item.title}
                      </p>
                      {item.togle === "true" && <Switches />}
                    </div>
                  </div>
                );
              })}
              <Input type={"default"} icon={false} placeholder={"your text"} />
            </div>
          );
        })}
      </div>
    );
  }
  return element;
};
