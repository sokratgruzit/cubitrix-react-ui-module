import "./WithdrawPopup.css";
import { Popup } from "../Popup";

export const WithdrawPopup = (props) => {
  let popupElement = null;

  if (props.type === "withdrawPopup") {
    popupElement = (
      <div className="withdraw-container" style={props.customStyles}>
        <div className="withdraw-inner">
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
          <div className="withdraw-details">
            <div className="withdraw-details-inner">
              <div className="withdraw-title font-16">{props.title}</div>
              <div className="withdraw-wraper">
                {props.withdrawData.map((item) => {
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
