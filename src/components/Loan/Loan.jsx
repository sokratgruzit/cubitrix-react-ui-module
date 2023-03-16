import "./Loan.css";
import React, { useState } from "react";
import { useMobileWidth } from "../../hooks/useMobileWidth";
import { Button } from "../Button";
import "./Loan.css";
import { DashboardBalance } from "../DashboardBalance";
import { Table } from "../Table";
import { InfoCircleIcon } from "../../assets/svgs";
import LoanDetails from "./components/LoanDetails/LoanDetails";
import P2pSidebar from "./components/P2pSidebar/P2pSidebar";
import LoanStatus from "./components/LoanStatus/LoanStatus";
import { Popup } from "../Popup";
import { PopupElement } from "../PopupElement";
import { Footer } from "../Footer";
import LoanRow from "./components/LoanRow./LoanRow";

export const Loan = ({
  allLoanOffers,
  yourLending,
  yourBorrowing,
  createNewLoanOffering,
  handleDeleteLoanOffer,
  handleRepayLoan,
  makeOffer,
  makeOfferError,
  rescindOffer,
  acceptOffer,
  rejectOffer,
  supplyUSDC,
  borrowUSDC,
  account,
  handleConenctWallet,
}) => {
  const { width } = useMobileWidth();
  const [loanPlatform, setLoanPlatform] = useState("p2p");
  const [selectedLoanId, setSelectedLoanId] = useState({});
  const [makeOfferLoanId, setMakeOfferLoanId] = useState(false);
  const [makeOfferData, setMakeOfferData] = useState(false);

  // console.log(allLoanOffers);

  function handleShowLoanDetails(loan, type) {
    setSelectedLoanId({ loan, type });
  }

  function handleMakeOffer() {
    const data = { ...makeOfferData, id: makeOfferLoanId };
    makeOffer(data);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setMakeOfferData((prev) => ({ ...prev, [name]: value }));
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
      title: "Collateral Amount",
      description: "Loan offer amount",
      name: "collateral",
      required: true,
      placeholder: "Enter amount",
      onChange: (e) =>
        setMakeOfferData((prev) => ({ ...prev, collateral: Number(e.target.value) })),
    },
    {
      title: "offer duration",
      description: "Loan offer duration",
      name: "offerDuration",
      required: true,
      placeholder: "Enter duration",
      onChange: (e) =>
        setMakeOfferData((prev) => ({ ...prev, offerDuration: Number(e.target.value) })),
    },
  ];

  return (
    <div className={`main`}>
      {makeOfferLoanId && (
        <Popup
          popUpElement={
            <PopupElement
              inputs={inputs}
              currentObject={makeOfferData}
              setCurrentObject={setMakeOfferData}
              handleSubmit={handleMakeOffer}
              popUpElementError={makeOfferError}
              submitButtonLabel={"Make Offer"}
            />
          }
          label={"Send loan offer to lender"}
          handlePopUpClose={() => setMakeOfferLoanId(false)}
        />
      )}
      <div
        className={`main-sidebar`}
        style={{ display: `${width > 1025 ? "flex" : "none"}` }}
      >
        <div className={"main-sidebar-content"}>
          <div className="tabs-wrapper">
            <div className="tabsWrap">
              <div
                className={`${loanPlatform === "pool" ? "selected" : ""}`}
                onClick={() => setLoanPlatform("pool")}
              >
                Pool
              </div>
              <div
                className={loanPlatform === "security" ? "selected" : ""}
                onClick={() => setLoanPlatform("p2p")}
              >
                Peer to peer
              </div>
              <span
                className={`highlight-selected ${
                  loanPlatform === "pool" ? "selected-data" : "selected-security"
                } `}
              ></span>
            </div>
          </div>
          {loanPlatform === "pool" && (
            <>
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
                    onClick={() => supplyUSDC()}
                    customStyles={{ margin: "0" }}
                  />
                  <Button
                    label={"Borrow USDC"}
                    size={"btn-sm"}
                    type={"btn-secondary"}
                    arrow={"arrow-none"}
                    element={"button"}
                    onClick={() => borrowUSDC()}
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
            </>
          )}
          {loanPlatform === "p2p" && (
            <P2pSidebar
              yourLending={yourLending}
              yourBorrowing={yourBorrowing}
              createNewLoanOffering={createNewLoanOffering}
              handleDeleteLoanOffer={handleDeleteLoanOffer}
              handleShowLoanDetails={handleShowLoanDetails}
              handleRepayLoan={handleRepayLoan}
              setSelectedLoanId={setSelectedLoanId}
              account={account}
              handleConenctWallet={handleConenctWallet}
            />
          )}
        </div>
      </div>

      {loanPlatform === "pool" && (
        <>
          <div className={"main-content"}>
            <div className="main-content-wrapper">
              <h2 className="loan-title">Loan</h2>
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
                  {
                    id: 1,
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
                      <div className="collateral-name">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_b_1020_3401)">
                            <rect
                              width="40"
                              height="40"
                              rx="16"
                              fill="white"
                              fillOpacity="0.05"
                            />
                          </g>
                          <g clipPath="url(#clip0_1020_3401)">
                            <path
                              d="M20.4037 8L18.2018 9.26606L12.2018 12.7339L10 14V26L12.2018 27.2661L18.2569 30.7339L20.4587 32L22.6606 30.7339L28.6055 27.2661L30.8073 26V14L28.6055 12.7339L22.6055 9.26606L20.4037 8ZM14.4037 23.4679V16.5321L20.4037 13.0642L26.4037 16.5321V23.4679L20.4037 26.9358L14.4037 23.4679Z"
                              fill="#2A5ADA"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_b_1020_3401"
                              x="-40"
                              y="-40"
                              width="120"
                              height="120"
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                              <feComposite
                                in2="SourceAlpha"
                                operator="in"
                                result="effect1_backgroundBlur_1020_3401"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_backgroundBlur_1020_3401"
                                result="shape"
                              />
                            </filter>
                            <clipPath id="clip0_1020_3401">
                              <rect
                                width="20.8073"
                                height="24"
                                fill="white"
                                transform="translate(10 8)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        {item.name}
                      </div>
                      <div className="collateral-shortName">
                        <p>{item.shortName}</p>
                        <p>{item.amount} in wallet</p>
                      </div>
                      <div className="protocol-balance">{item.protocolBalance}</div>
                      <div className="pool-loan-actions">
                        <div>
                          <svg
                            width="14"
                            height="2"
                            viewBox="0 0 14 2"
                            fill="white"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M13 1.75H1C0.59 1.75 0.25 1.41 0.25 1C0.25 0.59 0.59 0.25 1 0.25H13C13.41 0.25 13.75 0.59 13.75 1C13.75 1.41 13.41 1.75 13 1.75Z" />
                          </svg>
                        </div>
                        <div>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="white"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M13 7.75H1C0.59 7.75 0.25 7.41 0.25 7C0.25 6.59 0.59 6.25 1 6.25H13C13.41 6.25 13.75 6.59 13.75 7C13.75 7.41 13.41 7.75 13 7.75Z" />
                            <path d="M7 13.75C6.59 13.75 6.25 13.41 6.25 13V1C6.25 0.59 6.59 0.25 7 0.25C7.41 0.25 7.75 0.59 7.75 1V13C7.75 13.41 7.41 13.75 7 13.75Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  );
                })}
              />
            </div>
            <Footer />
          </div>
        </>
      )}
      {loanPlatform === "p2p" && (
        <>
          <div className={"main-content"}>
            <div className="main-content-wrapper">
              {JSON.stringify(selectedLoanId) !== "{}" && (
                <LoanDetails
                  loan={selectedLoanId}
                  setSelectedLoanId={setSelectedLoanId}
                  rescindOffer={rescindOffer}
                  account={account}
                  acceptOffer={acceptOffer}
                  rejectOffer={rejectOffer}
                  // loanDetails={loanDetails}
                  // setShowLoanDetails={setShowLoanDetails}
                />
              )}
              <Table
                type={"table-version"}
                tableHead={[
                  {
                    name: "Lender",
                    width: 25,
                    mobileWidth: 50,
                    id: 0,
                  },
                  {
                    name: "Amount",
                    width: 15,
                    mobileWidth: 20,
                    id: 1,
                  },
                  {
                    name: "Interest",
                    width: 12,
                    mobileWidth: 10,
                    id: 1,
                  },
                  {
                    name: "Duration",
                    width: 12,
                    mobileWidth: 10,
                    id: 1,
                  },
                  {
                    name: "Status",
                    width: 36,
                    mobileWidth: 31,
                    id: 1,
                  },
                ]}
                mobile={width < 1280}
                tableData={
                  allLoanOffers.length > 0 ? (
                    allLoanOffers.map((item, index) => {
                      return (
                        <LoanRow
                          key={index}
                          loan={item}
                          account={account}
                          setMakeOfferLoanId={setMakeOfferLoanId}
                        />
                      );
                    })
                  ) : (
                    <div className="noOffers">No loan is offered</div>
                  )
                }
              />
            </div>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};
