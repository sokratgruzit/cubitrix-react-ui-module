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
                                    <div key={index} className={props.contentList}>
                                        {/* <p className={props.active === `${item.id}` ? "border" : ""}></p> */}
                                        <span className={item.id < 3 ? "filter" : ''}>
                                            {item.svg}
                                        </span>
                                        <p id={item.id} onClick={props.onClick} className={`${props.active === `${item.id}` ? "rightLine" : ''}`}>
                                            {item.title}
                                        </p>
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