import './DashboardStatistic.css';

export const DashboardStatistic = (props) => {
    return (
        <div className='dashboard-statistic'>
            <div className='dashboard-scroll'>
                <div>
                    <div className='dashboard-header'>
                        <li>Size:<span>ETH</span></li>
                        <li>Price:<span>USD</span></li>
                        <li>Mine</li>
                    </div>
                </div>
                <div className='wtf'>
                    <p className='sergoooo'></p>
                    <div style={{width: '100%'}}>
                        {props.data.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className='dashboard-list'>
                                        <p>{item.sizeNum}</p>
                                        <p>{item.priceNum}</p>
                                        <p>{item.mineNum}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='dashboard-title-midle'>
                    <p>Spread</p>
                    <p>1</p>
                    <p>0.01%</p>
                </div>
                {props.data2.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className='dashboard-list'>
                                <p>{item.sizeNum}</p>
                                <p>{item.priceNum}</p>
                                <p>{item.mineNum}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='dasboard-bottoms'>
                <div>
                    <button>+</button>
                    <button>-</button>
                </div>
                <span>1</span>
            </div>
        </div >
    )
}