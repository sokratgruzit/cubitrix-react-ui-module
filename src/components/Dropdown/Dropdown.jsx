import "./Dropdown.css";

export const Dropdown = (props) => {
    return (
        <>
            <div className={props.dropdown}>
                {props.data.map((item, index) => {
                    return (
                        <div key={index}>
                            <h1 className="title">
                                {item.title}
                            </h1>
                            {item.list.map((item, index) => {
                                return (
                                    <div key={index} className={props.contentList}>
                                        {/* <p className={props.active === `${item.id}` ? "border" : ""}></p> */}
                                        <p className={item.id > 3 ? "wtf" : 'wtf2'}>
                                            {item.svg}
                                        </p>
                                        <p id={item.id} onClick={props.onClick} className={`${props.active === `${item.id}` ? "rightLine" : ''}`}>
                                            {item.title}
                                        </p>
                                        <p>

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