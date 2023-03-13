import React from "react";
import "./LoanDetails.css";

const LoanDetails = ({ loan, setSelectedLoanId }) => {
  console.log(loan.loan);
  return (
    <div className="loanDetails">
      {/* LoanDetails {loan?.type} */}
      <div className="loanDetails-header">
        <h1> {loan.loan._id}</h1>
        {loan?.type}
        <button onClick={() => setSelectedLoanId({})}>close</button>
      </div>
      <div className="loanDetails-main">
        <div className="details-main-left">
          <h3>Token</h3>
          <p>Token img</p>
          <div className="loan-amount-stats">
            <div>
              <p>Amount</p>
              <p>{loan.loan.amount}</p>
            </div>
            <div>
              <p>Verification</p>
              <p>not verified</p>
            </div>
          </div>
        </div>
        <div className="details-main-right">
          <div>
            <p>lender</p>
            <p>{loan.loan.lender}</p>
          </div>
          <div>
            <p>Duration</p>
            <p>{loan.loan.duration}</p>
          </div>
          <div>
            <p>Interest</p>
            <p>{loan.loan.interest}</p>
          </div>
          <p>
            {" "}
            Important note: Double-check that you're interacting with a genuine asset
            before you submit any transaction.{" "}
          </p>
        </div>
      </div>
      <div className="loanDetails-offers">
        <div className="allOffers-header">
          <p>Borrower</p>
          <p>Collateral</p>
          <p>Expiration</p>
        </div>
        {loan.loan.allOffers.map((offer, index) => (
          <div key={index} className="allOffers-row">
            <div className="offers-borrower">
              <p>{offer.borrower}</p>
            </div>
            <div className="offers-collateral">
              <p>{offer?.collateral}</p>
            </div>
            <div className="offers-expires">
              <p>{offer?.offerDuration}</p>
            </div>
            <div>{offer?.status}</div>
            <div className="offers-actions">
              {/* {offer.borrower === "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4" && (
                <button
                  className="loan-actions"
                  onClick={() => {
                    // handleDeleteLoanOffer(loan._id);
                  }
                >
                  Accept Offer
                </button>
              ))} */}
              {offer.borrower === "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4" && (
                <button
                  className="loan-actions-btn"
                  onClick={() => {
                    // handleDeleteLoanOffer(loan._id);
                    console.log("clicked");
                  }}
                >
                  shit
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanDetails;
