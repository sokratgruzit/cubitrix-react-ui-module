import "./ExtensionCard.css";
import { Switches } from "../Switches";

export const ExtensionCard = (props) => {

    return (
        <div style={props.customStyle} className={`extension-card ${props.type} ${props.active === true ? "animation" : ""}`}>
            {props.type === "staking" ? (
                <div className="staking-card">
                    <div className="staking-card-header active">
                        <img src={props.cardBody.icon} alt="#" />
                        <h1>{props.cardBody.h}</h1>
                    </div>
                    <div className="extension-card-body active">
                         {props.cardBody.arrow}
                    </div>
                </div>
            ) : (props.type === "loan" || props.type === "trade") ? (
                <>
                    <div className="card-header active">
                        {props.cardBody.icon}
                        <Switches
                            type={'lg-switches'}
                            size={'size'}
                        />
                    </div>
                    <div className="extension-card-body active">
                        <div className="extension-card-body-header">
                            <h1>{props.cardBody.h}</h1>
                            {props.cardBody.arrow}
                        </div>
                        <p className="font-16">{props.cardBody.p}</p>
                    </div>
                </>
            ) : props.type === "extension-component" ? (
                <div className="extension-component-wrapp">
                    <div style={{padding: "35px", backgroundColor: "#191D2B", borderRadius: "8px"}} className="card-header active">
                        {props.cardBody.image}
                    </div>
                    <div className="extension-component-content">
                        <div className="extension-component-header extension-card-body active">
                            <h1>{props.cardBody.title}</h1>
                            <div className="hushCode">
                                <p>{props.cardBody.hush}</p>  
                                {props.cardBody.arrow}  
                            </div>
                        </div>
                        <div className="extension-component-body extension-card-footer active">
                            <div className="component-body-section">
                                <h4>{props.cardBody.contentOne.title}</h4>
                                <div className="component-body-section-body">
                                    <p>{props.cardBody.contentOne.subTitle}</p>
                                    {props.cardBody.contentOne.contentSvg}
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="component-body-section component-body-section">
                                <h4>{props.cardBody.contentTwo.title}</h4>
                                <div className="component-body-section-body">
                                    <p>{props.cardBody.contentTwo.usd}</p>
                                    {props.cardBody.contentTwo.dot}
                                    <p>{props.cardBody.contentTwo.currency}</p>
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="component-body-section">
                                <h4>{props.cardBody.contentThree.title}</h4>
                                {props.cardBody.contentThree.svg}
                            </div>
                        </div>
                    </div>
                </div>
            ) : ""
            }
        </div>
    )
}