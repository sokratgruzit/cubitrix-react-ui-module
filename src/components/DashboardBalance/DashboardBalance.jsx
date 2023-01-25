import "./DashboardBalance.css";

export const DashboardBalance = (props) => {
    return (
        <div className='dashboard-balance'>
            <div className='dashboard-balance-border'>
                <p>Earning</p>
                <p>{props.earning}</p>
                <p>{props.usdc}</p>
                {/*<img className='svg-image' src={require(`../../assets/img/dashbordBalance/gradien.png`)} alt="gradien" />*/}
            </div>
            <div className='balance'>
                <div className='supply'>
                    <p>Supply Balance</p>
                    <span>{props.supply}</span>
                </div>
                <div className='borrow'>
                    <p>Borrow Balance</p>
                    <span>{props.borrow}</span>
                </div>
            </div>
        </div>
    )
}
