import React, { useState } from "react";
import "./P2pSidebar.css";

const P2pSidebar = ({ yourLending, yourBorrowing }) => {
  const [selectedTab, setSelectedTab] = useState("lending");
  return (
    <div>
      <div className="tabs-wrapper">
        <div className="user-stats">
          <div
            className={`${selectedTab === "assets" ? "selected" : ""}`}
            onClick={() => setSelectedTab("assets")}
          >
            assets
          </div>
          <div
            className={`${selectedTab === "lending" ? "selected" : ""}`}
            onClick={() => setSelectedTab("lending")}
          >
            your lending
          </div>
          <div
            className={`${selectedTab === "borrowing" ? "selected" : ""}`}
            onClick={() => setSelectedTab("borrowing")}
          >
            your borrowing
          </div>
          <span
            className={`highlight-selected-loan ${
              selectedTab === "assets"
                ? "selected-assets"
                : selectedTab === "lending"
                ? "selected-lending"
                : "selected-borrowing"
            }`}
          ></span>
        </div>
      </div>
      {selectedTab === "lending" && (
        <div className="loans-list">
          <button>create new loan offer</button>
          {yourLending.map((loan, index) => (
            <div key={loan._id} className={"your-lending-row"}>
              <div className={"loan-borrower"}>
                <p>Borrower</p>
                <p>{loan.borrower}</p>
              </div>
              <div className={"loan-stats-row"}>
                <div className={"your-lending-loan-stats"}>
                  <p>Amount</p>
                  <p>{loan.amount}</p>
                </div>
                <div className={"your-lending-loan-stats"}>
                  <p>Interest</p>
                  <p>{loan.interest}</p>
                </div>
                <div className={"your-lending-loan-stats"}>
                  <p>duration</p>
                  <p>{loan.duration}</p>
                </div>
                <div className={"your-lending-loan-stats"}>
                  <p>status</p>
                  <p className="status">{loan.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {selectedTab === "borrowing" && (
        <div className="loans-list">
          {yourBorrowing.map((loan, index) => (
            <div key={loan._id} className={"your-lending-row"}>
              <div className={"loan-borrower"}>
                <p>Borrowed from</p>
                <p>{loan.lender}</p>
              </div>
              <div className={"loan-stats-row"}>
                <div className={"your-lending-loan-stats"}>
                  <p>Amount</p>
                  <p>{loan.amount}</p>
                </div>
                <div className={"your-lending-loan-stats"}>
                  <p>Interest</p>
                  <p>{loan.interest}</p>
                </div>
                <div className={"your-lending-loan-stats"}>
                  <p>duration</p>
                  <p>{loan.duration}</p>
                </div>
                <div className={"your-lending-loan-stats"}>
                  <p>status</p>
                  <p className="status">{loan.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default P2pSidebar;
