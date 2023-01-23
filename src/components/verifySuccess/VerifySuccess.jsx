import "./VerifySaccess.css";

export const VerifySaccess = (props)  => {
    return (
        <div className={`verify-card ${props.type} ${props.active === true ? "animation" : ""}`} style={props.customStyle}>
            <div className="verify-card-header not-active-one not-active">
                {props.cardBody.logo}
                <h2>{props.cardBody.title}</h2>
            </div>
            <div className="verify-card-content">
                <div className="verify-card-content-text not-active-two not-active">
                    {props.cardBody.email}
                    <h2>{props.cardBody.h}</h2>
                    <p>{props.cardBody.p}</p>
                </div>
                <div className="not-active-three not-active">
                    <div className="set-up-button">{props.cardBody.button}</div>
                </div>
            </div>
        </div>
    )
}
