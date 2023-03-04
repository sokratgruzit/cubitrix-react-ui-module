import "./Loan.css";
import React, { useState } from "react";
import { useMobileWidth } from "../../hooks/useMobileWidth";
import { Button } from "../Button";
import "./Loan.css";

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
            <div className="earnings-circle">
              <div className="earning-circle-inner">
                <h3>Eaning</h3>
                <p className="earning-amount-token">$8.193010001</p>
                <p className="earning-amount-USDC">2.22004 USDC</p>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};
