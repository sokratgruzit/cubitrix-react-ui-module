import './AccountSummary.css';

export const AccountSummary = ({ data }) => {
  return (
    <div className="account-summary">
      {data.map((item, index) => (
        <div className="account-summary__item" key={index}>
          <p>
            {item?.icon}
            {item.title}
          </p>
          <p>
            {item.value} CML
          </p>
        </div>
      ))}
    </div>
  );
};