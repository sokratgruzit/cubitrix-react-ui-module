import {storiesOf} from "@storybook/react";
import {useState, useEffect} from "react";
import {Header} from "../components/Header";
import {Loan} from "../components/Loan";
import {BrowserRouter} from "react-router-dom";
import LogoSvg from "../assets/svgs/LogoSvg";

const stories = storiesOf("Loan", module);

stories.add("Loan", (props) => {
  const [allLoanOffers, setAllLoanOffers] = useState([]);
  const [yourLending, setYourLending] = useState([]);
  const [yourBorrowing, setYourBorrowing] = useState([]);
  const [makeOfferError, setMakeOfferError] = useState(false);

  const account = "0xA3403975861B601aE111b4eeAFbA94060a58d0CA";
  // const account = "0xsecretservice";
  // const account = "";

  useEffect(() => {
    fetch("http://localhost:4000/api/loan/loan-market-offers")
      .then((response) => response.json())
      .then((data) => setAllLoanOffers(data.result))
      .catch((error) => console.error(error));

    fetch(
      `http://localhost:4000/api/loan/user-created-loans?address=${account}`
    )
      .then((response) => response.json())
      .then((data) => setYourLending(data.result))
      .catch((error) => console.error(error));

    fetch(`http://localhost:4000/api/loan/user-loans?address=${account}`)
      .then((response) => response.json())
      .then((data) => setYourBorrowing(data.result))
      .catch((error) => console.error(error));
  }, []);

  function handleCreateNewLoanOffering(loan) {
    const mutatedLoan = {...loan};
    mutatedLoan.lender = account;
    fetch("http://localhost:4000/api/loan/create-loan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mutatedLoan),
    })
      .then((response) => response.json())
      .then((data) => {
        setAllLoanOffers((prev) => [...prev, data.result]);
        setYourLending((prev) => [...prev, data.result]);
      })
      .catch((error) => console.error(error));
  }

  function handleDeleteLoanOffer(loanId) {
    const data = {id: loanId, lender: account};
    fetch("http://localhost:4000/api/loan/delete-loan-offer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setAllLoanOffers((prev) =>
          prev.filter((loan) => loan._id !== data.deletedID)
        );
        setYourLending((prev) =>
          prev.filter((loan) => loan._id !== data.deletedID)
        );
      })
      .catch((error) => console.error(error));
  }

  function handleRepayLoan(data) {
    data.borrower = account;
    fetch("http://localhost:4000/api/loan/repay-loan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  function handleMakeOffer(loan) {
    const data = {...loan, borrower: account};

    fetch("http://localhost:4000/api/loan/send-loan-offer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // setMakeOfferError(data.message);

        // setTimeout(() => {
        //   setMakeOfferError(false);
        // }, 2000);
      })
      .catch((error) => console.log(error.message));
  }

  function handleRescindOffer(loanId, offerId) {
    const data = {id: loanId, borrower: account, offerId: offerId};

    fetch("http://localhost:4000/api/loan/rescind-loan-offer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  function handleAcceptOffer(loanId, offerId) {
    const data = {id: loanId, lender: account, offerId: offerId};
    fetch("http://localhost:4000/api/loan/accept-loan-offer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  function handleRejectOffer(loanId, offerId) {
    const data = {id: loanId, lender: account, offerId: offerId};
    fetch("http://localhost:4000/api/loan/reject-loan-offer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  function handleConenctWallet() {
    console.log("connect wallet");
  }

  return (
    <BrowserRouter>
      <Header
        modules={[]}
        account={"0x000000"}
        location={{pathName: ""}}
        title={"A1"}
        logoSvg={<LogoSvg />}
        verified={false}
      />
      <Loan
        account={account}
        allLoanOffers={allLoanOffers}
        yourLending={yourLending}
        yourBorrowing={yourBorrowing}
        createNewLoanOffering={handleCreateNewLoanOffering}
        handleDeleteLoanOffer={handleDeleteLoanOffer}
        handleRepayLoan={handleRepayLoan}
        makeOffer={(loanId) => {
          console.log("temporariliy skip make offer");
          handleMakeOffer(loanId);
          // handleTakeLoan(loanId);
        }}
        makeOfferError={makeOfferError}
        rescindOffer={handleRescindOffer}
        acceptOffer={handleAcceptOffer}
        rejectOffer={handleRejectOffer}
        handleConenctWallet={handleConenctWallet}
      />
    </BrowserRouter>
  );
});
