import "./VerifySaccess.css";

export const VerifySaccess = ({ type, cardBody, active, customStyle }) => {
  return (
    <div
      className={`verify-card ${type} ${active === true ? "animation" : ""}`}
      style={customStyle}
    >
      <div className='verify-card-header not-active-one not-active'>
        {cardBody.logo}
        <h2>{cardBody.title}</h2>
      </div>
      <div className='verify-card-content'>
        <div className='verify-card-content-text not-active-two not-active'>
          {cardBody.email}
          <h2>{cardBody.h}</h2>
          <p>{cardBody.p}</p>
        </div>
        <div className='not-active-three not-active'>
          <div className='set-up-button'>{cardBody.button}</div>
        </div>
      </div>
    </div>
  );
};
