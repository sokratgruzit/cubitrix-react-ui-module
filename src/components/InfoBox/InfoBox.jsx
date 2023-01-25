import './InfoBox.css';

export const InfoBox = ({ type, cardBody, active, customStyle, header,cardBtn, img }) => {

    return (
        <div style={customStyle} className={`card ${type} ${active === true ? "animation" : ""}`}>
            {type === "available" ? (
                <div className={`card-header card-header-active active`}>
                    <h1>{header.title}</h1>
                    <div>
                        <div>{header.lables.l1}</div>
                        <div>{header.lables.l2}</div>
                    </div>
                </div>
            ) : type === "unavailable" ? (
                <h1 className={`card-header card-header-active active`}>{header.title}</h1>
            ) : type === "connect-wallet" ? (
                <div className={`card-header-active active`}>
                    <img src={img} style={{ height: "75px", width: "104px" }} />
                </div>
            ) : type === "complete" ? (
                <div className={`card-body`}>
                    <p className={`card-header-active pharagrap-color active`}>{cardBody.p}</p>
                    <div className={`card-body-active active`}>
                        <div className={`complete-btn`}>{cardBody.btn}</div>
                    </div>
                </div>
            ) : type === "verification" ? (
                <div className='card-body'>
                    <img className='card-header-active active' src={cardBody.img} />
                    <p className='card-body-active active'>{cardBody.p}</p>
                </div>
            ) : type === "question" ? (
                <div className='card-body'>
                    <p className='active card-header-active pharagrap-color'>{cardBody.quiestion}</p>
                    <div className='display-flex card-body-active active'>
                        <div className='complete-btn'>{cardBody.no}</div>
                        <div className='complete-btn'>{cardBody.yes}</div>
                    </div>
                </div>
            ) : type === "reward-box" ? (
                cardBody.map((item, index) => {
                    return (
                        <div className={`card-body card-body-active active`} key={index}>
                            <div className='display-flex'>
                                <div className={`card-header-active active`}>
                                    <img src={item.icon} alt='#' />
                                </div>
                                <div className={`list-group-item font-16 card-body-active active`}>{item.title}</div>
                            </div>
                            <p className={`list-group-item font-16 card-footer-active active`}>{item.amount}</p>
                        </div>
                    )
                })
            ) : ""
            }
            {type === "available" ? (
                cardBody.map((item, index) => {
                    return (
                        <div className={`card-body card-body-active active`} key={index}>
                            <p className='list-group-item'>{item.title}</p>
                            <p className='list-group-item'>{item.value}</p>
                        </div>
                    )
                })
            ) : type === "unavailable" ? (
                cardBody.map((item, index) => {
                    return (
                        <div className={`card-body card-body-active active`} key={index}>
                            <div className='card-unavilable-status'>
                                <p className='list-group-item'>{item.title}</p>
                                <div style={{ padding: item.taker === "" ? "0" : "1px 6px" }}>{item.taker}</div>
                            </div>
                            <p className='list-group-item'>{item.value}</p>
                        </div>
                    )
                })
            ) : type === "connect-wallet" ? (
                <div className={`connect-wallet-body`}>
                    <p className={`card-body-active active`}>{cardBody.p}</p>
                    <div className={`card-footer-active active`}>
                        <div className={`connect-wallet-btn`}>{cardBody.btn}</div>
                    </div>
                </div>
            ) : ""
            }
            {type === "unavailable" ? (
                <div className={`unavailable-button card-footer-active active`}>{cardBtn.btn}</div>
            ) : ""}
        </div>
    )
}
