import "./TabTable.css";
import { Button } from "../Button";

export const TabTable = (props) => {
  let component = null;

  if (props.type === "tab-table") {
    component = (
      <div className={`${props.type}`}>
        <div className="table-col">
          <div>
            <div className="sub-table">None</div>
            <div className="table-row">
              <div className="d-flex pad-b">
                <div>
                  Leverage<div className="mt-5">-</div>
                </div>
                <div>
                  Liquidation Price<div className="mt-5">-</div>
                </div>
              </div>
              <div className="d-flex">
                <div>
                  Unrealized P&L<div className="mt-5">-</div>
                </div>
                <div>
                  Realized P&L<div className="mt-5">-</div>
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
    );
  }
  if (props.type === "tab-table-filled") {
    component = (
      <div className={`${props.type}`}>
        <div className="table-col">
          <div>
            <div className="sub-table filled">
              <div className="fs-14">Long</div>
              <div>
                <div className="table-flex">
                  <div className="fs-16">0.0300</div>
                  <span className="coin-name">BTC</span>
                </div>
                <div className="num">$1, 565.82</div>
              </div>
            </div>
            <div className="table-row">
              <div className="d-flex pad-b">
                <div>
                  Leverage<div className="mt-5">14.58x</div>
                </div>
                <div>
                  Liquidation Price<div className="mt-5">$53, 565.82</div>
                </div>
              </div>
              <div className="d-flex">
                <div>
                  Unrealized P&L<div className="mt-5">$22.98 (1.38%)</div>
                </div>
                <div>
                  Realized P&L<div className="mt-5">$0.98</div>
                </div>
              </div>
            </div>
          </div>
          <div className="table-manu">
            <div className="underline pad-t">
              Average Open<div>$53, 565.82</div>
            </div>
            <div className="underline">
              Average Close<div>$0.00</div>
            </div>
            <div className="underline">
              Net Funding<div>-$0.98</div>
            </div>
            <Button
              label={"Close Position"}
              size={"btn-lg"}
              type={"btn-secondary"}
              onClick={() => setToggle((prevState) => !prevState)}
            />
          </div>
        </div>
      </div>
    );
  }
  return component;
};
