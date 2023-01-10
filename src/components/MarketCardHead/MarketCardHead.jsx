import "./MarketCardHead.css";

export const MarketCardHead = (props) => {
    return (
        <div
            className={`testWrap`}
            style={props.customStyles}
        >
            <div className={`market-card-head`}>
                <div className={`market-card-currency`}>
                    <img src={`static/media/src/assets/img/currency/tether.png`} alt="country" />
                </div>
            </div>
        </div>
    );
};
