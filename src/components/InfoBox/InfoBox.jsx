import './InfoBox.css';
import { Table } from "../../components/Table";
import { useState } from "react";

export const InfoBox = (props) => {

    const [show, setSow] = useState(true);

    return (
        <>
            <div style={props.customStyle} className={`card ${props.type} ${show ? props.active : ""}`}>
                {props.type === "available" ? (
                    <div className={`card-header card-header-active active`}>
                        <h1>{props.header.title}</h1>
                        <div>
                            <div>{props.header.lables.l1}</div>
                            <div>{props.header.lables.l2}</div>
                        </div>
                    </div>
                ) : props.type === "unavailable" ? (
                    <h1 className={`card-header card-header-active active`}>{props.header.title}</h1>
                ) : props.type === "connect-wallet" ? (
                    <div className={`card-header-active active`}>
                        <img src={props.img} style={{ height: "75px", width: "104px" }} />
                    </div>
                ) : props.type === "complete" ? (
                    <div className={`card-body`}>
                        <p className={`card-header-active pharagrap-color active`}>Complete the onboarding flow to start trading on COMPLEND</p>
                        <div className={`card-body-active active`}>
                            <div className={`complate-btn`}>Complete Account</div>
                        </div>
                    </div>
                ) : props.type === "verification" ? (
                    <div className='card-body'>
                        <img className='card-header-active active' src={props.cardBody.img} />
                        <p className='card-body-active active'>{props.cardBody.p}</p>
                    </div>
                ) : props.type === "question" ? (
                    <div className='card-body'>
                        <p className='active card-header-active pharagrap-color'>{props.cardBody.quiestion}</p>
                        <div className='display-flex card-body-active active'>
                            <div className='complate-btn'>{props.cardBody.no}</div>
                            <div className='complate-btn'>{props.cardBody.yes}</div>
                        </div>
                    </div>
                ) : props.type === "reward-box" ? (
                    props.cardBody.map((item) => {
                        return (
                            <div className={`card-body card-body-active active`}>
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
                {props.type === "available" ? (
                    props.cardBody.map((item) => {
                        return (
                            <div className={`card-body card-body-active active`}>
                                <p className='list-group-item'>{item.title}</p>
                                <p className='list-group-item'>{item.value}</p>
                            </div>
                        )
                    })
                ) : props.type === "unavailable" ? (
                    props.cardBody.map((item) => {
                        return (
                            <div className={`card-body card-body-active active`}>
                                <div className='card-unavilable-status'>
                                    <p className='list-group-item'>{item.title}</p>
                                    <div style={{ padding: item.taker === "" ? "0" : "1px 6px" }}>{item.taker}</div>
                                </div>
                                <p className='list-group-item'>{item.value}</p>
                            </div>
                        )
                    })
                ) : props.type === "connect-wallet" ? (
                    <div className={`connec-tWallet-Body`}>
                        <p className={`card-body-active active`}>Connect your Ethereum wallet to deposit funds & start trading.</p>
                        <div className={`card-footer-active active`}>
                            <div className={`connect-wallet-btn`}>Connect Wallet</div>
                        </div>
                    </div>
                ) : ""
                }
                {props.type === "unavailable" ? (
                    <div className={`unavailable-button card-footer-active active`}>Unavailable</div>
                ) : ""}
            </div>
            <button style={{ backgroundColor: "red", height: "50px", width: "100px" }} onClick={() => { setSow(!show) }}>btn</button>
        </>
    )
}
