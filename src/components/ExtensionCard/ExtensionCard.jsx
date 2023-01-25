import "./ExtensionCard.css";
import { Switches } from "../Switches";

export const ExtensionCard = ({ type, cardBody, active, customStyle }) => {

    return (
        <div style={customStyle} className={`extension-card ${type} ${active === true ? "animation" : ""}`}>
            {type === "staking" ? (
                <div className="staking-card">
                    <div className="staking-card-header active">
                        <img src={cardBody.icon} alt="#" />
                        <h1>{cardBody.h}</h1>
                    </div>
                    <div className="extension-card-body active">
                         {cardBody.arrow}
                    </div>
                </div>
            ) : (type === "loan" || type === "trade") ? (
                <>
                    <div className="card-header active">
                        {cardBody.icon}
                        <Switches
                            type={'lg-switches'}
                            size={'size'}
                        />
                    </div>
                    <div className="extension-card-body active">
                        <div className="extension-card-body-header">
                            <h1>{cardBody.h}</h1>
                            {cardBody.arrow}
                        </div>
                        <p className="font-16">{cardBody.p}</p>
                    </div>
                </>
            ) : type === "extension-component" ? (
                <div className="extension-component-wrapp">
                    <div style={{padding: "35px", backgroundColor: "#191D2B", borderRadius: "8px"}} className="card-header active">
                        {cardBody.image}
                    </div>
                    <div className="extension-component-content">
                        <div className="extension-component-header extension-card-body active">
                            <h1>{cardBody.title}</h1>
                            <div className="hushCode">
                                <p>{cardBody.hush}</p>  
                                {cardBody.arrow}  
                            </div>
                        </div>
                        <div className="extension-component-body extension-card-footer active">
                            <div className="component-body-section">
                                <h4>{cardBody.contentOne.title}</h4>
                                <div className="component-body-section-body">
                                    <p>{cardBody.contentOne.subTitle}</p>
                                    {cardBody.contentOne.contentSvg}
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="component-body-section component-body-section">
                                <h4>{cardBody.contentTwo.title}</h4>
                                <div className="component-body-section-body">
                                    <p>{cardBody.contentTwo.usd}</p>
                                    {cardBody.contentTwo.dot}
                                    <p>{cardBody.contentTwo.currency}</p>
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="component-body-section">
                                <h4>{cardBody.contentThree.title}</h4>
                                {cardBody.contentThree.svg}
                            </div>
                        </div>
                    </div>
                </div>
            ) : ""
            }
        </div>
    )
}