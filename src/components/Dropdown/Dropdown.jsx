import { Switches } from "../Switches";
import "./Dropdown.css";

export const Dropdown = (props) => {
  let element = '';
  if (props.type === 'country') {
    element =
        <div className="dropdown-country">
          <h1 className="dropdown-toggle">
            Select Country
          </h1>
          {props.countryData.map((item, index) => {
            return (
              <div key={index} className="dropdown-menu-country">
                <div className="dropdown-item-country">
                  <img src={require(`../../assets/img/country/${item.image}`)} alt="country" />
                  <p>{item.title}</p>
                  <p>{item.numbering}</p>
                </div>
              </div>
            )
          })}
        </div>
  }
  if (props.type === 'dropdown') {
    element =
        <div className={` active ${props.dropdown}`}>
          {props.data.map((item, index) => {
            return (
                <div key={index}>
                  <h1 className="dropdown-toggle" onClick={() => props.changeHandler(item.title)}>
                    {item.title}
                  </h1>
                  {item.list.map((item, index) => {
                    return (
                        <div key={index} className="dropdown-item">
                          {/* <p className={props.active === `${item.id}` ? "border" : ""}></p> */}
                          <span className={item.id < 3 ? "filter" : ''}>
                                            {item.svg}
                                        </span>
                          <div> 
                            <p id={item.id} className={`${props.active === `${item.id}` ? "left-line" : ''}`}>
                              {item.title}
                            </p>
                            {item.togle === 'true' &&
                                <Switches />
                            }
                          </div>
                        </div>
                    )
                  })}
                </div>
            )
          })}
        </div>
  }
  return element;
}
