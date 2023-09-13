import "./AccountSummary.css";

export const AccountSummary = ({ data, stackContractInfo, label }) => {
  return (
    <div className={"account-summary-data"}>
      {data.map((item, index) => (
        <div key={index} className={"account-summary-data-item"}>
          {item.map((item, index) => (
            <div className="account-summary" key={index}>
              <p>
                {item?.icon}
                {item.title}
              </p>
              <p>
                {item.value?.toLocaleString("en-US", {
                  minimumFractionDigits: 5,
                  maximumFractionDigits: 5,
                })}{" "}
                ATR
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
