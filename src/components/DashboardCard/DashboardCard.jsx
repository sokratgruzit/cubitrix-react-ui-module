import { useState } from 'react';

// styles 
import './DashboardCard.css';

export const DashboardCard = ({ 
    type, 
    cardHeader,
    cardHeaderButtons,
    saleNumber,
    salePercentage,
    lastSaleInfo,
    handleHeaderBtnClick,
    onViewClick,
    usdtNumber,
    customStyles
}) => {
  const [activeId, setActiveId] = useState(1);
  
  let element = null;

  if (type === 'sale-card') {
    element = (
      <div className={'card-container sale-card'} style={customStyles}>
        <div className={'card-header'}>
            <p className={'font-12'}>
                {cardHeader}
            </p>
            <div className={'card-header__buttons'}>
                {cardHeaderButtons?.map((item, index) => (
                    <div 
                        key={index}
                        className={`card-header__btn ${activeId === index && 'card-header__btn-active'} font-12`} 
                        onClick={() => {
                            setActiveId(index);
                            handleHeaderBtnClick(item.name);
                        }}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
        <div className={'sale-card-body'}>
            <p className={'sale-card__saleNumber'}>
                {saleNumber}
            </p>
            <p className={'sale-card__salePercentage font-14'}>
                {salePercentage}%
            </p>
        </div>
        <div className={'sale-card-info'}>
            <p className={'sale-card__lastSaleInfo font-12'}>
                {lastSaleInfo}
            </p>
            <p onClick={onViewClick} className={'sale-card__view font-14'}>
                View
            </p>
        </div>
      </div>
    );
  };

  if (type === 'amount-card') {
    element = (
      <div className={'card-container amount-card'} style={customStyles}>
        <div className={'card-header'}>
            <p className={'font-12'}>{cardHeader}</p>
            <div className={'card-header__buttons'}>
                {cardHeaderButtons?.map((item, index) => (
                    <div 
                        key={index}
                        className={`card-header__btn ${activeId === index && 'card-header__btn-active'} font-12`} 
                        onClick={() => {
                            setActiveId(index);
                            handleHeaderBtnClick(item.name);
                        }}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
        <div>
            <p className={'font-14'}>{usdtNumber}</p>
            <p className={'amount-card__usdt font-12'}>
                USDT 
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.66602 8.49984C2.66602 5.56565 5.06517 3.1665 7.99935 3.1665C10.9335 3.1665 13.3327 5.56565 13.3327 8.49984C13.3327 11.434 10.9335 13.8332 7.99935 13.8332C5.06517 13.8332 2.66602 11.434 2.66602 8.49984ZM7.99935 3.91069C5.47617 3.91069 3.4102 5.97666 3.4102 8.49984C3.4102 11.023 5.47617 13.089 7.99935 13.089C10.5225 13.089 12.5885 11.023 12.5885 8.49984C12.5885 5.97666 10.5225 3.91069 7.99935 3.91069Z" fill="#6A6D76"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.999 10.9805C7.7935 10.9805 7.62691 10.8139 7.62691 10.6084L7.62691 8.12776C7.62691 7.92225 7.7935 7.75566 7.999 7.75566C8.2045 7.75566 8.37109 7.92225 8.37109 8.12776L8.37109 10.6084C8.37109 10.8139 8.2045 10.9805 7.999 10.9805Z" fill="#6A6D76"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.49805 6.63962C8.49805 6.91362 8.27592 7.13574 8.00192 7.13574L7.99746 7.13574C7.72346 7.13574 7.50133 6.91362 7.50133 6.63962C7.50133 6.36562 7.72346 6.14349 7.99746 6.14349L8.00192 6.14349C8.27592 6.14349 8.49805 6.36562 8.49805 6.63962Z" fill="#6A6D76"/>
                </svg>
            </p>
        </div>
        <div className={'amount-card__info'}>
            <div>
                <p className={'font-14'}>0.001861</p>
                <p className={'font-12'}>ETH</p>
            </div>
            <div>
                <p className={'font-14'}>0</p>
                <p className={'font-12'}>BTC</p>
            </div>
            <div>
                <p className={'font-14'}>0</p>
                <p className={'font-12'}>LTC</p>
            </div>
        </div>
      </div>
    );
  };

  return element;
};
