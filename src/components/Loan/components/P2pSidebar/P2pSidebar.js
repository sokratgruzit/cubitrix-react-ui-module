import React, { useState } from "react";
import { Button } from "../../../Button";
import "./P2pSidebar.css";
import { Popup } from "./../../../Popup";
import { PopupElement } from "./../../../PopupElement";
import LoanStatus from "../LoanStatus/LoanStatus";
import { NoAssets } from "../../../../assets/svgs";

const P2pSidebar = ({
  yourLending,
  yourBorrowing,
  createNewLoanOffering,
  handleDeleteLoanOffer,
  handleRepayLoan,
  setSelectedLoanId,
  account,
  handleConenctWallet,
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

  function handleRepaySubmit() {
    const data = { ...RepayAmount, id: OpenRepayModal };
    handleRepayLoan(data);
    setOpenRepayModal(false);
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

  const repayInputs = [
    {
      title: "token",
      name: "token",
      required: true,
      type: "select",
      options: [
        { name: "token1", value: "token1" },
        { name: "token2", value: "token2" },
      ],
      onChange: (e) =>
        setRepayAmount((prev) => ({ ...prev, [e.target.name]: e.target.value })),
    },
    {
      title: "amount",
      description: "Loan offer amount",
      name: "amount",
      required: true,
      placeholder: "Enter amount",
      onChange: (e) =>
        setRepayAmount((prev) => ({ ...prev, [e.target.name]: e.target.value })),
    },
  ];

  return (
    <div>
      {makeAnOfferActive && (
        <Popup
          popUpElement={
            <PopupElement
              inputs={inputs}
              currentObject={newOffer}
              setCurrentObject={setNewOffer}
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
              inputs={repayInputs}
              currentObject={RepayAmount}
              setCurrentObject={setRepayAmount}
              handleSubmit={handleRepaySubmit}
              submitButtonLabel={"Repay"}
            />
          }
          label={"Repay loan"}
          handlePopUpClose={() => setOpenRepayModal(false)}
        />
      )}
      <div className="user-p2p-loans">
        <div
          className={`${selectedTab === "assets" ? "selected-loanTab" : ""}`}
          onClick={() => setSelectedTab("assets")}
        >
          assets
        </div>
        <div
          className={`${selectedTab === "lending" ? "selected-loanTab" : ""}`}
          onClick={() => setSelectedTab("lending")}
        >
          your lending
        </div>
        <div
          className={`${selectedTab === "borrowing" ? "selected-loanTab" : ""}`}
          onClick={() => setSelectedTab("borrowing")}
        >
          your borrowing
        </div>
      </div>
      {account ? (
        <>
          {selectedTab === "assets" && (
            <div>
              <div className="no-assets-wrapper">
                <NoAssets />
                <h3>You have no assets</h3>
              </div>
            </div>
          )}
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
              {yourLending.length > 0 ? (
                yourLending.map((loan, index) => (
                  <div key={loan._id} className={"your-lending-row"}>
                    <div className={"your-borrower"}>
                      <p>Borrower</p>
                      <p className="address">{loan.borrower}</p>
                    </div>
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
                    <div className="lending-loan-buttons">
                      <Button
                        label={"Delete"}
                        size={"btn-sm"}
                        type={"btn-grey"}
                        arrow={"arrow-none"}
                        element={"button"}
                        onClick={() => {
                          handleDeleteLoanOffer(loan._id);
                        }}
                        customStyles={{ margin: "0", width: "calc(50% - 10px)" }}
                      />
                      <Button
                        label={"Details"}
                        size={"btn-sm"}
                        type={"btn-secondary"}
                        arrow={"arrow-none"}
                        element={"button"}
                        onClick={() => {
                          setSelectedLoanId({ loan: loan, type: "lending" });
                        }}
                        customStyles={{ margin: "0", width: "calc(50% - 10px)" }}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-assets-wrapper">
                  <NoAssets />
                  <h3>You have not created any loan offerings</h3>
                </div>
              )}
            </div>
          )}
          {selectedTab === "borrowing" && (
            <>
              {yourBorrowing.length > 0 ? (
                <div className="loans-list">
                  {yourBorrowing.map((loan, index) => (
                    <div key={loan._id} className={"your-lending-row"}>
                      <div className={"your-lending-loan-stats"}>
                        <p>Lender</p>
                        <p className="address">{loan.lender}</p>
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
                        <div className="lending-loan-buttons">
                          <Button
                            label={"Repay"}
                            size={"btn-sm"}
                            type={"btn-primary"}
                            arrow={"arrow-none"}
                            element={"button"}
                            onClick={() => {
                              setOpenRepayModal(loan._id);
                            }}
                            customStyles={{ margin: "0", width: "calc(50% - 10px)" }}
                          />
                          <Button
                            label={"Details"}
                            size={"btn-sm"}
                            type={"btn-secondary"}
                            arrow={"arrow-none"}
                            element={"button"}
                            onClick={() => {
                              setSelectedLoanId({ loan: loan, type: "lending" });
                            }}
                            customStyles={{ margin: "0", width: "calc(50% - 10px)" }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-assets-wrapper">
                  <NoAssets />
                  <h3>You have no borrowed loans</h3>
                </div>
              )}
            </>
          )}
        </>
      ) : (
        <div className="no-account-loan">
          <Button
            label={"Connect Wallet"}
            size={"btn-sm"}
            type={"btn-primary"}
            arrow={"arrow-none"}
            element={"button"}
            onClick={handleConenctWallet}
            customStyles={{ margin: "0", width: "100%" }}
          />
        </div>
      )}
    </div>
  );
};

export default P2pSidebar;