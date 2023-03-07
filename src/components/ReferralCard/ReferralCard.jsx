import './ReferralCard.css';

export const ReferralCard = ({ item }) => {
  return (
    <div className={'referral-card-wrapper'}>
      <div className={'referal-card-body'}>
        <h2 className={'font-20'}>{item.label}</h2>
        <p className={'font-16'}>{item.description}</p>
      </div>
      {item.button}
    </div>
  )
}
