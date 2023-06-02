import React, { useState } from "react";
import { Arrow } from "../../../../assets/svgs";
import { Button } from "../../../Button";
import LoanStatus from "../LoanStatus/LoanStatus";

import "./LoanRow.css";

const LoanRow = ({ loan, account, setMakeOfferLoanId, rescindOffer }) => {
  const [openDetails, setOpenDetails] = useState(false);
  return (
    <div
      className={`table-parent loan-p2p-row ${openDetails ? "loan-details-active" : ""}`}
    >
      <div className="loan-pwp-row-main">
        <div className="lender">
          <p className="address">{loan.lender}</p>
        </div>
        <div className="amount">{loan.amount}</div>
        <div className="interest">{loan.interest}</div>
        <div className="duration">{loan.duration}</div>
        <div className="status-item">
          <LoanStatus status={loan.status} />
        </div>
        <div className="make-offer-wrap">
          <button className="make-offer" onClick={() => setMakeOfferLoanId(loan._id)}>
            Make an Offer
          </button>
        </div>
        <div className="show-loan-details-wrap">
          <button
            className={`show-loan-details ${
              openDetails ? "show-loan-details-active" : ""
            }`}
            // onClick={() => handleShowLoanDetails(item, "public")}
            onClick={() => setOpenDetails((prev) => !prev)}
          >
            Details
            <Arrow className={"loan-details-arrow"} showMore={openDetails} />
          </button>
        </div>
      </div>
      <div className="loans-expand">
        <div className={`loan-details`}>
          <div className="loan-details-header">
            <div className="loan-token-img-wrapper">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2486_8009)">
                  <path
                    d="M30 60C46.569 60 60 46.569 60 30C60 13.431 46.569 0 30 0C13.431 0 0 13.431 0 30C0 46.569 13.431 60 30 60Z"
                    fill="#070A0E"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.3308 40.0591C16.4338 39.5101 15.8848 38.5351 15.8848 37.4851V31.6231C15.8848 30.9271 16.4518 30.3631 17.1478 30.3661C17.3698 30.3661 17.5888 30.4261 17.7808 30.5371L31.0078 38.2501C31.7818 38.7001 32.2588 39.5281 32.2588 40.4251V46.4971C32.2618 47.3311 31.5868 48.0091 30.7528 48.0091C30.4738 48.0091 30.1978 47.9311 29.9608 47.7871L17.3308 40.0591ZM37.0468 28.9321C37.8208 29.3821 38.2948 30.2131 38.2978 31.1071V43.4311C38.2978 43.7941 38.1028 44.1301 37.7848 44.3071L34.8898 45.9361C34.8538 45.9571 34.8148 45.9721 34.7728 45.9841V39.1411C34.7728 38.2561 34.3078 37.4341 33.5458 36.9781L21.9298 30.0301V22.3051C21.9298 21.6091 22.4968 21.0451 23.1928 21.0481C23.4148 21.0481 23.6338 21.1081 23.8258 21.2191L37.0468 28.9321ZM42.8368 19.8301C43.6138 20.2801 44.0908 21.1111 44.0908 22.0081V40.0081C44.0878 40.3771 43.8838 40.7161 43.5598 40.8931L40.8148 42.3751V29.8441C40.8148 28.9591 40.3498 28.1401 39.5938 27.6841L27.7198 20.5621V13.2361C27.7198 13.0141 27.7798 12.7951 27.8878 12.6031C28.2388 12.0031 29.0098 11.7991 29.6098 12.1471L42.8368 19.8301Z"
                    fill="#00D395"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2486_8009">
                    <rect width="60" height="60" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <div className="token-info-wrap">
                <h3>Token</h3>
                <p>Token Name</p>
              </div>
              <div className="loan-details-stats">
                <div>
                  <p className="loan-verification-title">Verification</p>
                  <p className="loan-verification-info">No Verification</p>
                </div>
                <div>
                  <p className="loan-details-info-title">Amount</p>
                  <p>{loan.amount}</p>
                </div>
                <div>
                  <p className="loan-details-info-title">Interest</p>
                  <p>{loan.interest}</p>
                </div>
                <div>
                  <p className="loan-details-info-title">Duration</p>
                  <p>{loan.duration}</p>
                </div>
                <div>
                  <p className="loan-details-info-title">Status</p>
                  <p>
                    <LoanStatus status={loan.status} />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="loan-details-body">
            <p className="important-note-title">Important Note:</p>
            <p className="important-note">
              Double-check that you're interacting with a genuine asset before you submit
              any transaction.
            </p>
          </div>
          <h3 className="loan-details-offers">Offers</h3>
          <div className="allOffers-header">
            <p className="borrower-address">Borrower</p>
            <p>Collateral</p>
            <p>Expiration</p>
            <p>Status</p>
          </div>
          {loan.allOffers.length > 0 ? (
            loan.allOffers.map((offer, index) => (
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
                <div className="offers-status">
                  <LoanStatus status={offer?.status} />
                </div>
                <div className="offers-actions">
                  {offer.borrower === account && offer.status === "Active" && (
                    <Button
                      label={"Rescind"}
                      size={"btn-sm"}
                      type={"btn-yellow"}
                      arrow={"arrow-none"}
                      element={"button"}
                      onClick={() => rescindOffer(loan._id, offer._id)}
                      customStyles={{ margin: "0" }}
                    />
                  )}
                  {loan.lender === account && offer.status === "Active" && (
                    <>
                      <Button
                        label={"Reject"}
                        size={"btn-sm"}
                        type={"btn-secondary"}
                        arrow={"arrow-none"}
                        element={"button"}
                        onClick={() => rejectOffer(loan._id, offer._id)}
                        customStyles={{ margin: "0" }}
                      />
                      <Button
                        label={"Accept"}
                        size={"btn-sm"}
                        type={"btn-primary"}
                        arrow={"arrow-none"}
                        element={"button"}
                        onClick={() => acceptOffer(loan._id, offer._id)}
                        customStyles={{ margin: "0" }}
                      />
                    </>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="noPendingOffers">No pending offers yet</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoanRow;
