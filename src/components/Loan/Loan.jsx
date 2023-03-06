import "./Loan.css";
import React, { useState } from "react";
import { useMobileWidth } from "../../hooks/useMobileWidth";
import { Button } from "../Button";
import "./Loan.css";
import { DashboardBalance } from "../DashboardBalance";
import { Table } from "../Table";
import { InfoCircleIcon } from "../../assets/svgs";

export const Loan = () => {
  const { width } = useMobileWidth();

  return (
    <div className={`main`}>
      <div
        className={`main-sidebar`}
        style={{ display: `${width > 1025 ? "flex" : "none"}` }}
      >
        <div className={"staking-sidebar"}>
          <div className="loan-walletBalance">
            <h3>USDC Wallet Balance</h3>
            <div>
              <span>img</span>
              <p>0.00</p>
            </div>
            <div>
              <div className="supply-balance">
                <p>Supply Balance</p> <p>$0.00</p>
              </div>
              <p>APR 1.86 %</p>
            </div>
            <div>
              <div className="borrow-balance">
                <p>Borrow Balance</p> <p>$0.00</p>
              </div>
              <p>APR 3.50 %</p>
            </div>
          </div>
          <div className="loan-bar-body">
            <DashboardBalance earning={"$8.193010001"} usdc={"2.22004 USDC"} />

            <div className="buttons-wrapper">
              <Button
                label={"Supply USDC "}
                size={"btn-sm"}
                type={"btn-secondary"}
                arrow={"arrow-none"}
                element={"button"}
                onClick={() => disconnect()}
                customStyles={{ margin: "0" }}
              />
              <Button
                label={"Borrow USDC"}
                size={"btn-sm"}
                type={"btn-secondary"}
                arrow={"arrow-none"}
                element={"button"}
                onClick={() => disconnect()}
                customStyles={{ margin: "0" }}
              />
            </div>
            <div className="position-summary">
              <h3>Position Summary</h3>
              <div className="position-summary-point">
                <p>Collateral Value</p>
                <p>$0.00</p>
              </div>
              <div className="position-summary-point">
                <p>Liquidation Point</p>
                <p>$0.00</p>
              </div>
              <div className="position-summary-point">
                <p>Borrow Capacity</p>
                <p>$0.00</p>
              </div>
              <div className="position-summary-point">
                <p>Available to Borrow</p>
                <p>$0.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"main-content"}>
        <h2>Loan</h2>
        <Table
          type={"table-version"}
          tableHead={[
            {
              name: "Collateral Asset",
              width: 50,
              mobileWidth: 50,
              id: 0,
            },
            {
              name: "Protocol Balance",
              width: 50,
              mobileWidth: 50,

              id: 1,
            },
          ]}
          mobile={width < 1280}
          tableData={[
            {
              id: 0,
              name: "Chainlink",
              shortName: "LINK",
              amount: "0.00",
              protocolBalance: "0.0000",
            },
          ].map((item, index) => {
            return (
              <div className={`table-parent loan-pool-row`} key={index}>
                <div className="info-circle">
                  <InfoCircleIcon />
                </div>
                <div className="collateral-name">img {item.name}</div>
                <div className="collateral-shortName">
                  <p>{item.shortName}</p>
                  <p>{item.amount} in wallet</p>
                </div>
                <div className="protocol-balance">{item.protocolBalance}</div>
                <div className="pool-loan-actions">
                  <div>
                    <span>-</span>
                  </div>
                  <div>
                    <span>+</span>
                  </div>
                </div>
              </div>
            );
          })}
        />
        <div>
          <div>
            <span>Collateral Asset</span>
            <span>Protocol Balance</span>
          </div>
          {[].map((asset, index) => {
            return (
              <div>
                <div></div>
                <div>
                  img
                  {asset.title}
                </div>
                <div>
                  <p>{asset?.shortName}</p>
                  <p>{asset?.amount} in wallet</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
