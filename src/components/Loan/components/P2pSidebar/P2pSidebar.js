import React, { useState } from "react";
import { Button } from "../../../Button";
import "./P2pSidebar.css";
import { Popup } from "./../../../Popup";
import { PopupElement } from "./../../../PopupElement";
import LoanStatus from "../LoanStatus/LoanStatus";

const P2pSidebar = ({
  yourLending,
  yourBorrowing,
  createNewLoanOffering,
  handleDeleteLoanOffer,
}) => {
  const [selectedTab, setSelectedTab] = useState("lending");
  const [makeAnOfferActive, setMakeAnOfferActive] = useState(false);
  const [newOffer, setNewOffer] = useState({});
  const [OpenRepayModal, setOpenRepayModal] = useState(false);
  const [RepayAmount, setRepayAmount] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setNewOffer((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit() {
    createNewLoanOffering(newOffer);
    setMakeAnOfferActive(false);
  }

  const inputs = [
    {
      title: "token",
      name: "token",
      required: true,
      type: "select",
      options: [
        { name: "token1", value: "token1" },
        { name: "token2", value: "token2" },
      ],
      onChange: (e) => handleChange(e),
    },
    {
      title: "amount",
      description: "Loan offer amount",
      name: "amount",
      required: true,
      placeholder: "Enter amount",
      onChange: (e) => handleChange(e),
    },
    {
      title: "interest",
      description: "interest",
      name: "interest",
      required: true,
      placeholder: "Enter interest",
      onChange: (e) => handleChange(e),
    },
    {
      title: "duration",
      description: "Loan offer duration",
      name: "duration",
      required: true,
      placeholder: "Enter duration",
      onChange: (e) => handleChange(e),
    },
  ];

  return (
    <div>
      {makeAnOfferActive && (
        <Popup
          popUpElement={
            <PopupElement
              inputs={inputs}
              currentArray={newOffer}
              setCurrentArray={setNewOffer}
              handleSubmit={handleSubmit}
              submitButtonLabel={"Approve"}
            />
          }
          label={"Create a new loan offering"}
          handlePopUpClose={() => setMakeAnOfferActive(false)}
        />
      )}
      {OpenRepayModal && (
        <Popup
          popUpElement={
            <PopupElement
              inputs={inputs}
              currentArray={RepayAmount}
              setCurrentArray={setRepayAmount}
              handleSubmit={handleSubmit}
              submitButtonLabel={"Approve"}
            />
          }
          label={"Repay loan"}
          handlePopUpClose={() => setOpenRepayModal(false)}
        />
      )}
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
          <Button
            label={"Create New Loan Offer"}
            size={"btn-sm"}
            type={"btn-primary"}
            arrow={"arrow-none"}
            element={"button"}
            onClick={() => {
              setMakeAnOfferActive(true);
            }}
            customStyles={{ margin: "0", width: "100%" }}
          />
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
                  <LoanStatus status={loan.status} />
                </div>

                {/* <Button
                  label={"Delete Loan"}
                  size={"btn-sm"}
                  type={"btn-secondary"}
                  arrow={"arrow-none"}
                  element={"button"}
                  onClick={() => {
                    handleDeleteLoanOffer(loan._id);
                  }}
                  customStyles={{ margin: "0" }}
                /> */}
                <button
                  className="loan-actions"
                  onClick={() => {
                    handleDeleteLoanOffer(loan._id);
                  }}
                >
                  Delete Loan
                </button>
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
                  <LoanStatus status={loan.status} />
                </div>
                <button
                  className="loan-actions"
                  onClick={() => {
                    setOpenRepayModal(true);
                  }}
                >
                  Repay Loan
                </button>
                <button
                  className="loan-actions"
                  onClick={() => {
                    // handleDeleteLoanOffer(loan._id);
                  }}
                >
                  Default Loan
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default P2pSidebar;
