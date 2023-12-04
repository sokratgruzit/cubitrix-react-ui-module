import "./DashboardBalance.css";

export const DashboardBalance = (props) => {
  return (
    <div className="dashboard-balance">
      <div className="dashboard-balance-border">
        <p>Earning</p>
        <p>{props.earning}</p>
        <p>{props.usdt}</p>
        {/* <img className='svg-image' src={require(`../../assets/img/dashbordBalance/gradien.png`)} alt="gradien" /> */}
      </div>
    </div>
  );
};
