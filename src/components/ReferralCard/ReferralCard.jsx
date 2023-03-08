import './ReferralCard.css';

export const ReferralCard = ({ type, label, item, customStyles}) => {

  let element = null;

  if (type === 'default') {
    element = (
      <div className={'referral-card-wrapper'} style={customStyles}>
        <div className={'referal-card-body'}>
          <h2 className={'font-20'}>{item.label}</h2>
          <p className={'font-16'}>{item.description}</p>
        </div>
        {item.button}
      </div>
    );
  }

  if (type === 'total-info') {
    element = (
      <div className={'total-referral-info-container'} style={customStyles}>
        <div className={`total-referral-info`}>
          <h2>{label}</h2>
          <p className="font-14">Total Trading <span>${item.totalTrading}</span></p>
          <p className="font-14">Total Earned <span>${item.totalEarned}</span></p>
          <p className="font-14">Estimated For This Week <span>${item.totalEstimated}</span></p>
        </div>
      </div>
    )
  }
  
  return element;
}
