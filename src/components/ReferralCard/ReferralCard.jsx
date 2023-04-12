import './ReferralCard.css';

export const ReferralCard = ({ type, label, item, data, customStyles, labelTwo, totalData }) => {

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
          <h2 className='font-20'>{label}</h2>
          <div className={'total-referral-codes'}>
            {data.map((item, index) => (
              <div key={index}>
                <p className="font-14">{item.title}</p>
                <span style={{ display: 'block' }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={'total-referral-rebates'}>
          <h2 className='font-20'>{labelTwo}</h2>
          {totalData.map((item, index) => (
              <div key={index}>
                <span style={{ display: 'block' }}>${item.value}</span>
                <p className="font-16">{item.title}</p>
              </div>
            ))}
        </div>
      </div>
    )
  }
  
  return element;
}
