import React from "react";
import "./LoanDetails.css";

const LoanDetails = ({ loan }) => {
  return (
    <div>
      LoanDetails {loan.loanId} {loan.type}
    </div>
  );
};

export default LoanDetails;
