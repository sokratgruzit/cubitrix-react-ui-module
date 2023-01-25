import "./WithdrawalPopup.css";

export const WithdrawalPopup = (props) => {
  let popupElement = null;

  if (props.type === "withdrawalPopup") {
    popupElement = (
      <div>
        <div className="withdrawal-container">
          <div className="withdrawal-inner">
            <div className="flex jc-sb">
              <div>#6379325951635a33347837434e334e6b345a6e3052513d3d</div>
              <div>Approved</div>
            </div>
            <div className="flex jc-sb">
              <div>#Withdraw Wallet (BSC)</div>
              <div>0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return popupElement;
};
