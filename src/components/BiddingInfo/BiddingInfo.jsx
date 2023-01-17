import './BiddingInfo.css';

export const BiddingInfo = props => {
    return (
        <div className={`bidding-info-container ${props.type}`}>
            <div className={`bidding-info ${props.className}`}>
                <h2>Staked</h2>
                <p className="font-14">Bidding Balance <span>0</span></p>
                <p className="font-14">Bidding Stakers <span>0</span></p>
            </div>
        </div>
    )
}