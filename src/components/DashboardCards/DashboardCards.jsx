import './DashboardCards.css';

export const DashboardCards = (props) => {
    let element = '';
    if (props.type === 'minicard') {
        element =
            <div className={`dashboard-minicard  ${props.bg}`}>
                <div className='dashboard-minicard-container'>
                    <div className='dashboard-minicard-coin'>
                        <img src={props.img} alt="coin" />
                        <div>
                            <h5>{props.coin}</h5>
                            <p>{props.abbreviation}</p>
                        </div>
                    </div>
                    <div>
                        <p>
                            {props.arrow === 'redArrow' ? (
                                <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 9.88892L9.53333 2.42225L6.68889 6.68892L1 1.00003M17 9.88892H13.4444M17 9.88892L17 6.33336" stroke="#EF5350" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            ) : ''}
                            {props.arrow === 'greenArrow' ? (
                                <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 1L9.53333 8.46667L6.68889 4.2L1 9.88889M17 1H13.4444M17 1L17 4.55556" stroke="#9CCC65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ) : ''}
                        </p>
                    </div>
                </div>
                <div className='prices-box'>
                    <div>
                        <p className='prices'>{props.price}</p>
                        <p>
                            {props.svg === 'down' ? (
                                <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.86334 0.788916L4.48717 2.16508L3.6469 3.00964C3.47569 3.18059 3.24363 3.27661 3.00169 3.27661C2.75974 3.27661 2.52769 3.18059 2.35648 3.00964L0.135753 0.788916C-0.155771 0.497392 0.0542977 8.6568e-05 0.461574 8.6568e-05H5.53752C5.94908 8.6568e-05 6.15486 0.497392 5.86334 0.788916Z" fill="#EF5350" />
                                </svg>
                            ) : ''}
                            {props.svg === 'up' ? (
                                <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.86334 2.4877L4.48717 1.11153L3.6469 0.26697C3.47569 0.0960182 3.24363 0 3.00169 0C2.75974 0 2.52769 0.0960182 2.35648 0.26697L0.135753 2.4877C-0.155771 2.77922 0.0542977 3.27652 0.461574 3.27652H5.53752C5.94908 3.27652 6.15486 2.77922 5.86334 2.4877Z" fill="#9CCC65" />
                                </svg>
                            ) : ''}
                            <span style={{ color: props.color }}>
                                {props.percent}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
    }
    if (props.type === 'card') {
        element =
            <div className={`dashboard-card ${props.bgColor}`}>
                <div>
                    <p>
                        {props.title}
                    </p>
                </div>
                <div>
                    <p className='prices-card'>
                        {props.price}
                    </p>
                </div>
                <div>
                    {props.valueCard === 'true' ? (
                        <div className='prices-card-container'>
                            <p className='prices-box'>
                                <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.86334 2.4877L4.48717 1.11153L3.6469 0.26697C3.47569 0.0960182 3.24363 0 3.00169 0C2.75974 0 2.52769 0.0960182 2.35648 0.26697L0.135753 2.4877C-0.155771 2.77922 0.0542977 3.27652 0.461574 3.27652H5.53752C5.94908 3.27652 6.15486 2.77922 5.86334 2.4877Z" fill="#9CCC65" />
                                </svg>
                                <span>
                                    $1.02 (1.01%)
                                </span>
                            </p>
                            <p>
                                Past Week
                            </p>
                        </div>
                    ) : ''}
                    {props.valueCard === 'false' ? (
                        <p className='price-exchange'>
                            Exchanged in the last 24h
                        </p>
                    ) : ''}
                </div>
            </div>
    }
    return element;
}

