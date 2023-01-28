import "./WithdrawalPopup.css";
import { Popup } from "../Popup";

export const WithdrawalPopup = (props) => {
  let popupElement = null;

  if (props.type === "withdrawalPopup") {
    popupElement = (
      <div className="withdrawal-container" style={props.customStyles}>
        <div className="withdrawal-inner">
          <div>
            <div className="flex jc-sb">
              <div>{props.head}</div>
              <div>Approved</div>
            </div>
            <div className="flex jc-sb mt-22">
              <div>{props.wallet}</div>
              <div>{props.code}</div>
            </div>
          </div>
          <div className="withdrawal-details">
            <div className="withdrawal-details-inner">
              <div className="withdraw-title font-16">{props.title}</div>
              <div className="withdrawal-wraper">
                {props.withdrawalData.map((item) => {
                  return (
                    <div key={item.id} className="popup-item flex jc-sb">
                      <div>{item.name}</div>
                      <div>
                        <div className="align-right">{item.user}</div>
                        <div className="mt-8 font-12 align-right">
                          {item.sub}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <Popup label={props.label} body={popupElement} />;
};
