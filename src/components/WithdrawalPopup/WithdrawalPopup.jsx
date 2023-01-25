import "./WithdrawalPopup.css";

export const WithdrawalPopup = (props) => {
  let popupElement = null;

  if (props.type === "withdrawalPopup") {
    popupElement = (
      <div>
        <div className="withdrawal-container" style={props.customStyles}>
          <div className="withdrawal-inner">
            <div className="flex jc-sb">
              <div>#6379325951635a33347837434e334e6b345a6e3052513d3d</div>
              <div>Approved</div>
            </div>
            <div className="flex jc-sb mt-22">
              <div>#Withdraw Wallet (BSC)</div>
              <div>0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2</div>
            </div>
            <div className="withdrawal-details">
              <div className="withdrawal-details-inner">
                <div className="withdraw-title font-16">Withdraw Details</div>
                <div className="withdraw-wraper">
                  <div className="popup-item flex jc-sb withdraw-bg">
                    <div>Request By</div>
                    <div>
                      <div className="align-right">mariam</div>
                      <div className="mt-8 font-12">
                        mariamtalakhadze01@gmail.com
                      </div>
                    </div>
                  </div>
                  <div className="popup-item flex jc-sb">
                    <div>Request At</div>
                    <div>
                      <div className="align-right">14.10.2021</div>
                      <div className="mt-8 font-12 alight-right">04:00 AM</div>
                    </div>
                  </div>
                  <div className="popup-item flex jc-sb withdraw-bg">
                    <div>Tokens</div>
                    <div>
                      <div>1,250 CMCX</div>
                    </div>
                  </div>
                  <div className="popup-item flex jc-sb">
                    <div>Details</div>
                    <div>
                      <div>Tokens Withdraw</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return popupElement;
};
