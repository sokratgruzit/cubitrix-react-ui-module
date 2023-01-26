import { Switches } from "../Switches";
import "./Dropdown.css";

export const Dropdown = (props) => {
    let element = '';
    if (props.type === 'country') {
        element =
            <div className={`dropdown-country ${props.animate == true ? 'animate' : ''}`}>
                <h1 className="dropdown-toggle">
                    {props.dropdownTitle}
                </h1>
                {props.countryData.map((item, index) => {
                    return (
                        <div onClick={props.onClick} key={index} className={`dropdown-menu-country ${props.animate == true ? 'animate-list' : ''}`}>
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
            <div className={`${props.animate == true ? 'animate' : ''} ${props.dropdown}`}>
                {props.data.map((item, index) => {
                    return (
                        <div key={index}>
                            <h1 className="dropdown-toggle">
                                {item.title}
                            </h1>
                            {item.list.map((item, index) => {
                                return (
                                    <div key={index} className={`dropdown-item ${props.animate == true ? 'animate-list' : ''}`} onClick={props.onClick}>
                                        {item.svg}
                                        <div>
                                            <p>
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
