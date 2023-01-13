import "./InfoBox.css";

export const InfoBox = (props) => {
  return (
    <div
      className={`card ${props.bg} ${props.center} ${props.height} ${props.padding} ${props.revardbox} ${props.anime}`}
    >
      {props.type === "avilable" ? (
        <div className={`card-header anime-astaring-pos ${props.anime}`}>
          <h1>{props.header.title}</h1>
          <div>
            <div>{props.header.lables.l1}</div>
            <div>{props.header.lables.l2}</div>
          </div>
        </div>
      ) : props.type === "unAvilable" ? (
        <h1 className={`card-header-detail anime-astaring-pos ${props.anime}`}>
          {props.header.title}
        </h1>
      ) : props.type === "connectWallet" ? (
        <div className={`anime-astaring-pos ${props.anime}`}>
          <img src={props.img} style={{ height: "75px", width: "104px" }} />
        </div>
      ) : props.type === "complate" ? (
        <div className={`${props.center}`}>
          <p className={`anime-astaring-pos ${props.anime}`}>
            Complete the onboarding flow to start trading on COMPLEND
          </p>
          <div className={`anime-astaring-pos-three ${props.anime}`}>
            <div className={`complate-btn`}>Complete Account</div>
          </div>
        </div>
      ) : props.type === "revardBox" ? (
        props.cardBody.map((item) => {
          return (
            <div
              className={`card-body display-flex anime-astaring-pos ${props.anime}`}
            >
              <div className="display-flex">
                <div className={`anime-astaring-pos ${props.anime}`}>
                  <img src={item.icon} alt="#" />
                </div>
                <div
                  className={`list-group-item font-bigger anime-astaring-two ${props.anime}`}
                >
                  {item.title}
                </div>
              </div>
              <p
                className={`list-group-item font-bigger anime-astaring-pos-three ${props.anime}`}
              >
                {item.amount}
              </p>
            </div>
          );
        })
      ) : (
        ""
      )}
      {props.type === "avilable" ? (
        props.cardBody.map((item) => {
          return (
            <div className={`card-body anime-astaring-pos-two ${props.anime}`}>
              <p className="list-group-item">{item.title}</p>
              <p className="list-group-item">{item.value}</p>
            </div>
          );
        })
      ) : props.type === "unAvilable" ? (
        props.cardBody.map((item) => {
          return (
            <div
              className={`card-body-unavilable anime-astaring-pos-two ${props.anime}`}
            >
              <div className="card-unavilable-status">
                <p className="list-group-item">{item.title}</p>
                <div style={{ padding: item.taker === "" ? "0" : "1px 6px" }}>
                  {item.taker}
                </div>
              </div>
              <p className="list-group-item">{item.value}</p>
            </div>
          );
        })
      ) : props.type === "connectWallet" ? (
        <div className={`connec-tWallet-Body`}>
          <p className={`anime-astaring-pos-two ${props.anime}`}>
            Connect your Ethereum wallet to deposit funds & start trading.
          </p>
          <div className={`anime-astaring-pos-three ${props.anime}`}>
            <div className={`connect-wallet-btn`}>Connect Wallet</div>
          </div>
        </div>
      ) : (
        ""
      )}
      {props.type === "unAvilable" ? (
        <div
          className={`Unavailable-button anime-astaring-pos-three ${props.anime}`}
        >
          Unavailable
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
