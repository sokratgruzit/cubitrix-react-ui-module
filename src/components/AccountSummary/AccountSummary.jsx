import "./AccountSummary.css";

export const AccountSummary = ({ data, stackContractInfo, label }) => {
  return (
    <div>
      {/* <div className={`total-summary-info`}>
        <h2 className="font-20">{label}</h2>
        <div className={"total-account-info"}>
          <p className="font-16">
            Bidding Balance{" "}
            <span>{parseFloat(stackContractInfo.totalStakedToken).toFixed(2)}</span>
          </p>
          <p className="font-16">
            Bidding Stakers <span>{stackContractInfo.totalStakers}</span>
          </p>
        </div>
      </div> */}
      <div className={"account-summary-data"}>
        {data.map((item, index) => (
          <div key={index} className={"account-summary-data-item"}>
            {item.map((item, index) => (
              <div className="account-summary" key={index}>
                <p>
                  {item?.icon}
                  {item.title}
                </p>
                <p>{parseFloat(item.value)?.toFixed(5)} ATR</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
