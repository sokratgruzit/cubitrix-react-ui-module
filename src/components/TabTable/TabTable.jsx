import "./TabTable.css";

export const TabTable = (props) => {
  return (
    <>
      <div className={`${props.type}`}>
        <div className="table-col">
          <div>
            <div className="sub-table">None</div>
            <div className="table-row">
              <div className="d-flex pad-b">
                <div>
                  Leverage<div>-</div>
                </div>
                <div>
                  Liquidation Price<div>-</div>
                </div>
              </div>
              <div className="d-flex">
                <div>
                  Unrealized P&L<div>-</div>
                </div>
                <div>
                  Realized P&L<div>-</div>
                </div>
              </div>
            </div>
          </div>
          <div className="table-manu">
            <div className="underline pad-t">
              Average Open<div>-</div>
            </div>
            <div className="underline">
              Average Close<div>-</div>
            </div>
            <div className="underline">
              Net Funding<div>-</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
