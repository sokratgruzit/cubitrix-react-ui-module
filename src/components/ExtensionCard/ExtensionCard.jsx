import "./ExtensionCard.css";
import { Switches } from "../Switches";

export const ExtensionCard = (props) => {
    const arrowSvg = <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
        <path d="M1.33333 1.70095L5.16097 5.52859C5.61301 5.98063 5.61301 6.72032 5.16097 7.17236L1.33333 11" stroke={`${props.type === "trade" ? "#3D5AFE" : "#FFF"}`} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

    return (
        <div className={`extension-card ${props.type} ${props.active === true ? "animation" : ""}`}>
            {props.type === "staking" ? (
                <div className="staking-card">
                    <div className="staking-card-header active">
                        <img src={props.cardBody.icon} alt="#" />
                        <h1>{props.cardBody.h}</h1>
                    </div>
                    <div className="extension-card-body active">
                         {arrowSvg}
                    </div>
                </div>
            ) : (
                <>
                    <div className="card-header active">
                        <img src={props.cardBody.icon} alt="#" />
                        <Switches
                            type={'lg-switches'}
                            size={'size'}
                        />
                    </div>
                    <div className="extension-card-body active">
                        <div className="extension-card-body-header">
                            <h1>{props.cardBody.h}</h1>
                            {arrowSvg}
                        </div>
                        <p className="font-16">{props.cardBody.p}</p>
                    </div>
                </>
            )
            }
        </div>
    )
}