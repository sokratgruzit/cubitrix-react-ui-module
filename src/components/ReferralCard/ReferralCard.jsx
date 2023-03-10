import './ReferralCard.css';

export const ReferralCard = ({ type, label, item, data, customStyles }) => {

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
          {data.map((item, index) => (
            <div key={index}>
              <p style={{ color: `${item.color ? item.color : '#FFF'}` }} className="font-14">{item.title} {!item.color && <span>{item.value}</span>}</p>
              {item.color && <span style={{ display: 'block' }}>{item.value}</span>}
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  return element;
}
