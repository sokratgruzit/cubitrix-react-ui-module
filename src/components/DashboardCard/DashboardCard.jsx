// styles 
import './DashboardCard.css';

export const DashboardCard = ({ 
    type, 
    cardHeader,
    saleNumber,
    salePercentage
}) => {
  return (
    <div>
        {type === 'sale-card' && (
            <div className={'sale-card-container'}>
                <p className={'font-14'}>{cardHeader}</p>
                <div className={'sale-card-body'}>
                    <p className={'sale-card__saleNumber'}>
                        {saleNumber}
                    </p>
                    <p className={'sale-card__salePercentage font-14'}>
                        {salePercentage}%
                    </p>
                </div>
                <div></div>
            </div>
        )}
    </div>
  )
}
