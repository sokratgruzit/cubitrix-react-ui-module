import './InfoBox.css'

export const InfoBox = (props) => {
    return (
        <div className={`card ${props.bg} ${props.center} ${props.height} ${props.padding}`}>
            {props.type === "avilable" ? (
                <div className='card-header'>
                    <h1>{props.header.title}</h1>
                    <div>
                        <div>{props.header.lables.l1}</div>
                        <div>{props.header.lables.l2}</div>
                    </div>
                </div>
            ) : props.type === "unAvilable" ? (
                <h1 className='card-header-detail'>{props.header.title}</h1>
            ) : props.type === "connectWallet" ? (
                <div>
                    <img src={props.img} style={{height: "75px", width: "104px"}}/>
                </div>
            ) : (
                <div className={props.center}>
                    <p>Complete the onboarding flow to start trading on COMPLEND</p>
                    <div className='complate-btn'>Complete Account</div>
                </div>
            )
            }
            {props.type === "avilable" ? (
                props.cardBody.map((item) => {
                    return (
                        <div className='card-body'>
                            <p className='list-group-item'>{item.title}</p>
                            <p className='list-group-item flex-end'>{item.value}</p>
                        </div>
                    )
                })
            ) : props.type === "unAvilable" ? (
                props.cardBody.map((item) => {
                    return (
                        <div className='card-body-unavilable'>
                            <div className='card-unavilable-status'>
                                <p className='list-group-item'>{item.title}</p>
                                <div>{item.taker}</div>
                            </div>
                                <p className='list-group-item'>{item.value}</p>
                        </div>
                    )
                })
            ) : props.type === "connectWallet" ? (
                <div className='connec-tWallet-Body'>
                    <p>Connect your Ethereum wallet to deposit funds & start trading.</p>
                    <div>Connect Wallet</div>
                </div>
            ) :"" 
            }
           { props.type === "unAvilable" ? (
                <div className='Unavailable-button'>Unavailable</div>
            ) : ""}
        </div>
    )
}
