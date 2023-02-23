import './BiddingInfo.css';

export const BiddingInfo = ({
    customStyles,
    stackContractInfo,
}) => {
    return (
        <div className={`bidding-info-container`} style={customStyles}>
            <div className={`bidding-info`}>
                <h2>Staked</h2>
                <p className="font-14">Bidding Balance <span>{stackContractInfo.totalStakedToken}</span></p>
                <p className="font-14">Bidding Stakers <span>{stackContractInfo.totalStakers}</span></p>
            </div>
        </div>
    )
}