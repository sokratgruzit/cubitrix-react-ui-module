import './BiddingInfo.css';

export const BiddingInfo = ({
    customStyles,
    data,
}) => {
    return (
        <div className={`bidding-info-container`} style={customStyles}>
            <div className={`bidding-info`}>
                <h2>Staked</h2>
                <p className="font-14">Bidding Balance <span>{data.balance}</span></p>
                <p className="font-14">Bidding Stakers <span>{data.stakers}</span></p>
            </div>
        </div>
    )
}