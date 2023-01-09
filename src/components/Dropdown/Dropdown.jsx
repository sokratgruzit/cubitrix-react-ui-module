import "./Dropdown.css";

export const Dropdown = (props) => {
    return (
        <>
            <div className={props.dropdown}>
                {props.data.map((item, index) => {
                    return (
                        <div className="lastChild" key={index}>
                            <h1 className="titles">
                                {item.title}
                            </h1>
                            {item.list.map((item, index) => {
                                return (
                                    <div key={index} className={props.dropdownItem}>
                                        {/* <p className={props.active === `${item.id}` ? "border" : ""}></p> */}
                                        <span className={item.id < 3 ? "filter" : ''}>
                                            {item.svg}
                                        </span>
                                        <div className={props.containerCheck}>
                                            <p id={item.id} onClick={props.onClick} className={`${props.active === `${item.id}` ? "rightLine" : ''}`}>
                                                {item.title}
                                            </p>
                                            {item.togle === 'true' &&
                                                <div className="checkboxContainer">
                                                    <input type="checkbox" value="false" />
                                                    <div className="checkbox">
                                                        <i></i>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </>
    )
}