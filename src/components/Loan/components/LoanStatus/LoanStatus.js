import React from "react";
import "./LoanStatus.css";

const LoanStatus = ({ status }) => {
  return (
    <span
      className={`status ${status === "Active" && "loan-active"} ${
        status === "Offered" && "loan-offered"
      } ${status === "Defaulted" && "loan-defaulted"} ${
        status === "Closed" && "loan-closed"
      } ${status === "Expired" && "offer-expired"} ${
        status === "Revoked" && "offer-revoked"
      } ${status === "Accepted" && "offer-accepted"} ${
        status === "Rejected" && "offer-rejected"
      }`}
    >
      {status}
    </span>
  );
};

export default LoanStatus;
