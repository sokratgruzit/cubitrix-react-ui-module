import "./Dropdown.css";

export const Dropdown = (props) => {
  let element = "";
  if (props.type === "country") {
    element = (
      <div className={props.dropdown}>
        {props.countryData.map((item, index) => {
          return (
            <div key={index}>
              <p>
                <img src={`${item.image}`} alt="country" />
                {item.title}
                {item.numbering}
              </p>
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
            <div className="lastChild" key={index}>
              <h1 className="titles">{item.title}</h1>
              {item.list.map((item, index) => {
                return (
                  <div key={index} className={props.dropdownItem}>
                    {/* <p className={props.active === `${item.id}` ? "border" : ""}></p> */}
                    <span className={item.id < 3 ? "filter" : ""}>
                      {item.svg}
                    </span>
                    <div className={props.containerCheck}>
                      <p
                        id={item.id}
                        onClick={props.onClick}
                        className={`${
                          props.active === `${item.id}` ? "rightLine" : ""
                        }`}
                      >
                        {item.title}
                      </p>
                      {item.togle === "true" && (
                        <div className="checkboxContainer">
                          <input type="checkbox" value="false" />
                          <div className="checkbox">
                            <i></i>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
  return element;
};
