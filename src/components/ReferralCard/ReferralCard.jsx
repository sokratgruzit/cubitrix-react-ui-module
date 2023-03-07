import './ReferralCard.css';

export const ReferralCard = ({ label, item }) => {

  let element = null;

  if (props.element === 'default') {
    element = (
      <div className={'referral-card-wrapper'}>
        <div className={'referal-card-body'}>
          <h2 className={'font-20'}>{item.label}</h2>
          <p className={'font-16'}>{item.description}</p>
        </div>
        {item.button}
      </div>
    );
  }

  if (props.element === 'total-info') {
    element = (
      <div className={`bidding-info`}>
        <h2>{label}</h2>
        <p className="font-14">Total Trading <span>${item.totalTrading}</span></p>
        <p className="font-14">Total Earned <span>${item.totalEarned}</span></p>
        <p className="font-14">Estimated For This Week <span>${item.totalEstimated}</span></p>
      </div>
    )
  }
  
  return element;
}
