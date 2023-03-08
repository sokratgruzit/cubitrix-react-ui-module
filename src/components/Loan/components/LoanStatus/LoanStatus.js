import React from "react";
import "./LoanStatus.css";

const LoanStatus = ({ status }) => {
  return (
    <div
      className={`status ${status === "Active" && "loan-active"} ${
        status === "Offered" && "loan-offered"
      } ${status === "Defaulted" && "loan-defaulted"} ${
        status === "Closed" && "loan-closed"
      } `}
    >
      {status}
    </div>
  );
};

export default LoanStatus;
